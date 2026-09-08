import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './styles/ActivityScroller.module.css'

// "Things I Enjoy Off The Clock" — a horizontal strip of activity cards, 4
// visible. Driven by prev / next arrows (also swipe, scrollbar, arrow-keys
// when focused). No autoplay. Activity copy is from El, kept close to verbatim.
const ACTIVITIES = [
  {
    title: 'Building Lego',
    blurb: 'The instructions are just documentation with better typography.',
  },
  { title: 'Reading', blurb: 'Recommended far too aggressively.' },
  {
    title: 'Watching movies',
    blurb: 'My fave genres are the MCU and high-stakes drama shows.',
  },
  { title: 'Drawing & painting', blurb: '' },
  { title: 'Sleeping', blurb: 'Competitively.' },
  { title: 'Logic puzzles', blurb: 'A rekindled hobby of mine.' },
]

export default function ActivityScroller() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [overflowing, setOverflowing] = useState(true)

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 1)
    setAtEnd(el.scrollLeft >= max - 1)
    setOverflowing(max > 1)
  }, [])

  useEffect(() => {
    sync()
    const el = trackRef.current
    if (!el) return
    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', sync)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', sync)
    }
  }, [sync])

  const step = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('li')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 20
    const perPress = window.innerWidth < 768 ? 1 : 2 // one card at a time on mobile
    const by = card
      ? (card.getBoundingClientRect().width + gap) * perPress
      : el.clientWidth * 0.7
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * by, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div className={styles.wrap}>
      <ul
        className={styles.track}
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Things I enjoy off the clock"
      >
        {ACTIVITIES.map(({ title, blurb }) => (
          <li key={title} className={styles.card}>
            <div className={styles.thumb} />
            <h3 className={styles.cardTitle}>{title}</h3>
            {blurb && <p className={styles.blurb}>{blurb}</p>}
          </li>
        ))}
      </ul>

      {overflowing && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Previous activities"
            disabled={atStart}
            onClick={() => step(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Next activities"
            disabled={atEnd}
            onClick={() => step(1)}
          >
            →
          </button>
        </div>
      )}
    </div>
  )
}

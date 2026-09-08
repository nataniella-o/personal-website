import styles from './styles/ActivityScroller.module.css'

// "Things I Enjoy Off The Clock" — a fixed-height panel whose cards drift
// upward in a seamless loop (pauses on hover / focus; falls back to a plain
// static grid under prefers-reduced-motion). This is the whimsical accent on
// the About page — kept to one deliberate moment, like the /projects pulse.
// Activity copy is from El, kept close to verbatim.
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

// One full pass of the cards. Rendered twice inside .track; the second copy is
// aria-hidden and exists only so the loop has something to scroll into.
function ActivitySet({ hidden }) {
  return (
    <ul className={styles.set} aria-hidden={hidden || undefined}>
      {ACTIVITIES.map(({ title, blurb }) => (
        <li key={title} className={styles.card}>
          <div className={styles.thumb} />
          <h3 className={styles.cardTitle}>{title}</h3>
          {blurb && <p className={styles.blurb}>{blurb}</p>}
        </li>
      ))}
    </ul>
  )
}

export default function ActivityScroller() {
  return (
    <div className={styles.viewport}>
      <div className={styles.track}>
        <ActivitySet />
        <ActivitySet hidden />
      </div>
    </div>
  )
}

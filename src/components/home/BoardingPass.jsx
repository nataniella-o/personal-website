import { useEffect, useState } from 'react'
import styles from './BoardingPass.module.css'

// El's local time (Winnipeg / Central), shown to every visitor regardless
// of where they are.
const TZ = 'America/Winnipeg'

function localTime() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

function useLocalTime() {
  const [time, setTime] = useState(localTime)
  useEffect(() => {
    const id = setInterval(() => setTime(localTime()), 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

// Lets values like "WINNIPEG/YWG" wrap at the slash instead of mid-word
// when the rail gets narrow — <wbr/> marks an allowed break point without
// forcing one.
function withSlashBreaks(value) {
  const parts = value.split('/')
  return parts.flatMap((part, i) =>
    i === 0 ? [part] : [`/`, <wbr key={i} />, part],
  )
}

const FIELDS = [
  { label: 'FROM', value: 'WINNIPEG/YWG' },
  { label: 'TO', value: 'WORLD/TBD' },
  { label: 'STATUS', value: 'OPEN TO WORK' },
  { label: 'FIELD', value: 'CS + DESIGN' },
  { label: 'SEAT', value: '1A' },
  { label: 'GATE', value: 'TBD' },
]

const LINKS = [
  { label: 'EMAIL', href: 'mailto:nataniellaog@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/nataniella-ogogo' },
  { label: 'GITHUB', href: 'https://github.com/nataniella-o' },
  { label: 'RESUME', href: '/assets/Nataniella_Ogogo_Resume.pdf' },
]

export default function BoardingPass() {
  const time = useLocalTime()

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span>OGOGO/NATANIELLA</span>
        <span className={styles.time}>YWG {time}</span>
      </div>

      <dl className={styles.rows}>
        {FIELDS.map(({ label, value }) => (
          <div key={label} className={styles.field}>
            <dt>{label}</dt>
            <dd>{withSlashBreaks(value)}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.links}>
        {LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            {...(href.startsWith('http') || href.endsWith('.pdf')
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

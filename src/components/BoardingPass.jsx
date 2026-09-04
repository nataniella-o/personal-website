import styles from './styles/BoardingPass.module.css'

const FIELDS = [
  { label: 'FROM', value: 'WINNIPEG/YWG' },
  { label: 'TO', value: 'ANYWHERE/!!!' },
  { label: 'STATUS', value: 'OPEN TO WORK' },
  { label: 'FIELD', value: 'CS + DESIGN' },
  { label: 'SEAT', value: '1A' },
  { label: 'GATE', value: 'NOW' },
]

const LINKS = [
  { label: 'EMAIL', href: 'mailto:nataniellaog@gmail.com' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/nataniella-ogogo' },
  { label: 'GITHUB', href: 'https://github.com/nataniella-o' },
  { label: 'RESUME', href: '/assets/resume.pdf' },
]

export default function BoardingPass() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>OGOGO/NATANIELLA</div>

      <dl className={styles.rows}>
        {FIELDS.map(({ label, value }) => (
          <div key={label} className={styles.field}>
            <dt>{label}</dt>
            <dd>{value}</dd>
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

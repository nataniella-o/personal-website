import styles from './ExperienceRow.module.css'

// One entry on the /experience page: time period | title / organization /
// description. See design/experience-prototype.png.
export default function ExperienceRow({ title, org, date, description }) {
  return (
    <li className={styles.row}>
      <p className={styles.period}>{date}</p>
      <div className={styles.body}>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.org}>{org}</p>
        <p className={styles.desc}>{description}</p>
      </div>
    </li>
  )
}

import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

// image is optional — falls back to an empty tinted block (matches the
// prototype; real images get added later). On hover the caption+title
// crossfade to a short description. See design/decisions.md.
export default function ProjectCard({ to, image, caption, title, description }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.thumb}>
        {image ? <img src={image} alt="" /> : null}
      </div>
      <div className={styles.text}>
        <div className={styles.meta}>
          <p className={styles.caption}>{caption}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    </Link>
  )
}

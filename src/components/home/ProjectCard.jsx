import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

// image is optional — with no cover, falls back to a Giza wordmark on a
// burgundy panel (placeholder until the project has a logo). On hover the
// caption+title crossfade to a short description. See design/decisions.md.
export default function ProjectCard({ to, image, caption, title, description }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.thumb}>
        {image ? (
          <img src={image} alt={`${title} cover`} loading="lazy" />
        ) : (
          <span className={styles.fallbackMark} aria-hidden="true">
            In progress
            <span className={styles.fallbackStar}>✦</span>
          </span>
        )}
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

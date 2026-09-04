import { Link } from 'react-router-dom'
import styles from './styles/ArrowLink.module.css'

// "MORE ABOUT ME →" style link. Used at the end of §01 and §02.
export default function ArrowLink({ to, children }) {
  return (
    <Link to={to} className={styles.link}>
      {children}
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  )
}

import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/assets/resume.pdf', external: true },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} aria-label="Home">
        <img src="/assets/short_logo.png" alt="Nataniella Ogogo" />
      </Link>

      <nav className={styles.nav}>
        {NAV.map(({ label, to, external }) =>
          external ? (
            <a key={label} href={to} target="_blank" rel="noreferrer">
              {label}
            </a>
          ) : (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              {label}
            </NavLink>
          ),
        )}
      </nav>
    </header>
  )
}

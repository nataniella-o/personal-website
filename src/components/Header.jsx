import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './styles/Header.module.css'

const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/assets/resume.pdf', external: true },
]

export default function Header() {
  const { pathname } = useLocation()

  // From another route, <Link> navigates and ScrollToTop resets scroll.
  // When already on the landing page, just scroll back to the top.
  const handleLogoClick = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <Link
        to="/"
        className={styles.logo}
        aria-label="Home"
        onClick={handleLogoClick}
      >
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

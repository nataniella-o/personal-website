import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const NAV = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/assets/Nataniella_Ogogo_Resume.pdf', external: true },
]

function NavItems({ onNavigate }) {
  return NAV.map(({ label, to, external }) =>
    external ? (
      <a
        key={label}
        href={to}
        target="_blank"
        rel="noreferrer"
        onClick={onNavigate}
      >
        {label}
      </a>
    ) : (
      <NavLink
        key={label}
        to={to}
        onClick={onNavigate}
        className={({ isActive }) => (isActive ? styles.active : undefined)}
      >
        {label}
      </NavLink>
    ),
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // From another route, <Link> navigates and ScrollToTop resets scroll.
  // When already on the landing page, just scroll back to the top.
  const handleLogoClick = (e) => {
    setMenuOpen(false)
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
        <img src="/assets/short-logo.svg" alt="Nataniella Ogogo" />
      </Link>

      <nav className={styles.nav}>
        <NavItems />
      </nav>

      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <nav className={styles.menu}>
          <NavItems onNavigate={() => setMenuOpen(false)} />
        </nav>
      )}
    </header>
  )
}

import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa'
import styles from './styles/Footer.module.css'

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nataniella-ogogo',
    Icon: FaLinkedin,
  },
  { label: 'GitHub', href: 'https://github.com/nataniella-o', Icon: FaGithub },
  { label: 'Email', href: 'mailto:nataniellaog@gmail.com', Icon: FaRegEnvelope },
]

// Inline footer at the end of the right column (no separate full-width bar).
// See design/decisions.md.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.note}>
          <p>Thank you for visiting my website!</p>
          <p>
            If this website resonated with you or you want to create something
            cool, please feel free to reach out :)
          </p>
        </div>
        <img
          className={styles.wordmark}
          src="/assets/long-logo.svg"
          alt="Nataniella Ogogo"
        />
      </div>

      <div className={styles.socials}>
        {SOCIALS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  )
}

import TypedGreeting from './TypedGreeting.jsx'
import BoardingPass from './BoardingPass.jsx'
import styles from './styles/LeftRail.module.css'

export default function LeftRail() {
  return (
    <div className={styles.stack}>
      <TypedGreeting className={styles.greeting} />

      <div className={styles.portrait}>
        <img src="/assets/notion-avatar.png" alt="Nataniella Ogogo" />
      </div>

      <p className={styles.name}>I&rsquo;m Nataniella</p>

      {/* hidden below --bp-stack — see design/decisions.md (Responsive) */}
      <div className={styles.pass}>
        <BoardingPass />
      </div>
    </div>
  )
}

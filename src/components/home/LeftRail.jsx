import TypedGreeting from './TypedGreeting.jsx'
import BoardingPass from './BoardingPass.jsx'
import styles from './LeftRail.module.css'

export default function LeftRail() {
  return (
    <div className={styles.stack}>
      <div className={styles.portraitWrap}>
        <div className={styles.portrait}>
          <img src="/assets/notion-avatar.png" alt="Nataniella Ogogo" />
        </div>
      </div>

      <TypedGreeting className={styles.greeting} />

      <div className={styles.nameBox}>
        <p className={styles.name}>I&rsquo;m Nataniella</p>
      </div>

      {/* hidden below --bp-stack — see design/decisions.md (Responsive) */}
      <div className={styles.pass}>
        <BoardingPass />
      </div>
    </div>
  )
}

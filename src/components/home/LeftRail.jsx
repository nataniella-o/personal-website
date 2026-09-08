import TypedGreeting from './TypedGreeting.jsx'
import BoardingPass from './BoardingPass.jsx'
import styles from './LeftRail.module.css'

export default function LeftRail() {
  return (
    <div className={styles.stack}>
      <div className={styles.portraitWrap}>
        {/* <img className={styles.doodle} src="/assets/pic-doodle.jpeg" alt="" aria-hidden="true" /> */}
        <div className={styles.portrait}>
          <img src="/assets/notion-avatar.png" alt="Nataniella Ogogo" />
        </div>
      </div>

      <TypedGreeting className={styles.greeting} />

      <p className={styles.name}>I&rsquo;m Nataniella</p>

      {/* hidden below --bp-stack — see design/decisions.md (Responsive) */}
      <div className={styles.pass}>
        <BoardingPass />
      </div>
    </div>
  )
}

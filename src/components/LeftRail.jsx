import TypedGreeting from './TypedGreeting.jsx'
import BoardingPass from './BoardingPass.jsx'
import styles from './LeftRail.module.css'

export default function LeftRail() {
  return (
    <div className={styles.stack}>
      <TypedGreeting className={styles.greeting} />

      <div className={styles.portrait}>
        <img src="/assets/headshot.jpeg" alt="Nataniella Ogogo" />
      </div>

      <p className={styles.name}>I&rsquo;m Nataniella</p>

      <BoardingPass />
    </div>
  )
}

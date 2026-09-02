import Header from '../components/Header.jsx'
import LeftRail from '../components/LeftRail.jsx'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.split}>
        <aside className={styles.rail}>
          <LeftRail />
        </aside>

        <main className={styles.column}>
          {/* Steps 5–8: §01 Who's Typing? · §02 My Projects · §03 My Toolkit · footer */}
          <p className={styles.placeholder}>Right column — steps 5–8</p>
        </main>
      </div>
    </>
  )
}

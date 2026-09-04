import Header from '../components/Header.jsx'
import LeftRail from '../components/LeftRail.jsx'
import AboutSection from '../components/AboutSection.jsx'
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
          <AboutSection />
          {/* Steps 6–8: §02 My Projects · §03 My Toolkit · footer */}
        </main>
      </div>
    </>
  )
}

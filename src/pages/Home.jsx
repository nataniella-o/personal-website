import Header from '../components/Header.jsx'
import LeftRail from '../components/LeftRail.jsx'
import AboutSection from '../components/AboutSection.jsx'
import ProjectsSection from '../components/ProjectsSection.jsx'
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
          <ProjectsSection />
          {/* Steps 7–8: §03 My Toolkit · footer */}
        </main>
      </div>
    </>
  )
}

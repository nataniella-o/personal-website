import Header from '../components/layout/Header.jsx'
import LeftRail from '../components/home/LeftRail.jsx'
import AboutSection from '../components/home/AboutSection.jsx'
import ProjectsSection from '../components/home/ProjectsSection.jsx'
import ToolkitSection from '../components/home/ToolkitSection.jsx'
import Footer from '../components/layout/Footer.jsx'
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
          <ToolkitSection />
          <Footer />
        </main>
      </div>
    </>
  )
}

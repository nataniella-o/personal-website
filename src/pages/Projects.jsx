import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ProjectRow from '../components/ProjectRow.jsx'
import { PROJECTS } from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.lede}>
              All the projects that I&rsquo;ve worked on as part of course
              projects &amp; some passion side projects.
            </p>
          </header>

          <ul className={styles.list}>
            {PROJECTS.map((project) => (
              <ProjectRow key={project.slug} {...project} />
            ))}
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

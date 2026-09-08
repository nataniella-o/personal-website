import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import ProjectRow from '../components/projects/ProjectRow.jsx'
import { PROJECTS } from '../data/projects.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h1 className={styles.title}>
              Projects
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </h1>
            <p className={styles.lede}>
              All the projects that I&rsquo;ve worked on as part of course
              projects &amp; a few side passion projects.
            </p>
          </header>

          <ul className={styles.list}>
            {PROJECTS.map((project, i) => (
              <ProjectRow key={project.slug} index={i + 1} {...project} />
            ))}
          </ul>

          <p className={styles.endNote}>
            That&rsquo;s all folks &mdash; for now{' '}
            <span aria-hidden="true">✦</span>
          </p>
        </div>

        <Footer />
      </main>
    </>
  )
}

import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ExperienceRow from '../components/ExperienceRow.jsx'
import { EXPERIENCE, VOLUNTEERING } from '../data/experience.js'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h1 className={styles.title}>
              Experience
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </h1>
            <p className={styles.lede}>
              Where I have been. Newest first, as is tradition.
            </p>
          </header>

          <ul className={styles.list}>
            {EXPERIENCE.map((item, i) => (
              <ExperienceRow key={`${item.title}-${i}`} {...item} />
            ))}
          </ul>

          <h2 className={styles.groupHeading}>
            <span className={styles.headingStar} aria-hidden="true">
              ✦
            </span>
            Volunteering
          </h2>

          <ul className={styles.list}>
            {VOLUNTEERING.map((item, i) => (
              <ExperienceRow key={`${item.title}-${i}`} {...item} />
            ))}
          </ul>
        </div>

        <Footer />
      </main>
    </>
  )
}

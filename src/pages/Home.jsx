import Header from '../components/Header.jsx'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.split}>
        <aside className={styles.rail}>
          {/* Step 4: type writer "Hello," → portrait → "I'm Nataniella" → boarding-pass card */}
          <p className={styles.placeholder}>Left rail — step 4</p>
        </aside>

        <main className={styles.column}>
          {/* Steps 5–8: §01 Who's Typing? · §02 My Projects · §03 My Toolkit · footer */}
          <p className={styles.placeholder}>Right column — steps 5–8</p>
        </main>
      </div>
    </>
  )
}

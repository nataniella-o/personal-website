import { FaMapMarkerAlt } from 'react-icons/fa'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ActivityScroller from '../components/ActivityScroller.jsx'
import styles from './About.module.css'

// Copy transcribed verbatim from design/about-prototype.png (confirmed final).
const BIO = [
  "My name is Nataniella & I'm a recent Computer Science graduate of the University of Manitoba. I've always loved building and assembling things & Computer Science is where that love turned into creating tools that make peoples lives better.",
  'That instinct is what carried me through a machine learning fellowship at the AI4Good Lab, a few years as the Treasurer of UMWICS & four years in retail that has taught me much more about people than any course could have.',
  'These days it shows up as a habit that I am yet to shake: building the thing & then spending an hour arguing myself about the spacing around the button.',
]

// leading ✦ before each subsection heading — echoes the logo / wordmark stars
function Star() {
  return (
    <span className={styles.headingStar} aria-hidden="true">
      ✦
    </span>
  )
}

const REASONS = [
  {
    n: '01',
    text: 'To exist as one more example that this work has room for women, especially women of colour.',
  },
  {
    n: '02',
    text: (
      <>
        To keep the projects I&rsquo;m proud of somewhere better than a folder
        called <code>final_v3</code>.
      </>
    ),
  },
  { n: '03', text: 'To get me hired. (Or money, broadly)' },
]

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.inner}>
          <header className={styles.intro}>
            <h1 className={styles.title}>
              About
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </h1>
            <p className={styles.lede}>
              Who I am, what I enjoy &amp; how I got here.
            </p>
          </header>

          <section className={styles.bio}>
            <div className={styles.bioText}>
              <h2 className={styles.hello}>
                <Star />
                Hello again!
              </h2>
              {BIO.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <figure className={styles.portrait}>
              <img
                className={styles.portraitImg}
                src="/assets/profile-pic.svg"
                alt="Nataniella Ogogo"
              />
              <figcaption>
                <FaMapMarkerAlt aria-hidden="true" />
                Winnipeg, MB (usually)
              </figcaption>
            </figure>
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockHeading}>
              <Star />
              Things I Enjoy Off The Clock
            </h2>
            <ActivityScroller />
          </section>

          <section className={styles.block}>
            <h2 className={styles.blockHeading}>
              <Star />
              Why This Website Exists
            </h2>
            <ol className={styles.reasons}>
              {REASONS.map(({ n, text }) => (
                <li key={n} className={styles.reason}>
                  <span className={styles.reasonNum}>{n}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

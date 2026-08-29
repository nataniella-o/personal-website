import Header from '../components/Header.jsx'

export default function About() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-h)', padding: 24 }}>
        {/* Ported from legacy/about.html in a later phase — see design/decisions.md */}
        <p>About — placeholder.</p>
      </main>
    </>
  )
}

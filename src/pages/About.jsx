import Header from '../components/Header.jsx'

export default function About() {
  return (
    <>
      <Header />
      <main style={{ padding: 24, paddingTop: 'calc(var(--header-h) + 24px)' }}>
        {/* Ported from legacy/about.html in a later phase — see design/decisions.md */}
        <p>About — placeholder.</p>
      </main>
    </>
  )
}

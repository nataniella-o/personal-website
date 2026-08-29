import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'

export default function NotFound() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-h)', padding: 24 }}>
        <h1>404</h1>
        <p>This page doesn&rsquo;t exist yet.</p>
        <Link to="/">Back home</Link>
      </main>
    </>
  )
}

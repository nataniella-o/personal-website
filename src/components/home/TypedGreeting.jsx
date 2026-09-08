import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

// Greetings carried over from the legacy site (js_files/script.js).
const GREETINGS = [
  'Hello,',
  'Bonjour,',
  'Ciao,',
  '안녕하세요,',
  'Nǐ hǎo,',
  'こんにちは,',
  'Báwo ní,',
  'Hallo,',
  'Sannũ,',
  'Hola,',
  'Olá,',
  'नमस्ते,',
  'שלום,',
  'Hej,',
]

export default function TypedGreeting({ className }) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: GREETINGS,
      typeSpeed: 60,
      backSpeed: 45,
      backDelay: 1900,
      startDelay: 300,
      loop: true,
      smartBackspace: false,
    })
    return () => typed.destroy()
  }, [])

  return (
    <h1 className={className}>
      <span ref={el} aria-label="Hello," />
    </h1>
  )
}

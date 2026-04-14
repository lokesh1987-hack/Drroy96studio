'use client'
// components/ui/ScrollBar.js
import { useEffect, useState } from 'react'
export default function ScrollBar() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const fn = () => {
      const d = document.body.scrollHeight - window.innerHeight
      setW(d > 0 ? (window.scrollY / d) * 100 : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return <div id="scroll-bar" style={{ width: `${w}%` }} />
}

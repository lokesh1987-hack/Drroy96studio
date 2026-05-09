'use client'
import { useState, useEffect, useRef } from 'react'
export function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const raf = useRef(null)
  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    const isFloat = String(target).includes('.')
    const end = parseFloat(target)
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const e = 1 - Math.pow(1 - p, 3)
      setCount(isFloat ? (e * end).toFixed(1) : Math.floor(e * end))
      if (p < 1) raf.current = requestAnimationFrame(tick)
      else setCount(target)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target, duration, start])
  return count
}

import { useState, useEffect, useRef } from 'react'
import styles from './TypewriterOnVisible.module.scss'

const TypewriterOnVisible = ({ text, speed = 50, threshold = 0.5 }) => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  useEffect(() => {
    if (!started || !text) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [started, text, speed])

  return (
    <span ref={ref}>
      {started ? displayed : '\u00A0'}
      {started && !done && <span className={styles.cursor}>|</span>}
    </span>
  )
}

export default TypewriterOnVisible

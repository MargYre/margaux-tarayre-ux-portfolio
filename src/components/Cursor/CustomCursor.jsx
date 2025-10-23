import { useState, useEffect } from 'react'
import styles from './CustomCursor.module.scss'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [cursorType, setCursorType] = useState('default')
  const [isVisible, setIsVisible] = useState(false)

  // Gestion du mouvement de souris
  useEffect(() => {
    const handleMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  // Gestion du type de curseur contextuel
  useEffect(() => {
    const handleMouseOver = e => {
      const target = e.target

      if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('link')
      } else if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorType('button')
      } else if (target.classList.contains('project-image')) {
        setCursorType('view')
      } else if (target.classList.contains('draggable')) {
        setCursorType('drag')
      } else {
        setCursorType('default')
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  const getCursorClass = () => {
    return `${styles.cursor} ${styles[cursorType]} ${isVisible ? styles.visible : styles.hidden}`
  }

  const getCursorLabel = () => {
    const labels = {
      view: 'VIEW',
      drag: 'DRAG',
    }
    return labels[cursorType] || null
  }

  return (
    <div
      className={getCursorClass()}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {getCursorLabel() && (
        <span className={styles.cursorLabel}>{getCursorLabel()}</span>
      )}
    </div>
  )
}

export default CustomCursor

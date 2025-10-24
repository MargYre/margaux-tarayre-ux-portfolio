import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './CustomCursor.module.scss'

const CustomCursor = () => {
  const { t } = useTranslation()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseMove = (e) => {
      // Vérifie si on survole une carte de projet
      const projectCard = e.target.closest('[data-project-card]')
      
      if (projectCard) {
        setIsHovering(true)
        setShowText(true)
      } else if (
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('[role="button"]')
      ) {
        setIsHovering(true)
        setShowText(false)
      } else {
        setIsHovering(false)
        setShowText(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        className={`${styles.cursor} ${isHovering ? styles.hovering : ''} ${showText ? styles.showText : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {showText && (
          <span className={styles.cursorText}>{t('cursor.view')}</span>
        )}
      </div>
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.hovering : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}

export default CustomCursor

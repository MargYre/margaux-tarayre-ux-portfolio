import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './Lightbox.module.scss'

/**
 * Composant Lightbox pour afficher des images en plein écran avec zoom
 * @param {Array} images - Tableau d'URLs d'images
 * @param {number} initialIndex - Index de l'image à afficher initialement
 * @param {Function} onClose - Callback appelé lors de la fermeture
 * @param {Object} translations - Objet contenant les traductions
 */
const Lightbox = ({
  images = [],
  initialIndex = 0,
  onClose,
  translations = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isZoomed, setIsZoomed] = useState(false)

  const {
    close = 'Fermer',
    previous = 'Image précédente',
    next = 'Image suivante',
    zoomIn = 'Zoomer',
    zoomOut = 'Dézoomer',
  } = translations

  // Navigation vers l'image suivante
  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length)
    setIsZoomed(false)
  }, [images.length])

  // Navigation vers l'image précédente
  const prevImage = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
    setIsZoomed(false)
  }, [images.length])

  // Toggle zoom
  const toggleZoom = () => {
    setIsZoomed(prev => !prev)
  }

  // Gestion du clavier
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'z' || e.key === 'Z') {
        toggleZoom()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextImage, prevImage, onClose])

  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Click sur le backdrop pour fermer
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={styles.lightbox} onClick={handleBackdropClick}>
      {/* Bouton fermer */}
      <button
        className={styles.closeButton}
        onClick={onClose}
        aria-label={close}
      >
        ✕
      </button>

      {/* Contrôles */}
      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          onClick={toggleZoom}
          aria-label={isZoomed ? zoomOut : zoomIn}
        >
          {isZoomed ? '−' : '+'}
        </button>
        <span className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Navigation gauche */}
      {images.length > 1 && (
        <button
          className={`${styles.navButton} ${styles.navButtonPrev}`}
          onClick={prevImage}
          aria-label={previous}
        >
          ←
        </button>
      )}

      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`${styles.image} ${isZoomed ? styles.imageZoomed : ''}`}
          onClick={toggleZoom}
        />
      </div>

      {/* Navigation droite */}
      {images.length > 1 && (
        <button
          className={`${styles.navButton} ${styles.navButtonNext}`}
          onClick={nextImage}
          aria-label={next}
        >
          →
        </button>
      )}

      {/* Dots de navigation */}
      {images.length > 1 && (
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => {
                setCurrentIndex(index)
                setIsZoomed(false)
              }}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  translations: PropTypes.shape({
    close: PropTypes.string,
    previous: PropTypes.string,
    next: PropTypes.string,
    zoomIn: PropTypes.string,
    zoomOut: PropTypes.string,
  }),
}

export default Lightbox

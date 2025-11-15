import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

/**
 * Composant Carousel réutilisable avec navigation, dots et support clavier
 * @param {Array} images - Tableau d'URLs d'images
 * @param {Function} onImageClick - Callback appelé lors du click sur une image
 * @param {Object} translations - Objet contenant les traductions pour les labels
 * @param {string} altPrefix - Préfixe pour les attributs alt des images
 * @param {Function} renderCaption - Fonction personnalisée pour le rendu de la caption
 * @param {string|number} height - Hauteur du carousel (ex: "400px", "80vh", 600)
 */
const Carousel = ({
  images = [],
  onImageClick,
  translations = {},
  altPrefix = 'Image',
  renderCaption,
  height,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  const {
    prevButton = 'Image précédente',
    nextButton = 'Image suivante',
    goToImage = "Aller à l'image",
    loading = 'Chargement...',
  } = translations

  // Navigation vers l'image suivante
  const nextImage = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % images.length)
  }, [images.length])

  // Navigation vers l'image précédente
  const prevImage = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length)
  }, [images.length])

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextImage, prevImage])

  // Gestion des erreurs de chargement d'image
  const handleImageError = index => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  // Click sur une image
  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick(currentIndex)
    }
  }

  // Rendu de la caption par défaut
  const defaultCaption = `${currentIndex + 1} / ${images.length}`

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselWrapper}>
        {/* Bouton précédent */}
        <button
          onClick={prevImage}
          className={styles.carouselButton}
          aria-label={prevButton}
          disabled={images.length <= 1}
        >
          ←
        </button>

        {/* Container de l'image */}
        <div
          className={styles.imageContainer}
          style={
            height
              ? { height: typeof height === 'number' ? `${height}px` : height }
              : undefined
          }
        >
          {imageErrors[currentIndex] ? (
            <div className={styles.imagePlaceholder}>
              <span>{loading}</span>
            </div>
          ) : (
            <img
              src={images[currentIndex]}
              alt={`${altPrefix} ${currentIndex + 1}`}
              className={styles.carouselImage}
              onClick={handleImageClick}
              onError={() => handleImageError(currentIndex)}
              style={{ cursor: onImageClick ? 'pointer' : 'default' }}
            />
          )}
        </div>

        {/* Bouton suivant */}
        <button
          onClick={nextImage}
          className={styles.carouselButton}
          aria-label={nextButton}
          disabled={images.length <= 1}
        >
          →
        </button>
      </div>

      {/* Dots de navigation */}
      {images.length > 1 && (
        <div className={styles.carouselDots}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              aria-label={`${goToImage} ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Caption */}
      <p className={styles.imageCaption}>
        {renderCaption
          ? renderCaption(currentIndex, images.length)
          : defaultCaption}
      </p>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onImageClick: PropTypes.func,
  translations: PropTypes.shape({
    prevButton: PropTypes.string,
    nextButton: PropTypes.string,
    goToImage: PropTypes.string,
    loading: PropTypes.string,
  }),
  altPrefix: PropTypes.string,
  renderCaption: PropTypes.func,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Carousel

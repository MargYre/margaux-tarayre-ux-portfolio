// src/utils/colorHelpers.js

/**
 * Convertit une couleur hexadécimale en format RGBA
 * @param {string} hex - Couleur au format hexadécimal (#RRGGBB)
 * @param {number} alpha - Opacité entre 0 et 1
 * @returns {string} Couleur au format rgba(r, g, b, alpha)
 * 
 * @example
 * hexToRgba('#2D2D2D', 0.7) // 'rgba(45, 45, 45, 0.7)'
 */
export const hexToRgba = (hex, alpha = 1) => {
  // Validation de l'entrée
  if (!hex || typeof hex !== 'string') {
    console.warn(`Invalid hex color: ${hex}`)
    return 'rgba(0, 0, 0, 1)'
  }

  // Supprime le # si présent
  const cleanHex = hex.replace('#', '')

  // Validation du format hex
  if (!/^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    console.warn(`Invalid hex format: ${hex}`)
    return 'rgba(0, 0, 0, 1)'
  }

  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * Détermine la couleur de bordure d'un projet en fonction de son état hover
 * @param {string} color - Couleur du projet
 * @param {boolean} isHovered - État hover
 * @returns {string|undefined} Couleur de bordure ou undefined
 */
export const getProjectBorderColor = (color, isHovered) => {
  return isHovered ? hexToRgba(color, 0.7) : undefined
}

/**
 * Calcule la luminosité d'une couleur pour déterminer si elle est claire ou sombre
 * @param {string} hex - Couleur au format hexadécimal
 * @returns {number} Valeur de luminosité (0-255)
 * 
 * @example
 * getLuminance('#FFFFFF') // 255 (clair)
 * getLuminance('#000000') // 0 (sombre)
 */
export const getLuminance = hex => {
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.slice(0, 2), 16)
  const g = parseInt(cleanHex.slice(2, 4), 16)
  const b = parseInt(cleanHex.slice(4, 6), 16)

  // Formule de luminosité perceptuelle
  return 0.299 * r + 0.587 * g + 0.114 * b
}

/**
 * Détermine si une couleur de texte devrait être claire ou sombre
 * pour un bon contraste sur un fond donné
 * @param {string} backgroundColor - Couleur de fond au format hex
 * @returns {string} '#FFFFFF' ou '#000000'
 * 
 * @example
 * getContrastColor('#2D2D2D') // '#FFFFFF'
 * getContrastColor('#F5F5F5') // '#000000'
 */
export const getContrastColor = backgroundColor => {
  const luminance = getLuminance(backgroundColor)
  return luminance > 128 ? '#000000' : '#FFFFFF'
}

/**
 * Assombrit une couleur hexadécimale d'un certain pourcentage
 * @param {string} hex - Couleur au format hexadécimal
 * @param {number} percent - Pourcentage d'assombrissement (0-100)
 * @returns {string} Couleur assombrie au format hex
 */
export const darkenColor = (hex, percent) => {
  const cleanHex = hex.replace('#', '')
  const r = Math.max(0, parseInt(cleanHex.slice(0, 2), 16) - (255 * percent) / 100)
  const g = Math.max(0, parseInt(cleanHex.slice(2, 4), 16) - (255 * percent) / 100)
  const b = Math.max(0, parseInt(cleanHex.slice(4, 6), 16) - (255 * percent) / 100)

  const toHex = value => {
    const hex = Math.round(value).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/**
 * Éclaircit une couleur hexadécimale d'un certain pourcentage
 * @param {string} hex - Couleur au format hexadécimal
 * @param {number} percent - Pourcentage d'éclaircissement (0-100)
 * @returns {string} Couleur éclaircie au format hex
 */
export const lightenColor = (hex, percent) => {
  const cleanHex = hex.replace('#', '')
  const r = Math.min(
    255,
    parseInt(cleanHex.slice(0, 2), 16) + (255 * percent) / 100
  )
  const g = Math.min(
    255,
    parseInt(cleanHex.slice(2, 4), 16) + (255 * percent) / 100
  )
  const b = Math.min(
    255,
    parseInt(cleanHex.slice(4, 6), 16) + (255 * percent) / 100
  )

  const toHex = value => {
    const hex = Math.round(value).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

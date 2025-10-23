// src/data/projects/projectsData.js

/**
 * Configuration unifiée des projets
 * Les traductions sont gérées via i18n dans locales/[lang]/projects.json
 */

export const projects = [
  {
    id: 'luxe-threads',
    tags: ['Figma', 'Design System', 'E-commerce'],
    color: '#2D2D2D',
    image: '🛍️',
    hasMethodology: false,
    hasLore: false,
  },
  {
    id: 'campus-connect',
    tags: ['User Testing', 'Figma', 'Mobile Design'],
    color: '#2D2D2D',
    image: '📱',
    hasMethodology: true,
    hasLore: false,
  },
  {
    id: 'eduwatch',
    tags: ['Design Thinking', 'IM School', 'Critical Design'],
    color: '#2D2D2D',
    image: '👁️',
    hasMethodology: false,
    hasLore: true,
  },
]

/**
 * Structure TypeScript pour référence
 * 
 * interface Project {
 *   id: string
 *   tags: string[]
 *   color: string
 *   image: string
 *   hasMethodology: boolean
 *   hasLore: boolean
 * }
 */

// src/data/projects/projectsData.js

/**
 * Configuration unifiée des projets
 * Les traductions sont gérées via i18n dans locales/[lang]/projects.json
 * Les détails des projets sont dans locales/[lang]/projectDetails.json
 */

export const projects = [
  {
    id: 'luxe-threads',
    slug: 'luxe-threads',
    tags: ['Figma', 'Design System', 'E-commerce'],
    color: '#2D2D2D',
    image: '🛍️',
    hasMethodology: false,
    hasLore: false,
    
    // Métadonnées pour la page détaillée
    year: 2024,
    client: 'Personal Project',
    role: 'UI/UX Designer',
    duration: '3 months',
    team: ['Solo'],
    link: null, // URL du projet live si disponible
    prototype: null, // URL du prototype Figma si disponible
    
    // Images pour la galerie (à remplacer par vos vraies images)
    images: [
      '/images/luxe-threads/cover.jpg',
      '/images/luxe-threads/wireframes.jpg',
      '/images/luxe-threads/design-system.jpg',
      '/images/luxe-threads/mobile.jpg',
      '/images/luxe-threads/checkout.jpg',
    ],
  },
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    tags: ['User Testing', 'Figma', 'Mobile Design'],
    color: '#2D2D2D',
    image: '📱',
    hasMethodology: true,
    hasLore: false,
    
    // Métadonnées pour la page détaillée
    year: 2024,
    client: 'Sorbonne Jussieu',
    role: 'UX Researcher & Designer',
    duration: '4 months',
    team: ['UX Team of 3'],
    link: null,
    prototype: null, // Ajoutez le lien Figma ici
    
    // Images pour la galerie
    images: [
      '/images/campus-connect/cover.jpg',
      '/images/campus-connect/research.jpg',
      '/images/campus-connect/user-flows.jpg',
      '/images/campus-connect/screens.jpg',
      '/images/campus-connect/testing.jpg',
    ],
  },
  {
    id: 'eduwatch',
    slug: 'eduwatch',
    tags: ['Design Thinking', 'IM School', 'Critical Design'],
    color: '#2D2D2D',
    image: '👁️',
    hasMethodology: false,
    hasLore: true,
    
    // Métadonnées pour la page détaillée
    year: 2024,
    client: 'IM School - Design Fiction Course',
    role: 'Speculative Designer',
    duration: '2 months',
    team: ['Solo'],
    link: null,
    prototype: null,
    
    // Images pour la galerie
    images: [
      '/images/eduwatch/cover.jpg',
      '/images/eduwatch/pitch-deck.jpg',
      '/images/eduwatch/product-features.jpg',
      '/images/eduwatch/marketing.jpg',
      '/images/eduwatch/dystopia.jpg',
    ],
  },
]

/**
 * Utilitaire pour trouver un projet par slug
 */
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug)
}

/**
 * Utilitaire pour obtenir le projet suivant (pour navigation)
 */
export const getNextProject = (currentSlug) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}

/**
 * Utilitaire pour obtenir le projet précédent (pour navigation)
 */
export const getPreviousProject = (currentSlug) => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  return projects[previousIndex]
}

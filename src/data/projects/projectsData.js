export const projects = [
  {
    id: 'celeste-garden',
    slug: 'celeste-garden',
    tags: ['Figma', 'Design System', 'Mobile'],
    color: '#10b981', // Vert nature
    image: '🌱', // ← Emoji corrigé
    hasMethodology: false,
    hasLore: false,

    // Métadonnées
    year: 2025,
    client: 'Exercice académique',
    role: 'UI/UX Designer',
    duration: 'Licence Pro Design',
    team: ['Solo'],
    link: null,
    prototype: null,

    // Images pour le carousel
    images: [
      '/images/celeste/page1.png',
      '/images/celeste/page2.png',
      '/images/celeste/page3.png',
      '/images/celeste/page4.png',
    ],
  },
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    tags: ['User Testing', 'Figma', 'Mobile Design'],
    color: '#3b82f6',
    image: 'sr',
    hasMethodology: true,
    hasLore: false,
    year: 2025,
    client: 'Sorbonne Jussieu',
    role: 'UX Researcher & Designer',
    duration: '4 months',
    team: ['UX Team of 3'],
    link: null,
    prototype: null,
    images: [],
  },
  {
    id: 'eduwatch',
    slug: 'eduwatch',
    tags: ['Design Thinking', 'IM School', 'Critical Design'],
    color: '#8b5cf6',
    image: '👁️',
    hasMethodology: false,
    hasLore: true,
    year: 2025,
    client: 'IM School - Design Fiction Course',
    role: 'Speculative Designer',
    duration: '2 months',
    team: ['Solo'],
    link: null,
    prototype: null,
    images: [],
  },
]

export const getProjectBySlug = slug => {
  return projects.find(project => project.slug === slug)
}

export const getNextProject = currentSlug => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}

export const getPreviousProject = currentSlug => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const previousIndex =
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  return projects[previousIndex]
}

const projectsList = [
  {
    id: 'chantier-pro',
    slug: 'chantier-pro',
    year: 2026,
    category: 'product-design',
    featured: true,
    tags: ['Figma', 'Perplexity', 'Synthetic Users'],
    filterTags: ['UX Research', 'UI Design', 'AI'],
    image: {
      src: '/images/chantierPro/chantierPro-desktop-quipe.webp',
      alt: 'Chantier Pro – vue desktop équipe',
    },
    images: [
      {
        src: '/images/chantierPro/chantierPro-desktop-quipe.webp',
        alt: 'Chantier Pro – vue desktop équipe',
      },
    ],
  },
  {
    id: 'celeste-garden',
    slug: 'celeste-garden',
    tags: ['Figma', 'Design System', 'Mobile'],
    filterTags: ['UI Design'],
    color: '#10b981',
    image: {
      src: '/images/celeste/page1.png',
      alt: 'Celeste Garden – aperçu page 1',
    },
    hasMethodology: false,
    hasLore: false,
    year: 2025,
    client: 'Exercice académique',
    role: 'UI/UX Designer',
    duration: 'Licence Pro Design',
    team: ['Solo'],
    link: null,
    prototype: null,
    images: [
      { src: '/images/celeste/page1.png', alt: 'Celeste Garden – page 1' },
      { src: '/images/celeste/page2.png', alt: 'Celeste Garden – page 2' },
      { src: '/images/celeste/page3.png', alt: 'Celeste Garden – page 3' },
      { src: '/images/celeste/page4.png', alt: 'Celeste Garden – page 4' },
    ],
  },
  {
    id: 'campus-connect',
    slug: 'campus-connect',
    tags: ['User Testing', 'Figma', 'Mobile Design'],
    filterTags: ['UX Research', 'UI Design'],
    color: '#3b82f6',
    image: null,
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
    id: 'evasion',
    slug: 'evasion',
    titleKey: 'projects.evasion.title',
    descriptionKey: 'projects.evasion.description',
    year: 2025,
    category: 'design-fiction',
    color: '#1a1a1a',
    image: {
      src: '/images/evasion/cover.png',
      alt: 'Evasion – couverture',
    },
    tags: ['Design Fiction', 'UX Research', 'Narrative Design'],
    filterTags: ['Design Fiction'],
    template: 'evasion',
  },
  {
    id: 'cocovoit',
    slug: 'cocovoit',
    year: 2024,
    category: 'product-management',
    featured: false,
    filterTags: ['Project Methodology'],
    image: null,
    images: [],
  },
  {
    id: 'enfants-ecrans',
    slug: 'enfants-ecrans',
    name: 'Luma',
    year: 2025,
    category: 'ux-research',
    tags: ['UX Research', 'Workshop', 'Social Listening'],
    filterTags: ['UX Research'],
    image: null,
    client: 'IIM Digital School',
    team: ['Yassine', 'Maroua', 'Luce', 'Margaux'],
    images: [],
  },
]
export const projects = [...projectsList].sort(
  (a, b) => (b.year || 0) - (a.year || 0)
)

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

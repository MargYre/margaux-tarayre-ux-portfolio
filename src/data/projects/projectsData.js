const projectsList = [
  {
    id: 'edify',
    slug: 'edify',
    prototype:
      'https://www.figma.com/proto/cRdVkOWthXD9v7uFIVoWua/E%CC%81tude-de-cas_La_grande_Ourse_2026?node-id=40000106-193&p=f&t=fhvTmhNUG8GZnInT-1&scaling=min-zoom&content-scaling=fixed&page-id=40000099%3A11&starting-point-node-id=40000106%3A193',
    year: 2026,
    category: 'product-design',
    featured: true,
    tags: ['Figma', 'Perplexity', 'Synthetic Users'],
    filterTags: ['UX Research', 'UI Design', 'IA Tools'],
    image: {
      src: '/images/edify/chantierPro-desktop-quipe.webp',
      alt: 'Edify – vue desktop equipe',
    },
    images: [
      {
        src: '/images/edify/chantierPro-desktop-quipe.webp',
        alt: 'Edify – vue desktop equipe',
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

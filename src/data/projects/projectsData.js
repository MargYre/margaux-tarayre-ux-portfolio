const projectsList = [
  {
    id: 'good-morning',
    slug: 'good-morning',
    title: 'Good Morning',
    description:
      "Conception d'un prototype e-commerce mobile à partir d'un brief client : structuration de l'architecture d'information, création d'une identité visuelle minimaliste et réalisation d'un prototype interactif sur Figma.",
    thumbnail: '/images/good-morning/03-Tests_graphique.png',
    prototype:
      'https://www.figma.com/proto/FaktydYm0fH5gS7nHkQq92/Good-Morning?node-id=27-538&p=f&t=9ROPo5N0XLNgBpFM-0&scaling=scale-down&content-scaling=fixed&page-id=27%3A507&starting-point-node-id=27%3A509',
    year: 2026,
    category: 'product-design',
    featured: true,
    tags: ['Figma', 'Product Design', 'UI'],
    filterTags: ['UI Design'],
    image: {
      src: '/images/good-morning/03-Tests_graphique.png',
      alt: 'Good Morning — test graphique',
    },
    images: [],
  },
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
    id: 'celeste',
    slug: 'celeste-garden',
    title: "Celeste's Garden",
    year: 2024,
    category: 'ui-design',
    featured: true,
    tags: ['Figma', 'E-commerce', 'UI'],
    filterTags: ['UI Design'],
    image: {
      src: '/images/celeste/page1.png',
      alt: "Celeste's Garden — aperçu",
    },
    images: [
      { src: '/images/celeste/page1.png', alt: "Celeste's Garden — écran 1" },
      { src: '/images/celeste/page2.png', alt: "Celeste's Garden — écran 2" },
      { src: '/images/celeste/page3.png', alt: "Celeste's Garden — écran 3" },
      { src: '/images/celeste/page4.png', alt: "Celeste's Garden — écran 4" },
    ],
    prototype: null,
    hasMethodology: false,
    hasLore: false,
  },
  {
    id: 'evasion',
    slug: 'evasion',
    title: 'Évasion',
    year: 2024,
    category: 'ux-research',
    featured: true,
    tags: ['Design Thinking', 'Figma', 'UX'],
    filterTags: ['UX Research'],
    image: {
      src: '/images/evasion/interface-missions.png',
      alt: 'Évasion — aperçu',
    },
    images: [],
    prototype: null,
    hasMethodology: false,
    hasLore: false,
  },
]

/** Ordre : Good Morning → Edify → Campus Connect → Celeste's Garden → Évasion */
export const projects = [...projectsList]

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

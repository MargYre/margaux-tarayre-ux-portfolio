import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects as enProjects } from './projectsData.en'
import { projects as frProjects } from './projectsData.fr'
import styles from './ProjectsGrid.module.scss'

const ProjectsGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const { t, i18n } = useTranslation()

  const projects = i18n.language === 'fr' ? frProjects : enProjects

  return (
    <section className={styles.section} id="projects">
      <SectionHeader t={t} />

      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            t={t}
          />
        ))}
      </div>
    </section>
  )
}

// Sous-composant Header
const SectionHeader = ({ t }) => (
  <div className={styles.header}>
    <span className={styles.sectionLabel}>{t('projects.selectedWork')}</span>
    <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
    <p className={styles.sectionDescription}>{t('projects.description')}</p>
  </div>
)

// Sous-composant Carte de projet
const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave, t }) => {
  // Calcul dynamique de la couleur de bordure avec opacité
  const getBorderColor = () => {
    if (!isHovered) return undefined // Laisse le CSS gérer la couleur par défaut

    // Crée une version avec opacité réduite pour la bordure
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    }

    return hexToRgba(project.color, 0.7)
  }

  return (
    <article
      className={styles.projectCard}
      style={{ borderColor: getBorderColor() }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ProjectVisual project={project} />
      <ProjectContent project={project} t={t} />
    </article>
  )
}

// Sous-composant Visuel du projet
const ProjectVisual = ({ project }) => (
  <div
    className={styles.projectImage}
    style={{
      backgroundColor: `${project.color}15`,
      // Ajout d'une transition smooth pour le background
      transition: 'background-color var(--transition-base)',
    }}
  >
    <span className={styles.emoji}>{project.image}</span>
    <span
      className={styles.categoryBadge}
      style={{ backgroundColor: project.color }}
    >
      {project.category}
    </span>
  </div>
)

// Sous-composant Contenu du projet
const ProjectContent = ({ project, t }) => (
  <div className={styles.projectContent}>
    <h3 className={styles.projectTitle}>{project.title}</h3>
    <p className={styles.projectSubtitle}>{project.subtitle}</p>

    <Tags tags={project.tags} />

    <p className={styles.projectDescription}>{project.description}</p>

    <Highlights highlights={project.highlights} t={t} />

    {project.methodology && (
      <Methodology methodology={project.methodology} t={t} />
    )}
    {project.lore && <Lore lore={project.lore} t={t} />}

    <ViewButton color={project.color} t={t} />
  </div>
)

// Sous-composants spécialisés
const Tags = ({ tags }) => (
  <div className={styles.tags}>
    {tags.map((tag, index) => (
      <span key={index} className={styles.tag}>
        {tag}
      </span>
    ))}
  </div>
)

const Highlights = ({ highlights, t }) => (
  <div className={styles.highlights}>
    <h4 className={styles.highlightsTitle}>
      {t('projects.keyAchievements', 'Key Achievements')}
    </h4>
    <ul className={styles.highlightsList}>
      {highlights.map((highlight, index) => (
        <li key={index} className={styles.highlightItem}>
          {highlight}
        </li>
      ))}
    </ul>
  </div>
)

const Methodology = ({ methodology, t }) => (
  <div className={styles.methodology}>
    <h4 className={styles.methodologyTitle}>
      {t('projects.researchMethodology', 'Research Methodology')}
    </h4>
    <div className={styles.methodologyGrid}>
      <div>
        <strong>{t('projects.research', 'Research')}:</strong>{' '}
        {methodology.research}
      </div>
      <div>
        <strong>{t('projects.testing', 'Testing')}:</strong>{' '}
        {methodology.testing}
      </div>
      <div>
        <strong>{t('projects.iterations', 'Iterations')}:</strong>{' '}
        {methodology.iterations}
      </div>
    </div>
  </div>
)

const Lore = ({ lore, t }) => (
  <div className={styles.lore}>
    <h4 className={styles.loreTitle}>{t('projects.theLore', 'The Lore')}</h4>
    <p className={styles.loreText}>{lore}</p>
  </div>
)

const ViewButton = ({ color, t }) => (
  <button
    className={styles.viewButton}
    style={{ borderColor: color }}
    onMouseEnter={e => {
      // Effet hover dynamique basé sur la couleur du projet
      e.target.style.backgroundColor = color
      e.target.style.color = '#ffffff'
    }}
    onMouseLeave={e => {
      e.target.style.backgroundColor = 'transparent'
      e.target.style.color = color
    }}
  >
    {t('projects.viewCaseStudy')}
  </button>
)

export default ProjectsGrid

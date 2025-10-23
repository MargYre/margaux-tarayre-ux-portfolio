import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../../data/projects/projectsData'
import { hexToRgba } from '../../utils/colorHelpers'
import styles from './ProjectsGrid.module.scss'

const ProjectsGrid = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section} id="projects">
      <SectionHeader t={t} />

      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} t={t} />
        ))}
      </div>
    </section>
  )
}

// ============================================================================
// Section Header
// ============================================================================
const SectionHeader = ({ t }) => (
  <header className={styles.header}>
    <span className={styles.sectionLabel}>{t('projects.selectedWork')}</span>
    <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
    <p className={styles.sectionDescription}>{t('projects.description')}</p>
  </header>
)

// ============================================================================
// Project Card
// ============================================================================
const ProjectCard = ({ project, t }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Récupération des traductions depuis i18n
  const translations = {
    title: t(`projects.${project.id}.title`),
    subtitle: t(`projects.${project.id}.subtitle`),
    category: t(`projects.${project.id}.category`),
    description: t(`projects.${project.id}.description`),
    highlights: t(`projects.${project.id}.highlights`, { returnObjects: true }),
    methodology: project.hasMethodology
      ? t(`projects.${project.id}.methodology`, { returnObjects: true })
      : null,
    lore: project.hasLore ? t(`projects.${project.id}.lore`) : null,
  }

  return (
    <article
      className={styles.projectCard}
      style={{
        '--project-color': project.color,
        borderColor: isHovered ? hexToRgba(project.color, 0.7) : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <ProjectVisual
        image={project.image}
        category={translations.category}
        color={project.color}
      />
      <ProjectContent
        projectId={project.id}
        translations={translations}
        tags={project.tags}
        color={project.color}
        hasMethodology={project.hasMethodology}
        hasLore={project.hasLore}
        t={t}
      />
    </article>
  )
}

// ============================================================================
// Project Visual (Image + Badge)
// ============================================================================
const ProjectVisual = ({ image, category, color }) => (
  <div
    className={styles.projectImage}
    style={{
      backgroundColor: `${color}15`,
    }}
  >
    <span className={styles.emoji} role="img" aria-hidden="true">
      {image}
    </span>
    <span className={styles.categoryBadge} style={{ backgroundColor: color }}>
      {category}
    </span>
  </div>
)

// ============================================================================
// Project Content
// ============================================================================
const ProjectContent = ({
  projectId,
  translations,
  tags,
  color,
  hasMethodology,
  hasLore,
  t,
}) => (
  <div className={styles.projectContent}>
    <h3 id={`project-title-${projectId}`} className={styles.projectTitle}>
      {translations.title}
    </h3>
    <p className={styles.projectSubtitle}>{translations.subtitle}</p>

    <Tags tags={tags} />

    <p
      id={`project-desc-${projectId}`}
      className={styles.projectDescription}
    >
      {translations.description}
    </p>

    <Highlights highlights={translations.highlights} t={t} />

    {hasMethodology && (
      <Methodology methodology={translations.methodology} t={t} />
    )}

    {hasLore && <Lore lore={translations.lore} t={t} />}

    <ViewButton
      color={color}
      projectTitle={translations.title}
      projectId={projectId}
      t={t}
    />
  </div>
)

// ============================================================================
// Sub-components
// ============================================================================

const Tags = ({ tags }) => (
  <div className={styles.tags} role="list">
    {tags.map((tag, index) => (
      <span key={index} className={styles.tag} role="listitem">
        {tag}
      </span>
    ))}
  </div>
)

const Highlights = ({ highlights, t }) => {
  if (!highlights || highlights.length === 0) return null

  return (
    <div className={styles.highlights}>
      <h4 className={styles.highlightsTitle}>{t('projects.keyAchievements')}</h4>
      <ul className={styles.highlightsList}>
        {highlights.map((highlight, index) => (
          <li key={index} className={styles.highlightItem}>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Methodology = ({ methodology, t }) => {
  if (!methodology) return null

  return (
    <div className={styles.methodology}>
      <h4 className={styles.methodologyTitle}>
        {t('projects.researchMethodology')}
      </h4>
      <div className={styles.methodologyGrid}>
        <div>
          <strong>{t('projects.research')}:</strong> {methodology.research}
        </div>
        <div>
          <strong>{t('projects.testing')}:</strong> {methodology.testing}
        </div>
        <div>
          <strong>{t('projects.iterations')}:</strong> {methodology.iterations}
        </div>
      </div>
    </div>
  )
}

const Lore = ({ lore, t }) => {
  if (!lore) return null

  return (
    <div className={styles.lore}>
      <h4 className={styles.loreTitle}>{t('projects.theLore')}</h4>
      <p className={styles.loreText}>{lore}</p>
    </div>
  )
}

const ViewButton = ({ color, projectTitle, projectId, t }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`${styles.viewButton} ${isHovered ? styles.viewButtonHovered : ''}`}
      style={{
        '--button-color': color,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View case study for ${projectTitle}`}
      aria-describedby={`project-desc-${projectId}`}
    >
      {t('projects.viewCaseStudy')}
    </button>
  )
}

export default ProjectsGrid

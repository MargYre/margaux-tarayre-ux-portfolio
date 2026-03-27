import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { projects as defaultProjects } from '../../data/projects/projectsData'
import styles from './ProjectsGrid.module.scss'

const ProjectsGrid = ({ limit, projects = defaultProjects, showHeader = true }) => {
  const { t } = useTranslation()
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const handleMouseMove = e => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projectsToRender =
    typeof limit === 'number' && Number.isFinite(limit)
      ? projects.slice(0, limit)
      : projects

  return (
    <section
      className={`${styles.section} ${!showHeader ? styles.sectionNoHeader : ''}`}
      id="projects"
    >
      {showHeader && <SectionHeader t={t} />}
      <div className={styles.grid}>
        {projectsToRender.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            t={t}
            onCursorChange={setShowCursor}
          />
        ))}
      </div>
    </section>
  )
}

const SectionHeader = ({ t }) => (
  <header className={styles.header}>
    <span className={styles.sectionLabel}>{t('projects.selectedWork')}</span>
    <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
    <p className={styles.sectionDescription}>{t('projects.description')}</p>
  </header>
)

const ProjectCard = ({ project, t, onCursorChange }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Mapper les IDs des projets aux clés de traduction
  const projectKeyMap = {
    'celeste-garden': 'celesteGarden',
    'campus-connect': 'campusConnect',
    eduwatch: 'eduwatch',
    evasion: 'evasion',
    cocovoit: 'cocovoit',
    'enfants-ecrans': 'enfantsEcrans',
    edify: 'edify',
    'good-morning': 'goodMorning',
  }

  const projectKey = projectKeyMap[project.id] || project.id

  const handleMouseEnter = () => {
    setIsHovered(true)
    onCursorChange(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    onCursorChange(false)
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={styles.projectCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Voir le projet ${t(`projects.${projectKey}.title`)}`}
    >
      <ProjectVisual
        image={project.image}
        category={t(`projects.${projectKey}.category`)}
        projectId={project.id}
        isHovered={isHovered}
        t={t}
      />
      <ProjectContent
        projectId={project.id}
        projectKey={projectKey}
        tags={project.tags}
        t={t}
        isHovered={isHovered}
      />
    </Link>
  )
}

const ProjectVisual = ({ image, category, projectId, isHovered, t }) => (
  <div className={styles.projectImage}>
    {projectId === 'edify' ? (
      <img
        src="/images/edify/chantierPro-desktop-quipe.webp"
        alt="Edify preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'celeste-garden' ? (
      <img
        src="/images/celeste/page1.png"
        alt="Celeste's Garden preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'campus-connect' ? (
      <img
        src="/images/campus-connect/screenshot1.webp"
        alt="Campus Connect preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'evasion' ? (
      <img
        src="/images/evasion/interface-missions.png"
        alt="EVASION preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'enfants-ecrans' ? (
      <img
        src="/images/luma/luma.png"
        alt="Luma preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'cocovoit' ? (
      <img
        src="/images/cocovoit/agile-methodology.webp"
        alt="Campus Connect preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'good-morning' ? (
      <img
        src={encodeURI(
          image?.src ||
            '/images/good-morning/04-Charte Graphique.png'
        )}
        alt="Good Morning preview"
        className={styles.projectPreviewImage}
      />
    ) : (
      <span className={styles.emoji} role="img" aria-hidden="true">
        {image}
      </span>
    )}
    <span className={styles.categoryBadge}>{category}</span>

    {/* Overlay "Voir" au survol */}
    <div
      className={`${styles.hoverOverlay} ${isHovered ? styles.hoverOverlayVisible : ''}`}
    >
      <span className={styles.viewLabel}>{t('projects.view')}</span>
    </div>
  </div>
)

const ProjectContent = ({ projectId, projectKey, tags, t, isHovered }) => (
  <div className={styles.projectContent}>
    <h3 id={`project-title-${projectId}`} className={styles.projectTitle}>
      {t(`projects.${projectKey}.title`)}
    </h3>
    <p className={styles.projectSubtitle}>
      {t(`projects.${projectKey}.subtitle`)}
    </p>
    <Tags tags={tags} />
    <p className={styles.projectDescription}>
      {t(`projects.${projectKey}.description`)}
    </p>
  </div>
)

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <div className={styles.tags} role="list">
      {tags.map((tag, index) => (
        <span key={index} className={styles.tag} role="listitem">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default ProjectsGrid

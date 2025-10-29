import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects/projectsData'
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

const SectionHeader = ({ t }) => (
  <header className={styles.header}>
    <span className={styles.sectionLabel}>{t('projects.selectedWork')}</span>
    <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
    <p className={styles.sectionDescription}>{t('projects.description')}</p>
  </header>
)

const ProjectCard = ({ project, t }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Mapper les IDs des projets aux clés de traduction
  const projectKeyMap = {
    'celeste-garden': 'celesteGarden',
    'campus-connect': 'campusConnect',
    eduwatch: 'eduwatch',
    evasion: 'evasion',
  }

  const projectKey = projectKeyMap[project.id] || project.id

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={styles.projectCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
    {projectId === 'celeste-garden' ? (
      <img
        src="/images/celeste/page1.png"
        alt="Celeste's Garden preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'campus-connect' ? (
      <img
        src="/images/campus-connect/screenshot1.png"
        alt="Campus Connect preview"
        className={styles.projectPreviewImage}
      />
    ) : projectId === 'evasion' ? (
      <img
        src="/images/evasion/interface-missions.png"
        alt="EVASION preview"
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

const Tags = ({ tags }) => (
  <div className={styles.tags} role="list">
    {tags.map((tag, index) => (
      <span key={index} className={styles.tag} role="listitem">
        {tag}
      </span>
    ))}
  </div>
)

export default ProjectsGrid

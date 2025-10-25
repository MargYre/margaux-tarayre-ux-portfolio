import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
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
  }

  const projectKey = projectKeyMap[project.id] || project.id

  return (
    <article
      className={styles.projectCard}
      data-project-card="true"
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
        category={t(`projects.${projectKey}.category`)}
        color={project.color}
        projectId={project.id}
      />
      <ProjectContent
        projectId={project.id}
        projectKey={projectKey}
        tags={project.tags}
        color={project.color}
        project={project}
        t={t}
      />
    </article>
  )
}

const ProjectVisual = ({ image, category, color, projectId }) => (
  <div
    className={styles.projectImage}
    style={{ backgroundColor: `${color}15` }}
  >
    {projectId === 'celeste-garden' ? (
      <img
        src="/images/celeste/page1.png"
        alt="Celeste's Garden preview"
        className={styles.projectPreviewImage}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ) : projectId === 'campus-connect' ? (
      <img
        src="/images/campus-connect/screenshot1.png"
        alt="Campus Connect preview"
        className={styles.projectPreviewImage}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ) : projectId === 'evasion' ? (
      <img
        src="/images/evasion/interface-missions.png"
        alt="EVASION preview"
        className={styles.projectPreviewImage}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    ) : (
      <span className={styles.emoji} role="img" aria-hidden="true">
        {image}
      </span>
    )}
    <span className={styles.categoryBadge} style={{ backgroundColor: color }}>
      {category}
    </span>
  </div>
)

const ProjectContent = ({ projectId, projectKey, tags, color, project, t }) => (
  <div className={styles.projectContent}>
    <h3 id={`project-title-${projectId}`} className={styles.projectTitle}>
      {t(`projects.${projectKey}.title`)}
    </h3>
    <p className={styles.projectSubtitle}>
      {t(`projects.${projectKey}.subtitle`)}
    </p>
    <Tags tags={tags} />
    <p id={`project-desc-${projectId}`} className={styles.projectDescription}>
      {t(`projects.${projectKey}.description`)}
    </p>
    <ViewButton
      color={color}
      projectTitle={t(`projects.${projectKey}.title`)}
      projectId={projectId}
      project={project}
      t={t}
    />
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

const ViewButton = ({ color, projectTitle, projectId, project, t }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`${styles.viewButton} ${isHovered ? styles.viewButtonHovered : ''}`}
      style={{ '--button-color': color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Voir le projet ${projectTitle}`}
      aria-describedby={`project-desc-${projectId}`}
    >
      {t('projects.viewCaseStudy')}
    </Link>
  )
}

export default ProjectsGrid

import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects/projectsData'
import styles from './ProjectDetail.module.scss'

const ProjectDetail = () => {
  const { slug } = useParams()
  const { t } = useTranslation()
  
  // Trouve le projet correspondant
  const project = projects.find(p => p.slug === slug)
  
  // Si le projet n'existe pas, redirige vers 404
  if (!project) {
    return <Navigate to="/" replace />
  }
  
  // Récupère les traductions basiques
  const projectInfo = {
    title: t(`projects.${project.id}.title`),
    subtitle: t(`projects.${project.id}.subtitle`),
    category: t(`projects.${project.id}.category`),
  }
  
  // Récupère les détails traduits
  const details = {
    overview: t(`projectDetails.${project.id}.overview`),
    challenge: t(`projectDetails.${project.id}.challenge`),
    solution: t(`projectDetails.${project.id}.solution`),
    process: t(`projectDetails.${project.id}.process`, { returnObjects: true }),
    results: t(`projectDetails.${project.id}.results`, { returnObjects: true }),
    learnings: t(`projectDetails.${project.id}.learnings`),
  }

  return (
    <article className={styles.projectDetail}>
      {/* Header avec navigation retour */}
      <header className={styles.header}>
        <Link to="/#projects" className={styles.backLink}>
          {t('projectDetails.backToProjects')}
        </Link>
        
        <div className={styles.titleSection}>
          <span 
            className={styles.categoryBadge}
            style={{ backgroundColor: project.color }}
          >
            {projectInfo.category}
          </span>
          <h1 className={styles.title}>{projectInfo.title}</h1>
          <p className={styles.subtitle}>{projectInfo.subtitle}</p>
        </div>
        
        {/* Métadonnées du projet */}
        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <strong>{t('projectDetails.year')}</strong>
            <span>{project.year}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>{t('projectDetails.role')}</strong>
            <span>{project.role}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>{t('projectDetails.duration')}</strong>
            <span>{project.duration}</span>
          </div>
          <div className={styles.metaItem}>
            <strong>{t('projectDetails.client')}</strong>
            <span>{project.client}</span>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className={styles.heroImage}>
        <div className={styles.heroEmoji}>{project.image}</div>
        <div 
          className={styles.heroBackground}
          style={{ backgroundColor: `${project.color}20` }}
        />
      </div>

      {/* Contenu principal */}
      <div className={styles.content}>
        {/* Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('projectDetails.overview')}</h2>
          <p className={styles.leadText}>{details.overview}</p>
        </section>

        {/* Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('projectDetails.challenge')}</h2>
          <p className={styles.bodyText}>{details.challenge}</p>
        </section>

        {/* Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('projectDetails.solution')}</h2>
          <p className={styles.bodyText}>{details.solution}</p>
        </section>

        {/* Process Timeline */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('projectDetails.process')}</h2>
          <div className={styles.processTimeline}>
            {details.process?.map((phase, index) => (
              <div key={index} className={styles.phaseCard}>
                <div className={styles.phaseNumber}>{index + 1}</div>
                <div className={styles.phaseContent}>
                  <h3 className={styles.phaseTitle}>{phase.phase}</h3>
                  <p className={styles.phaseDescription}>{phase.description}</p>
                  <span className={styles.phaseDuration}>{phase.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('projectDetails.results')}</h2>
          <ul className={styles.resultsList}>
            {details.results?.map((result, index) => (
              <li key={index} className={styles.resultItem}>
                {result}
              </li>
            ))}
          </ul>
        </section>

        {/* Key Learnings */}
        {details.learnings && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('projectDetails.learnings')}</h2>
            <blockquote className={styles.quote}>
              <p>{details.learnings}</p>
            </blockquote>
          </section>
        )}

        {/* Tags */}
        <section className={styles.tagsSection}>
          <h3 className={styles.tagsTitle}>{t('projectDetails.technologies')}</h3>
          <div className={styles.tags}>
            {project.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* CTAs */}
        {(project.link || project.prototype) && (
          <div className={styles.ctaSection}>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaButton}
                style={{ backgroundColor: project.color }}
              >
                {t('projectDetails.viewLive')} →
              </a>
            )}
            {project.prototype && (
              <a 
                href={project.prototype} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaButtonSecondary}
                style={{ borderColor: project.color, color: project.color }}
              >
                {t('projectDetails.viewPrototype')} →
              </a>
            )}
          </div>
        )}
      </div>

      {/* Navigation vers autres projets */}
      <nav className={styles.projectNav}>
        <Link to="/#projects" className={styles.projectNavLink}>
          {t('projectDetails.backToProjects')}
        </Link>
      </nav>
    </article>
  )
}

export default ProjectDetail

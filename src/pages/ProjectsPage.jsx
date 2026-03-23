import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects/projectsData'
import ProjectsGrid from '../components/Projects/ProjectsGrid'
import Footer from '../components/Footer/Footer'
import styles from './ProjectsPage.module.scss'

const ProjectsPage = () => {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('All')
  const availableFilters = useMemo(
    () => ['All', ...new Set(projects.flatMap(project => project.filterTags || []))],
    []
  )

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.filterTags?.includes(activeFilter))

  return (
    <>
      <section className={styles.filtersSection}>
        <h1 className={styles.pageTitle}>{t('projects.title')}</h1>
        <div className={styles.filtersWrap}>
          {availableFilters.map(filter => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.filterButtonActive : ''
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <div className={styles.projectsContent}>
        <ProjectsGrid projects={filteredProjects} showHeader={false} />
      </div>
      <Footer />
    </>
  )
}

export default ProjectsPage


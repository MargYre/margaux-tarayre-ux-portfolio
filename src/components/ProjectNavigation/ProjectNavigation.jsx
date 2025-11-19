import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import styles from './ProjectNavigation.module.scss'

const ProjectNavigation = ({ currentProjectId }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  // Liste des projets dans l'ordre (VÉRIFIE que ces IDs correspondent exactement)
  const projects = [
    { id: 'celeste-garden', route: '/projects/celeste-garden' },
    { id: 'campus-connect', route: '/projects/campus-connect' },
    { id: 'evasion', route: '/projects/evasion' },
    { id: 'cocovoit', route: '/projects/cocovoit' },
  ]

  // Trouver l'index du projet actuel
  const currentIndex = projects.findIndex(p => p.id === currentProjectId)

  // DEBUG : Afficher dans la console
  useEffect(() => {
    console.log('🔍 ProjectNavigation Debug:')
    console.log('  Current ID:', currentProjectId)
    console.log('  Current Index:', currentIndex)
    console.log('  Current Route:', location.pathname)
  }, [currentProjectId, currentIndex, location.pathname])

  // Si l'ID n'est pas trouvé, ne rien afficher
  if (currentIndex === -1) {
    console.error(
      `❌ Project ID "${currentProjectId}" not found in projects array`
    )
    return null
  }

  // Calculer prev/next avec logique circulaire
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length
  const nextIndex = (currentIndex + 1) % projects.length

  const prevProject = projects[prevIndex]
  const nextProject = projects[nextIndex]

  // DEBUG : Afficher prev/next
  useEffect(() => {
    console.log('  ← Prev:', prevProject.id, prevProject.route)
    console.log('  → Next:', nextProject.id, nextProject.route)
  }, [prevProject, nextProject])

  const handlePrevious = () => {
    console.log('🔄 Navigating to PREV:', prevProject.route)
    navigate(prevProject.route)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNext = () => {
    console.log('🔄 Navigating to NEXT:', nextProject.route)
    navigate(nextProject.route)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.projectNav}>
      {/* Flèche précédent */}
      <button
        className={styles.navButton}
        onClick={handlePrevious}
        aria-label={t('projectNav.previous')}
        title={t('projectNav.previous')}
      >
        <ChevronLeft size={32} strokeWidth={1.5} />
        <span className={styles.navLabel}>{t('projectNav.prev')}</span>
      </button>

      {/* Flèche suivant */}
      <button
        className={styles.navButton}
        onClick={handleNext}
        aria-label={t('projectNav.next')}
        title={t('projectNav.next')}
      >
        <span className={styles.navLabel}>{t('projectNav.next')}</span>
        <ChevronRight size={32} strokeWidth={1.5} />
      </button>
    </div>
  )
}

export default ProjectNavigation

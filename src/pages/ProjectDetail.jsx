import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects/projectsData'
import CelesteGardenTemplate from './ProjectDetail/CelesteGardenTemplate'
import CampusConnectTemplate from './ProjectDetail/CampusConnectTemplate'
import EvasionTemplate from './ProjectDetail/EvasionTemplate'
import FutureTemplate from './ProjectDetail/FutureTemplate'
import styles from './ProjectDetail.module.scss'

const ProjectDetail = () => {
  const { slug } = useParams()

  // Trouver le projet
  const project = projects.find(p => p.slug === slug)

  // Si pas trouvé, rediriger vers 404
  if (!project) {
    return <Navigate to="/404" replace />
  }

  // Sélectionner le bon template
  const renderTemplate = () => {
    switch (project.id) {
      case 'celeste-garden':
        return <CelesteGardenTemplate project={project} />

      case 'campus-connect':
        return <CampusConnectTemplate project={project} />

      case 'evasion':
        return <EvasionTemplate project={project} />

      default:
        return <FutureTemplate project={project} />
    }
  }

  return <div className={styles.projectDetail}>{renderTemplate()}</div>
}

export default ProjectDetail

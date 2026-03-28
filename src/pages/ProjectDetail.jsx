import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects/projectsData'
import CampusConnectTemplate from './ProjectDetail/CampusConnect/CampusConnectTemplate'
import CelesteGardenTemplate from './ProjectDetail/CelesteGarden/CelesteGardenTemplate'
import EdifyTemplate from './ProjectDetail/ChantierPro/ChantierProTemplate'
import EvasionTemplate from './ProjectDetail/Evasion/EvasionTemplate'
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
      case 'edify':
        return <EdifyTemplate project={project} />

      case 'campus-connect':
        return <CampusConnectTemplate project={project} />

      case 'celeste':
        return <CelesteGardenTemplate project={project} />

      case 'evasion':
        return <EvasionTemplate project={project} />

      default:
        return <FutureTemplate project={project} />
    }
  }

  return <div className={styles.projectDetail}>{renderTemplate()}</div>
}

export default ProjectDetail

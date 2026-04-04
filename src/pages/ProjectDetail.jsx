import { useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects/projectsData'
import CampusConnectTemplate from './ProjectDetail/CampusConnect/CampusConnectTemplate'
import CelesteGardenTemplate from './ProjectDetail/CelesteGarden/CelesteGardenTemplate'
import EdifyTemplate from './ProjectDetail/ChantierPro/ChantierProTemplate'
import EvasionTemplate from './ProjectDetail/Evasion/EvasionTemplate'
import GoodMorningTemplate from './ProjectDetail/GoodMorning/GoodMorningTemplate'
import FutureTemplate from './ProjectDetail/FutureTemplate'
import styles from './ProjectDetail.module.scss'

const ProjectDetail = () => {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const renderTemplate = () => {
    if (slug === 'good-morning') {
      return <GoodMorningTemplate project={project} />
    }

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

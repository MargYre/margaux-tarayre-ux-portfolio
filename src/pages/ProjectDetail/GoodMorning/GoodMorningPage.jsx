import { Navigate } from 'react-router-dom'
import { getProjectBySlug } from '../../../data/projects/projectsData'
import GoodMorningTemplate from './GoodMorningTemplate'

/**
 * Route dédiée /projects/good-morning : fournit le projet depuis les data
 * (évite useParams().slug vide si on utilisait ProjectDetail sur un path sans :slug).
 */
const GoodMorningPage = () => {
  const project = getProjectBySlug('good-morning')
  if (!project) {
    return <Navigate to="/404" replace />
  }
  return <GoodMorningTemplate project={project} />
}

export default GoodMorningPage

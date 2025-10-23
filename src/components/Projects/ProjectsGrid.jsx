import { useState } from 'react'
import { projects } from './projectsData'
import styles from './ProjectsGrid.module.css'

const ProjectsGrid = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section className={styles.section} id="projects">
      <SectionHeader />

      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isHovered={hoveredProject === project.id}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>
    </section>
  )
}

// Sous-composant Header
const SectionHeader = () => (
  <div className={styles.header}>
    <span className={styles.sectionLabel}>Selected Work</span>
    <h2 className={styles.sectionTitle}>Projects</h2>
    <p className={styles.sectionDescription}>
      A collection of design explorations spanning e-commerce, user research,
      and speculative futures.
    </p>
  </div>
)

// Sous-composant Carte de projet
const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => (
  <article
    className={`${styles.projectCard} project-card`}
    style={{ borderColor: isHovered ? project.color : '#e0e0e0' }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <ProjectVisual project={project} />
    <ProjectContent project={project} />
  </article>
)

// Sous-composant Visuel du projet
const ProjectVisual = ({ project }) => (
  <div
    className={`${styles.projectImage} project-image`}
    style={{ backgroundColor: `${project.color}15` }}
  >
    <span className={styles.emoji}>{project.image}</span>
    <span
      className={styles.categoryBadge}
      style={{ backgroundColor: project.color }}
    >
      {project.category}
    </span>
  </div>
)

// Sous-composant Contenu du projet
const ProjectContent = ({ project }) => (
  <div className={styles.projectContent}>
    <h3 className={styles.projectTitle}>{project.title}</h3>
    <p className={styles.projectSubtitle}>{project.subtitle}</p>

    <Tags tags={project.tags} />

    <p className={styles.projectDescription}>{project.description}</p>

    <Highlights highlights={project.highlights} />

    {project.methodology && <Methodology methodology={project.methodology} />}
    {project.lore && <Lore lore={project.lore} />}

    <ViewButton color={project.color} />
  </div>
)

// Sous-composants spécialisés
const Tags = ({ tags }) => (
  <div className={styles.tags}>
    {tags.map((tag, index) => (
      <span key={index} className={styles.tag}>
        {tag}
      </span>
    ))}
  </div>
)

const Highlights = ({ highlights }) => (
  <div className={styles.highlights}>
    <h4 className={styles.highlightsTitle}>Key Achievements</h4>
    <ul className={styles.highlightsList}>
      {highlights.map((highlight, index) => (
        <li key={index} className={styles.highlightItem}>
          {highlight}
        </li>
      ))}
    </ul>
  </div>
)

const Methodology = ({ methodology }) => (
  <div className={styles.methodology}>
    <h4 className={styles.methodologyTitle}>Research Methodology</h4>
    <div className={styles.methodologyGrid}>
      <div>
        <strong>Research:</strong> {methodology.research}
      </div>
      <div>
        <strong>Testing:</strong> {methodology.testing}
      </div>
      <div>
        <strong>Iterations:</strong> {methodology.iterations}
      </div>
    </div>
  </div>
)

const Lore = ({ lore }) => (
  <div className={styles.lore}>
    <h4 className={styles.loreTitle}>The Lore</h4>
    <p className={styles.loreText}>{lore}</p>
  </div>
)

const ViewButton = ({ color }) => (
  <button className={styles.viewButton} style={{ borderColor: color }}>
    View Case Study →
  </button>
)

export default ProjectsGrid

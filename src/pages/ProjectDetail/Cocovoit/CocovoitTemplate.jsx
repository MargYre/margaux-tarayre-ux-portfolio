import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Carousel from '../../../components/Carousel/Carousel'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import styles from './CocovoitTemplate.module.scss'

const CocovoitTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Images placeholders (à remplacer plus tard)
  const images = [
    '/images/cocovoit/agile-methodology.webp',
    '/images/cocovoit/placeholder2.png',
    '/images/cocovoit/placeholder3.png',
  ]

  // Ouvrir la lightbox
  const handleImageClick = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Traductions pour le carousel
  const carouselTranslations = {
    prevButton: t('cocovoit.carousel.prevButton'),
    nextButton: t('cocovoit.carousel.nextButton'),
    goToImage: t('cocovoit.carousel.goToImage'),
    loading: t('cocovoit.carousel.loading'),
  }

  // Traductions pour la lightbox
  const lightboxTranslations = {
    close: t('cocovoit.lightbox.close'),
    previous: t('cocovoit.lightbox.previous'),
    next: t('cocovoit.lightbox.next'),
    zoomIn: t('cocovoit.lightbox.zoomIn'),
    zoomOut: t('cocovoit.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      {/* Lien de retour simple */}
      <div className={styles.backLinkWrapper}>
        <Link to="/" className={styles.backLink}>
          {t('cocovoit.nav.back')}
        </Link>
      </div>

      {/* Hero avec CTAs Figma bien visibles */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Texte à gauche */}
            <div className={styles.heroText}>
              <div className={styles.heroTag}>
                <span>{t('cocovoit.hero.tag')}</span>
                <span className={styles.year}>{project.year || 2024}</span>
              </div>

              <h1 className={styles.heroTitle}>{t('cocovoit.hero.title')}</h1>
              <p className={styles.heroSubtitle}>
                {t('cocovoit.hero.subtitle')}
              </p>

              <div className={styles.heroDetails}>
                <DetailItem
                  label={t('cocovoit.hero.details.duration.label')}
                  value={t('cocovoit.hero.details.duration.value')}
                />
                <DetailItem
                  label={t('cocovoit.hero.details.context.label')}
                  value={t('cocovoit.hero.details.context.value')}
                />
                <DetailItem
                  label={t('cocovoit.hero.details.team.label')}
                  value={t('cocovoit.hero.details.team.value')}
                />
              </div>

              {/* CTAs Figma */}
              <div className={styles.figmaLinks}>
                <a
                  href="https://www.figma.com/design/daA9drBXk0W6LqF9LkOJjT/App-cocovoit?node-id=1-3&p=f&t=jU856zP1BAtaFbf0-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.figmaLink}
                >
                  {t('cocovoit.hero.cta.figma')} →
                </a>
                <a
                  href="https://www.figma.com/proto/daA9drBXk0W6LqF9LkOJjT/App-cocovoit?node-id=383-4018&p=f&t=4TTW3BQ6WFw9W9QN-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A3&starting-point-node-id=383%3A4018&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.prototypeLink}
                >
                  {t('cocovoit.hero.cta.prototype')} →
                </a>
              </div>
            </div>

            {/* Carousel à droite (ou placeholder) */}
            <div className={styles.heroCarousel}>
              <Carousel
                images={images}
                onImageClick={handleImageClick}
                translations={carouselTranslations}
                altPrefix="Cocovoit"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Overview */}
      <OverviewSection t={t} />

      {/* Méthodologie Agile (coeur du projet) */}
      <MethodologySection t={t} />

      {/* Mon rôle */}
      <RoleSection t={t} />

      {/* Compétences démontrées */}
      <LearningsSection t={t} />

      {/* Navigation entre projets */}
      <ProjectNavigation currentProjectId="cocovoit" />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          translations={lightboxTranslations}
        />
      )}

      {/* Footer global */}
      <Footer />
    </div>
  )
}

const DetailItem = ({ label, value }) => (
  <div className={styles.detail}>
    <span className={styles.detailLabel}>{label}</span>
    <span className={styles.detailValue}>{value}</span>
  </div>
)

const OverviewSection = ({ t }) => (
  <section className={styles.section}>
    <div className={styles.sectionContainer}>
      <div className={styles.sectionGrid}>
        <div className={styles.sectionLabel}>
          <span>{t('cocovoit.sections.overview.number')}</span>
          <span>{t('cocovoit.sections.overview.label')}</span>
        </div>

        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            {t('cocovoit.sections.overview.title')}
          </h2>
          <p className={styles.paragraph}>
            {t('cocovoit.sections.overview.description')}
          </p>
          <p className={styles.paragraph}>
            {t('cocovoit.sections.overview.challenge')}
          </p>
        </div>
      </div>
    </div>
  </section>
)

const MethodologySection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const phases = t('cocovoit.sections.methodology.phases', {
    returnObjects: true,
  })
  const phasesArray = Array.isArray(phases) ? phases : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('cocovoit.sections.methodology.number')}</span>
            <span>{t('cocovoit.sections.methodology.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('cocovoit.sections.methodology.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('cocovoit.sections.methodology.intro')}
            </p>

            {/* Bouton Afficher plus */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('cocovoit.sections.methodology.hideDetails')
                : t('cocovoit.sections.methodology.showDetails')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            {/* Contenu repliable */}
            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <div className={styles.phasesContainer}>
                  {phasesArray.map((phase, index) => (
                    <div key={index} className={styles.phaseBlock}>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                      <ul className={styles.phaseList}>
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className={styles.phaseItem}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const RoleSection = ({ t }) => {
  const contributions = t('cocovoit.sections.role.contributions', {
    returnObjects: true,
  })
  const contributionsArray = Array.isArray(contributions) ? contributions : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('cocovoit.sections.role.number')}</span>
            <span>{t('cocovoit.sections.role.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('cocovoit.sections.role.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('cocovoit.sections.role.intro')}
            </p>

            <div className={styles.contributionsGrid}>
              {contributionsArray.map((contribution, index) => (
                <div key={index} className={styles.contributionCard}>
                  <h4 className={styles.contributionTitle}>
                    {contribution.title}
                  </h4>
                  <p className={styles.contributionDesc}>
                    {contribution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const LearningsSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const skills = t('cocovoit.sections.learnings.skills', {
    returnObjects: true,
  })
  const skillsArray = Array.isArray(skills) ? skills : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('cocovoit.sections.learnings.number')}</span>
            <span>{t('cocovoit.sections.learnings.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('cocovoit.sections.learnings.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('cocovoit.sections.learnings.intro')}
            </p>

            {/* Bouton Afficher plus */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('cocovoit.sections.learnings.hideDetails')
                : t('cocovoit.sections.learnings.showDetails')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            {/* Contenu repliable */}
            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <div className={styles.skillsGrid}>
                  {skillsArray.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                      <h4 className={styles.skillTitle}>{skill.title}</h4>
                      <p className={styles.skillDesc}>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocovoitTemplate

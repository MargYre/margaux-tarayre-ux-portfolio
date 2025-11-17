import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Carousel from '../../../components/Carousel/Carousel'
import Lightbox from '../../../components/Lightbox/Lightbox'
import styles from './EvasionTemplate.module.scss'

const EvasionTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Images pour le carousel
  const images = [
    '/images/evasion/interface-missions.png',
    '/images/evasion/interface-calendar.png',
    '/images/evasion/persona-kael.png',
    '/images/evasion/persona-romain.png',
    '/images/evasion/moodboard.png',
  ]

  // Ouvrir la lightbox
  const handleImageClick = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Traductions pour le carousel
  const carouselTranslations = {
    prevButton: t('evasion.carousel.prevButton'),
    nextButton: t('evasion.carousel.nextButton'),
    goToImage: t('evasion.carousel.goToImage'),
    loading: t('evasion.carousel.loading'),
  }

  // Traductions pour la lightbox
  const lightboxTranslations = {
    close: t('evasion.lightbox.close'),
    previous: t('evasion.lightbox.previous'),
    next: t('evasion.lightbox.next'),
    zoomIn: t('evasion.lightbox.zoomIn'),
    zoomOut: t('evasion.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      {/* Lien de retour simple */}
      <div className={styles.backLinkWrapper}>
        <Link to="/" className={styles.backLink}>
          {t('evasion.nav.back')}
        </Link>
      </div>

      {/* Hero avec carousel */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Texte à gauche */}
            <div className={styles.heroText}>
              <div className={styles.heroTag}>
                <span className={styles.tag}>{t('evasion.hero.tag')}</span>
                <span className={styles.year}>{project.year || 2025}</span>
              </div>

              <h1 className={styles.heroTitle}>{t('evasion.hero.title')}</h1>
              <p className={styles.heroSubtitle}>
                {t('evasion.hero.subtitle')}
              </p>

              <div className={styles.heroDetails}>
                <DetailItem
                  label={t('evasion.hero.details.duration.label')}
                  value={t('evasion.hero.details.duration.value')}
                />
                <DetailItem
                  label={t('evasion.hero.details.school.label')}
                  value={t('evasion.hero.details.school.value')}
                />
                <DetailItem
                  label={t('evasion.hero.details.supervisor.label')}
                  value={t('evasion.hero.details.supervisor.value')}
                />
              </div>

              <a
                href="https://www.figma.com/slides/uIZuK5O3HccZlblr5yWRTz/Untitled?node-id=1-760&t=5zEXp2LGoUT43omh-0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaLink}
              >
                {t('evasion.hero.link')} →
              </a>
            </div>

            {/* Carousel à droite */}
            <div className={styles.heroCarousel}>
              <Carousel
                images={images}
                onImageClick={handleImageClick}
                translations={carouselTranslations}
                altPrefix="ÉVASION"
                showCaption={true}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Context */}
      <ContextSection t={t} />

      {/* Concept - COURT avec accordion */}
      <ConceptSection t={t} />

      {/* Personas - avec accordion optionnel */}
      <PersonasSection t={t} />

      {/* Design - avec accordion */}
      <DesignSection t={t} />

      {/* My Role */}
      <RoleSection t={t} />

      {/* Reflection */}
      <ReflectionSection t={t} />

      {/* Formation Section - Avant Footer */}
      <FormationSection t={t} />

      {/* Footer global */}
      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          translations={lightboxTranslations}
        />
      )}
    </div>
  )
}

const DetailItem = ({ label, value }) => (
  <div className={styles.detail}>
    <span className={styles.detailLabel}>{label}</span>
    <span className={styles.detailValue}>{value}</span>
  </div>
)

const ContextSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const details = t('evasion.sections.context.details', { returnObjects: true })
  const detailsArray = Array.isArray(details) ? details : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.context.number')}</span>
            <span>{t('evasion.sections.context.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.context.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('evasion.sections.context.intro')}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('evasion.sections.context.hideDetails')
                : t('evasion.sections.context.showDetails')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                {detailsArray.map((detail, index) => (
                  <div key={index} className={styles.detailBlock}>
                    <h4 className={styles.detailTitle}>{detail.title}</h4>
                    <p className={styles.detailText}>{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ConceptSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const fullStory = t('evasion.sections.concept.fullStory', {
    returnObjects: true,
  })
  const fullStoryArray = Array.isArray(fullStory) ? fullStory : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.concept.number')}</span>
            <span>{t('evasion.sections.concept.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.concept.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('evasion.sections.concept.intro')}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('evasion.sections.concept.hideStory')
                : t('evasion.sections.concept.showStory')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                {fullStoryArray.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PersonasSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const personas = t('evasion.sections.personas.list', { returnObjects: true })
  const personasArray = Array.isArray(personas) ? personas : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.personas.number')}</span>
            <span>{t('evasion.sections.personas.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.personas.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('evasion.sections.personas.intro')}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('evasion.sections.personas.hidePersonas')
                : t('evasion.sections.personas.showPersonas')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <div className={styles.personasGrid}>
                  {personasArray.map((persona, index) => (
                    <div key={index} className={styles.personaCard}>
                      <h3 className={styles.personaName}>{persona.name}</h3>
                      <p className={styles.personaRole}>{persona.role}</p>
                      <p className={styles.personaDesc}>
                        {persona.description}
                      </p>
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

const DesignSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const elements = t('evasion.sections.design.elements', {
    returnObjects: true,
  })
  const elementsArray = Array.isArray(elements) ? elements : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.design.number')}</span>
            <span>{t('evasion.sections.design.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.design.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('evasion.sections.design.intro')}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('evasion.sections.design.hideElements')
                : t('evasion.sections.design.showElements')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <div className={styles.designElements}>
                  {elementsArray.map((element, index) => (
                    <div key={index} className={styles.designElement}>
                      <h4 className={styles.elementTitle}>{element.title}</h4>
                      <p className={styles.elementDesc}>
                        {element.description}
                      </p>
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
  const [isExpanded, setIsExpanded] = useState(false)

  const contributions = t('evasion.sections.role.contributions', {
    returnObjects: true,
  })
  const contributionsArray = Array.isArray(contributions) ? contributions : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.role.number')}</span>
            <span>{t('evasion.sections.role.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.role.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('evasion.sections.role.intro')}
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('evasion.sections.role.hideDetails')
                : t('evasion.sections.role.showDetails')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <div className={styles.roleList}>
                  {contributionsArray.map((contribution, index) => (
                    <div key={index} className={styles.roleItem}>
                      <h4 className={styles.roleTitle}>{contribution.title}</h4>
                      <p className={styles.roleDesc}>
                        {contribution.description}
                      </p>
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

const ReflectionSection = ({ t }) => {
  const paragraphs = t('evasion.sections.reflection.paragraphs', {
    returnObjects: true,
  })
  const paragraphsArray = Array.isArray(paragraphs) ? paragraphs : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('evasion.sections.reflection.number')}</span>
            <span>{t('evasion.sections.reflection.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('evasion.sections.reflection.title')}
            </h2>
            {paragraphsArray.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const FormationSection = ({ t }) => (
  <section className={styles.formationSection}>
    <div className={styles.formationContainer}>
      <div className={styles.formationContent}>
        <h3 className={styles.formationTitle}>
          {t('evasion.formation.title')}
        </h3>
        <p className={styles.formationDescription}>
          {t('evasion.formation.description')}
        </p>
        <a
          href="https://www.iim.fr/cursus/mastere-ux-design-interactif/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.formationLink}
        >
          {t('evasion.formation.linkText')}
        </a>
      </div>
    </div>
  </section>
)

export default EvasionTemplate

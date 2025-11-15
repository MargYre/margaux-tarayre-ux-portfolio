import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Carousel from '../../components/Carousel/Carousel'
import Lightbox from '../../components/Lightbox/Lightbox'
import styles from './CampusConnectTemplate.module.scss'

const CampusConnectTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Images pour le carousel
  const images = [
    '/images/campus-connect/screenshot1.png',
    '/images/campus-connect/screenshot2.png',
    '/images/campus-connect/persona.png',
  ]

  // Ouvrir la lightbox
  const handleImageClick = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Traductions pour le carousel
  const carouselTranslations = {
    prevButton: t('campusConnect.carousel.prevButton'),
    nextButton: t('campusConnect.carousel.nextButton'),
    goToImage: t('campusConnect.carousel.goToImage'),
    loading: t('campusConnect.carousel.loading'),
  }

  // Traductions pour la lightbox
  const lightboxTranslations = {
    close: t('campusConnect.lightbox.close'),
    previous: t('campusConnect.lightbox.previous'),
    next: t('campusConnect.lightbox.next'),
    zoomIn: t('campusConnect.lightbox.zoomIn'),
    zoomOut: t('campusConnect.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      {/* Lien de retour simple */}
      <div className={styles.backLinkWrapper}>
        <Link to="/" className={styles.backLink}>
          {t('campusConnect.nav.back')}
        </Link>
      </div>

      {/* Hero avec carousel */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Texte à gauche */}
            <div className={styles.heroText}>
              <div className={styles.heroTag}>
                <span>{t('campusConnect.hero.tag')}</span>
                <span className={styles.year}>{project.year || 2024}</span>
              </div>

              <h1 className={styles.heroTitle}>
                {t('campusConnect.hero.title')}
              </h1>
              <p className={styles.heroSubtitle}>
                {t('campusConnect.hero.subtitle')}
              </p>

              <div className={styles.heroDetails}>
                <DetailItem
                  label={t('campusConnect.hero.details.year.label')}
                  value={t('campusConnect.hero.details.year.value')}
                />
                <DetailItem
                  label={t('campusConnect.hero.details.client.label')}
                  value={t('campusConnect.hero.details.client.value')}
                />
                <DetailItem
                  label={t('campusConnect.hero.details.team.label')}
                  value={t('campusConnect.hero.details.team.value')}
                />
              </div>

              <a
                href="https://www.figma.com/proto/zgTdlulRjA7LAq6cNs0cGc/CampuSortie?node-id=1-2&p=f&t=R9ppFVZUQTdhK0yu-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaLink}
              >
                {t('campusConnect.hero.link')}
              </a>
            </div>

            {/* Carousel à droite */}
            <div className={styles.heroCarousel}>
              <Carousel
                images={images}
                onImageClick={handleImageClick}
                translations={carouselTranslations}
                altPrefix="Campus Connect"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Overview */}
      <OverviewSection t={t} />

      {/* Research (minimaliste avec accordion) */}
      <ResearchSection t={t} />

      {/* Design (simplifié) */}
      <DesignSection t={t} images={images} />

      {/* Testing (compact avec accordion) */}
      <TestingSection t={t} />

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
          <span>{t('campusConnect.sections.overview.number')}</span>
          <span>{t('campusConnect.sections.overview.label')}</span>
        </div>

        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            {t('campusConnect.sections.overview.title')}
          </h2>
          <p className={styles.paragraph}>
            {t('campusConnect.sections.overview.description')}
          </p>

          <div className={styles.highlightsCompact}>
            {t('campusConnect.sections.overview.highlights.items', {
              returnObjects: true,
            }).map((item, index) => (
              <div key={index} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ResearchSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('campusConnect.sections.research.number')}</span>
            <span>{t('campusConnect.sections.research.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('campusConnect.sections.research.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('campusConnect.sections.research.intro')}
            </p>

            {/* Bouton Afficher plus */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('campusConnect.sections.research.hideDetails')
                : t('campusConnect.sections.research.showDetails')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            {/* Contenu repliable */}
            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <h3 className={styles.subsectionTitle}>
                  {t('campusConnect.sections.research.methodology.title')}
                </h3>
                <div className={styles.methodologyCompact}>
                  {t('campusConnect.sections.research.methodology.items', {
                    returnObjects: true,
                  }).map((item, index) => (
                    <div key={index} className={styles.methodItem}>
                      <h4 className={styles.methodTitle}>{item.title}</h4>
                      <p className={styles.methodDesc}>{item.description}</p>
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

const DesignSection = ({ t, images }) => (
  <section className={styles.section}>
    <div className={styles.sectionContainer}>
      <div className={styles.sectionGrid}>
        <div className={styles.sectionLabel}>
          <span>{t('campusConnect.sections.design.number')}</span>
          <span>{t('campusConnect.sections.design.label')}</span>
        </div>

        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>
            {t('campusConnect.sections.design.title')}
          </h2>
          <p className={styles.paragraph}>
            {t('campusConnect.sections.design.intro')}
          </p>
        </div>
      </div>
    </div>
  </section>
)

const TestingSection = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('campusConnect.sections.testing.number')}</span>
            <span>{t('campusConnect.sections.testing.label')}</span>
          </div>

          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('campusConnect.sections.testing.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('campusConnect.sections.testing.intro')}
            </p>

            {/* Bouton Afficher plus */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
              aria-expanded={isExpanded}
            >
              {isExpanded
                ? t('campusConnect.sections.testing.hideProtocols')
                : t('campusConnect.sections.testing.showProtocols')}
              <span className={styles.toggleIcon}>
                {isExpanded ? '−' : '+'}
              </span>
            </button>

            {/* Contenu repliable */}
            <div
              className={`${styles.accordion} ${isExpanded ? styles.accordionOpen : ''}`}
            >
              <div className={styles.accordionContent}>
                <h3 className={styles.subsectionTitle}>
                  {t('campusConnect.sections.testing.protocols.title')}
                </h3>
                <div className={styles.protocolsCompact}>
                  {t('campusConnect.sections.testing.protocols.items', {
                    returnObjects: true,
                  }).map((protocol, index) => (
                    <div key={index} className={styles.protocolItem}>
                      <h4 className={styles.protocolTitle}>{protocol.title}</h4>
                      <p className={styles.protocolDesc}>
                        {protocol.description}
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

export default CampusConnectTemplate

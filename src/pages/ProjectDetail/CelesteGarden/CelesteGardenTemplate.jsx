import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer/Footer'
import Carousel from '../../../components/Carousel/Carousel'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import styles from './CelesteGardenTemplate.module.scss'

const CelesteGardenTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const images = project.images || [
    '/images/celeste/page1.png',
    '/images/celeste/page2.png',
    '/images/celeste/page3.png',
    '/images/celeste/page4.png',
  ]

  // Ouvrir la lightbox
  const handleImageClick = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // Traductions pour le carousel
  const carouselTranslations = {
    prevButton: t('celesteGarden.carousel.prevButton'),
    nextButton: t('celesteGarden.carousel.nextButton'),
    goToImage: t('celesteGarden.carousel.goToImage'),
    loading: t('celesteGarden.carousel.loading'),
  }

  // Traductions pour la lightbox
  const lightboxTranslations = {
    close: t('celesteGarden.lightbox.close'),
    previous: t('celesteGarden.lightbox.previous'),
    next: t('celesteGarden.lightbox.next'),
    zoomIn: t('celesteGarden.lightbox.zoomIn'),
    zoomOut: t('celesteGarden.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      {/* Lien de retour simple */}
      <div className={styles.backLinkWrapper}>
        <Link to="/" className={styles.backLink}>
          {t('celesteGarden.nav.back')}
        </Link>
      </div>

      {/* Hero compact avec carousel à droite */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            {/* Texte à gauche */}
            <div className={styles.heroText}>
              <div className={styles.heroMeta}>
                <span className={styles.tag}>
                  {t('celesteGarden.hero.tag')}
                </span>
                <span className={styles.year}>{project.year || 2025}</span>
              </div>

              <h1 className={styles.heroTitle}>
                {t('celesteGarden.hero.title')}
              </h1>

              <p className={styles.heroLead}>
                {t('celesteGarden.hero.subtitle')}
              </p>

              <div className={styles.heroDetails}>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>
                    {t('celesteGarden.hero.details.program.label')}
                  </span>
                  <span className={styles.detailValue}>
                    {t('celesteGarden.hero.details.program.value')}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>
                    {t('celesteGarden.hero.details.supervisor.label')}
                  </span>
                  <span className={styles.detailValue}>
                    {t('celesteGarden.hero.details.supervisor.value')}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailLabel}>
                    {t('celesteGarden.hero.details.tool.label')}
                  </span>
                  <span className={styles.detailValue}>
                    {t('celesteGarden.hero.details.tool.value')}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel à droite */}
            <div className={styles.heroCarousel}>
              <Carousel
                images={images}
                onImageClick={handleImageClick}
                translations={carouselTranslations}
                altPrefix="Celeste's Garden"
                showCaption={true}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Contexte */}
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLabel}>
              <span>{t('celesteGarden.sections.context.number')}</span>
              <span>{t('celesteGarden.sections.context.label')}</span>
            </div>

            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>
                {t('celesteGarden.sections.context.title')}
              </h2>
              {t('celesteGarden.sections.context.paragraphs', {
                returnObjects: true,
              }).map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principes - Version compacte */}
      <section
        className={styles.section}
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <div className={styles.sectionContainer}>
          <div className={styles.sectionGrid}>
            <div className={styles.sectionLabel}>
              <span>{t('celesteGarden.sections.learnings.number')}</span>
              <span>{t('celesteGarden.sections.learnings.label')}</span>
            </div>

            <div className={styles.sectionContent}>
              <h2 className={styles.sectionTitle}>
                {t('celesteGarden.sections.learnings.title')}
              </h2>
              <p className={styles.paragraphIntro}>
                {t('celesteGarden.sections.learnings.intro')}
              </p>

              <div className={styles.principlesCompact}>
                {t('celesteGarden.sections.learnings.principles', {
                  returnObjects: true,
                }).map((principle, index) => (
                  <div key={index} className={styles.principleCompact}>
                    <h3 className={styles.principleTitle}>{principle.title}</h3>
                    <p className={styles.principlePara}>
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spécifique au projet */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            <div>
              <h3 className={styles.footerTitle}>
                {t('celesteGarden.projectFooter.title')}
              </h3>
              <p className={styles.footerPara}>
                {t('celesteGarden.projectFooter.description')}
              </p>
              <a
                href="https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-professionnelles-l3/licence-3"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                {t('celesteGarden.projectFooter.link')}
              </a>
            </div>

            <div className={styles.footerNav}>
              <Link to="/" className={styles.footerButton}>
                {t('celesteGarden.projectFooter.backButton')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {/* Navigation entre projets */}
      <ProjectNavigation currentProjectId="celeste-garden" />

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

export default CelesteGardenTemplate

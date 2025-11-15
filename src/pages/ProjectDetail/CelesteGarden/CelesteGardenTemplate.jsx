import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer/Footer'
import styles from './CelesteGardenTemplate.module.scss'

const CelesteGardenTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [currentImage, setCurrentImage] = useState(0)

  const images = project.images || [
    '/images/celeste/page1.png',
    '/images/celeste/page2.png',
    '/images/celeste/page3.png',
    '/images/celeste/page4.png',
  ]

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length)
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
              <div className={styles.carouselWrapper}>
                <button
                  onClick={prevImage}
                  className={styles.carouselButton}
                  aria-label={t('celesteGarden.carousel.prevButton')}
                >
                  ←
                </button>

                <div className={styles.imageContainer}>
                  <img
                    src={images[currentImage]}
                    alt={`${t('celesteGarden.carousel.imageAlt')} ${currentImage + 1}`}
                    className={styles.carouselImage}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--color-text-secondary);font-size:0.875rem;">${t('celesteGarden.carousel.loading')}</div>`
                    }}
                  />
                </div>

                <button
                  onClick={nextImage}
                  className={styles.carouselButton}
                  aria-label={t('celesteGarden.carousel.nextButton')}
                >
                  →
                </button>
              </div>

              <div className={styles.carouselDots}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`${styles.dot} ${index === currentImage ? styles.dotActive : ''}`}
                    aria-label={`${t('celesteGarden.carousel.goToImage')} ${index + 1}`}
                  />
                ))}
              </div>

              <p className={styles.imageCaption}>
                {t('celesteGarden.carousel.caption', {
                  current: currentImage + 1,
                  total: images.length,
                })}
              </p>
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

      {/* Footer global */}
      <Footer />
    </div>
  )
}

export default CelesteGardenTemplate

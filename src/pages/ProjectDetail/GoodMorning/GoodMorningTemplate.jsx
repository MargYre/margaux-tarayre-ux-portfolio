import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import styles from './GoodMorningTemplate.module.scss'

const IMG_ARCHITECTURE = '/images/good-morning/01-Arborescence.png'
const IMG_WIREFRAMES = '/images/good-morning/02-Wireframe.png'
const IMG_DA = '/images/good-morning/03-Tests_graphique.png'
const IMG_DESIGN_SYSTEM = '/images/good-morning/04-Charte%20Graphique.png'

const DELIVERABLES = [
  { key: 'architecture', src: IMG_ARCHITECTURE },
  { key: 'wireframes', src: IMG_WIREFRAMES },
  { key: 'da', src: IMG_DA },
  { key: 'designSystem', src: IMG_DESIGN_SYSTEM },
]

const GoodMorningTemplate = ({ project }) => {
  const { t } = useTranslation()
  const prototypeUrl = project?.prototype ?? ''
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const lightboxImages = DELIVERABLES.map(d => d.src)

  const openLightbox = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const lightboxTranslations = {
    close: t('goodmorning.lightbox.close'),
    previous: t('goodmorning.lightbox.previous'),
    next: t('goodmorning.lightbox.next'),
    zoomIn: t('goodmorning.lightbox.zoomIn'),
    zoomOut: t('goodmorning.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerGrid}>
            <div className={styles.headerContent}>
              <div className={styles.backLinkWrapper}>
                <Link to="/" className={styles.backLink}>
                  {t('goodmorning.nav.back')}
                </Link>
              </div>

              <span className={styles.tag}>{t('goodmorning.hero.tag')}</span>
              <h1 className={styles.title}>{t('goodmorning.hero.title')}</h1>
              <p className={styles.subtitle}>{t('goodmorning.hero.subtitle')}</p>

              <a
                className={styles.cta}
                href={prototypeUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('goodmorning.hero.cta')}
              </a>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          {DELIVERABLES.map((section, index) => (
            <section
              key={section.key}
              className={styles.deliverableSection}
              aria-labelledby={`gm-${section.key}`}
            >
              <h2
                id={`gm-${section.key}`}
                className={styles.deliverableTitle}
              >
                {t(`goodmorning.sections.${section.key}.title`)}
              </h2>
              <p className={styles.deliverableDescription}>
                {t(`goodmorning.sections.${section.key}.description`)}
              </p>
              <figure className={styles.deliverableFigure}>
                <img
                  src={section.src}
                  alt=""
                  className={styles.deliverableImage}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  onClick={() => openLightbox(index)}
                />
              </figure>
            </section>
          ))}
        </div>

        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              {t('goodmorning.cta.title')}
            </h2>
            <a
              href={prototypeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.finalCtaButton}
            >
              {t('goodmorning.cta.button')}
            </a>
          </div>
        </section>
      </div>

      <div className={styles.footerSpacing}>
        <ProjectNavigation currentProjectId="good-morning" />
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          translations={lightboxTranslations}
        />
      )}

      <Footer />
    </div>
  )
}

export default GoodMorningTemplate

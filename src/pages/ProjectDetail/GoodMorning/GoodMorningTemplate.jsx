import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer/Footer'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import styles from './GoodMorningTemplate.module.scss'

const IMG_ARCHITECTURE = '/images/good-morning/01-Arborescence.png'
const IMG_WIREFRAMES = '/images/good-morning/02-Wireframe.png'
const IMG_CTA = '/images/good-morning/03-Tests_graphique.png'
const IMG_DESIGN_SYSTEM = '/images/good-morning/04-Charte%20Graphique.png'

const DOMESTIKA_FIGMA_COURSE_URL =
  'https://www.domestika.org/fr/courses/4005-design-d-application-sur-figma-du-brief-client-au-prototype'

const DELIVERABLES = [
  { key: 'architecture', src: IMG_ARCHITECTURE },
  { key: 'wireframes', src: IMG_WIREFRAMES },
  { key: 'da', src: IMG_CTA },
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
              <h1 className={styles.title}>{t('goodmorning.hero.title')}</h1>
              <p className={styles.projectPitch}>
                {t('goodmorning.hero.pitch')}
              </p>

              <dl className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('goodmorning.hero.meta.year.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    {t('goodmorning.hero.meta.year.value')}
                  </dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('goodmorning.hero.meta.tools.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    {t('goodmorning.hero.meta.tools.value')}
                  </dd>
                </div>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('goodmorning.hero.meta.training.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    <span className={styles.metaTraining}>
                      « {t('goodmorning.hero.meta.training.course')} »{' '}
                      {t('goodmorning.hero.meta.training.by')}{' '}
                      {t('goodmorning.hero.meta.training.author')} (
                      <a
                        href={DOMESTIKA_FIGMA_COURSE_URL}
                        className={styles.metaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('goodmorning.hero.meta.training.platform')}
                      </a>
                      )
                    </span>
                  </dd>
                </div>
              </dl>
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
          <div className={styles.imageContainer}>
            <img
              src={IMG_CTA}
              alt=""
              className={styles.finalCtaImage}
              loading="lazy"
            />
            <div className={styles.finalCtaOverlay} aria-hidden />
          </div>
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

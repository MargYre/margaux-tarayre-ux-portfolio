import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../../../components/Footer/Footer'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import designSystemSource from './good-morning-design-system.source.css?raw'
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
]

const GoodMorningTemplate = ({ project }) => {
  const { t } = useTranslation()
  const prototypeUrl = project?.prototype ?? ''
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [copyDone, setCopyDone] = useState(false)
  const [activeTab, setActiveTab] = useState('visual')

  const lightboxImages = [...DELIVERABLES.map(d => d.src), IMG_DESIGN_SYSTEM]

  const openLightbox = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleCopyDesignSystem = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(designSystemSource)
      setCopyDone(true)
      window.setTimeout(() => setCopyDone(false), 2000)
    } catch {
      setCopyDone(false)
    }
  }, [])

  // Correction de la ReferenceError : lightboxTranslations est maintenant défini
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

            <aside className={styles.qrPanel}>
              <span className={styles.qrBadge}>Expo Go</span>
              <img
                src="/images/QRcode_Good-Morning.svg"
                alt="QR code pour tester Good Morning sur Expo Go"
                width={140}
                height={140}
                className={styles.qrImage}
              />
              <p className={styles.qrInstruction}>
                Scanne avec l&apos;app Expo Go pour tester sur ton téléphone
              </p>
              <span className={styles.qrLabel}>React Native · iOS &amp; Android</span>
            </aside>
          </div>
        </header>

        <div className={styles.content}>
          {DELIVERABLES.map((section, index) => (
            <section
              key={section.key}
              className={styles.deliverableSection}
              aria-labelledby={`gm-${section.key}`}
            >
              <h2 id={`gm-${section.key}`} className={styles.deliverableTitle}>
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

          <section
            className={styles.dsShowcaseSection}
            aria-labelledby="gm-ds-showcase"
          >
            <h2 id="gm-ds-showcase" className={styles.dsShowcaseTitle}>
              {t('goodmorning.designSystemShowcase.title')}
            </h2>

            <div className={styles.tabContainer}>
              <button
                className={`${styles.tabButton} ${activeTab === 'visual' ? styles.active : ''}`}
                onClick={() => setActiveTab('visual')}
              >
                Charte Graphique
              </button>
              <button
                className={`${styles.tabButton} ${activeTab === 'code' ? styles.active : ''}`}
                onClick={() => setActiveTab('code')}
              >
                Code (Tailwind v4)
              </button>
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'visual' ? (
                <figure className={styles.deliverableFigure}>
                  <img
                    src={IMG_DESIGN_SYSTEM}
                    alt="Charte Graphique Good Morning"
                    className={styles.deliverableImage}
                    onClick={() => openLightbox(3)}
                  />
                </figure>
              ) : (
                <div className={styles.codeWrapper}>
                  <div className={styles.dsShowcaseToolbar}>
                    <button
                      type="button"
                      className={styles.dsCopyButton}
                      onClick={handleCopyDesignSystem}
                    >
                      {copyDone ? 'Copié !' : 'Copier le code'}
                    </button>
                  </div>
                  <div className={styles.dsCodeShell}>
                    <pre className={styles.dsCodeBlock}>
                      <code>{designSystemSource}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </section>
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

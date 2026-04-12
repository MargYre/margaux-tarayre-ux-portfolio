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

const IMG_SCREEN_LOADING = '/images/good-morning/00_Chargement.png'
const IMG_SCREEN_HOME = '/images/good-morning/01_AccueilBIS.png'
const IMG_SCREEN_COLLECTION = '/images/good-morning/02_CollectionBIS.png'

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
          <div className={styles.heroGrid}>

            {/* ── Colonne gauche ── */}
            <div className={styles.heroText}>
              <h1 className={styles.title}>{t('goodmorning.hero.title')}</h1>
              <p className={styles.projectPitch}>{t('goodmorning.hero.pitch')}</p>

              <div className={styles.techBadges}>
                <span className={styles.badgeFigma}>Figma</span>
                <span className={styles.badgeRN}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={styles.rnIcon}
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2"
                      fill="none" stroke="#61DAFB" strokeWidth="1.1" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2"
                      fill="none" stroke="#61DAFB" strokeWidth="1.1"
                      transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="11" ry="4.2"
                      fill="none" stroke="#61DAFB" strokeWidth="1.1"
                      transform="rotate(120 12 12)" />
                  </svg>
                  React Native
                </span>
              </div>

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

              {/* ── Zones d'action ── */}
              <div className={styles.ctaZones}>

                {/* Zone A — Test Mobile */}
                <div className={styles.ctaZoneA}>
                  <img
                    src="/images/QRcode_Good-Morning.svg"
                    alt="QR code Expo Go pour tester Good Morning"
                    className={styles.qrImg}
                    width={120}
                    height={120}
                  />
                  <ol className={styles.expoInstructions}>
                    <li>Téléchargez l&apos;application <strong>Expo Go</strong> sur votre store.</li>
                    <li>Scannez ce code pour tester l&apos;application en conditions réelles.</li>
                  </ol>
                </div>

                {/* Zone B — Exploration Design */}
                <a
                  href={prototypeUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.figmaButton}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className={styles.figmaIcon}
                  >
                    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
                    <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
                    <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
                    <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
                    <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
                  </svg>
                  Explorer le prototype interactif sur Figma
                </a>

              </div>
            </div>

            {/* ── Colonne droite : maquettes en cascade ── */}
            <div className={styles.fanDeck} aria-hidden="true">
              <div className={`${styles.fanCard} ${styles.fanCardBack}`}>
                <img src={IMG_SCREEN_LOADING} alt="" loading="eager" />
              </div>
              <div className={`${styles.fanCard} ${styles.fanCardFront}`}>
                <img src={IMG_SCREEN_HOME} alt="" loading="eager" />
              </div>
              <div className={`${styles.fanCard} ${styles.fanCardSide}`}>
                <img src={IMG_SCREEN_COLLECTION} alt="" loading="lazy" />
              </div>
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

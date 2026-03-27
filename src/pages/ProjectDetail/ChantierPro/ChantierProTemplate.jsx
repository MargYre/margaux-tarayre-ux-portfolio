import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Lightbox from '../../../components/Lightbox/Lightbox'
import styles from './ChantierProTemplate.module.scss'

const ChantierProTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const prototypeUrl = project?.prototype ?? ''
  const contextObjectives = t('chantierpro.context.objectives', {
    returnObjects: true,
  })
  const discoveryMarketPoints = t('chantierpro.discovery.market.points', {
    returnObjects: true,
  })
  const synthesisPoints = t('chantierpro.synthesis.points', {
    returnObjects: true,
  })
  const finalUiFeatures = t('chantierpro.design.finalUi.features', {
    returnObjects: true,
  })

  const personaNicolasSrc = '/images/edify/03-Persona-Nicolas.png'
  const journeyMapSrc = '/images/edify/04-journey-map.png'
  const groupedInsightSrc = '/images/edify/06-Grouped Insight.webp'
  const oldFlowSrc = '/images/edify/07-Flow chart.jpg'
  const newFlowSrc = '/images/edify/08-UserFlow Mobile.webp'
  const finalCtaBackgroundImage = '/images/edify/chantierPro-desktop-quipe.webp'

  const allLightboxImages = [
    '/images/edify/01-synteticUsers.webp',
    '/images/edify/02-gaspard-synteticUsers.webp',
    personaNicolasSrc,
    journeyMapSrc,
    groupedInsightSrc,
    oldFlowSrc,
    newFlowSrc,
    '/images/edify/08-wireframe.webp',
    '/images/edify/09-maquettes.webp',
  ]

  const handleImageClick = imageOrIndex => {
    const index =
      typeof imageOrIndex === 'number'
        ? imageOrIndex
        : allLightboxImages.indexOf(imageOrIndex)

    if (index < 0) return
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  useEffect(() => {
    const previousTitle = document.title
    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
        return meta
      })()
    const previousDescription = metaDescription.getAttribute('content') || ''

    document.title = 'Edify - Etude de cas UX/UI personnelle'
    metaDescription.setAttribute(
      'content',
      'Edify, projet personnel de recherche UX/UI: refonte du parcours de creation avec approche terrain et prototype interactif.'
    )

    return () => {
      document.title = previousTitle
      metaDescription.setAttribute('content', previousDescription)
    }
  }, [])

  return (
    <div className={styles.template}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerGrid}>
            <div className={styles.headerContent}>
              <span className={styles.tag}>{t('chantierpro.hero.tag')}</span>
              <h1 className={styles.title}>{t('chantierpro.hero.title')}</h1>
              <p className={styles.subtitle}>
                {t('chantierpro.hero.subtitle')}
              </p>

              <dl className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('chantierpro.hero.meta.role.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    {t('chantierpro.hero.meta.role.value')}
                  </dd>
                </div>

                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('chantierpro.hero.meta.tools.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    {t('chantierpro.hero.meta.tools.value')}
                  </dd>
                </div>

                <div className={styles.metaItem}>
                  <dt className={styles.metaLabel}>
                    {t('chantierpro.hero.meta.year.label')}
                  </dt>
                  <dd className={styles.metaValue}>
                    {t('chantierpro.hero.meta.year.value')}
                  </dd>
                </div>
              </dl>

              <a
                className={styles.cta}
                href={prototypeUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('chantierpro.hero.cta')}
              </a>
            </div>
          </div>
        </header>

        <section className={styles.contextSection}>
          <h2 className={styles.contextTitle}>
            {t('chantierpro.context.title')}
          </h2>
          <p className={styles.contextProject}>
            {t('chantierpro.context.project')}
          </p>
          <p className={styles.contextMethodology}>
            {t('chantierpro.context.methodology')}
          </p>
          {Array.isArray(contextObjectives) && (
            <ul className={styles.contextObjectives}>
              {contextObjectives.map((item, index) => (
                <li key={index} className={styles.contextObjectiveItem}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className={styles.discoverySection}>
          <h2 className={styles.discoveryTitle}>
            {t('chantierpro.discovery.title')}
          </h2>
          <p className={styles.discoveryIntro}>
            {t('chantierpro.discovery.intro')}
          </p>

          <div className={styles.discoveryGrid}>
            <div className={styles.discoveryText}>
              <div className={styles.discoveryBlock}>
                <h3 className={styles.discoverySubTitle}>
                  {t('chantierpro.discovery.market.title')}
                </h3>
                {Array.isArray(discoveryMarketPoints) && (
                  <ul className={styles.discoveryList}>
                    {discoveryMarketPoints.map((point, index) => (
                      <li key={index} className={styles.discoveryListItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={styles.discoveryBlock}>
                <h3 className={styles.discoverySubTitle}>
                  {t('chantierpro.discovery.personas.title')}
                </h3>
                <p className={styles.discoveryPersonaText}>
                  {t('chantierpro.discovery.personas.gaspard')}
                </p>
                <p className={styles.discoveryPersonaText}>
                  {t('chantierpro.discovery.personas.nadia')}
                </p>
              </div>

              <div className={styles.discoveryBlock}>
                <h3 className={styles.discoverySubTitle}>
                  {t('chantierpro.discovery.insightsTitle')}
                </h3>
                <div className={styles.discoveryInsights}>
                  <p className={styles.discoveryInsightText}>
                    {t('chantierpro.discovery.insights.business')}
                  </p>
                  <p className={styles.discoveryInsightText}>
                    {t('chantierpro.discovery.insights.user')}
                  </p>
                </div>

                <a
                  className={styles.discoveryCta}
                  href={t('chantierpro.discovery.pdfUrl')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('chantierpro.discovery.cta')}
                </a>
              </div>
            </div>

            <div className={styles.discoveryImages}>
              <img
                src="/images/edify/01-synteticUsers.webp"
                alt="Personas Synthetic Users pour Edify"
                className={styles.discoveryImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick('/images/edify/01-synteticUsers.webp')
                }
              />
              <img
                src="/images/edify/02-gaspard-synteticUsers.webp"
                alt="Interview Synthetic Users de Gaspard pour Edify"
                className={styles.discoveryImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick(
                    '/images/edify/02-gaspard-synteticUsers.webp'
                  )
                }
              />
            </div>
          </div>
        </section>

        <section className={styles.empathySection}>
          <h2 className={styles.processSectionTitle}>
            {t('chantierpro.empathy.title')}
          </h2>
          <p className={styles.processSectionIntro}>
            {t('chantierpro.empathy.intro')}
          </p>
          <div className={styles.empathyGrid}>
            <div className={styles.empathyCol}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.empathy.persona.title')}
              </h3>
              <img
                src={personaNicolasSrc}
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() => handleImageClick(personaNicolasSrc)}
              />
              <p className={styles.processCaption}>
                {t('chantierpro.empathy.persona.caption')}
              </p>
            </div>
            <div className={styles.empathyCol}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.empathy.journey.title')}
              </h3>
              <img
                src={journeyMapSrc}
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() => handleImageClick(journeyMapSrc)}
              />
              <p className={styles.processCaption}>
                {t('chantierpro.empathy.journey.caption')}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.synthesisSection}>
          <h2 className={styles.processSectionTitle}>
            {t('chantierpro.synthesis.title')}
          </h2>
          <p className={styles.processSectionIntro}>
            {t('chantierpro.synthesis.intro')}
          </p>
          <div className={styles.synthesisGrid}>
            <div className={styles.synthesisText}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.synthesis.opportunitiesTitle')}
              </h3>
              {Array.isArray(synthesisPoints) && (
                <ul className={styles.synthesisList}>
                  {synthesisPoints.map((item, index) => (
                    <li key={index} className={styles.synthesisListItem}>
                      <strong>{item.title} :</strong> {item.body}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.synthesisVisual}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.synthesis.affinityTitle')}
              </h3>
              <img
                src={groupedInsightSrc}
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() => handleImageClick(groupedInsightSrc)}
              />
              <p className={styles.processCaption}>
                {t('chantierpro.synthesis.affinityCaption')}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.userFlowSection}>
          <h2 className={styles.processSectionTitle}>
            {t('chantierpro.userFlow.title')}
          </h2>
          <p className={styles.processSectionIntro}>
            {t('chantierpro.userFlow.intro')}
          </p>
          <div className={styles.userFlowGrid}>
            <div className={styles.userFlowCol}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.userFlow.old.title')}
              </h3>
              <img
                src={oldFlowSrc}
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() => handleImageClick(oldFlowSrc)}
              />
              <p className={styles.processCaption}>
                {t('chantierpro.userFlow.old.legend')}
              </p>
            </div>
            <div className={styles.userFlowCol}>
              <h3 className={styles.processSubTitle}>
                {t('chantierpro.userFlow.new.title')}
              </h3>
              <img
                src={newFlowSrc}
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() => handleImageClick(newFlowSrc)}
              />
              <p className={styles.processCaption}>
                {t('chantierpro.userFlow.new.legend')}
              </p>
            </div>
          </div>
        </section>

        <section className={styles.designSection}>
          <h2 className={styles.processSectionTitle}>
            {t('chantierpro.design.wireframes.title')}
          </h2>
          <div className={styles.designGridWireframes}>
            <div className={styles.designCol}>
              <p className={styles.designWireframesText}>
                {t('chantierpro.design.wireframes.intro')}{' '}
                {t('chantierpro.design.wireframes.caption')}
              </p>
            </div>
            <div className={styles.designCol}>
              <img
                src="/images/edify/08-wireframe.webp"
                alt=""
                className={styles.wireframesImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick('/images/edify/08-wireframe.webp')
                }
              />
            </div>
          </div>
        </section>

        <section className={styles.designSection}>
          <h2 className={styles.processSectionTitle}>
            {t('chantierpro.design.finalUi.title')}
          </h2>
          <p className={styles.processSectionIntro}>
            {t('chantierpro.design.finalUi.intro')}
          </p>
          <div className={styles.designGrid}>
            <div className={styles.designCol}>
              {Array.isArray(finalUiFeatures) && (
                <ul className={styles.finalFeaturesList}>
                  {finalUiFeatures.map((item, index) => (
                    <li key={index} className={styles.finalFeaturesItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.designCol}>
              <img
                src="/images/edify/09-maquettes.webp"
                alt=""
                className={styles.processImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick('/images/edify/09-maquettes.webp')
                }
              />
            </div>
          </div>
        </section>

        <section className={styles.finalCtaSection}>
          <div className={styles.imageContainer}>
            <img
              src={finalCtaBackgroundImage}
              alt=""
              className={styles.finalCtaImage}
              loading="lazy"
            />
            <div className={styles.finalCtaOverlay} aria-hidden />
          </div>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              {t('chantierpro.design.finalUi.ctaTitle')}
            </h2>
            <a
              href={prototypeUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.finalCtaButton}
            >
              {t('chantierpro.design.finalUi.cta')}
            </a>
          </div>
        </section>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={allLightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          translations={{
            close: 'Fermer',
            previous: 'Image precedente',
            next: 'Image suivante',
            zoomIn: 'Zoomer',
            zoomOut: 'Dezoomer',
          }}
        />
      )}
    </div>
  )
}

export default ChantierProTemplate

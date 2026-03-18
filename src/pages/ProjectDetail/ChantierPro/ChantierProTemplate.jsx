import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './ChantierProTemplate.module.scss'

const ChantierProTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)
  const prototypeUrl =
    project?.prototype || project?.link || t('chantierpro.hero.prototypeUrl')
  const contextObjectives = t('chantierpro.context.objectives', {
    returnObjects: true,
  })
  const discoveryMarketPoints = t('chantierpro.discovery.market.points', {
    returnObjects: true,
  })

  const handleImageClick = src => {
    setSelectedImage(src)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className={styles.template}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerGrid}>
            <div className={styles.headerLeft}>
              <div className={styles.backLinkWrapper}>
                <Link to="/" className={styles.backLink}>
                  {t('chantierpro.nav.back')}
                </Link>
              </div>

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
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('chantierpro.hero.cta')}
              </a>
            </div>

            <div className={styles.headerRight}>
              <img
                className={styles.heroImage}
                src="/images/chantierPro/chantierPro-desktop-quipe.webp"
                alt="ChantierPro desktop overview"
                loading="lazy"
              />
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
                src="/images/chantierPro/01-synteticUsers.webp"
                alt="Personas Synthetic Users pour ChantierPro"
                className={styles.discoveryImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick('/images/chantierPro/01-synteticUsers.webp')
                }
              />
              <img
                src="/images/chantierPro/02-gaspard-synteticUsers.webp"
                alt="Interview Synthetic Users de Gaspard pour ChantierPro"
                className={styles.discoveryImage}
                loading="lazy"
                onClick={() =>
                  handleImageClick(
                    '/images/chantierPro/02-gaspard-synteticUsers.webp'
                  )
                }
              />
            </div>
          </div>
        </section>

        <main className={styles.content} />
      </div>

      {selectedImage && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={handleCloseModal}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt=""
              className={styles.modalImage}
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChantierProTemplate

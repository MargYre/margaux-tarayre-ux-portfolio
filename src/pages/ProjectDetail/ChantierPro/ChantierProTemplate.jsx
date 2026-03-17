import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './ChantierProTemplate.module.scss'

const ChantierProTemplate = ({ project }) => {
  const { t } = useTranslation()
  const prototypeUrl =
    project?.prototype || project?.link || t('chantierpro.hero.prototypeUrl')
  const contextObjectives = t('chantierpro.context.objectives', {
    returnObjects: true,
  })

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

        <main className={styles.content} />
      </div>
    </div>
  )
}

export default ChantierProTemplate

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import styles from './FutureTemplate.module.scss'

const FutureTemplate = ({ project }) => {
  const { t } = useTranslation()

  return (
    <div className={styles.template}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link to="/" className={styles.backLink}>
            {t('comingSoon.nav.back')}
          </Link>
          <span className={styles.projectTitle}>{project.id}</span>
        </div>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.statusBadge}>
            <span className={styles.badge}>{t('comingSoon.hero.tag')}</span>
            <p className={styles.status}>{t('comingSoon.hero.status')}</p>
          </div>

          <div className={styles.projectIcon}>
            <span className={styles.emoji} role="img" aria-hidden="true">
              {project.image}
            </span>
          </div>

          <h1 className={styles.title}>{t('comingSoon.content.title')}</h1>
          <p className={styles.description}>
            {t('comingSoon.content.description')}
          </p>

          <Link to="/" className={styles.backButton}>
            {t('comingSoon.hero.backButton')}
          </Link>
        </div>
      </header>

      {/* Preview Section */}
      <section className={styles.preview}>
        <div className={styles.previewContainer}>
          <h2 className={styles.sectionTitle}>
            {t('comingSoon.content.preview.title')}
          </h2>

          <div className={styles.previewGrid}>
            {project.year && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.year')}
                </span>
                <span className={styles.previewValue}>{project.year}</span>
              </div>
            )}

            {project.role && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.role')}
                </span>
                <span className={styles.previewValue}>{project.role}</span>
              </div>
            )}

            {project.duration && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.duration')}
                </span>
                <span className={styles.previewValue}>{project.duration}</span>
              </div>
            )}

            {project.client && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.client')}
                </span>
                <span className={styles.previewValue}>{project.client}</span>
              </div>
            )}

            {project.team && project.team.length > 0 && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.team')}
                </span>
                <span className={styles.previewValue}>
                  {project.team.join(', ')}
                </span>
              </div>
            )}

            {project.tags && project.tags.length > 0 && (
              <div className={styles.previewItem}>
                <span className={styles.previewLabel}>
                  {t('comingSoon.content.preview.tags')}
                </span>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Highlights placeholder */}
      {project.hasMethodology && (
        <section className={styles.highlights}>
          <div className={styles.highlightsContainer}>
            <h2 className={styles.sectionTitle}>
              {t('comingSoon.content.highlights.title')}
            </h2>
            <p className={styles.highlightsEmpty}>
              {t('comingSoon.content.highlights.empty')}
            </p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>
            {t('comingSoon.content.cta.title')}
          </h2>
          <p className={styles.ctaDescription}>
            {t('comingSoon.content.cta.description')}
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/#projects" className={styles.primaryButton}>
              {t('comingSoon.content.cta.viewProjects')}
            </Link>
            <a
              href="mailto:margaux.tarayre@example.com"
              className={styles.secondaryButton}
            >
              {t('comingSoon.content.cta.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer global */}
      <Footer />
    </div>
  )
}

export default FutureTemplate

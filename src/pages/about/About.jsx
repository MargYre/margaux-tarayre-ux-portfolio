import styles from './About.module.scss'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Hero - Simple text only */}
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>{t('opening.title')}</h1>
          <p className={styles.heroDescription}>{t('opening.description')}</p>
        </div>

        {/* Journey - Vertical timeline */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('journey.heading')}</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p>{t('journey.step1')}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p>{t('journey.step2')}</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <p>{t('journey.step3')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job Search - Subtle and elegant */}
        <div className={styles.jobSearch}>
          <div className={styles.jobSearchBox}>
            <h2 className={styles.jobSearchTitle}>{t('jobSearch.title')}</h2>
            <p className={styles.jobSearchText}>{t('jobSearch.description')}</p>
            <div className={styles.jobSearchLinks}>
              <a
                href="mailto:margaux.tarayre@gmail.com"
                className={styles.jobSearchLink}
              >
                {t('jobSearch.email')}
              </a>
              <span className={styles.jobSearchSeparator}>•</span>
              <a
                href="https://www.linkedin.com/in/margaux-tarayre/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.jobSearchLink}
              >
                {t('jobSearch.linkedin')}
              </a>
            </div>
          </div>
        </div>

        {/* Skills - Cards with tags */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t('skills.heading')}</h2>

          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>
                {t('skills.design.title')}
              </h3>
              <div className={styles.skillTags}>
                {t('skills.design.tags', { returnObjects: true }).map(
                  (tag, index) => (
                    <span key={index} className={styles.skillTag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>
                {t('skills.development.title')}
              </h3>
              <div className={styles.skillTags}>
                {t('skills.development.tags', { returnObjects: true }).map(
                  (tag, index) => (
                    <span key={index} className={styles.skillTag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3 className={styles.skillCardTitle}>
                {t('skills.intersection.title')}
              </h3>
              <div className={styles.skillTags}>
                {t('skills.intersection.tags', { returnObjects: true }).map(
                  (tag, index) => (
                    <span key={index} className={styles.skillTag}>
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* What Drives Me */}
        <div className={styles.motivation}>
          <h2 className={styles.sectionTitle}>{t('motivation.heading')}</h2>
          <p className={styles.motivationText}>{t('motivation.paragraph')}</p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </section>
  )
}

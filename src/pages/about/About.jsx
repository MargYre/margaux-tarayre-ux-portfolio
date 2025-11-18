import styles from './About.module.scss'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Hero - Text + Motivation on left, CV button centered vertically on right */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{t('opening.title')}</h1>
            <p className={styles.heroDescription}>{t('opening.description')}</p>
            <p className={styles.heroMotivation}>{t('opening.motivation')}</p>
          </div>
          <div className={styles.heroSide}>
            <Button
              variant="secondary"
              href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={t('opening.downloadCV')}
            >
              {t('opening.cvButton')}
            </Button>
          </div>
        </div>

        {/* Job Search - Full width, impactful */}
        <div className={styles.jobSearchSection}>
          <div className={styles.jobSearchBox}>
            <h2 className={styles.jobSearchTitle}>{t('jobSearch.title')}</h2>
            <p className={styles.jobSearchText}>{t('jobSearch.description')}</p>
            <div className={styles.jobSearchCtas}>
              <Button
                variant="primary"
                href="mailto:margaux.tarayre@gmail.com"
                ariaLabel={t('jobSearch.emailLabel')}
              >
                {t('jobSearch.emailButton')}
              </Button>
              <Button
                variant="primary"
                href="https://www.linkedin.com/in/margaux-tarayre/"
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel={t('jobSearch.linkedinLabel')}
              >
                {t('jobSearch.linkedinButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Journey - Standalone timeline */}
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

        {/* Skills - Cards with essential tags only */}
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
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}

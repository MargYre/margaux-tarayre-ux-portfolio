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
              href="/images/CV-Margaux_Tarayre_UXUIdesigner.png"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={t('opening.downloadCV')}
            >
              {t('opening.cvButton')}
            </Button>
          </div>
        </div>

        {/* Vidéo + Contact */}
        <div className={styles.videoSection}>
          <div className={styles.videoGrid}>

            {/* Gauche : vidéo portrait */}
            <div className={styles.videoWrapper}>
              <video
                className={styles.videoPlayer}
                src="/vidéo/aboutPortfolio.mp4"
                playsInline
                preload="metadata"
                controls
                aria-label="Présentation vidéo de Margaux Tarayre"
              />
            </div>

            {/* Droite : pitch + stats + CTAs */}
            <div className={styles.contactPanel}>
              <div className={styles.pitchBlock}>
                <span className={styles.pitchEyebrow}>{t('about.eyebrow')}</span>
                <h2 className={styles.pitchTitle}>{t('about.pitch.title')}</h2>
                <p className={styles.pitchBody}>{t('about.pitch.body')}</p>
              </div>

              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>2,5</span>
                  <span className={styles.statLabel}>{t('about.stats.frontend')}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>Master</span>
                  <span className={styles.statLabel}>{t('about.stats.master')}</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>5+</span>
                  <span className={styles.statLabel}>{t('about.stats.projects')}</span>
                </div>
              </div>

              <div className={styles.contactCtas}>
                <Button
                  variant="primary"
                  href="mailto:margaux.tarayre@gmail.com"
                  ariaLabel={t('jobSearch.emailLabel')}
                >
                  {t('jobSearch.emailButton')}
                </Button>
                <Button
                  variant="secondary"
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

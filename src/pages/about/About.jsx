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

        {/* Alternance */}
        <div className={styles.alternanceSection}>
          <h2 className={styles.sectionTitle}>{t('alternance.title')}</h2>
          <div className={styles.alternanceGrid}>
            <div className={styles.alternanceCell}>
              <span className={styles.cellValue}>{t('alternance.duration.value')}</span>
              <span className={styles.cellLabel}>{t('alternance.duration.label')}</span>
              <p className={styles.cellSub}>{t('alternance.duration.sub')}</p>
            </div>
            <div className={styles.alternanceCell}>
              <span className={styles.cellValue}>{t('alternance.rhythm.value')}</span>
              <span className={styles.cellLabel}>{t('alternance.rhythm.label')}</span>
              <p className={styles.cellSub}>{t('alternance.rhythm.sub')}</p>
            </div>
            <div className={styles.alternanceCell}>
              <span className={styles.cellValue}>{t('alternance.school.value')}</span>
              <span className={styles.cellLabel}>{t('alternance.school.label')}</span>
              <p className={styles.cellSub}>{t('alternance.school.sub')}</p>
            </div>
          </div>
        </div>

        {/* Parcours */}
        <div className={styles.parcoursSection}>
          <h2 className={styles.sectionTitle}>{t('journey.heading')}</h2>
          <div className={styles.timelineH}>
            {[
              { dateKey: 'journey.date1', titleKey: 'journey.title1', textKey: 'journey.step1' },
              { dateKey: 'journey.date2', titleKey: 'journey.title2', textKey: 'journey.step2' },
              { dateKey: 'journey.date3', titleKey: 'journey.title3', textKey: 'journey.step3' },
            ].map(({ dateKey, titleKey, textKey }, i, arr) => (
              <div key={i} className={styles.timelineHStep}>
                <div className={styles.timelineHRail}>
                  <div className={styles.timelineHDot} />
                  {i < arr.length - 1 && <div className={styles.timelineHLine} />}
                </div>
                <div className={styles.timelineHContent}>
                  <span className={styles.timelineHDate}>{t(dateKey)}</span>
                  <p className={styles.timelineHTitle}>{t(titleKey)}</p>
                  <p className={styles.timelineHText}>{t(textKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>{t('skills.heading')}</h2>
          <div className={styles.skillsTable}>
            {[
              { titleKey: 'skills.design.title', tagsKey: 'skills.design.tags' },
              { titleKey: 'skills.development.title', tagsKey: 'skills.development.tags' },
              { titleKey: 'skills.intersection.title', tagsKey: 'skills.intersection.tags' },
            ].map(({ titleKey, tagsKey }) => (
              <div key={titleKey} className={styles.skillsRow}>
                <div className={styles.skillsCategoryCol}>
                  {t(titleKey)}
                </div>
                <div className={styles.skillsTagList}>
                  {t(tagsKey, { returnObjects: true }).map((tag, i) => (
                    <span
                      key={i}
                      className={`${styles.skillsTag} ${i < 2 ? styles.skillsTagPrimary : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}

import { useRef, useState, useEffect } from 'react'
import styles from './About.module.scss'
import { useTranslation } from 'react-i18next'
import { Mail, Download, Linkedin } from 'lucide-react'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import TypewriterOnVisible from '../../components/Typewriter/TypewriterOnVisible'

export default function About() {
  const { t } = useTranslation()
  const chaptersRef = useRef(null)
  const [chaptersVisible, setChaptersVisible] = useState(false)
  const alternanceCardRef = useRef(null)
  const [alternanceCardVisible, setAlternanceCardVisible] = useState(false)

  useEffect(() => {
    const el = chaptersRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setChaptersVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = alternanceCardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAlternanceCardVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.about}>

      {/* ── 1. ACCROCHE + CONTACT + ALTERNANCE (section fusionnée) ── */}
      <div className={styles.introSection}>
        <div className={styles.container}>

          {/* Titre + paragraphe centrés */}
          <div className={styles.introText}>
            <h1 className={styles.heroTitle}>
              <TypewriterOnVisible text={t('opening.title')} threshold={0.3} />
            </h1>
            <p className={styles.heroDescription}>{t('opening.description')}</p>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>2,5</span>
                <span className={styles.statLabel}>{t('about.stats.frontend')}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>Master</span>
                <span className={styles.statLabel}>{t('about.stats.master')}</span>
              </div>
            </div>
          </div>

          {/* Boutons centrés sur une ligne */}
          <div className={styles.ctaRow}>
            <Button
              variant="primary"
              href="mailto:margaux.tarayre@gmail.com"
              ariaLabel={t('jobSearch.emailLabel')}
              className={styles.ctaButton}
            >
              <Mail size={16} strokeWidth={2} aria-hidden="true" />
              {t('jobSearch.emailButton')}
            </Button>
            <Button
              variant="secondary"
              href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={t('opening.downloadCV')}
              className={styles.ctaButton}
            >
              <Download size={16} strokeWidth={2} aria-hidden="true" />
              {t('opening.cvButton')}
            </Button>
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/margaux-tarayre/"
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel={t('jobSearch.linkedinLabel')}
              className={styles.ctaButton}
            >
              <Linkedin size={16} strokeWidth={2} aria-hidden="true" />
              LinkedIn
            </Button>
          </div>

          {/* Vidéo + modalités d'alternance */}
          <div
            ref={alternanceCardRef}
            className={`${styles.alternanceCard} ${alternanceCardVisible ? styles.alternanceCardVisible : ''}`}
          >
          <div className={styles.videoAlternanceGrid}>
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
            <div className={styles.alternancePanel}>
              <h2 className={styles.alternanceTitle}>
                <TypewriterOnVisible text={t('alternance.title')} speed={60} />
              </h2>
              <dl className={styles.alternanceFacts}>
                <div className={styles.alternanceFact}>
                  <dt className={styles.factKey}>{t('jobSearch.availability')}</dt>
                  <dd className={styles.factValue}>{t('jobSearch.title')}</dd>
                </div>
                <div className={styles.alternanceFact}>
                  <dt className={styles.factKey}>{t('alternance.duration.sub')}</dt>
                  <dd className={styles.factValue}>
                    {t('alternance.duration.value')} {t('alternance.duration.label')}
                  </dd>
                </div>
                <div className={styles.alternanceFact}>
                  <dt className={styles.factKey}>{t('alternance.rhythm.label')}</dt>
                  <dd className={styles.factValue}>{t('alternance.rhythm.sub')}</dd>
                </div>
                <div className={styles.alternanceFact}>
                  <dt className={styles.factKey}>{t('alternance.school.label')}</dt>
                  <dd className={styles.factValue}>
                    {t('alternance.school.value')} · {t('alternance.school.sub')}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          </div>

        </div>
      </div>

      {/* ── 2. PARCOURS ── */}
      <div className={styles.container}>
        <div className={styles.parcoursSection}>
          <h2 className={styles.sectionTitle}>
            <TypewriterOnVisible text={t('journey.heading')} speed={40} />
          </h2>
          <div
            ref={chaptersRef}
            className={`${styles.chapters} ${chaptersVisible ? styles.chaptersVisible : ''}`}
          >
            {[
              {
                period: '2019 – 2024',
                title: 'Comprendre le code',
                text: "J'ai passé plusieurs années à développer des interfaces en React — d'abord en stage chez Infotel, puis en alternance chez Arsene Innovation et La Centrale. Ces années m'ont appris ce que le design doit respecter pour être techniquement réel : contraintes de performance, accessibilité, délais qui ne pardonnent pas.",
              },
              {
                period: '2024 – 2025',
                title: 'Trouver ma voie',
                text: "Une Licence Pro à la Sorbonne et une formation Python m'ont permis de consolider mes bases. C'est là que j'ai compris que ma vraie valeur était au croisement : concevoir des interfaces que je saurais construire, et construire ce que je suis capable d'imaginer.",
              },
              {
                period: '2025 – 2026',
                title: 'Concevoir avec intention',
                text: "En Mastère UX Design Interactif à l'IIM Paris, je formalise cette double expertise. Je parle le langage des développeurs, je comprends leurs contraintes — et je conçois des expériences qui tiennent leurs promesses en production, pas seulement en maquette.",
              },
            ].map((chapter, i) => (
              <div
                key={i}
                className={styles.chapter}
                style={{ transitionDelay: chaptersVisible ? `${i * 0.18}s` : '0s' }}
              >
                <span className={styles.chapterPeriod}>{chapter.period}</span>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterText}>{chapter.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. COMPÉTENCES ── */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>
            <TypewriterOnVisible text={t('skills.heading')} speed={40} />
          </h2>
          <div className={styles.skillsTable}>
            {[
              { titleKey: 'skills.design.title', tagsKey: 'skills.design.tags' },
              { titleKey: 'skills.development.title', tagsKey: 'skills.development.tags' },
              { titleKey: 'skills.intersection.title', tagsKey: 'skills.intersection.tags' },
            ].map(({ titleKey, tagsKey }) => (
              <div key={titleKey} className={styles.skillsRow}>
                <div className={styles.skillsCategoryCol}>{t(titleKey)}</div>
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

      <Footer />
    </section>
  )
}

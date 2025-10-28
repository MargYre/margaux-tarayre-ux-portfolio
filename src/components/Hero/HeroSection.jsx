import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { personas, personaMessages } from './personas'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState('anyone')
  const { t } = useTranslation()

  const handlePersonaClick = personaId => {
    setSelectedPersona(personaId)
  }

  const currentMessage = personaMessages[selectedPersona]

  const translatedPersonas = [
    { id: 'anyone', label: t('hero.forAnyone') },
    { id: 'recruiter', label: t('hero.recruiter') },
    { id: 'director', label: t('hero.designDirector') },
    { id: 'pm', label: t('hero.productManager') },
    { id: 'engineer', label: t('hero.engineer') },
  ]

  return (
    <section className={styles.hero}>
      <nav className={styles.personaNav}>
        {translatedPersonas.map(persona => (
          <PersonaButton
            key={persona.id}
            persona={persona}
            isActive={selectedPersona === persona.id}
            onClick={handlePersonaClick}
          />
        ))}
      </nav>

      <HeroContent
        message={currentMessage}
        selectedPersona={selectedPersona}
        t={t}
      />

      <ScrollIndicator t={t} />
    </section>
  )
}

const PersonaButton = ({ persona, isActive, onClick }) => (
  <button
    onClick={() => onClick(persona.id)}
    className={`${styles.personaButton} ${isActive ? styles.personaButtonActive : ''}`}
  >
    {persona.label}
  </button>
)

const HeroContent = ({ message, selectedPersona, t }) => (
  <div className={styles.heroContent} key={selectedPersona}>
    <h1 className={styles.title}>{t('hero.title')}</h1>
    <h2 className={styles.subtitle}>{t('hero.subtitle')}</h2>
    <p className={styles.description}>{t('hero.description')}</p>

    <div className={styles.ctaGroup}>
      {/* Bouton Projets - TOUJOURS visible */}
      <a href="#projects" className={styles.primaryCta}>
        {t('nav.projects')}
      </a>

      {/* RECRUTEUR : CV seulement (Contact retiré) */}
      {selectedPersona === 'recruiter' && (
        <a
          href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          {t('hero.viewCV')}
        </a>
      )}

      {/* DIRECTEUR DESIGN : Case Study */}
      {selectedPersona === 'director' && (
        <a href="/projects/campus-connect" className={styles.secondaryCta}>
          {t('hero.viewCaseStudy')}
        </a>
      )}

      {/* PRODUCT MANAGER : CV */}
      {selectedPersona === 'pm' && (
        <a
          href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          {t('hero.viewCV')}
        </a>
      )}

      {/* DEVELOPPEUR : Portfolio Dev + GitHub */}
      {selectedPersona === 'engineer' && (
        <>
          <a
            href="https://margaux-tarayre.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            {t('nav.devPortfolio')}
          </a>
          <a
            href="https://github.com/MargYre"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryCta}
          >
            {t('hero.github')}
          </a>
        </>
      )}
    </div>
  </div>
)

const ScrollIndicator = ({ t }) => (
  <div className={styles.scrollIndicator}>
    <span className={styles.scrollText}>{t('hero.scrollToExplore')}</span>
    <div className={styles.scrollLine}></div>
  </div>
)

export default HeroSection

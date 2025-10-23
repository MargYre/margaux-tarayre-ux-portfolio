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
      <a href="#projects" className={styles.primaryCta}>
        {t('nav.projects')}
      </a>

      {selectedPersona === 'engineer' && (
        <a
          href="https://margaux-tarayre.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          {t('nav.devPortfolio')}
        </a>
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

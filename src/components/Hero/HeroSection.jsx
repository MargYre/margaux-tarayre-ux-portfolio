import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { personas, personaMessages } from './personas'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState('anyone')
  const { t, i18n } = useTranslation()

  // Obtenir la langue courante (fr ou en)
  const currentLang = i18n.language

  const handlePersonaClick = personaId => {
    setSelectedPersona(personaId)
  }

  // Obtenir le message personnalisé selon la langue ET le persona
  const currentMessage =
    personaMessages[currentLang]?.[selectedPersona] ||
    personaMessages.en[selectedPersona]

  // Traduire les labels des boutons
  const translatedPersonas = personas.map(p => ({
    id: p.id,
    label: currentLang === 'fr' ? p.labelFr : p.labelEn,
  }))

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
        currentLang={currentLang}
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

const HeroContent = ({ message, selectedPersona, currentLang, t }) => (
  <div className={styles.heroContent} key={selectedPersona}>
    {/* Utiliser les messages personnalisés au lieu des traductions statiques */}
    <h1 className={styles.title}>{message.title}</h1>
    <h2 className={styles.subtitle}>{message.subtitle}</h2>
    <p className={styles.description}>{message.description}</p>

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

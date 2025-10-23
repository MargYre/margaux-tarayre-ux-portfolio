import { useState } from 'react'
import { personas, personaMessages } from './personas'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState('anyone')

  const handlePersonaClick = personaId => {
    setSelectedPersona(personaId)
  }

  const currentMessage = personaMessages[selectedPersona]

  return (
    <section className={styles.hero}>
      {/* Persona Navigation */}
      <nav className={styles.personaNav}>
        {personas.map(persona => (
          <PersonaButton
            key={persona.id}
            persona={persona}
            isActive={selectedPersona === persona.id}
            onClick={handlePersonaClick}
          />
        ))}
      </nav>

      {/* Hero Content */}
      <HeroContent message={currentMessage} selectedPersona={selectedPersona} />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}

// Sous-composant pour les boutons Persona
const PersonaButton = ({ persona, isActive, onClick }) => (
  <button
    onClick={() => onClick(persona.id)}
    className={`${styles.personaButton} ${isActive ? styles.personaButtonActive : ''}`}
  >
    {persona.label}
  </button>
)

// Sous-composant pour le contenu Hero
const HeroContent = ({ message, selectedPersona }) => (
  <div className={styles.heroContent} key={selectedPersona}>
    <h1 className={styles.title}>{message.title}</h1>
    <h2 className={styles.subtitle}>{message.subtitle}</h2>
    <p className={styles.description}>{message.description}</p>

    <div className={styles.ctaGroup}>
      <a href="#projects" className={styles.primaryCta}>
        View Projects
      </a>

      {selectedPersona === 'engineer' && (
        <a
          href="https://margaux-tarayre.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          See Technical Portfolio →
        </a>
      )}
    </div>
  </div>
)

// Sous-composant pour l'indicateur de scroll
const ScrollIndicator = () => (
  <div className={styles.scrollIndicator}>
    <span className={styles.scrollText}>Scroll to explore</span>
    <div className={styles.scrollLine}></div>
  </div>
)

export default HeroSection

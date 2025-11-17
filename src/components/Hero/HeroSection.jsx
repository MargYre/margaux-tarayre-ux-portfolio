import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { personas, personaMessages } from './personas'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState('anyone')
  const { t, i18n } = useTranslation()

  const handlePersonaClick = personaId => {
    setSelectedPersona(personaId)
  }

  const currentLang = i18n.language
  const currentMessage =
    personaMessages[currentLang]?.[selectedPersona] ||
    personaMessages.fr[selectedPersona]

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
    <h1 className={styles.title}>{message?.title}</h1>
    <h2 className={styles.subtitle}>{message?.subtitle}</h2>
    <p className={styles.description}>{message?.description}</p>

    <div className={styles.ctaGroup}>
      {/* Bouton Projets TOUJOURS visible */}
      <Button variant="primary" href="#projects">
        {t('nav.projects')}
      </Button>

      {/* RECRUTEUR : CV seulement */}
      {selectedPersona === 'recruiter' && (
        <Button
          variant="secondary"
          href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel={t('hero.viewCV')}
        >
          {t('hero.viewCV')}
        </Button>
      )}

      {/* DIRECTEUR DESIGN : Case Study */}
      {selectedPersona === 'director' && (
        <Button variant="secondary" href="/projects/campus-connect">
          {t('hero.viewCaseStudy')}
        </Button>
      )}

      {/* PRODUCT MANAGER : CV */}
      {selectedPersona === 'pm' && (
        <Button
          variant="secondary"
          href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel={t('hero.viewCV')}
        >
          {t('hero.viewCV')}
        </Button>
      )}

      {/* DEVELOPPEUR : Portfolio Dev + GitHub */}
      {selectedPersona === 'engineer' && (
        <>
          <Button
            variant="secondary"
            href="https://margaux-tarayre.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={t('nav.devPortfolio')}
          >
            {t('nav.devPortfolio')}
          </Button>
          <Button
            variant="secondary"
            href="https://github.com/MargYre"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={t('hero.github')}
          >
            {t('hero.github')}
          </Button>
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

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { personas, personaMessages } from './personas'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'

const TypewriterTitle = ({ text, isFirstLoad, onDone }) => {
  const [displayed, setDisplayed] = useState(isFirstLoad ? '' : text)
  const [done, setDone] = useState(!isFirstLoad)

  useEffect(() => {
    if (!isFirstLoad) {
      setDisplayed(text)
      setDone(true)
      return
    }
    setDisplayed('')
    setDone(false)
    if (!text) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
        onDone?.()
      }
    }, 50)
    return () => clearInterval(id)
  }, [text, isFirstLoad])

  return (
    <>
      {displayed}
      {!done && <span className={styles.cursor}>|</span>}
    </>
  )
}

const HeroSection = () => {
  const [selectedPersona, setSelectedPersona] = useState('anyone')
  const [hasLoaded, setHasLoaded] = useState(false)
  const { t, i18n } = useTranslation()

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
            onClick={setSelectedPersona}
          />
        ))}
      </nav>

      <HeroContent
        message={currentMessage}
        selectedPersona={selectedPersona}
        isFirstLoad={!hasLoaded}
        onIntroComplete={() => setHasLoaded(true)}
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

const HeroContent = ({ message, selectedPersona, isFirstLoad, onIntroComplete, t }) => (
  <div
    className={`${styles.heroContent} ${isFirstLoad ? styles.introContent : styles.personaContent}`}
    key={selectedPersona}
  >
    <h1 className={styles.title}>
      <TypewriterTitle
        text={message?.subtitle || ''}
        isFirstLoad={isFirstLoad}
        onDone={onIntroComplete}
      />
    </h1>
    <h2 className={styles.subtitle}>{message?.title}</h2>
    <p className={styles.description}>{message?.description}</p>

    <div className={styles.ctaGroup}>
      <Button variant="primary" href="#projects">
        {t('nav.projects')}
      </Button>

      {selectedPersona === 'recruiter' && (
        <>
          <Button
            variant="secondary"
            href="/images/CV-Margaux_Tarayre_UXUIdesigner.pdf"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={t('hero.viewCV')}
          >
            {t('hero.viewCV')}
          </Button>
          <Button
            variant="secondary"
            href="mailto:margaux.tarayre@gmail.com"
            ariaLabel={t('hero.contact')}
          >
            {t('hero.contact')}
          </Button>
        </>
      )}

      {selectedPersona === 'director' && (
        <Button variant="secondary" to="/projects/good-morning">
          {t('hero.viewCaseStudy')}
        </Button>
      )}

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

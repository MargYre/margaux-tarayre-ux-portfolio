import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import Button from '../Button/Button'
import styles from './ContactSection.module.scss'

const TypewriterOnVisible = ({ text }) => {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !text) return
    let i = 0
    const id = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, 50)
    return () => clearInterval(id)
  }, [started, text])

  return (
    <span ref={ref}>
      {started ? displayed : '\u00A0'}
      {started && !done && <span className={styles.cursor}>|</span>}
    </span>
  )
}

const ContactSection = () => {
  const { t } = useTranslation()

  return (
    <>
      <hr className={styles.divider} />
      <section className={styles.contact}>
        <h2 className={styles.title}>
          <TypewriterOnVisible text={t('contact.title')} />
        </h2>
        <Button
          variant="primary"
          href="mailto:margaux.tarayre@gmail.com"
          ariaLabel={t('contact.button')}
          className={styles.contactButton}
        >
          <Mail size={16} strokeWidth={2} aria-hidden="true" />
          {t('contact.button')}
        </Button>
      </section>
    </>
  )
}

export default ContactSection

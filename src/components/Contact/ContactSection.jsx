import { useTranslation } from 'react-i18next'
import { Mail } from 'lucide-react'
import Button from '../Button/Button'
import TypewriterOnVisible from '../Typewriter/TypewriterOnVisible'
import styles from './ContactSection.module.scss'

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

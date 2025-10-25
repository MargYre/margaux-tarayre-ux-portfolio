import { useTranslation } from 'react-i18next'
import styles from './Footer.module.scss'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>{t('footer.copyright')}</p>
      <div className={styles.footerLinks}>
        <a
          href="mailto:margaux.tarayre@example.com"
          className={styles.footerLink}
        >
          {t('footer.email')}
        </a>
        <a
          href="https://linkedin.com/in/margaux-tarayre"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          {t('footer.linkedin')}
        </a>
        <a
          href="https://github.com/margaux-tarayre"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          {t('footer.github')}
        </a>
      </div>
    </footer>
  )
}

export default Footer

import { useTranslation } from 'react-i18next'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const { t } = useTranslation()

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <h1 className={styles.logo}>Margaux Tarayre</h1>
        <div className={styles.navLinks}>
          <a href="#projects" className={styles.navLink}>
            {t('nav.projects')}
          </a>
          <a
            href="https://margaux-tarayre.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLinkHighlight}
          >
            {t('nav.devPortfolio')}
          </a>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navigation

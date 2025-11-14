import { Link } from 'react-router-dom'
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
          {/* lien permanent → toujours affiché */}
          <Link to="/" className={styles.navLink}>
            {t('nav.home')}
          </Link>

          {/* ton lien ABOUT → toujours affiché aussi */}
          <Link to="/about" className={styles.navLink}>
            {t('nav.about')}
          </Link>

          {/* anchor uniquement valable en home, mais ça n’empêche rien */}
          <Link to="/#projects" className={styles.navLink}>
            {t('nav.projects')}
          </Link>

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

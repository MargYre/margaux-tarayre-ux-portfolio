import { useEffect } from 'react'
import { useTranslation } from 'react-i18next' // ← IMPORT
import CustomCursor from './components/Cursor/CustomCursor'
import HeroSection from './components/Hero/HeroSection'
import ProjectsGrid from './components/Projects/ProjectsGrid'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import LanguageToggle from './components/LanguageToggle/LanguageToggle' // ← IMPORT
import styles from './App.module.scss'

function App() {
  const { t } = useTranslation() // ← HOOK

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      <CustomCursor />

      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>Margaux Tarayre</h1>
          <div className={styles.navLinks}>
            <a href="#projects" className={styles.navLink}>
              {t('nav.projects')} {/* ← TRADUCTION */}
            </a>
            <a
              href="https://margaux-tarayre.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLinkHighlight}
            >
              {t('nav.devPortfolio')} {/* ← TRADUCTION */}
            </a>
            <LanguageToggle /> {/* ← BOUTON LANGUE */}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ProjectsGrid />
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          {t('footer.copyright')} {/* ← TRADUCTION */}
        </p>
        <div className={styles.footerLinks}>
          <a href="mailto:ton-email@example.com" className={styles.footerLink}>
            {t('footer.email')} {/* ← TRADUCTION */}
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {t('footer.linkedin')} {/* ← TRADUCTION */}
          </a>
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            {t('footer.github')} {/* ← TRADUCTION */}
          </a>
        </div>
      </footer>
    </>
  )
}

export default App

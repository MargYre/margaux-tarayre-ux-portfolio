import { useEffect } from 'react'
import CustomCursor from './components/Cursor/CustomCursor'
import HeroSection from './components/Hero/HeroSection'
import ProjectsGrid from './components/Projects/ProjectsGrid'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import styles from './App.module.scss'

function App() {
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
              Projects
            </a>
            <a
              href="https://margaux-tarayre.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.navLinkHighlight}
            >
              Dev Portfolio →
            </a>
            {/* Ajoute le toggle ici */}
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
          © 2025 Margaux Tarayre — UX/UI Designer & Developer
        </p>
        <div className={styles.footerLinks}>
          <a href="mailto:ton-email@example.com" className={styles.footerLink}>
            Email
          </a>
          <a
            href="https://linkedin.com/in/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ton-profil"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}

export default App

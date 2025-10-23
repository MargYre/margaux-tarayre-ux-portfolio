import { useEffect } from 'react'
import CustomCursor from './components/Cursor/CustomCursor'
import HeroSection from './components/Hero/HeroSection'
import ProjectsGrid from './components/Projects/ProjectsGrid'
import styles from './App.module.css'

function App() {
  // État pour masquer le curseur système
  useEffect(() => {
    // Cache le curseur par défaut du navigateur
    document.body.style.cursor = 'none'

    // Cleanup : restore le curseur si le composant est démonté
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <>
      {/* Curseur personnalisé - Toujours au top niveau */}
      <CustomCursor />

      {/* Navigation */}
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
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <main>
        <HeroSection />
        <ProjectsGrid />
      </main>

      {/* Footer simple */}
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

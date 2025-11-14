import styles from './About.module.scss'
import { Link } from 'react-router-dom'
//import linkedinIcon from '../assets/react.svg' // change par ton icône LinkedIn

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h1>À propos de moi</h1>

        <p>
          UX/UI designer passionnée, j’imagine des expériences élégantes, utiles
          et profondément humaines. J’adore transformer des problèmes en
          solutions simples et belles… is that so hard to ask for, huh?
        </p>

        <p>
          Mon travail s’appuie sur la recherche, l’itération et une obsession
          toute douce pour les détails. Si tu veux créer quelque chose d’unique,
          je suis là.
        </p>

        <div className={styles.ctaWrapper}>
          <a
            href="https://www.linkedin.com/in/TON-LINKEDIN/"
            target="_blank"
            className={styles.cta}
          >
            Me contacter sur LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

import styles from './FormationSorbonne.module.scss'

const FormationSorbonne = () => (
  <section className={styles.formationSection}>
    <div className={styles.formationContainer}>
      <div className={styles.formationContent}>
        <h3 className={styles.formationTitle}>À propos de la formation</h3>
        <p className={styles.formationDescription}>
          Ce projet a été réalisé dans le cadre de ma{' '}
          <a
            href="https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-professionnelles-l3/licence-3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.formationInlineLink}
          >
            Licence Professionnelle Développement Web
          </a>{' '}
          à Sorbonne Université. Cette formation m'a permis d'acquérir des bases
          solides en développement front-end et de découvrir les enjeux de
          l'expérience utilisateur.
        </p>
      </div>
    </div>
  </section>
)

export default FormationSorbonne

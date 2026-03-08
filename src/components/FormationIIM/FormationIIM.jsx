import styles from './FormationIIM.module.scss'

const FormationIIM = () => (
  <section className={styles.formationSection}>
    <div className={styles.formationContainer}>
      <div className={styles.formationContent}>
        <h3 className={styles.formationTitle}>À propos de la formation</h3>
        <p className={styles.formationDescription}>
          Ce projet a été réalisé dans le cadre de mon{' '}
          <a
            href="https://www.iim.fr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.formationInlineLink}
          >
            Mastère UX & UI Design
          </a>{' '}
          à l'IIM Digital School. Cette formation spécialisée m'a permis
          d'approfondir la recherche utilisateur, la conception d'interfaces et
          le design thinking.
        </p>
      </div>
    </div>
  </section>
)

export default FormationIIM

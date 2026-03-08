import { useTranslation, Trans } from 'react-i18next'
import styles from './FormationSorbonne.module.scss'

const SORBONNE_URL =
  'https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-professionnelles-l3/licence-3'

const FormationSorbonne = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.formationSection}>
      <div className={styles.formationContainer}>
        <div className={styles.formationContent}>
          <h3 className={styles.formationTitle}>
            {t('formationSorbonne.title')}
          </h3>
          <p className={styles.formationDescription}>
            <Trans
              i18nKey="formationSorbonne.description"
              components={{
                1: (
                  <a
                    href={SORBONNE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.formationInlineLink}
                  />
                ),
              }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}

export default FormationSorbonne

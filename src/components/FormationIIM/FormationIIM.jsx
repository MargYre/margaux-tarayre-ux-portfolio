import { useTranslation, Trans } from 'react-i18next'
import styles from './FormationIIM.module.scss'

const IIM_URL = 'https://www.iim.fr'

const FormationIIM = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.formationSection}>
      <div className={styles.formationContainer}>
        <div className={styles.formationContent}>
          <h3 className={styles.formationTitle}>{t('formationIIM.title')}</h3>
          <p className={styles.formationDescription}>
            <Trans
              i18nKey="formationIIM.description"
              components={{
                1: (
                  <a
                    href={IIM_URL}
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

export default FormationIIM
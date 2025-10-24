import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './NotFound.module.scss'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>
          {t('notFound.message', 'Oops! This page doesn\'t exist.')}
        </p>
        <Link to="/" className={styles.homeLink}>
          {t('notFound.backHome', '← Back to Home')}
        </Link>
      </div>
    </div>
  )
}

export default NotFound

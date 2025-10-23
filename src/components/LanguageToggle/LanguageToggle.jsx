import { useLanguage } from '../../hooks/useLanguage'
import styles from './LanguageToggle.module.scss'

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguage()

  return (
    <button className={styles.toggle} onClick={toggleLanguage}>
      {currentLanguage === 'fr' ? 'EN' : 'FR'}
    </button>
  )
}

export default LanguageToggle

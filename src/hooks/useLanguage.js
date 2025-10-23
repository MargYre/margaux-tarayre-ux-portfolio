import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'fr' ? 'en' : 'fr'
    i18n.changeLanguage(newLang)
    setCurrentLanguage(newLang)
  }

  useEffect(() => {
    setCurrentLanguage(i18n.language)
  }, [i18n.language])

  return {
    currentLanguage,
    toggleLanguage,
  }
}

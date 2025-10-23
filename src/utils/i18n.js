import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import frTranslation from '../locales/fr/common.json'
import enTranslation from '../locales/en/common.json'

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
  },
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

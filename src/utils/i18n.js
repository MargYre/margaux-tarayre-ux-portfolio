import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import frCommon from '../locales/fr/common.json'
import enCommon from '../locales/en/common.json'
import frProjects from '../locales/fr/projects.json'
import enProjects from '../locales/en/projects.json'

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        ...frCommon,
        ...frProjects,
      },
    },
    en: {
      translation: {
        ...enCommon,
        ...enProjects,
      },
    },
  },
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

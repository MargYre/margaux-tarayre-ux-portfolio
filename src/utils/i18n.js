import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import frCommon from '../locales/fr/common.json'
import enCommon from '../locales/en/common.json'
import frProjects from '../locales/fr/projects.json'
import enProjects from '../locales/en/projects.json'
import frProjectDetails from '../locales/fr/projectDetails.json'
import enProjectDetails from '../locales/en/projectDetails.json'
import frCelesteGarden from '../locales/fr/celeste-garden.json'
import enCelesteGarden from '../locales/en/celeste-garden.json'
import frCampusConnect from '../locales/fr/campus-connect.json'
import enCampusConnect from '../locales/en/campus-connect.json'
import frEvasion from '../locales/fr/evasion.json'
import enEvasion from '../locales/en/evasion.json'
import frComingSoon from '../locales/fr/coming-soon.json'
import enComingSoon from '../locales/en/coming-soon.json'
import frAbout from '../locales/fr/about.json'
import enAbout from '../locales/en/about.json'

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        ...frCommon,
        ...frProjects,
        ...frProjectDetails,
        ...frCelesteGarden,
        ...frCampusConnect,
        ...frEvasion,
        ...frComingSoon,
        ...frAbout,
      },
    },
    en: {
      translation: {
        ...enCommon,
        ...enProjects,
        ...enProjectDetails,
        ...enCelesteGarden,
        ...enCampusConnect,
        ...enEvasion,
        ...enComingSoon,
        ...enAbout,
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

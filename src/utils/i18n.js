import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import frCommon from '../locales/fr/common.json'
import enCommon from '../locales/en/common.json'
import frProjects from '../locales/fr/projects.json'
import enProjects from '../locales/en/projects.json'
import frProjectDetails from '../locales/fr/projectDetails.json'
import enProjectDetails from '../locales/en/projectDetails.json'
import frCampusConnect from '../locales/fr/campus-connect.json'
import enCampusConnect from '../locales/en/campus-connect.json'
import frComingSoon from '../locales/fr/coming-soon.json'
import enComingSoon from '../locales/en/coming-soon.json'
import frAbout from '../locales/fr/about.json'
import enAbout from '../locales/en/about.json'
import frChantierPro from '../locales/fr/chantierpro.json'
import enChantierPro from '../locales/en/chantierpro.json'
import frGoodMorning from '../locales/fr/good-morning.json'
import enGoodMorning from '../locales/en/good-morning.json'

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        ...frCommon,
        ...frProjects,
        ...frProjectDetails,
        ...frCampusConnect,
        ...frChantierPro,
        ...frGoodMorning,
        ...frComingSoon,
        ...frAbout,
      },
    },
    en: {
      translation: {
        ...enCommon,
        ...enProjects,
        ...enProjectDetails,
        ...enCampusConnect,
        ...enChantierPro,
        ...enGoodMorning,
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

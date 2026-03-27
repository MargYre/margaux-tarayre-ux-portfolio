import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import styles from './GoodMorningTemplate.module.scss'

/** Chemins avec espaces : encodeURI sur l'URL complète */
const IMG = {
  arborescence: '/images/good-morning/01-Arborescence.png',
  wireframe: '/images/good-morning/02-Wireframe.png',
  testsGraphique: encodeURI('/images/good-morning/03-Tests graphique.png'),
  charte: encodeURI('/images/good-morning/04-Charte Graphique.png'),
}

const GoodMorningTemplate = ({ project }) => {
  const { t } = useTranslation()
  const prototypeUrl = project?.prototype ?? ''
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const lightboxImages = [
    IMG.arborescence,
    IMG.wireframe,
    IMG.testsGraphique,
    IMG.charte,
  ]

  const openLightbox = index => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const lightboxTranslations = {
    close: t('goodMorning.lightbox.close'),
    previous: t('goodMorning.lightbox.previous'),
    next: t('goodMorning.lightbox.next'),
    zoomIn: t('goodMorning.lightbox.zoomIn'),
    zoomOut: t('goodMorning.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      <div className={styles.inner}>
        <div className={styles.backLinkWrapper}>
          <Link to="/" className={styles.backLink}>
            {t('goodMorning.nav.back')}
          </Link>
        </div>

        <header className={styles.hero}>
          <span className={styles.heroTag}>{t('goodMorning.hero.tag')}</span>
          <h1 className={styles.heroTitle}>{t('goodMorning.hero.title')}</h1>
          <p className={styles.heroSubtitle}>{t('goodMorning.hero.subtitle')}</p>
          <a
            className={styles.cta}
            href={prototypeUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('goodMorning.hero.cta')}
          </a>
        </header>

        <section className={styles.section} aria-labelledby="gm-arch">
          <h2 id="gm-arch" className={styles.sectionTitle}>
            {t('goodMorning.sections.architecture.title')}
          </h2>
          <p className={styles.sectionBody}>
            {t('goodMorning.sections.architecture.body')}
          </p>
          <div className={styles.imageGrid}>
            <figure className={styles.figure}>
              <img
                src={IMG.arborescence}
                alt=""
                className={styles.image}
                loading="lazy"
                onClick={() => openLightbox(0)}
              />
            </figure>
            <figure className={styles.figure}>
              <img
                src={IMG.wireframe}
                alt=""
                className={styles.image}
                loading="lazy"
                onClick={() => openLightbox(1)}
              />
            </figure>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="gm-da">
          <h2 id="gm-da" className={styles.sectionTitle}>
            {t('goodMorning.sections.artDirection.title')}
          </h2>
          <p className={styles.sectionBody}>
            {t('goodMorning.sections.artDirection.body')}
          </p>
          <div className={styles.singleImageWrap}>
            <figure className={styles.figure}>
              <img
                src={IMG.testsGraphique}
                alt=""
                className={styles.image}
                loading="lazy"
                onClick={() => openLightbox(2)}
              />
            </figure>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="gm-ds">
          <h2 id="gm-ds" className={styles.sectionTitle}>
            {t('goodMorning.sections.designSystem.title')}
          </h2>
          <p className={styles.sectionBody}>
            {t('goodMorning.sections.designSystem.body')}
          </p>
          <div className={styles.singleImageWrap}>
            <figure className={styles.figure}>
              <img
                src={IMG.charte}
                alt=""
                className={styles.image}
                loading="lazy"
                onClick={() => openLightbox(3)}
              />
            </figure>
          </div>
        </section>
      </div>

      <div className={styles.footerSpacing}>
        <ProjectNavigation currentProjectId="good-morning" />
      </div>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          translations={lightboxTranslations}
        />
      )}

      <Footer />
    </div>
  )
}

export default GoodMorningTemplate

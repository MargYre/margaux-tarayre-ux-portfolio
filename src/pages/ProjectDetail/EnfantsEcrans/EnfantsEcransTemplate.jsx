import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Footer from '../../../components/Footer/Footer'
import Lightbox from '../../../components/Lightbox/Lightbox'
import ProjectNavigation from '../../../components/ProjectNavigation/ProjectNavigation'
import FormationIIM from '../../../components/FormationIIM/FormationIIM'
import styles from './EnfantsEcransTemplate.module.scss'

const LUMA_HERO_IMAGE = '/images/luma/luma.png'
const FIGMA_URL =
  'https://www.figma.com/slides/Y8pLuOZvseAeDnpZmaXDR3/Untitled?node-id=80-2043&t=D1HSPiUBbYNhSBSV-0'

const EnfantsEcransTemplate = ({ project }) => {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const handleImageClick = () => setLightboxOpen(true)

  const lightboxTranslations = {
    close: t('enfantsEcrans.lightbox.close'),
    previous: t('enfantsEcrans.lightbox.previous'),
    next: t('enfantsEcrans.lightbox.next'),
    zoomIn: t('enfantsEcrans.lightbox.zoomIn'),
    zoomOut: t('enfantsEcrans.lightbox.zoomOut'),
  }

  return (
    <div className={styles.template}>
      <div className={styles.backLinkWrapper}>
        <Link to="/" className={styles.backLink}>
          {t('enfantsEcrans.nav.back')}
        </Link>
      </div>

      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.heroTag}>
                <span className={styles.tag}>
                  {t('enfantsEcrans.hero.tag')}
                </span>
                <span className={styles.year}>{project?.year || 2025}</span>
              </div>

              <h1 className={styles.heroTitle}>
                {t('enfantsEcrans.hero.title')}
              </h1>
              <p className={styles.heroContext}>
                {t('enfantsEcrans.hero.context')}
              </p>
              <p className={styles.heroSubtitle}>
                {t('enfantsEcrans.hero.subtitle')}
              </p>

              <div className={styles.heroDetails}>
                <DetailItem
                  label={t('enfantsEcrans.hero.details.duration.label')}
                  value={t('enfantsEcrans.hero.details.duration.value')}
                />
                <DetailItem
                  label={t('enfantsEcrans.hero.details.school.label')}
                  value={t('enfantsEcrans.hero.details.school.value')}
                />
                <DetailItem
                  label={t('enfantsEcrans.hero.details.team.label')}
                  value={t('enfantsEcrans.hero.details.team.value')}
                />
                <DetailItem
                  label={t('enfantsEcrans.hero.details.year.label')}
                  value={t('enfantsEcrans.hero.details.year.value')}
                />
              </div>

              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.figmaLink}
              >
                {t('enfantsEcrans.hero.link')}
              </a>
            </div>

            <div className={styles.heroImageWrapper}>
              <button
                type="button"
                onClick={handleImageClick}
                className={styles.heroImageButton}
                aria-label={t('enfantsEcrans.carousel.goToImage')}
              >
                <img
                  src={LUMA_HERO_IMAGE}
                  alt={t('enfantsEcrans.hero.title')}
                  className={styles.heroImage}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <SectionExploration t={t} />
      <SectionFraming t={t} />
      <SectionIdeation t={t} />
      <SectionWorkshop t={t} />
      <SectionSolution t={t} />

      <FormationIIM />
      <ProjectNavigation currentProjectId="enfants-ecrans" />

      {lightboxOpen && (
        <Lightbox
          images={[LUMA_HERO_IMAGE]}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
          translations={lightboxTranslations}
        />
      )}

      <Footer />
    </div>
  )
}

const DetailItem = ({ label, value }) => (
  <div className={styles.detail}>
    <span className={styles.detailLabel}>{label}</span>
    <span className={styles.detailValue}>{value}</span>
  </div>
)

/* Section 01 — Exploration */
const SectionExploration = ({ t }) => {
  const themes = t('enfantsEcrans.sections.exploration.themes', {
    returnObjects: true,
  })
  const stats = t('enfantsEcrans.sections.exploration.stats', {
    returnObjects: true,
  })
  const themesArray = Array.isArray(themes) ? themes : []
  const statsArray = Array.isArray(stats) ? stats : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('enfantsEcrans.sections.exploration.number')}</span>
            <span>{t('enfantsEcrans.sections.exploration.label')}</span>
          </div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('enfantsEcrans.sections.exploration.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.exploration.intro')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.exploration.method.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.exploration.method.description')}
            </p>

            <div className={styles.themesGrid}>
              {themesArray.map((theme, index) => (
                <div key={index} className={styles.themeCard}>
                  {theme}
                </div>
              ))}
            </div>

            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.exploration.voteParagraph')}
            </p>

            <div className={styles.statsGrid}>
              {statsArray.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 02 — Cadrage */
const SectionFraming = ({ t }) => {
  const steps = t('enfantsEcrans.sections.framing.method5why.steps', {
    returnObjects: true,
  })
  const causes = t('enfantsEcrans.sections.framing.causes', {
    returnObjects: true,
  })
  const profiles = t('enfantsEcrans.sections.framing.profiles', {
    returnObjects: true,
  })
  const stepsArray = Array.isArray(steps) ? steps : []
  const causesArray = Array.isArray(causes) ? causes : []
  const profilesArray = Array.isArray(profiles) ? profiles : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('enfantsEcrans.sections.framing.number')}</span>
            <span>{t('enfantsEcrans.sections.framing.label')}</span>
          </div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('enfantsEcrans.sections.framing.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.framing.intro')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.framing.method5why.badge')}
            </span>
            <div className={styles.whyTree}>
              {stepsArray.map((step, index) => (
                <div key={index} className={styles.whyStep}>
                  {index > 0 && <span className={styles.whyArrow}>→ </span>}
                  {step}
                </div>
              ))}
            </div>

            <div className={styles.causesGrid}>
              {causesArray.map((cause, index) => (
                <div key={index} className={styles.causeCard}>
                  {cause}
                </div>
              ))}
            </div>

            <div className={styles.profilesGrid}>
              {profilesArray.map((profile, index) => (
                <div key={index} className={styles.profileCard}>
                  <h3 className={styles.profileCardTitle}>{profile.title}</h3>
                  <ul className={styles.traitsList}>
                    {(profile.traits || []).map((trait, i) => (
                      <li key={i}>{trait}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className={styles.commonPoint}>
              {t('enfantsEcrans.sections.framing.commonPoint')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 03 — Idéation */
const SectionIdeation = ({ t }) => {
  const ideas = t('enfantsEcrans.sections.ideation.ideas', {
    returnObjects: true,
  })
  const ideasArray = Array.isArray(ideas) ? ideas : []

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('enfantsEcrans.sections.ideation.number')}</span>
            <span>{t('enfantsEcrans.sections.ideation.label')}</span>
          </div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('enfantsEcrans.sections.ideation.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.ideation.intro')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.ideation.tourDeTable.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.ideation.tourDeTable.text')}
            </p>

            <div className={styles.ideasGrid}>
              {ideasArray.map((idea, index) => (
                <div key={index} className={styles.ideaCard}>
                  <h3 className={styles.ideaCardTitle}>{idea.title}</h3>
                  <p className={styles.ideaCardDesc}>{idea.description}</p>
                  <span
                    className={
                      idea.tag && (idea.tag.includes('Retenue') || idea.tag.includes('Selected'))
                        ? styles.ideaTagRetained
                        : styles.ideaTagDropped
                    }
                  >
                    {idea.tag}
                  </span>
                </div>
              ))}
            </div>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.ideation.vote.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.ideation.vote.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 04 — Atelier de conception */
const SectionWorkshop = ({ t }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('enfantsEcrans.sections.workshop.number')}</span>
            <span>{t('enfantsEcrans.sections.workshop.label')}</span>
          </div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('enfantsEcrans.sections.workshop.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.workshop.intro')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.workshop.speedboat.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.workshop.speedboat.description')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.workshop.storyboard.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.workshop.storyboard.description')}
            </p>

            <span className={styles.methodBadge}>
              {t('enfantsEcrans.sections.workshop.affinityMapping.badge')}
            </span>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.workshop.affinityMapping.description')}
            </p>

            <div className={styles.myRole}>
              <p className={styles.myRoleText}>
                {t('enfantsEcrans.sections.workshop.myRole')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Section 05 — Solution */
const SectionSolution = ({ t }) => {
  const approachTags = t('enfantsEcrans.sections.solution.approachTags', {
    returnObjects: true,
  })
  const objectives = t('enfantsEcrans.sections.solution.objectives', {
    returnObjects: true,
  })
  const exampleSteps = t('enfantsEcrans.sections.solution.exampleSteps', {
    returnObjects: true,
  })
  const approachArray = Array.isArray(approachTags) ? approachTags : []
  const objectivesArray = Array.isArray(objectives) ? objectives : []
  const stepsArray = Array.isArray(exampleSteps) ? exampleSteps : []

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <div className={styles.sectionGrid}>
          <div className={styles.sectionLabel}>
            <span>{t('enfantsEcrans.sections.solution.number')}</span>
            <span>{t('enfantsEcrans.sections.solution.label')}</span>
          </div>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>
              {t('enfantsEcrans.sections.solution.title')}
            </h2>
            <p className={styles.paragraph}>
              {t('enfantsEcrans.sections.solution.intro')}
            </p>

            <div className={styles.tagsRow}>
              {approachArray.map((tag, i) => (
                <span key={i} className={styles.inlineTag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.objectivesGrid}>
              {objectivesArray.map((obj, index) => (
                <div key={index} className={styles.objectiveItem}>
                  <span className={styles.objectiveEmoji}>{obj.emoji}</span>
                  <span className={styles.objectiveLabel}>{obj.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.stepsGrid}>
              {stepsArray.map((step, index) => (
                <div key={index} className={styles.stepCard}>
                  <div className={styles.stepNumber}>
                    {t('enfantsEcrans.sections.solution.stepLabel')} {index + 1}
                  </div>
                  <p className={styles.stepScenario}>{step.scenario}</p>
                  <span className={styles.stepInteractionLabel}>
                    {t('enfantsEcrans.sections.solution.interactionLabel')}
                  </span>
                  <p className={styles.stepInteraction}>{step.interaction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnfantsEcransTemplate

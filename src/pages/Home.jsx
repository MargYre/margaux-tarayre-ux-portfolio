import { useTranslation } from 'react-i18next'
import HeroSection from '../components/Hero/HeroSection'
import ProjectsGrid from '../components/Projects/ProjectsGrid'
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button'
import styles from './Home.module.scss'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <HeroSection />
      <ProjectsGrid limit={3} />
      <div className={styles.viewAllWrapper}>
        <Button
          variant="primary"
          href="/projects"
          className={styles.seeAllButton}
        >
          <span>{t('home.projects.seeAll')}</span>
          <span className={styles.seeAllArrow} aria-hidden="true">
            {' '}
          </span>
        </Button>
      </div>
      <Footer />
    </>
  )
}

export default Home

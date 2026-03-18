import HeroSection from '../components/Hero/HeroSection'
import ProjectsGrid from '../components/Projects/ProjectsGrid'
import Footer from '../components/Footer/Footer'
import Button from '../components/Button/Button'

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProjectsGrid limit={6} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2.5rem 0 3rem' }}>
        <Button variant="primary" href="/projects">
          See all projects
        </Button>
      </div>
      <Footer />
    </>
  )
}

export default Home

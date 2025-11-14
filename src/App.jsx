import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTheme } from './contexts/ThemeContext'
import CustomCursor from './components/Cursor/CustomCursor'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home'
import About from './pages/about/About'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import './App.module.scss'

function App() {
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <AppContent theme={theme} />
    </BrowserRouter>
  )
}

function AppContent({ theme }) {
  const location = useLocation()

  // Scroll en haut à chaque changement de page
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 50)
      }
    }
  }, [location])

  return (
    <div className="app" data-theme={theme}>
      <CustomCursor />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

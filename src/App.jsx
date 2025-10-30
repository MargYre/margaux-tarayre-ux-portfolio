import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useTheme } from './contexts/ThemeContext'
import CustomCursor from './components/Cursor/CustomCursor'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home'
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
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="app" data-theme={theme}>
      <CustomCursor />
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

import { createContext, useContext, useState, useEffect } from 'react'

// createContext = Crée un "conteneur" de données accessible partout
// Justification : Évite de passer le thème via props à travers 10 composants
const ThemeContext = createContext()

// Hook personnalisé pour utiliser le thème facilement
// Justification UX : API simple et claire pour les composants
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Fonction pour détecter la préférence système
  const getSystemTheme = () => {
    // prefers-color-scheme = API navigateur pour détecter le thème système
    // Justification Accessibilité : Respect des préférences utilisateur
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark'
    }
    return 'light'
  }

  // Initialisation du thème
  // 1. Vérifie localStorage (préférence sauvegardée)
  // 2. Sinon, utilise la préférence système
  // 3. Par défaut : light
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || getSystemTheme()
  })

  // Effet : Applique le thème au DOM et sauvegarde dans localStorage
  useEffect(() => {
    // Ajoute/enlève la classe 'dark' sur <html>
    // Justification : Les CSS variables réagiront à cette classe
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // Sauvegarde la préférence
    localStorage.setItem('theme', theme)
  }, [theme])

  // Écoute les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = e => {
      // Si l'utilisateur n'a pas de préférence explicite, suis le système
      const savedTheme = localStorage.getItem('theme')
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    // Ancien navigateur : addListener, moderne : addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  // Fonction toggle pour basculer entre light/dark
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Value = objet exposé à tous les composants enfants
  const value = {
    theme, // État actuel ('light' ou 'dark')
    toggleTheme, // Fonction pour basculer
    isDark: theme === 'dark', // Helper boolean pratique
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

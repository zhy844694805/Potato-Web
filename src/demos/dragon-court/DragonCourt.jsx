/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import DCHeader from './components/DCHeader'
import DCFooter from './components/DCFooter'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import ChefPage from './pages/ChefPage'
import GalleryPage from './pages/GalleryPage'
import ReservationPage from './pages/ReservationPage'
import ContactPage from './pages/ContactPage'
import './DragonCourt.css'

// Language Context for Dragon Court
const DCLanguageContext = createContext()

export const useDCLanguage = () => {
  const context = useContext(DCLanguageContext)
  if (!context) {
    throw new Error('useDCLanguage must be used within DragonCourt')
  }
  return context
}

function DragonCourt() {
  const [language, setLanguage] = useState('zh')

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  // Text helper
  const t = (obj) => obj?.[language] || obj?.en || obj?.zh || ''

  return (
    <DCLanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      <div className="dc-app">
        <DCHeader />
        <main className="dc-main">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="chef" element={<ChefPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </main>
        <DCFooter />
      </div>
    </DCLanguageContext.Provider>
  )
}

export default DragonCourt

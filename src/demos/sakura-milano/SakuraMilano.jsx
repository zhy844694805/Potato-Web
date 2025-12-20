import { useState, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import SushiHeader from './components/SushiHeader'
import SushiFooter from './components/SushiFooter'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ReservationPage from './pages/ReservationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './SakuraMilano.css'

// Language Context for the restaurant app
const LanguageContext = createContext()

export const useRestaurantLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useRestaurantLanguage must be used within SakuraMilano')
  }
  return context
}

function SakuraMilano() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = (lang) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage }}>
      <div className="sakura-milano-app">
        <SushiHeader />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Routes>
        </main>
        <SushiFooter />
      </div>
    </LanguageContext.Provider>
  )
}

export default SakuraMilano

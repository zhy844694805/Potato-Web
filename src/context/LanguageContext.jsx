import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLang)
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

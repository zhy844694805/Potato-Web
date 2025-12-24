import { createContext, useContext, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

const LANGUAGES = ['it', 'en', 'zh']

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const language = i18n.language

  const setLanguage = useCallback((lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }, [i18n])

  const toggleLanguage = useCallback(() => {
    const currentIndex = LANGUAGES.indexOf(language)
    const nextIndex = (currentIndex + 1) % LANGUAGES.length
    const newLang = LANGUAGES[nextIndex]
    setLanguage(newLang)
  }, [language, setLanguage])

  const value = useMemo(() => ({
    language,
    toggleLanguage,
    setLanguage,
    languages: LANGUAGES
  }), [language, toggleLanguage, setLanguage])

  return (
    <LanguageContext.Provider value={value}>
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

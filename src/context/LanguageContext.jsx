/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

const LANGUAGES = ['zh', 'en', 'it']
const DEFAULT_LANGUAGE = 'en'

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  // 确保 language 始终是支持的语言之一
  const rawLanguage = i18n.language || DEFAULT_LANGUAGE
  const language = LANGUAGES.includes(rawLanguage) ? rawLanguage : DEFAULT_LANGUAGE

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

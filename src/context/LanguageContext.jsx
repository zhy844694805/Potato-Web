import { createContext, useContext, useMemo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const language = i18n.language

  const toggleLanguage = useCallback(() => {
    const newLang = language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(newLang)
    localStorage.setItem('language', newLang)
  }, [language, i18n])

  const value = useMemo(() => ({ language, toggleLanguage }), [language, toggleLanguage])

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

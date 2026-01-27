/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';

const TZLanguageContext = createContext();

const LANG_KEY = 'tz-language';

export function TZLanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && ['zh', 'en', 'it'].includes(saved)) {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = useCallback((lang) => {
    if (['zh', 'en', 'it'].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem(LANG_KEY, lang);
    }
  }, []);

  const t = useCallback((content) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    if (typeof content === 'object') {
      return content[language] || content.en || content.zh || content.it || '';
    }
    return String(content);
  }, [language]);

  const value = { language, setLanguage, t };

  return (
    <TZLanguageContext.Provider value={value}>
      {children}
    </TZLanguageContext.Provider>
  );
}

export function useTZLanguage() {
  const context = useContext(TZLanguageContext);
  if (!context) {
    throw new Error('useTZLanguage must be used within a TZLanguageProvider');
  }
  return context;
}

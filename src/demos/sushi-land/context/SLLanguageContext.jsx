/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';

const SLLanguageContext = createContext();

const LANG_KEY = 'sl-language';

export function SLLanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved && ['it', 'en', 'zh'].includes(saved)) {
        return saved;
      }
    }
    return 'it';
  });

  const setLanguage = useCallback((lang) => {
    if (['it', 'en', 'zh'].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem(LANG_KEY, lang);
    }
  }, []);

  const t = useCallback((content) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    if (typeof content === 'object') {
      return content[language] || content.it || content.en || content.zh || '';
    }
    return String(content);
  }, [language]);

  return (
    <SLLanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </SLLanguageContext.Provider>
  );
}

export function useSLLanguage() {
  const context = useContext(SLLanguageContext);
  if (!context) {
    throw new Error('useSLLanguage must be used within a SLLanguageProvider');
  }
  return context;
}

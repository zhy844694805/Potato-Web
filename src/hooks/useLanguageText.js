import { useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

/**
 * Custom hook for translating content based on current language
 * Eliminates repeated translation logic across components
 *
 * @returns {Function} t - Translation function that accepts (zh, en, it) or { zh, en, it } object
 *
 * @example
 * // Usage with individual strings
 * const { t } = useLanguageText()
 * t('中文', 'English', 'Italiano')
 *
 * @example
 * // Usage with translation object
 * const { t } = useLanguageText()
 * const title = { zh: '标题', en: 'Title', it: 'Titolo' }
 * t(title)
 */
export const useLanguageText = () => {
  const { language } = useLanguage()

  const t = useCallback((zh, en, it) => {
    // Support both object format { zh, en, it } and individual arguments
    if (typeof zh === 'object' && zh !== null) {
      const obj = zh
      return language === 'zh' ? obj.zh : language === 'it' ? (obj.it || obj.en) : obj.en
    }
    return language === 'zh' ? zh : language === 'it' ? (it || en) : en
  }, [language])

  return { t, language }
}

export default useLanguageText

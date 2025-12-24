import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zhCommon from './zh/common.json'
import enCommon from './en/common.json'
import itCommon from './it/common.json'

// 支持的语言列表
const SUPPORTED_LANGUAGES = ['zh', 'en', 'it']
const DEFAULT_LANGUAGE = 'zh'

// 检测浏览器语言并映射到支持的语言
const detectBrowserLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage || ''
  const langCode = browserLang.split('-')[0].toLowerCase()

  // 中文变体映射
  if (langCode === 'zh' || browserLang.startsWith('zh')) {
    return 'zh'
  }
  // 意大利语
  if (langCode === 'it') {
    return 'it'
  }
  // 英语及其他语言默认英语
  if (langCode === 'en' || SUPPORTED_LANGUAGES.includes(langCode) === false) {
    return 'en'
  }

  return SUPPORTED_LANGUAGES.includes(langCode) ? langCode : DEFAULT_LANGUAGE
}

// 获取初始语言：优先使用本地存储，否则检测浏览器语言
const getInitialLanguage = () => {
  const savedLang = localStorage.getItem('language')
  if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
    return savedLang
  }
  return detectBrowserLanguage()
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: zhCommon
      },
      en: {
        translation: enCommon
      },
      it: {
        translation: itCommon
      }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

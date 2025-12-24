import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zhCommon from './zh/common.json'
import enCommon from './en/common.json'
import itCommon from './it/common.json'

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
    lng: localStorage.getItem('language') || 'zh',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

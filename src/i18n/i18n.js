import { createI18n } from 'vue-i18n'
import { languages, defaultLocale } from './index.js'

const localStorageLang = localStorage.getItem("lang")

const i18n = createI18n({
  legacy: true,
  locale: localStorageLang ? localStorageLang : defaultLocale,
  fallbackLocale: 'en',
  messages: languages
})

export default i18n
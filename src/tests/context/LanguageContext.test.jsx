import { describe, it, expect, vi, beforeEach } from 'vitest'

// Simple test for language context existence
describe('LanguageContext', () => {
  beforeEach(() => {
    // Mock i18n
    vi.mock('react-i18next', () => ({
      useTranslation: () => ({
        t: (key) => key,
        i18n: {
          language: 'en',
          changeLanguage: vi.fn()
        }
      }),
      initReactI18next: {
        type: '3rdParty',
        init: vi.fn()
      }
    }))
  })

  it('LanguageContext module exists', async () => {
    const module = await import('../../context/LanguageContext')
    expect(module).toBeDefined()
    expect(module.LanguageProvider).toBeDefined()
    expect(module.useLanguage).toBeDefined()
  })

  it('LanguageProvider is a function component', async () => {
    const { LanguageProvider } = await import('../../context/LanguageContext')
    expect(typeof LanguageProvider).toBe('function')
  })

  it('useLanguage is a function', async () => {
    const { useLanguage } = await import('../../context/LanguageContext')
    expect(typeof useLanguage).toBe('function')
  })
})

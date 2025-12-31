import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {
  trackEvent,
  trackButtonClick,
  trackPortfolioView,
  trackServiceView,
  trackLanguageSwitch,
  trackOutboundLink
} from '../../utils/analytics.js'

describe('Analytics Utils', () => {
  let gtagMock

  beforeEach(() => {
    // Setup gtag mock
    gtagMock = vi.fn()
    window.gtag = gtagMock
  })

  afterEach(() => {
    delete window.gtag
  })

  describe('trackEvent', () => {
    it('does not throw when gtag is not available', () => {
      delete window.gtag
      expect(() => trackEvent('test_event', { foo: 'bar' })).not.toThrow()
    })
  })

  describe('trackButtonClick', () => {
    it('is a function', () => {
      expect(typeof trackButtonClick).toBe('function')
    })

    it('does not throw when called', () => {
      expect(() => trackButtonClick('CTA Button', 'Header')).not.toThrow()
    })
  })

  describe('trackPortfolioView', () => {
    it('is a function', () => {
      expect(typeof trackPortfolioView).toBe('function')
    })

    it('does not throw when called', () => {
      expect(() => trackPortfolioView('sakura-milano', 'Sakura Milano')).not.toThrow()
    })
  })

  describe('trackServiceView', () => {
    it('is a function', () => {
      expect(typeof trackServiceView).toBe('function')
    })

    it('does not throw when called', () => {
      expect(() => trackServiceView('web-development', 'Web Development')).not.toThrow()
    })
  })

  describe('trackLanguageSwitch', () => {
    it('is a function', () => {
      expect(typeof trackLanguageSwitch).toBe('function')
    })

    it('does not throw when called', () => {
      expect(() => trackLanguageSwitch('zh', 'en')).not.toThrow()
    })
  })

  describe('trackOutboundLink', () => {
    it('is a function', () => {
      expect(typeof trackOutboundLink).toBe('function')
    })

    it('does not throw when called', () => {
      expect(() => trackOutboundLink('https://example.com', 'Example')).not.toThrow()
    })
  })
})

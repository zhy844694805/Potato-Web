import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
import { trackLanguageSwitch } from '../../utils/analytics'
import ThemeToggle from '../ui/ThemeToggle'
import './Header.css'

function Header() {
  const { t } = useTranslation()
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/pricing', label: t('nav.pricing') },
    { path: '/quote', label: t('nav.quote') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/faq', label: t('nav.faq') },
    { path: '/testimonials', label: t('nav.testimonials') },
    { path: '/about', label: t('nav.about') },
    { path: '/contact', label: t('nav.contact') }
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        {language === 'zh' ? '跳转到主要内容' : 'Skip to main content'}
      </a>
      <header className="header">
        <div className="header-container">
        <Link to="/" className="header-brand">
          {language === 'zh' ? '极简科技' : 'Minimal Tech'}
        </Link>

        <nav
          className={`header-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}
          aria-label={language === 'zh' ? '主导航' : language === 'it' ? 'Navigazione principale' : 'Main navigation'}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />

          <button
            className="lang-switcher"
            onClick={() => {
              const fromLang = language
              const langOrder = { it: 'en', en: 'zh', zh: 'it' }
              const toLang = langOrder[language] || 'it'
              trackLanguageSwitch(fromLang, toLang)
              toggleLanguage()
            }}
            aria-label={language === 'zh' ? '切换语言' : language === 'it' ? 'Cambia lingua' : 'Switch language'}
          >
            {language === 'it' ? 'EN' : language === 'en' ? '中' : 'IT'}
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={language === 'zh' ? '切换菜单' : language === 'it' ? 'Apri menu' : 'Toggle menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header

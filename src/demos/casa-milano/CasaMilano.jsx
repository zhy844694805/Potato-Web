/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useMemo } from 'react'
import {
  agencyInfo,
  properties,
  areas,
  priceRanges,
  heroImage,
  formatPrice,
  getTranslation
} from './data/properties-data'
import './CasaMilano.css'

// Language Context for the real estate app
const LanguageContext = createContext()

export const useRealEstateLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useRealEstateLanguage must be used within CasaMilano')
  }
  return context
}

// Icons as SVG components
const Icons = {
  Home: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  Bed: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
    </svg>
  ),
  Bath: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M7 7c0-1.1.9-2 2-2s2 .9 2 2v1H7V7zm10 3H5V8h.83C6.21 7.42 6.5 6.75 6.5 6c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .75.21 1.42.67 2H17c1.1 0 2 .9 2 2v3h2v2H1v-2h2v-3c0-1.1.9-2 2-2h2V8h10v2zm2 5H3v5h16v-5z"/>
    </svg>
  ),
  Area: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>
    </svg>
  ),
  Location: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  ),
  Email: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  WeChat: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.139.045c.133 0 .241-.108.241-.241 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.588c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.983.97-.983zm4.844 0c.535 0 .969.44.969.983a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.983.969-.983z"/>
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  ),
  Menu: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  ),
  Key: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  ),
  Sale: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
    </svg>
  ),
  Chart: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

// Header Component
function Header() {
  const { language, setLanguage } = useRealEstateLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = (path) => getTranslation(language, path)

  const navLinks = [
    { key: 'home', label: t('nav.home') },
    { key: 'properties', label: t('nav.properties') },
    { key: 'areas', label: t('nav.areas') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') }
  ]

  const scrollToSection = (key) => {
    const element = document.getElementById(`casa-${key}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="casa-header">
      <div className="casa-header-inner">
        <a href="#" className="casa-logo" onClick={() => scrollToSection('home')}>
          <span className="casa-logo-icon"><Icons.Home /></span>
          <span className="casa-logo-text">Casa <span>Milano</span></span>
        </a>

        <button
          className="casa-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>

        <nav className={`casa-nav ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.key}
              href={`#casa-${link.key}`}
              className="casa-nav-link"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.key)
              }}
            >
              {link.label}
            </a>
          ))}

          <div className="casa-lang-switch">
            {['it', 'en', 'zh'].map(lang => (
              <button
                key={lang}
                className={`casa-lang-btn ${language === lang ? 'active' : ''}`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

// Hero Section
function HeroSection() {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  const scrollToProperties = () => {
    const element = document.getElementById('casa-properties')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('casa-contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="casa-hero" id="casa-home">
      <div className="casa-hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="casa-hero-overlay" />
      <div className="casa-hero-content casa-fade-in-up">
        <div className="casa-hero-badge">
          {language === 'zh' ? '专业华人房产服务' : language === 'en' ? 'Professional Chinese Real Estate Service' : 'Servizio Immobiliare Professionale'}
        </div>
        <h1>{t('hero.tagline')}</h1>
        <p className="casa-hero-subtitle">{t('hero.subtitle')}</p>
        <div className="casa-hero-buttons">
          <button className="casa-btn casa-btn-primary" onClick={scrollToProperties}>
            <Icons.Search /> {t('hero.cta')}
          </button>
          <button className="casa-btn casa-btn-outline" onClick={scrollToContact}>
            {t('hero.ctaSecondary')}
          </button>
        </div>
      </div>
    </section>
  )
}

// Search Section
function SearchSection({ filters, setFilters, onSearch }) {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  const currentPriceRanges = filters.type === 'rent' ? priceRanges.rent : priceRanges.sale

  return (
    <section className="casa-search-section">
      <div className="casa-container">
        <div className="casa-search-box">
          <h3 className="casa-search-title">{t('search.title')}</h3>
          <div className="casa-search-filters">
            <div className="casa-filter-group">
              <label className="casa-filter-label">{t('search.type')}</label>
              <select
                className="casa-filter-select"
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value, priceRange: 'any' })}
              >
                <option value="all">{t('search.all')}</option>
                <option value="sale">{t('search.sale')}</option>
                <option value="rent">{t('search.rent')}</option>
              </select>
            </div>

            <div className="casa-filter-group">
              <label className="casa-filter-label">{t('search.area')}</label>
              <select
                className="casa-filter-select"
                value={filters.area}
                onChange={(e) => setFilters({ ...filters, area: e.target.value })}
              >
                <option value="all">{t('search.allAreas')}</option>
                {areas.map(area => (
                  <option key={area.id} value={area.id}>{area.name[language]}</option>
                ))}
              </select>
            </div>

            <div className="casa-filter-group">
              <label className="casa-filter-label">{t('search.priceRange')}</label>
              <select
                className="casa-filter-select"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                {currentPriceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.label[language]}</option>
                ))}
              </select>
            </div>

            <div className="casa-filter-group">
              <label className="casa-filter-label">{t('search.bedrooms')}</label>
              <select
                className="casa-filter-select"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              >
                <option value="any">{t('search.anyBedrooms')}</option>
                <option value="0">Studio</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>
          <div className="casa-search-btn-wrapper">
            <button className="casa-btn casa-btn-primary casa-search-btn" onClick={onSearch}>
              <Icons.Search /> {t('search.search')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Property Card Component
function PropertyCard({ property }) {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  const getTagClass = (tag) => {
    switch (tag) {
      case 'new': return 'casa-badge-new'
      case 'exclusive': return 'casa-badge-exclusive'
      case 'reduced': return 'casa-badge-reduced'
      default: return ''
    }
  }

  const getTagLabel = (tag) => {
    switch (tag) {
      case 'new': return t('property.new')
      case 'exclusive': return t('property.exclusive')
      case 'reduced': return t('property.reduced')
      default: return ''
    }
  }

  return (
    <article className="casa-property-card casa-fade-in-up">
      <div className="casa-property-image-wrapper">
        <img
          src={property.image}
          alt={property.title[language]}
          className="casa-property-image"
          loading="lazy"
        />
        <div className="casa-property-badges">
          <span className={`casa-property-badge ${property.type === 'sale' ? 'casa-badge-sale' : 'casa-badge-rent'}`}>
            {property.type === 'sale' ? t('property.forSale') : t('property.forRent')}
          </span>
          {property.tag && (
            <span className={`casa-property-badge ${getTagClass(property.tag)}`}>
              {getTagLabel(property.tag)}
            </span>
          )}
        </div>
        <button className="casa-property-favorite" aria-label="Add to favorites">
          <Icons.Heart />
        </button>
      </div>
      <div className="casa-property-content">
        <div className="casa-property-price">
          {formatPrice(property.price, property.type, language)}
          {property.type === 'rent' && <span> {t('property.perMonth')}</span>}
        </div>
        <h3 className="casa-property-title">{property.title[language]}</h3>
        <p className="casa-property-address">
          <Icons.Location /> {property.address}, {areas.find(a => a.id === property.area)?.name[language]}
        </p>
        <div className="casa-property-specs">
          <span className="casa-property-spec">
            <Icons.Bed /> {property.bedrooms} {t('property.beds')}
          </span>
          <span className="casa-property-spec">
            <Icons.Bath /> {property.bathrooms} {t('property.baths')}
          </span>
          <span className="casa-property-spec">
            <Icons.Area /> {property.sqm} {t('property.sqm')}
          </span>
        </div>
      </div>
    </article>
  )
}

// Properties Section
function PropertiesSection({ filteredProperties }) {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  return (
    <section className="casa-section" id="casa-properties">
      <div className="casa-container">
        <div className="casa-section-header">
          <h2 className="casa-heading-2">{t('nav.properties')}</h2>
          <div className="casa-divider" />
        </div>

        <div className="casa-results-header">
          <p className="casa-results-count">
            <span>{filteredProperties.length}</span> {t('search.results')}
          </p>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="casa-properties-grid">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--casa-gray)' }}>
            {t('search.noResults')}
          </p>
        )}
      </div>
    </section>
  )
}

// Areas Section
function AreasSection() {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  return (
    <section className="casa-section" id="casa-areas" style={{ background: 'var(--casa-bg-secondary)' }}>
      <div className="casa-container">
        <div className="casa-section-header">
          <h2 className="casa-heading-2">{t('areas.title')}</h2>
          <div className="casa-divider" />
          <p>{t('areas.subtitle')}</p>
        </div>

        <div className="casa-areas-grid">
          {areas.slice(0, 6).map(area => {
            const count = properties.filter(p => p.area === area.id).length
            return (
              <div key={area.id} className="casa-area-card">
                <img src={area.image} alt={area.name[language]} className="casa-area-image" loading="lazy" />
                <div className="casa-area-content">
                  <h3 className="casa-area-name">{area.name[language]}</h3>
                  <p className="casa-area-count">{count} {t('areas.properties')}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  const services = [
    { key: 'buying', icon: <Icons.Key /> },
    { key: 'selling', icon: <Icons.Sale /> },
    { key: 'rental', icon: <Icons.Home /> },
    { key: 'investment', icon: <Icons.Chart /> }
  ]

  return (
    <section className="casa-section">
      <div className="casa-container">
        <div className="casa-section-header">
          <h2 className="casa-heading-2">{t('services.title')}</h2>
          <div className="casa-divider" />
          <p>{t('services.subtitle')}</p>
        </div>

        <div className="casa-services-grid">
          {services.map(service => (
            <div key={service.key} className="casa-service-card">
              <div className="casa-service-icon">{service.icon}</div>
              <h3>{t(`services.${service.key}.title`)}</h3>
              <p>{t(`services.${service.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const { language } = useRealEstateLanguage()

  const stats = [
    { value: '500+', label: { it: 'Immobili Venduti', en: 'Properties Sold', zh: '已售房产' } },
    { value: '15+', label: { it: 'Anni di Esperienza', en: 'Years Experience', zh: '年经验' } },
    { value: '1000+', label: { it: 'Clienti Soddisfatti', en: 'Happy Clients', zh: '满意客户' } },
    { value: '98%', label: { it: 'Tasso di Successo', en: 'Success Rate', zh: '成功率' } }
  ]

  return (
    <section className="casa-stats-section">
      <div className="casa-container">
        <div className="casa-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="casa-stat-item">
              <h3>{stat.value}</h3>
              <p>{stat.label[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buy',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', interest: 'buy', message: '' })
  }

  return (
    <section className="casa-section casa-contact-section" id="casa-contact">
      <div className="casa-container">
        <div className="casa-section-header">
          <h2 className="casa-heading-2">{t('contact.title')}</h2>
          <div className="casa-divider" />
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="casa-contact-grid">
          <div className="casa-contact-info">
            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.Location /></div>
              <div>
                <h4>{t('contact.address')}</h4>
                <p>{agencyInfo.address.street}<br />{agencyInfo.address.postalCode} {agencyInfo.address.city}</p>
              </div>
            </div>

            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.Phone /></div>
              <div>
                <h4>{t('contact.phone')}</h4>
                <a href={`tel:${agencyInfo.phone}`}>{agencyInfo.phone}</a>
              </div>
            </div>

            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.WhatsApp /></div>
              <div>
                <h4>{t('contact.whatsapp')}</h4>
                <a href={`https://wa.me/${agencyInfo.whatsapp.replace(/\s/g, '')}`}>{agencyInfo.whatsapp}</a>
              </div>
            </div>

            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.WeChat /></div>
              <div>
                <h4>{t('contact.wechat')}</h4>
                <p>{agencyInfo.wechat}</p>
              </div>
            </div>

            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.Email /></div>
              <div>
                <h4>{t('contact.email')}</h4>
                <a href={`mailto:${agencyInfo.email}`}>{agencyInfo.email}</a>
              </div>
            </div>

            <div className="casa-contact-item">
              <div className="casa-contact-icon"><Icons.Clock /></div>
              <div>
                <h4>{t('contact.hours')}</h4>
                <p>
                  {agencyInfo.hours.weekdays.days[language]}: {agencyInfo.hours.weekdays.time}<br />
                  {agencyInfo.hours.saturday.days[language]}: {agencyInfo.hours.saturday.time}<br />
                  {agencyInfo.hours.sunday.days[language]}: {agencyInfo.hours.sunday.status[language]}
                </p>
              </div>
            </div>
          </div>

          <form className="casa-form" onSubmit={handleSubmit}>
            <h3>{t('contact.form.title')}</h3>

            <div className="casa-form-row">
              <div className="casa-form-group">
                <label className="casa-form-label">{t('contact.form.name')}</label>
                <input
                  type="text"
                  className="casa-form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="casa-form-group">
                <label className="casa-form-label">{t('contact.form.email')}</label>
                <input
                  type="email"
                  className="casa-form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="casa-form-row">
              <div className="casa-form-group">
                <label className="casa-form-label">{t('contact.form.phone')}</label>
                <input
                  type="tel"
                  className="casa-form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="casa-form-group">
                <label className="casa-form-label">{t('contact.form.interest')}</label>
                <select
                  className="casa-form-select"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="buy">{t('contact.form.interestBuy')}</option>
                  <option value="rent">{t('contact.form.interestRent')}</option>
                  <option value="sell">{t('contact.form.interestSell')}</option>
                  <option value="other">{t('contact.form.interestOther')}</option>
                </select>
              </div>
            </div>

            <div className="casa-form-group">
              <label className="casa-form-label">{t('contact.form.message')}</label>
              <textarea
                className="casa-form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="casa-btn casa-btn-primary casa-form-submit">
              {t('contact.form.submit')}
            </button>

            {submitted && (
              <div className="casa-success-message">
                {t('contact.form.success')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  const { language } = useRealEstateLanguage()
  const t = (path) => getTranslation(language, path)

  return (
    <footer className="casa-footer">
      <div className="casa-footer-inner">
        <div className="casa-footer-brand">
          <h3>Casa <span>Milano</span></h3>
          <p>{t('footer.tagline')}</p>
          <div className="casa-social-links">
            <a href={agencyInfo.social.instagram} className="casa-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Icons.Instagram />
            </a>
            <a href={agencyInfo.social.facebook} className="casa-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Icons.Facebook />
            </a>
            <a href={agencyInfo.social.linkedin} className="casa-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Icons.LinkedIn />
            </a>
            <a href="#" className="casa-social-link" aria-label="WeChat">
              <Icons.WeChat />
            </a>
          </div>
        </div>

        <div className="casa-footer-section">
          <h4>{t('footer.quickLinks')}</h4>
          <ul>
            <li><a href="#casa-home">{t('nav.home')}</a></li>
            <li><a href="#casa-properties">{t('nav.properties')}</a></li>
            <li><a href="#casa-areas">{t('nav.areas')}</a></li>
            <li><a href="#casa-contact">{t('nav.contact')}</a></li>
          </ul>
        </div>

        <div className="casa-footer-section">
          <h4>{t('nav.properties')}</h4>
          <ul>
            <li><a href="#casa-properties">{t('nav.sell')}</a></li>
            <li><a href="#casa-properties">{t('nav.rent')}</a></li>
          </ul>
        </div>

        <div className="casa-footer-section">
          <h4>{t('contact.wechat')}</h4>
          <div className="casa-wechat-card">
            <div className="casa-wechat-qr">QR Code</div>
            <p className="casa-wechat-id">ID: {agencyInfo.wechat}</p>
          </div>
        </div>
      </div>

      <div className="casa-footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}

// Main Component
function CasaMilano() {
  const [language, setLanguage] = useState('it')
  const [filters, setFilters] = useState({
    type: 'all',
    area: 'all',
    priceRange: 'any',
    bedrooms: 'any'
  })

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Filter by type
      if (filters.type !== 'all' && property.type !== filters.type) {
        return false
      }

      // Filter by area
      if (filters.area !== 'all' && property.area !== filters.area) {
        return false
      }

      // Filter by price range
      if (filters.priceRange !== 'any') {
        const priceRangeList = filters.type === 'rent' ? priceRanges.rent : priceRanges.sale
        const selectedRange = priceRangeList.find(r => r.id === filters.priceRange)
        if (selectedRange && (property.price < selectedRange.min || property.price > selectedRange.max)) {
          return false
        }
      }

      // Filter by bedrooms
      if (filters.bedrooms !== 'any') {
        const minBedrooms = parseInt(filters.bedrooms)
        if (property.bedrooms < minBedrooms) {
          return false
        }
      }

      return true
    })
  }, [filters])

  const handleSearch = () => {
    const element = document.getElementById('casa-properties')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="casa-milano-app">
        <Header />
        <main>
          <HeroSection />
          <SearchSection filters={filters} setFilters={setFilters} onSearch={handleSearch} />
          <PropertiesSection filteredProperties={filteredProperties} />
          <AreasSection />
          <ServicesSection />
          <StatsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  )
}

export default CasaMilano

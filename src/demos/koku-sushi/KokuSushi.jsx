import { useState } from 'react'
import { menuItems, translations } from './data/restaurant-data'
import './KokuSushi.css'

function KokuSushi() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('omakase')

  const t = translations[language]
  const categories = ['omakase', 'sushi', 'wagyu', 'sake']
  const filteredMenu = menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="koku-app">
      {/* Header */}
      <header className="koku-header">
        <div className="koku-header-inner">
          <div className="koku-lang-switch">
            {['it', 'en', 'zh'].map(lang => (
              <button
                key={lang}
                className={`koku-lang-btn ${language === lang ? 'active' : ''}`}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#" className="koku-logo">
            <span className="koku-logo-jp">光</span>
            <span className="koku-logo-text">KOKU</span>
          </a>
          <a href="#reserve" className="koku-reserve-btn">{t.nav.reserve}</a>
        </div>
        <nav className="koku-nav">
          <a href="#menu">{t.nav.menu}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#private">{t.nav.private}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="koku-hero">
        <div className="koku-hero-bg">
          <img src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=1920" alt="Sushi" />
        </div>
        <div className="koku-hero-overlay"></div>
        <div className="koku-hero-content">
          <div className="koku-hero-line"></div>
          <h1 className="koku-hero-title">KOKU SUSHI</h1>
          <p className="koku-hero-subtitle">{t.hero.subtitle}</p>
          <div className="koku-hero-line"></div>
          <a href="#reserve" className="koku-btn koku-btn-gold">{t.hero.cta}</a>
        </div>
      </section>

      {/* Intro */}
      <section className="koku-intro">
        <div className="koku-container">
          <div className="koku-intro-content">
            <span className="koku-intro-jp">美</span>
            <h2>{t.intro.title}</h2>
            <div className="koku-divider"></div>
            <p>{t.intro.text}</p>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="koku-menu">
        <div className="koku-container">
          <div className="koku-section-header">
            <span className="koku-section-jp">献立</span>
            <h2>{t.menu.title}</h2>
            <p>{t.menu.subtitle}</p>
          </div>

          <div className="koku-menu-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`koku-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t.menu.categories[cat]}
              </button>
            ))}
          </div>

          <div className="koku-menu-grid">
            {filteredMenu.map(item => (
              <div key={item.id} className="koku-menu-card">
                <div className="koku-menu-image">
                  <img src={item.image} alt={item.name[language]} />
                </div>
                <div className="koku-menu-content">
                  <h3>{item.name[language]}</h3>
                  <p>{item.description[language]}</p>
                  <span className="koku-menu-price">€{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="koku-experience">
        <div className="koku-experience-bg">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920" alt="Restaurant" />
        </div>
        <div className="koku-experience-overlay"></div>
        <div className="koku-container">
          <div className="koku-section-header koku-section-header-light">
            <span className="koku-section-jp">体験</span>
            <h2>{t.experience.title}</h2>
          </div>
          <div className="koku-experience-grid">
            <div className="koku-experience-card">
              <span className="koku-experience-icon">🍽</span>
              <h3>{t.experience.chef}</h3>
              <p>{t.experience.chefText}</p>
            </div>
            <div className="koku-experience-card">
              <span className="koku-experience-icon">🚪</span>
              <h3>{t.experience.private}</h3>
              <p>{t.experience.privateText}</p>
            </div>
            <div className="koku-experience-card">
              <span className="koku-experience-icon">🍶</span>
              <h3>{t.experience.wine}</h3>
              <p>{t.experience.wineText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="koku-reserve">
        <div className="koku-container">
          <div className="koku-reserve-content">
            <span className="koku-reserve-jp">予約</span>
            <h2>{t.reserve.title}</h2>
            <p>{t.reserve.text}</p>
            <div className="koku-reserve-actions">
              <a href="tel:+390212345678" className="koku-btn koku-btn-gold">
                <span className="koku-btn-icon">📞</span>
                {t.reserve.call}
              </a>
              <a href="mailto:reserve@koku-sushi.it" className="koku-btn koku-btn-outline">
                <span className="koku-btn-icon">✉</span>
                {t.reserve.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="koku-footer">
        <div className="koku-container">
          <div className="koku-footer-content">
            <div className="koku-footer-logo">
              <span className="koku-logo-jp">光</span>
              <span className="koku-logo-text">KOKU</span>
            </div>
            <div className="koku-footer-info">
              <p>{t.footer.address}</p>
              <p>{t.footer.hours}</p>
            </div>
            <div className="koku-footer-social">
              <a href="#" className="koku-social-btn">IG</a>
              <a href="#" className="koku-social-btn">FB</a>
            </div>
          </div>
          <div className="koku-footer-bottom">
            <p>© 2024 Koku Sushi. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default KokuSushi

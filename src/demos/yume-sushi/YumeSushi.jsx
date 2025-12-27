import { useState } from 'react'
import { translations, galleryImages } from './data/restaurant-data'
import './YumeSushi.css'

function YumeSushi() {
  const [language, setLanguage] = useState('en')

  const t = translations[language]
  const seasons = ['spring', 'summer', 'autumn', 'winter']
  const prices = { spring: 120, summer: 150, autumn: 150, winter: 180 }

  return (
    <div className="yume-app">
      {/* Header */}
      <header className="yume-header">
        <div className="yume-header-inner">
          <nav className="yume-nav">
            <a href="#philosophy">{t.nav.philosophy}</a>
            <a href="#menu">{t.nav.menu}</a>
          </nav>
          <a href="#" className="yume-logo">夢 YUME</a>
          <div className="yume-header-right">
            <nav className="yume-nav">
              <a href="#chef">{t.nav.chef}</a>
              <a href="#reserve">{t.nav.reserve}</a>
            </nav>
            <div className="yume-lang-switch">
              {['it', 'en', 'zh'].map(lang => (
                <button
                  key={lang}
                  className={`yume-lang-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="yume-hero">
        <div className="yume-hero-content">
          <h1 className="yume-hero-title">{t.hero.title}</h1>
          <p className="yume-hero-tagline">{t.hero.tagline}</p>
        </div>
        <div className="yume-hero-image">
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200" alt="Sushi" />
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="yume-philosophy">
        <div className="yume-container">
          <div className="yume-philosophy-grid">
            <div className="yume-philosophy-content">
              <span className="yume-section-tag">01</span>
              <h2>{t.philosophy.title}</h2>
              <p>{t.philosophy.text}</p>
            </div>
            <div className="yume-philosophy-image">
              <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800" alt="Sushi preparation" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="yume-gallery">
        <div className="yume-gallery-scroll">
          {galleryImages.map(img => (
            <div key={img.id} className="yume-gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="yume-menu">
        <div className="yume-container">
          <div className="yume-menu-header">
            <span className="yume-section-tag">02</span>
            <h2>{t.menu.title}</h2>
          </div>
          <div className="yume-menu-grid">
            {seasons.map((season, idx) => (
              <div key={season} className="yume-menu-card">
                <span className="yume-card-number">0{idx + 1}</span>
                <h3>{t.menu.items[season].name}</h3>
                <p>{t.menu.items[season].desc}</p>
                <span className="yume-card-price">€{prices[season]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section id="chef" className="yume-chef">
        <div className="yume-container">
          <div className="yume-chef-grid">
            <div className="yume-chef-image">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800" alt="Chef" />
            </div>
            <div className="yume-chef-content">
              <span className="yume-section-tag">03</span>
              <h2>{t.chef.title}</h2>
              <h3 className="yume-chef-name">{t.chef.name}</h3>
              <p>{t.chef.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="yume-reserve">
        <div className="yume-container">
          <div className="yume-reserve-content">
            <span className="yume-section-tag">04</span>
            <h2>{t.reserve.title}</h2>
            <p className="yume-reserve-subtitle">{t.reserve.subtitle}</p>

            <div className="yume-reserve-times">
              <div className="yume-time-card">
                <h4>{t.reserve.lunch}</h4>
                <p>{t.reserve.lunchTime}</p>
              </div>
              <div className="yume-time-card">
                <h4>{t.reserve.dinner}</h4>
                <p>{t.reserve.dinnerTime}</p>
              </div>
            </div>

            <a href="mailto:reserve@yume-sushi.it" className="yume-btn">{t.reserve.cta}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="yume-footer">
        <div className="yume-container">
          <div className="yume-footer-grid">
            <div className="yume-footer-brand">
              <span className="yume-footer-logo">夢 YUME</span>
              <p>{t.footer.address}</p>
            </div>
            <div className="yume-footer-social">
              <h4>{t.footer.follow}</h4>
              <div className="yume-social-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
          <div className="yume-footer-bottom">
            <p>© 2024 Yume Sushi. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default YumeSushi

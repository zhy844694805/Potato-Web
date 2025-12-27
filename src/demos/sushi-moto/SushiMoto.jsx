import { useState } from 'react'
import { menuItems, translations, locations } from './data/restaurant-data'
import './SushiMoto.css'

function SushiMoto() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('signature')

  const t = translations[language]
  const categories = ['signature', 'rolls', 'sashimi', 'hot', 'drinks']
  const filteredMenu = menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="moto-app">
      {/* Header */}
      <header className="moto-header">
        <div className="moto-header-inner">
          <a href="#" className="moto-logo">
            <span className="moto-logo-text">SUSHI</span>
            <span className="moto-logo-accent">MOTO</span>
          </a>
          <nav className="moto-nav">
            <a href="#locations" className="moto-nav-link">{t.nav.locations}</a>
            <a href="#menu" className="moto-nav-link">{t.nav.menu}</a>
            <a href="#about" className="moto-nav-link">{t.nav.about}</a>
            <a href="#delivery" className="moto-nav-link">{t.nav.delivery}</a>
          </nav>
          <div className="moto-header-actions">
            <div className="moto-lang-switch">
              {['it', 'en', 'zh'].map(lang => (
                <button
                  key={lang}
                  className={`moto-lang-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <a href="#order" className="moto-btn moto-btn-primary">{t.nav.order}</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="moto-hero">
        <div className="moto-hero-bg">
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1920" alt="Sushi" />
        </div>
        <div className="moto-hero-overlay"></div>
        <div className="moto-hero-content">
          <h1 className="moto-hero-title">
            <span>NO SUSHI</span>
            <span className="moto-hero-accent">NO LIFE</span>
          </h1>
          <p className="moto-hero-subtitle">{t.hero.subtitle}</p>
          <div className="moto-hero-actions">
            <a href="#order" className="moto-btn moto-btn-primary moto-btn-lg">{t.hero.order}</a>
            <a href="#book" className="moto-btn moto-btn-outline moto-btn-lg">{t.hero.book}</a>
          </div>
        </div>
        <div className="moto-hero-scroll">
          <span></span>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="moto-locations">
        <div className="moto-container">
          <div className="moto-section-header">
            <h2>{t.locations.title}</h2>
            <p>{t.locations.subtitle}</p>
          </div>
          <div className="moto-locations-grid">
            {locations.map((loc, idx) => (
              <div key={idx} className="moto-location-card">
                <div className="moto-location-image">
                  <img src={loc.image} alt={loc.name} />
                  <div className="moto-location-overlay">
                    <span className="moto-location-city">{loc.city}</span>
                  </div>
                </div>
                <div className="moto-location-info">
                  <h3>{loc.name}</h3>
                  <p>{loc.address}</p>
                  <div className="moto-location-actions">
                    <a href="#" className="moto-btn moto-btn-sm">{t.locations.book}</a>
                    <a href="#" className="moto-btn moto-btn-outline moto-btn-sm">{t.locations.order}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="moto-menu">
        <div className="moto-container">
          <div className="moto-section-header">
            <h2>{t.menu.title}</h2>
            <p>{t.menu.subtitle}</p>
          </div>

          <div className="moto-menu-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`moto-category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t.menu.categories[cat]}
              </button>
            ))}
          </div>

          <div className="moto-menu-grid">
            {filteredMenu.map(item => (
              <div key={item.id} className="moto-menu-card">
                <div className="moto-menu-image">
                  <img src={item.image} alt={item.name[language]} />
                  {item.isPopular && <span className="moto-badge">{t.menu.popular}</span>}
                </div>
                <div className="moto-menu-content">
                  <div className="moto-menu-header">
                    <h3>{item.name[language]}</h3>
                    <span className="moto-menu-price">€{item.price}</span>
                  </div>
                  <p>{item.description[language]}</p>
                  <button className="moto-add-btn">+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="moto-menu-cta">
            <a href="#" className="moto-btn moto-btn-primary">{t.menu.viewAll}</a>
          </div>
        </div>
      </section>

      {/* About Banner */}
      <section id="about" className="moto-about">
        <div className="moto-about-bg">
          <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1920" alt="Sushi preparation" />
        </div>
        <div className="moto-about-overlay"></div>
        <div className="moto-about-content">
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
          <div className="moto-about-stats">
            <div className="moto-stat">
              <span className="moto-stat-number">9</span>
              <span className="moto-stat-label">{t.about.restaurants}</span>
            </div>
            <div className="moto-stat">
              <span className="moto-stat-number">15+</span>
              <span className="moto-stat-label">{t.about.years}</span>
            </div>
            <div className="moto-stat">
              <span className="moto-stat-number">50K+</span>
              <span className="moto-stat-label">{t.about.customers}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="moto-delivery">
        <div className="moto-container">
          <div className="moto-delivery-grid">
            <div className="moto-delivery-content">
              <h2>{t.delivery.title}</h2>
              <p>{t.delivery.text}</p>
              <div className="moto-delivery-options">
                <div className="moto-delivery-option">
                  <span className="moto-delivery-icon">🚴</span>
                  <span>{t.delivery.bike}</span>
                </div>
                <div className="moto-delivery-option">
                  <span className="moto-delivery-icon">🏠</span>
                  <span>{t.delivery.pickup}</span>
                </div>
              </div>
              <a href="#" className="moto-btn moto-btn-primary">{t.delivery.orderNow}</a>
            </div>
            <div className="moto-delivery-image">
              <img src="https://images.unsplash.com/photo-1562802378-063ec186a863?w=600" alt="Sushi delivery" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="moto-footer">
        <div className="moto-container">
          <div className="moto-footer-grid">
            <div className="moto-footer-brand">
              <div className="moto-logo">
                <span className="moto-logo-text">SUSHI</span>
                <span className="moto-logo-accent">MOTO</span>
              </div>
              <p>{t.footer.tagline}</p>
            </div>
            <div className="moto-footer-links">
              <h4>{t.footer.company}</h4>
              <a href="#">{t.nav.about}</a>
              <a href="#">{t.footer.careers}</a>
              <a href="#">{t.footer.press}</a>
            </div>
            <div className="moto-footer-links">
              <h4>{t.footer.help}</h4>
              <a href="#">{t.footer.contact}</a>
              <a href="#">{t.footer.faq}</a>
              <a href="#">{t.footer.allergens}</a>
            </div>
            <div className="moto-footer-social">
              <h4>{t.footer.follow}</h4>
              <div className="moto-social-links">
                <a href="#" className="moto-social-btn">IG</a>
                <a href="#" className="moto-social-btn">FB</a>
                <a href="#" className="moto-social-btn">TT</a>
              </div>
            </div>
          </div>
          <div className="moto-footer-bottom">
            <p>© 2024 Sushi Moto. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SushiMoto

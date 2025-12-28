import { useState } from 'react'
import { menuItems, translations, locations, reviews, faqItems, stats } from './data/restaurant-data'
import './SushiMoto.css'

function SushiMoto() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('signature')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeReview, setActiveReview] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [showAllLocations, setShowAllLocations] = useState(false)

  const t = translations[language]
  const categories = ['signature', 'rolls', 'sashimi', 'hot', 'drinks', 'desserts']
  const filteredMenu = menuItems.filter(item => item.category === activeCategory)
  const displayedLocations = showAllLocations ? locations : locations.slice(0, 4)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  return (
    <div className="moto-app">
      {/* Header */}
      <header className="moto-header">
        <div className="moto-header-inner">
          <a href="#" className="moto-logo">
            <span className="moto-logo-text">SUSHI</span>
            <span className="moto-logo-accent">MOTO</span>
          </a>
          <nav className={`moto-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#locations" className="moto-nav-link" onClick={() => setMenuOpen(false)}>{t.nav.locations}</a>
            <a href="#menu" className="moto-nav-link" onClick={() => setMenuOpen(false)}>{t.nav.menu}</a>
            <a href="#about" className="moto-nav-link" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
            <a href="#delivery" className="moto-nav-link" onClick={() => setMenuOpen(false)}>{t.nav.delivery}</a>
            <a href="#franchise" className="moto-nav-link" onClick={() => setMenuOpen(false)}>{t.nav.franchise}</a>
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
            <a href="#order" className="moto-btn moto-btn-primary moto-header-order">{t.nav.order}</a>
            <button
              className={`moto-menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="moto-overlay" onClick={() => setMenuOpen(false)}></div>}

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

      {/* Stats Banner */}
      <section className="moto-stats-banner">
        <div className="moto-container">
          <div className="moto-stats-grid">
            <div className="moto-stat-item">
              <span className="moto-stat-num">{stats.restaurants}</span>
              <span className="moto-stat-txt">{t.about.restaurants}</span>
            </div>
            <div className="moto-stat-item">
              <span className="moto-stat-num">{stats.years}+</span>
              <span className="moto-stat-txt">{t.about.years}</span>
            </div>
            <div className="moto-stat-item">
              <span className="moto-stat-num">{stats.customers}</span>
              <span className="moto-stat-txt">{t.about.customers}</span>
            </div>
            <div className="moto-stat-item">
              <span className="moto-stat-num">{stats.chefs}</span>
              <span className="moto-stat-txt">{t.about.chefs}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="about" className="moto-story">
        <div className="moto-container">
          <div className="moto-story-grid">
            <div className="moto-story-content">
              <h2>{t.story.title}</h2>
              <p>{t.story.text1}</p>
              <p>{t.story.text2}</p>
            </div>
            <div className="moto-story-image">
              <img src="https://images.unsplash.com/photo-1617196034183-421b4917c92d?w=600" alt="Sushi chef" />
            </div>
          </div>

          <div className="moto-philosophy">
            <h3>{t.story.philosophy}</h3>
            <div className="moto-values-grid">
              {t.story.values.map((value, idx) => (
                <div key={idx} className="moto-value-card">
                  <span className="moto-value-icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
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
            {displayedLocations.map((loc) => (
              <div key={loc.id} className={`moto-location-card ${loc.featured ? 'featured' : ''}`}>
                <div className="moto-location-image">
                  <img src={loc.image} alt={loc.name} />
                  <div className="moto-location-overlay">
                    <span className="moto-location-city">{loc.city}</span>
                  </div>
                </div>
                <div className="moto-location-info">
                  <h3>{loc.name}</h3>
                  <p className="moto-location-address">{loc.address}</p>
                  <p className="moto-location-hours">⏰ {loc.hours}</p>
                  <div className="moto-location-actions">
                    <a href="#" className="moto-btn moto-btn-sm">{t.locations.book}</a>
                    <a href="#" className="moto-btn moto-btn-outline moto-btn-sm">{t.locations.order}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!showAllLocations && locations.length > 4 && (
            <div className="moto-locations-cta">
              <button
                className="moto-btn moto-btn-outline"
                onClick={() => setShowAllLocations(true)}
              >
                {t.locations.viewAll}
              </button>
            </div>
          )}
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

      {/* Reviews */}
      <section className="moto-reviews">
        <div className="moto-container">
          <div className="moto-section-header">
            <h2>{t.reviews.title}</h2>
            <p>{t.reviews.subtitle}</p>
          </div>

          <div className="moto-reviews-carousel">
            <div className="moto-review-card">
              <div className="moto-review-header">
                <span className="moto-review-avatar">{reviews[activeReview].avatar}</span>
                <div className="moto-review-info">
                  <h4>{reviews[activeReview].name}</h4>
                  <span>{reviews[activeReview].location}</span>
                </div>
                <div className="moto-review-rating">
                  {'★'.repeat(reviews[activeReview].rating)}
                  {'☆'.repeat(5 - reviews[activeReview].rating)}
                </div>
              </div>
              <p className="moto-review-text">{reviews[activeReview].text[language]}</p>
            </div>

            <div className="moto-reviews-nav">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  className={`moto-review-dot ${idx === activeReview ? 'active' : ''}`}
                  onClick={() => setActiveReview(idx)}
                />
              ))}
            </div>

            <div className="moto-reviews-arrows">
              <button
                className="moto-review-arrow"
                onClick={() => setActiveReview(prev => prev === 0 ? reviews.length - 1 : prev - 1)}
              >
                ←
              </button>
              <button
                className="moto-review-arrow"
                onClick={() => setActiveReview(prev => prev === reviews.length - 1 ? 0 : prev + 1)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="moto-delivery">
        <div className="moto-container">
          <div className="moto-section-header">
            <h2>{t.delivery.title}</h2>
            <p>{t.delivery.text}</p>
          </div>

          <div className="moto-delivery-features">
            {t.delivery.features.map((feature, idx) => (
              <div key={idx} className="moto-delivery-feature">
                <span className="moto-feature-icon">{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="moto-delivery-grid">
            <div className="moto-delivery-content">
              <div className="moto-delivery-options">
                <div className="moto-delivery-option">
                  <span className="moto-delivery-icon">🚴</span>
                  <span>{t.delivery.bike}</span>
                </div>
                <div className="moto-delivery-option">
                  <span className="moto-delivery-icon">🏠</span>
                  <span>{t.delivery.pickup}</span>
                </div>
                <div className="moto-delivery-option">
                  <span className="moto-delivery-icon">🎉</span>
                  <span>{t.delivery.catering}</span>
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

      {/* Gift Card */}
      <section className="moto-giftcard">
        <div className="moto-container">
          <div className="moto-giftcard-inner">
            <div className="moto-giftcard-content">
              <h2>{t.giftCard.title}</h2>
              <p>{t.giftCard.text}</p>
              <a href="#" className="moto-btn moto-btn-primary">{t.giftCard.cta}</a>
            </div>
            <div className="moto-giftcard-visual">
              <div className="moto-card-mockup">
                <span className="moto-card-logo">SUSHI MOTO</span>
                <span className="moto-card-amount">€50</span>
                <span className="moto-card-text">GIFT CARD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="moto-faq">
        <div className="moto-container">
          <div className="moto-section-header">
            <h2>{t.faq.title}</h2>
            <p>{t.faq.subtitle}</p>
          </div>

          <div className="moto-faq-list">
            {faqItems.map(item => (
              <div
                key={item.id}
                className={`moto-faq-item ${expandedFaq === item.id ? 'expanded' : ''}`}
              >
                <button
                  className="moto-faq-question"
                  onClick={() => toggleFaq(item.id)}
                >
                  <span>{item.question[language]}</span>
                  <span className="moto-faq-icon">{expandedFaq === item.id ? '−' : '+'}</span>
                </button>
                {expandedFaq === item.id && (
                  <div className="moto-faq-answer">
                    <p>{item.answer[language]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise */}
      <section id="franchise" className="moto-franchise">
        <div className="moto-franchise-bg">
          <img src="https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1920" alt="Sushi preparation" />
        </div>
        <div className="moto-franchise-overlay"></div>
        <div className="moto-franchise-content">
          <span className="moto-franchise-label">{t.franchise.subtitle}</span>
          <h2>{t.franchise.title}</h2>
          <p>{t.franchise.text}</p>
          <a href="#" className="moto-btn moto-btn-primary moto-btn-lg">{t.franchise.cta}</a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="moto-newsletter">
        <div className="moto-container">
          <div className="moto-newsletter-inner">
            <div className="moto-newsletter-content">
              <h3>{t.newsletter.title}</h3>
              <p>{t.newsletter.subtitle}</p>
            </div>
            {subscribed ? (
              <div className="moto-newsletter-success">
                <span>✓</span>
                <span>{t.newsletter.success}</span>
              </div>
            ) : (
              <form className="moto-newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="moto-btn moto-btn-primary">
                  {t.newsletter.button}
                </button>
              </form>
            )}
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
              <div className="moto-social-links">
                <a href="#" className="moto-social-btn">IG</a>
                <a href="#" className="moto-social-btn">FB</a>
                <a href="#" className="moto-social-btn">TT</a>
                <a href="#" className="moto-social-btn">YT</a>
              </div>
            </div>
            <div className="moto-footer-links">
              <h4>{t.footer.company}</h4>
              <a href="#">{t.nav.about}</a>
              <a href="#">{t.footer.careers}</a>
              <a href="#">{t.footer.press}</a>
              <a href="#">{t.nav.franchise}</a>
            </div>
            <div className="moto-footer-links">
              <h4>{t.footer.help}</h4>
              <a href="#">{t.footer.contact}</a>
              <a href="#">{t.footer.faq}</a>
              <a href="#">{t.footer.allergens}</a>
              <a href="#">{t.giftCard.title}</a>
            </div>
            <div className="moto-footer-links">
              <h4>{t.nav.locations}</h4>
              {locations.slice(0, 4).map(loc => (
                <a key={loc.id} href="#">{loc.city} - {loc.name.replace('Sushi Moto ', '')}</a>
              ))}
            </div>
          </div>
          <div className="moto-footer-bottom">
            <p>© 2024 Sushi Moto. {t.footer.rights}</p>
            <div className="moto-footer-legal">
              <a href="#">{t.footer.privacy}</a>
              <a href="#">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SushiMoto

import { useState } from 'react'
import { translations, locations, menuItems, categories } from './data/restaurant-data'
import './GoldenKoi.css'

export default function GoldenKoi() {
  const [lang, setLang] = useState('it')
  const [activeCategory, setActiveCategory] = useState('omakase')
  const [showReservation, setShowReservation] = useState(false)
  const [reservationSuccess, setReservationSuccess] = useState(false)
  const t = translations[lang]

  const filteredItems = menuItems.filter(item => item.category === activeCategory)

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    setReservationSuccess(true)
    setTimeout(() => {
      setShowReservation(false)
      setReservationSuccess(false)
    }, 3000)
  }

  return (
    <div className="gk-app">
      {/* Navigation */}
      <nav className="gk-nav">
        <div className="gk-nav-container">
          <a href="#home" className="gk-logo">
            <span className="gk-logo-icon">鲤</span>
            <span className="gk-logo-text">GOLDEN KOI</span>
          </a>

          <div className="gk-nav-links">
            <a href="#home">{t.nav.home}</a>
            <a href="#menu">{t.nav.menu}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#locations">{t.nav.locations}</a>
            <button
              className="gk-nav-reserve"
              onClick={() => setShowReservation(true)}
            >
              {t.nav.reservations}
            </button>
          </div>

          <div className="gk-lang-switch">
            {['it', 'en', 'zh'].map(l => (
              <button
                key={l}
                className={`gk-lang-btn ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="gk-hero">
        <div className="gk-hero-bg" />
        <div className="gk-hero-content">
          <h1 className="gk-hero-title">{t.hero.title}</h1>
          <p className="gk-hero-subtitle">{t.hero.subtitle}</p>
          <button
            className="gk-hero-cta"
            onClick={() => setShowReservation(true)}
          >
            {t.hero.cta}
          </button>
        </div>
        <div className="gk-hero-scroll">
          <div className="gk-scroll-line" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="gk-intro">
        <div className="gk-intro-container">
          <div className="gk-intro-main">
            <h2 className="gk-section-title">{t.intro.title}</h2>
            <p className="gk-intro-text">{t.intro.text}</p>
          </div>
          <div className="gk-intro-philosophy">
            <div className="gk-philosophy-icon">道</div>
            <h3>{t.intro.philosophy}</h3>
            <p>{t.intro.philosophyText}</p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="gk-menu">
        <div className="gk-menu-header">
          <h2 className="gk-section-title">{t.menu.title}</h2>
          <p className="gk-section-subtitle">{t.menu.subtitle}</p>
        </div>

        <div className="gk-menu-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gk-category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {t.menu.categories[cat]}
            </button>
          ))}
        </div>

        <div className="gk-menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gk-menu-item">
              <div className="gk-menu-item-image">
                <img src={item.image} alt={item.name[lang]} loading="lazy" />
                <div className="gk-menu-item-overlay">
                  <span className="gk-menu-item-price">€{item.price}</span>
                </div>
              </div>
              <div className="gk-menu-item-info">
                <h3>{item.name[lang]}</h3>
                <p>{item.description[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="gk-view-menu-btn">{t.menu.viewFull}</button>
      </section>

      {/* Experience Section */}
      <section id="experience" className="gk-experience">
        <h2 className="gk-section-title">{t.experience.title}</h2>

        <div className="gk-experience-grid">
          <div className="gk-experience-card">
            <div className="gk-experience-icon">懐</div>
            <h3>{t.experience.omakase.title}</h3>
            <p>{t.experience.omakase.desc}</p>
          </div>
          <div className="gk-experience-card">
            <div className="gk-experience-icon">室</div>
            <h3>{t.experience.private.title}</h3>
            <p>{t.experience.private.desc}</p>
          </div>
          <div className="gk-experience-card">
            <div className="gk-experience-icon">酒</div>
            <h3>{t.experience.sake.title}</h3>
            <p>{t.experience.sake.desc}</p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="gk-locations">
        <h2 className="gk-section-title">{t.locations.title}</h2>
        <p className="gk-section-subtitle">{t.locations.subtitle}</p>

        <div className="gk-locations-grid">
          {locations.map(loc => (
            <div key={loc.id} className="gk-location-card">
              <div className="gk-location-image">
                <img src={loc.image} alt={loc.name} loading="lazy" />
                {loc.seasonal && <span className="gk-seasonal-badge">Seasonal</span>}
              </div>
              <div className="gk-location-info">
                <span className="gk-location-city">{loc.city[lang]}</span>
                <h3>{loc.name}</h3>
                <p className="gk-location-address">{loc.address}</p>
                <p className="gk-location-hours">{loc.hours[lang]}</p>
                <div className="gk-location-actions">
                  <button
                    className="gk-location-btn primary"
                    onClick={() => setShowReservation(true)}
                  >
                    {t.locations.book}
                  </button>
                  <a href="#menu" className="gk-location-btn secondary">
                    {t.locations.viewMenu}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="gk-footer">
        <div className="gk-footer-container">
          <div className="gk-footer-brand">
            <div className="gk-footer-logo">
              <span className="gk-logo-icon">鲤</span>
              <span>GOLDEN KOI</span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>

          <div className="gk-footer-section">
            <h4>{t.footer.contact}</h4>
            <p>info@goldenkoi.it</p>
            <p>+39 02 7890 1234</p>
          </div>

          <div className="gk-footer-section">
            <h4>{t.footer.hours}</h4>
            <p>{t.footer.hoursText}</p>
          </div>

          <div className="gk-footer-section">
            <h4>{t.footer.follow}</h4>
            <div className="gk-social-links">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="WeChat">WX</a>
            </div>
          </div>
        </div>

        <div className="gk-footer-bottom">
          <p>&copy; 2024 Golden Koi. {t.footer.rights}</p>
        </div>
      </footer>

      {/* Reservation Modal */}
      {showReservation && (
        <div className="gk-modal-overlay" onClick={() => setShowReservation(false)}>
          <div className="gk-modal" onClick={e => e.stopPropagation()}>
            <button
              className="gk-modal-close"
              onClick={() => setShowReservation(false)}
            >
              &times;
            </button>

            {reservationSuccess ? (
              <div className="gk-reservation-success">
                <div className="gk-success-icon">&#10003;</div>
                <p>{t.reservation.success}</p>
              </div>
            ) : (
              <>
                <h2>{t.reservation.title}</h2>
                <p className="gk-modal-subtitle">{t.reservation.subtitle}</p>

                <form onSubmit={handleReservationSubmit} className="gk-reservation-form">
                  <div className="gk-form-row">
                    <div className="gk-form-group">
                      <label>{t.reservation.name}</label>
                      <input type="text" required />
                    </div>
                    <div className="gk-form-group">
                      <label>{t.reservation.email}</label>
                      <input type="email" required />
                    </div>
                  </div>

                  <div className="gk-form-row">
                    <div className="gk-form-group">
                      <label>{t.reservation.phone}</label>
                      <input type="tel" required />
                    </div>
                    <div className="gk-form-group">
                      <label>{t.reservation.location}</label>
                      <select required>
                        {locations.map(loc => (
                          <option key={loc.id} value={loc.id}>{loc.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="gk-form-row">
                    <div className="gk-form-group">
                      <label>{t.reservation.date}</label>
                      <input type="date" required />
                    </div>
                    <div className="gk-form-group">
                      <label>{t.reservation.time}</label>
                      <select required>
                        <option value="19:00">19:00</option>
                        <option value="19:30">19:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                      </select>
                    </div>
                  </div>

                  <div className="gk-form-group">
                    <label>{t.reservation.guests}</label>
                    <select required>
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div className="gk-form-group">
                    <label>{t.reservation.notes}</label>
                    <textarea rows="3" />
                  </div>

                  <button type="submit" className="gk-submit-btn">
                    {t.reservation.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

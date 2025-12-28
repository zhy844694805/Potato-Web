import { useState } from 'react'
import { menuItems, translations, chef, reviews, gallery, awards, stats, seasonalMenu } from './data/restaurant-data'
import './KokuSushi.css'

function KokuSushi() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('omakase')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [galleryFilter, setGalleryFilter] = useState('all')
  const [reservationForm, setReservationForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', requests: ''
  })
  const [reservationSuccess, setReservationSuccess] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  const t = translations[language]
  const categories = ['omakase', 'sushi', 'sashimi', 'wagyu', 'sake', 'dessert']
  const filteredMenu = menuItems.filter(item => item.category === activeCategory)
  const filteredGallery = galleryFilter === 'all'
    ? gallery
    : gallery.filter(img => img.category === galleryFilter)

  const handleReservation = (e) => {
    e.preventDefault()
    setReservationSuccess(true)
    setTimeout(() => setReservationSuccess(false), 3000)
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    setNewsletterSuccess(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSuccess(false), 3000)
  }

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
          <div className="koku-header-right">
            <a href="#reserve" className="koku-reserve-btn koku-reserve-btn-header">{t.nav.reserve}</a>
            <button
              className="koku-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={`koku-hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
        <nav className={`koku-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>{t.nav.menu}</a>
          <a href="#chef" onClick={() => setMobileMenuOpen(false)}>{t.nav.chef}</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.nav.experience}</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>{t.nav.gallery}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
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
        <a href="#intro" className="koku-scroll-indicator">
          <span>{t.hero.scroll}</span>
          <div className="koku-scroll-arrow"></div>
        </a>
      </section>

      {/* Stats Bar */}
      <section className="koku-stats">
        <div className="koku-container">
          <div className="koku-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="koku-stat-item">
                <span className="koku-stat-value">{stat.value}</span>
                <span className="koku-stat-label">{stat.label[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="koku-intro">
        <div className="koku-container">
          <div className="koku-intro-content">
            <span className="koku-intro-jp">美</span>
            <span className="koku-since">{t.intro.since}</span>
            <h2>{t.intro.title}</h2>
            <div className="koku-divider"></div>
            <p>{t.intro.text}</p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="koku-awards">
        <div className="koku-container">
          <div className="koku-awards-grid">
            {awards.map(award => (
              <div key={award.id} className="koku-award-item">
                <span className="koku-award-icon">{award.icon}</span>
                <span className="koku-award-name">{award.name[language]}</span>
                <span className="koku-award-year">{award.year}</span>
              </div>
            ))}
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
              <div
                key={item.id}
                className="koku-menu-card"
                onClick={() => setSelectedItem(item)}
              >
                {item.tag && (
                  <span className={`koku-menu-tag koku-menu-tag-${item.tag}`}>
                    {t.menu[item.tag]}
                  </span>
                )}
                <div className="koku-menu-image">
                  <img src={item.image} alt={item.name[language]} />
                </div>
                <div className="koku-menu-content">
                  <h3>{item.name[language]}</h3>
                  <p>{item.description[language]}</p>
                  <div className="koku-menu-footer">
                    <span className="koku-menu-price">€{item.price}</span>
                    {item.pieces && (
                      <span className="koku-menu-qty">{item.pieces} {t.menu.pieces}</span>
                    )}
                    {item.courses && (
                      <span className="koku-menu-qty">{item.courses} {t.menu.courses}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Menu */}
      <section className="koku-seasonal">
        <div className="koku-container">
          <div className="koku-section-header">
            <span className="koku-section-jp">季</span>
            <h2>{t.seasonal.title}</h2>
            <p>{t.seasonal.subtitle}</p>
          </div>
          <div className="koku-seasonal-grid">
            {seasonalMenu.map(item => (
              <div key={item.id} className="koku-seasonal-card">
                <div className="koku-seasonal-image">
                  <img src={item.image} alt={item.name[language]} />
                  <span className="koku-seasonal-badge">{t.seasonal.limited}</span>
                </div>
                <div className="koku-seasonal-content">
                  <h3>{item.name[language]}</h3>
                  <p>{item.description[language]}</p>
                  <div className="koku-seasonal-footer">
                    <span className="koku-seasonal-price">€{item.price}</span>
                    <span className="koku-seasonal-available">
                      {t.seasonal.available}: {item.available}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef */}
      <section id="chef" className="koku-chef">
        <div className="koku-container">
          <div className="koku-chef-grid">
            <div className="koku-chef-image">
              <img src={chef.image} alt={chef.name} />
            </div>
            <div className="koku-chef-content">
              <span className="koku-section-jp">匠</span>
              <h2>{t.chef.title}</h2>
              <p className="koku-chef-subtitle">{t.chef.subtitle}</p>
              <h3 className="koku-chef-name">{chef.name}</h3>
              <p className="koku-chef-title-role">{chef.title[language]}</p>
              <p className="koku-chef-bio">{t.chef.bio}</p>

              <div className="koku-chef-stats">
                <div className="koku-chef-stat">
                  <span className="koku-chef-stat-value">{chef.experience}+</span>
                  <span className="koku-chef-stat-label">{t.chef.experience}</span>
                </div>
                <div className="koku-chef-stat">
                  <span className="koku-chef-stat-icon">🇯🇵</span>
                  <span className="koku-chef-stat-label">{t.chef.training}</span>
                </div>
              </div>

              <blockquote className="koku-chef-quote">
                <span className="koku-quote-mark">"</span>
                <p>{t.chef.philosophyText}</p>
                <cite>— {chef.name}</cite>
              </blockquote>
            </div>
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
            <div className="koku-experience-card">
              <span className="koku-experience-icon">🎌</span>
              <h3>{t.experience.omakase}</h3>
              <p>{t.experience.omakaseText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="koku-gallery">
        <div className="koku-container">
          <div className="koku-section-header">
            <span className="koku-section-jp">写真</span>
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.subtitle}</p>
          </div>

          <div className="koku-gallery-filters">
            <button
              className={`koku-gallery-filter ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
            >
              All
            </button>
            <button
              className={`koku-gallery-filter ${galleryFilter === 'interior' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('interior')}
            >
              {t.gallery.interior}
            </button>
            <button
              className={`koku-gallery-filter ${galleryFilter === 'dishes' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('dishes')}
            >
              {t.gallery.dishes}
            </button>
            <button
              className={`koku-gallery-filter ${galleryFilter === 'events' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('events')}
            >
              {t.gallery.events}
            </button>
          </div>

          <div className="koku-gallery-grid">
            {filteredGallery.map(img => (
              <div key={img.id} className="koku-gallery-item">
                <img src={img.image} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="koku-reviews">
        <div className="koku-container">
          <div className="koku-section-header">
            <span className="koku-section-jp">声</span>
            <h2>{t.reviews.title}</h2>
            <p>{t.reviews.subtitle}</p>
          </div>

          <div className="koku-reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="koku-review-card">
                <div className="koku-review-header">
                  <div className="koku-review-stars">
                    {'★'.repeat(review.rating)}
                  </div>
                  <span className="koku-review-platform">{review.platform}</span>
                </div>
                <p className="koku-review-text">"{review.text[language]}"</p>
                <div className="koku-review-footer">
                  <span className="koku-review-name">{review.name}</span>
                  <span className="koku-review-date">{review.date}</span>
                </div>
              </div>
            ))}
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

            {reservationSuccess ? (
              <div className="koku-success-message">{t.reserve.form.success}</div>
            ) : (
              <form className="koku-reserve-form" onSubmit={handleReservation}>
                <div className="koku-form-row">
                  <input
                    type="text"
                    placeholder={t.reserve.form.name}
                    value={reservationForm.name}
                    onChange={(e) => setReservationForm({...reservationForm, name: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder={t.reserve.form.email}
                    value={reservationForm.email}
                    onChange={(e) => setReservationForm({...reservationForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="koku-form-row">
                  <input
                    type="tel"
                    placeholder={t.reserve.form.phone}
                    value={reservationForm.phone}
                    onChange={(e) => setReservationForm({...reservationForm, phone: e.target.value})}
                    required
                  />
                  <select
                    value={reservationForm.guests}
                    onChange={(e) => setReservationForm({...reservationForm, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {t.reserve.form.guests}</option>
                    ))}
                  </select>
                </div>
                <div className="koku-form-row">
                  <input
                    type="date"
                    value={reservationForm.date}
                    onChange={(e) => setReservationForm({...reservationForm, date: e.target.value})}
                    required
                  />
                  <select
                    value={reservationForm.time}
                    onChange={(e) => setReservationForm({...reservationForm, time: e.target.value})}
                    required
                  >
                    <option value="">{t.reserve.form.time}</option>
                    {['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  placeholder={t.reserve.form.requests}
                  value={reservationForm.requests}
                  onChange={(e) => setReservationForm({...reservationForm, requests: e.target.value})}
                  rows="3"
                ></textarea>
                <button type="submit" className="koku-btn koku-btn-gold koku-btn-full">
                  {t.reserve.form.submit}
                </button>
              </form>
            )}

            <div className="koku-reserve-or">
              <span>{t.reserve.form.or}</span>
            </div>

            <div className="koku-reserve-actions">
              <a href="tel:+390212345678" className="koku-btn koku-btn-outline">
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

      {/* Newsletter */}
      <section className="koku-newsletter">
        <div className="koku-container">
          <div className="koku-newsletter-content">
            <h3>{t.newsletter.title}</h3>
            <p>{t.newsletter.text}</p>
            {newsletterSuccess ? (
              <div className="koku-success-message">{t.newsletter.success}</div>
            ) : (
              <form className="koku-newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="koku-btn koku-btn-gold">
                  {t.newsletter.button}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="koku-footer">
        <div className="koku-container">
          <div className="koku-footer-grid">
            <div className="koku-footer-brand">
              <div className="koku-footer-logo">
                <span className="koku-logo-jp">光</span>
                <span className="koku-logo-text">KOKU</span>
              </div>
              <p className="koku-footer-tagline">{t.hero.subtitle}</p>
            </div>
            <div className="koku-footer-info">
              <h4>{t.nav.contact}</h4>
              <p>{t.footer.address}</p>
              <p>{t.footer.hours}</p>
              <p>{t.footer.closed}</p>
            </div>
            <div className="koku-footer-links">
              <h4>{t.footer.quickLinks}</h4>
              <a href="#menu">{t.nav.menu}</a>
              <a href="#reserve">{t.nav.reserve}</a>
              <a href="#">{t.footer.privacy}</a>
            </div>
            <div className="koku-footer-social">
              <h4>{t.footer.followUs}</h4>
              <div className="koku-social-links">
                <a href="#" className="koku-social-btn">IG</a>
                <a href="#" className="koku-social-btn">FB</a>
                <a href="#" className="koku-social-btn">TW</a>
              </div>
            </div>
          </div>
          <div className="koku-footer-bottom">
            <p>© 2024 Koku Sushi. {t.footer.rights}</p>
          </div>
        </div>
      </footer>

      {/* Menu Item Modal */}
      {selectedItem && (
        <div className="koku-modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="koku-modal" onClick={e => e.stopPropagation()}>
            <button className="koku-modal-close" onClick={() => setSelectedItem(null)}>×</button>
            <div className="koku-modal-image">
              <img src={selectedItem.image} alt={selectedItem.name[language]} />
            </div>
            <div className="koku-modal-content">
              <h3>{selectedItem.name[language]}</h3>
              <p className="koku-modal-desc">{selectedItem.description[language]}</p>
              {selectedItem.details && (
                <p className="koku-modal-details">{selectedItem.details[language]}</p>
              )}

              {selectedItem.ingredients && (
                <div className="koku-modal-section">
                  <h4>{t.modal.ingredients}</h4>
                  <p>{selectedItem.ingredients.join(', ')}</p>
                </div>
              )}

              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="koku-modal-section">
                  <h4>{t.modal.allergens}</h4>
                  <p>{selectedItem.allergens.join(', ')}</p>
                </div>
              )}

              {selectedItem.pairing && (
                <div className="koku-modal-section">
                  <h4>{t.modal.pairing}</h4>
                  <p>{selectedItem.pairing}</p>
                </div>
              )}

              <div className="koku-modal-footer">
                <span className="koku-modal-price">€{selectedItem.price}</span>
                <button className="koku-btn koku-btn-gold">{t.modal.addToOrder}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default KokuSushi

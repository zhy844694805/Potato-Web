import { useState } from 'react'
import { translations, galleryImages, reviews, awards, stats, menuPrices } from './data/restaurant-data'
import './YumeSushi.css'

function YumeSushi() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [reservationForm, setReservationForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', experience: 'counter', requests: ''
  })
  const [reservationSuccess, setReservationSuccess] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  const t = translations[language]
  const seasons = ['spring', 'summer', 'autumn', 'winter']

  const handleReservation = (e) => {
    e.preventDefault()
    setReservationSuccess(true)
    setTimeout(() => setReservationSuccess(false), 4000)
  }

  const handleNewsletter = (e) => {
    e.preventDefault()
    setNewsletterSuccess(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSuccess(false), 4000)
  }

  return (
    <div className="yume-app">
      {/* Header */}
      <header className="yume-header">
        <div className="yume-header-inner">
          <nav className="yume-nav yume-nav-left">
            <a href="#philosophy">{t.nav.philosophy}</a>
            <a href="#menu">{t.nav.menu}</a>
          </nav>
          <a href="#" className="yume-logo">夢 YUME</a>
          <div className="yume-header-right">
            <nav className="yume-nav yume-nav-right">
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
            <button
              className="yume-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className={`yume-hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        <nav className={`yume-mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>{t.nav.philosophy}</a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>{t.nav.menu}</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>{t.nav.experience}</a>
          <a href="#chef" onClick={() => setMobileMenuOpen(false)}>{t.nav.chef}</a>
          <a href="#reserve" onClick={() => setMobileMenuOpen(false)}>{t.nav.reserve}</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="yume-hero">
        <div className="yume-hero-content">
          <h1 className="yume-hero-title">{t.hero.title}</h1>
          <p className="yume-hero-tagline">{t.hero.tagline}</p>
          <a href="#philosophy" className="yume-scroll-link">
            <span>{t.hero.scroll}</span>
            <div className="yume-scroll-line"></div>
          </a>
        </div>
        <div className="yume-hero-image">
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200" alt="Sushi" />
        </div>
      </section>

      {/* Stats */}
      <section className="yume-stats">
        <div className="yume-container">
          <div className="yume-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="yume-stat-item">
                <span className="yume-stat-value">{stat.value}</span>
                <span className="yume-stat-label">{stat.label[language]}</span>
              </div>
            ))}
          </div>
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
              <div className="yume-values">
                {t.philosophy.values.map((value, idx) => (
                  <div key={idx} className="yume-value-item">
                    <span className="yume-value-icon">{value.icon}</span>
                    <div>
                      <h4>{value.title}</h4>
                      <p>{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
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

      {/* Awards */}
      <section className="yume-awards">
        <div className="yume-container">
          <div className="yume-awards-grid">
            {awards.map(award => (
              <div key={award.id} className="yume-award-item">
                <span className="yume-award-icon">{award.icon}</span>
                <span className="yume-award-name">{award.name[language]}</span>
                <span className="yume-award-year">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="yume-menu">
        <div className="yume-container">
          <div className="yume-menu-header">
            <span className="yume-section-tag">02</span>
            <h2>{t.menu.title}</h2>
            <p className="yume-menu-subtitle">{t.menu.subtitle}</p>
          </div>
          <div className="yume-menu-grid">
            {seasons.map((season, idx) => (
              <div
                key={season}
                className={`yume-menu-card ${selectedSeason === season ? 'expanded' : ''}`}
                onClick={() => setSelectedSeason(selectedSeason === season ? null : season)}
              >
                <span className="yume-card-number">0{idx + 1}</span>
                <h3>{t.menu.items[season].name}</h3>
                <p>{t.menu.items[season].desc}</p>
                {selectedSeason === season && (
                  <p className="yume-card-detail">{t.menu.items[season].detail}</p>
                )}
                <span className="yume-card-price">€{menuPrices[season]}</span>
              </div>
            ))}
          </div>
          <div className="yume-menu-supplements">
            <h4>{t.menu.supplement}</h4>
            <div className="yume-supplements-list">
              {t.menu.supplements.map((item, idx) => (
                <div key={idx} className="yume-supplement-item">
                  <span>{item.name}</span>
                  <span>+€{item.price}</span>
                </div>
              ))}
            </div>
            <p className="yume-menu-note">{t.menu.note}</p>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="yume-signature">
        <div className="yume-container">
          <div className="yume-signature-header">
            <h2>{t.signature.title}</h2>
          </div>
          <div className="yume-signature-grid">
            {t.signature.items.map((item, idx) => (
              <div key={idx} className="yume-signature-card">
                <div className="yume-signature-content">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="yume-signature-price">€{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="yume-experience">
        <div className="yume-container">
          <div className="yume-experience-header">
            <span className="yume-section-tag">03</span>
            <h2>{t.experience.title}</h2>
            <p>{t.experience.subtitle}</p>
          </div>
          <div className="yume-experience-grid">
            {t.experience.items.map((item, idx) => (
              <div key={idx} className="yume-experience-card">
                <span className="yume-experience-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="yume-experience-seats">{item.seats}</span>
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
              <span className="yume-section-tag">04</span>
              <h2>{t.chef.title}</h2>
              <h3 className="yume-chef-name">{t.chef.name}</h3>
              <span className="yume-chef-role">{t.chef.role}</span>
              <p>{t.chef.bio}</p>
              <blockquote className="yume-chef-quote">{t.chef.quote}</blockquote>
              <div className="yume-chef-achievements">
                {t.chef.achievements.map((achievement, idx) => (
                  <div key={idx} className="yume-achievement">
                    <span className="yume-achievement-year">{achievement.year}</span>
                    <span className="yume-achievement-title">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="yume-reviews">
        <div className="yume-container">
          <div className="yume-reviews-header">
            <h2>{t.reviews.title}</h2>
            <p>{t.reviews.subtitle}</p>
          </div>
          <div className="yume-reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="yume-review-card">
                <div className="yume-review-stars">{'★'.repeat(review.rating)}</div>
                <p className="yume-review-text">"{review.text[language]}"</p>
                <div className="yume-review-footer">
                  <span className="yume-review-name">{review.name}</span>
                  <span className="yume-review-source">{review.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="yume-reserve">
        <div className="yume-container">
          <div className="yume-reserve-content">
            <span className="yume-section-tag">05</span>
            <h2>{t.reserve.title}</h2>
            <p className="yume-reserve-subtitle">{t.reserve.subtitle}</p>
            <p className="yume-reserve-text">{t.reserve.text}</p>

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

            {reservationSuccess ? (
              <div className="yume-success-message">{t.reserve.form.success}</div>
            ) : (
              <form className="yume-reserve-form" onSubmit={handleReservation}>
                <div className="yume-form-row">
                  <input
                    type="text"
                    placeholder={t.reserve.form.name}
                    value={reservationForm.name}
                    onChange={e => setReservationForm({...reservationForm, name: e.target.value})}
                    required
                  />
                  <input
                    type="email"
                    placeholder={t.reserve.form.email}
                    value={reservationForm.email}
                    onChange={e => setReservationForm({...reservationForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="yume-form-row">
                  <input
                    type="tel"
                    placeholder={t.reserve.form.phone}
                    value={reservationForm.phone}
                    onChange={e => setReservationForm({...reservationForm, phone: e.target.value})}
                    required
                  />
                  <select
                    value={reservationForm.guests}
                    onChange={e => setReservationForm({...reservationForm, guests: e.target.value})}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {t.reserve.form.guests}</option>
                    ))}
                  </select>
                </div>
                <div className="yume-form-row">
                  <input
                    type="date"
                    value={reservationForm.date}
                    onChange={e => setReservationForm({...reservationForm, date: e.target.value})}
                    required
                  />
                  <select
                    value={reservationForm.time}
                    onChange={e => setReservationForm({...reservationForm, time: e.target.value})}
                    required
                  >
                    <option value="">{t.reserve.form.time}</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
                <div className="yume-form-row">
                  <select
                    value={reservationForm.experience}
                    onChange={e => setReservationForm({...reservationForm, experience: e.target.value})}
                  >
                    <option value="counter">{t.reserve.form.counter}</option>
                    <option value="private">{t.reserve.form.private}</option>
                    <option value="sake">{t.reserve.form.sake}</option>
                  </select>
                </div>
                <textarea
                  placeholder={t.reserve.form.requests}
                  value={reservationForm.requests}
                  onChange={e => setReservationForm({...reservationForm, requests: e.target.value})}
                  rows={3}
                />
                <button type="submit" className="yume-btn yume-btn-light">
                  {t.reserve.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="yume-newsletter">
        <div className="yume-container">
          <div className="yume-newsletter-content">
            <h3>{t.newsletter.title}</h3>
            <p>{t.newsletter.text}</p>
            {newsletterSuccess ? (
              <div className="yume-success-message yume-success-dark">{t.newsletter.success}</div>
            ) : (
              <form className="yume-newsletter-form" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" className="yume-btn">{t.newsletter.button}</button>
              </form>
            )}
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
            <div className="yume-footer-hours">
              <h4>{t.footer.hours}</h4>
              <p>{t.reserve.lunch}: {t.reserve.lunchTime}</p>
              <p>{t.reserve.dinner}: {t.reserve.dinnerTime}</p>
              <p className="yume-closed">{t.footer.closed}</p>
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

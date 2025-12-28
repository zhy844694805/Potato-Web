import { useState } from 'react'
import {
  restaurantInfo,
  categories,
  dishes,
  drinks,
  lunchMenu,
  translations,
  stats,
  chef,
  gallery,
  eventSpaces,
  reviews,
  faqItems,
  timeSlots
} from './data/restaurant-data'
import './MamaChen.css'

function MamaChen() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('appetizer')
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [reservationForm, setReservationForm] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    notes: ''
  })
  const [reservationSubmitted, setReservationSubmitted] = useState(false)

  const t = (obj) => obj[language] || obj.en

  const filteredDishes = dishes.filter(dish => dish.category === activeCategory)

  // Handle newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
    }
  }

  // Handle reservation form
  const handleReservationChange = (e) => {
    const { name, value } = e.target
    setReservationForm(prev => ({ ...prev, [name]: value }))
  }

  const handleReservationSubmit = (e) => {
    e.preventDefault()
    setReservationSubmitted(true)
  }

  // Gallery navigation
  const nextGalleryImage = () => {
    setActiveGalleryIndex((prev) => (prev + 1) % gallery.length)
  }

  const prevGalleryImage = () => {
    setActiveGalleryIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  // Review navigation
  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="mama-app">
      {/* Header */}
      <header className="mama-header">
        <div className="mama-logo">
          <span className="mama-logo-text">MAMA CHEN</span>
          <span className="mama-logo-subtitle">{t(restaurantInfo.subtitle)}</span>
        </div>

        <button
          className={`mama-hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`mama-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.menu)}</a>
          <a href="#lunch" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.lunch)}</a>
          <a href="#chef" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.chef)}</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.gallery)}</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.events)}</a>
          <a href="#reservation" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.reservation)}</a>
          <div className="mama-lang-select">
            {['IT', 'EN', 'ZH'].map(lang => (
              <button
                key={lang}
                className={language === lang.toLowerCase() ? 'active' : ''}
                onClick={() => setLanguage(lang.toLowerCase())}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mama-hero">
        <div className="mama-hero-content">
          <span className="mama-hero-since">{t(translations.hero.since)}</span>
          <h1>{restaurantInfo.name}</h1>
          <p className="mama-hero-subtitle">{t(restaurantInfo.subtitle)}</p>
          <p className="mama-hero-tagline">{t(translations.hero.tagline)}</p>
          <div className="mama-hero-btns">
            <a href="#menu" className="mama-btn mama-btn-primary">{t(translations.hero.viewMenu)}</a>
            <a href="#reservation" className="mama-btn mama-btn-secondary">{t(translations.hero.reserve)}</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mama-stats">
        {stats.map((stat, index) => (
          <div key={index} className="mama-stat">
            <span className="mama-stat-value">{stat.value}{stat.suffix}</span>
            <span className="mama-stat-label">{t(translations.stats[stat.labelKey])}</span>
          </div>
        ))}
      </section>

      {/* Lunch Special Banner */}
      <section id="lunch" className="mama-lunch-banner">
        <div className="mama-lunch-content">
          <h3>{t(translations.lunch.title)}</h3>
          <p className="mama-lunch-includes">{t(lunchMenu.includes)}</p>
          <p className="mama-lunch-price">&euro;{lunchMenu.price.toFixed(2)}</p>
          <p className="mama-lunch-available">{t(translations.lunch.available)}</p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="mama-menu">
        <h2 className="mama-section-title">{t(translations.menu.title)}</h2>

        {/* Category Tabs */}
        <div className="mama-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`mama-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="mama-category-icon">{cat.icon}</span>
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="mama-dishes-grid">
          {filteredDishes.map(dish => (
            <div key={dish.id} className={`mama-dish-card ${dish.popular ? 'popular' : ''}`}>
              {dish.popular && <span className="mama-badge mama-badge-popular">{t(translations.menu.popular)}</span>}
              {dish.isNew && <span className="mama-badge mama-badge-new">{t(translations.menu.newItem)}</span>}
              <div className="mama-dish-header">
                <h3 className="mama-dish-name">
                  {t(dish.name)}
                  <span className="mama-dish-icons">
                    {dish.spicy && <span className="mama-icon-spicy" title={t(translations.menu.spicy)}>🌶️</span>}
                    {dish.vegetarian && <span className="mama-icon-veg" title={t(translations.menu.vegetarian)}>🥬</span>}
                  </span>
                </h3>
                <span className="mama-dish-price">&euro;{dish.price.toFixed(2)}</span>
              </div>
              <p className="mama-dish-desc">{t(dish.description)}</p>
            </div>
          ))}
        </div>

        {/* Drinks Section */}
        <div className="mama-drinks">
          <h3 className="mama-drinks-title">{t(translations.drinks.title)}</h3>
          <div className="mama-drinks-grid">
            {drinks.map(drink => (
              <div key={drink.id} className="mama-drink-item">
                <span className="mama-drink-name">{t(drink.name)}</span>
                <span className="mama-drink-price">&euro;{drink.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section id="chef" className="mama-chef">
        <h2 className="mama-section-title">{t(translations.chef.title)}</h2>
        <div className="mama-chef-content">
          <div className="mama-chef-image">
            <img src={chef.image} alt={chef.name} />
          </div>
          <div className="mama-chef-info">
            <h3 className="mama-chef-name">{chef.name}</h3>
            <p className="mama-chef-title">{t(chef.title)}</p>
            <p className="mama-chef-experience">
              {chef.experience} {t(translations.chef.experience)}
            </p>
            <p className="mama-chef-bio">{t(chef.bio)}</p>
            <div className="mama-chef-specialties">
              {chef.specialties.map((specialty, index) => (
                <span key={index} className="mama-specialty-tag">{t(specialty)}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="mama-gallery">
        <h2 className="mama-section-title">{t(translations.gallery.title)}</h2>

        <div className="mama-gallery-carousel">
          <button className="mama-gallery-btn prev" onClick={prevGalleryImage}>&lt;</button>

          <div className="mama-gallery-main">
            <img
              src={gallery[activeGalleryIndex].image}
              alt={t(gallery[activeGalleryIndex].caption)}
            />
            <p className="mama-gallery-caption">{t(gallery[activeGalleryIndex].caption)}</p>
          </div>

          <button className="mama-gallery-btn next" onClick={nextGalleryImage}>&gt;</button>
        </div>

        <div className="mama-gallery-thumbs">
          {gallery.map((item, index) => (
            <button
              key={item.id}
              className={`mama-gallery-thumb ${index === activeGalleryIndex ? 'active' : ''}`}
              onClick={() => setActiveGalleryIndex(index)}
            >
              <img src={item.image} alt={t(item.caption)} />
            </button>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="mama-events">
        <h2 className="mama-section-title">{t(translations.events.title)}</h2>
        <p className="mama-events-subtitle">{t(translations.events.subtitle)}</p>

        <div className="mama-events-grid">
          {eventSpaces.map(space => (
            <div key={space.id} className="mama-event-card">
              <img src={space.image} alt={t(space.name)} className="mama-event-image" />
              <div className="mama-event-info">
                <h3>{t(space.name)}</h3>
                <p className="mama-event-capacity">
                  {t(translations.events.capacity)}: {space.capacity}
                </p>
                <p className="mama-event-desc">{t(space.description)}</p>
                <a href="#reservation" className="mama-btn mama-btn-outline">
                  {t(translations.events.inquiry)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mama-reviews">
        <h2 className="mama-section-title">{t(translations.reviews.title)}</h2>

        <div className="mama-reviews-carousel">
          <button className="mama-carousel-btn prev" onClick={prevReview}>&lt;</button>

          <div className="mama-review-card">
            <img
              src={reviews[activeReviewIndex].avatar}
              alt={reviews[activeReviewIndex].name}
              className="mama-review-avatar"
            />
            <div className="mama-review-stars">
              {'★'.repeat(reviews[activeReviewIndex].rating)}
              {'☆'.repeat(5 - reviews[activeReviewIndex].rating)}
            </div>
            <p className="mama-review-text">&ldquo;{t(reviews[activeReviewIndex].text)}&rdquo;</p>
            <p className="mama-review-author">— {reviews[activeReviewIndex].name}</p>
          </div>

          <button className="mama-carousel-btn next" onClick={nextReview}>&gt;</button>
        </div>

        <div className="mama-review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`mama-dot ${index === activeReviewIndex ? 'active' : ''}`}
              onClick={() => setActiveReviewIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mama-faq">
        <h2 className="mama-section-title">{t(translations.faq.title)}</h2>

        <div className="mama-faq-list">
          {faqItems.map(item => (
            <div
              key={item.id}
              className={`mama-faq-item ${expandedFaq === item.id ? 'expanded' : ''}`}
            >
              <button
                className="mama-faq-question"
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
              >
                <span>{t(item.question)}</span>
                <span className="mama-faq-icon">{expandedFaq === item.id ? '−' : '+'}</span>
              </button>
              {expandedFaq === item.id && (
                <div className="mama-faq-answer">
                  <p>{t(item.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Reservation Section */}
      <section id="contact" className="mama-contact">
        <div className="mama-contact-grid">
          {/* Contact Info */}
          <div className="mama-contact-info">
            <h3>{t(translations.contact.title)}</h3>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">📍</span>
              <div>
                <strong>{t(translations.contact.address)}</strong>
                <p>{restaurantInfo.address}</p>
              </div>
            </div>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">📞</span>
              <div>
                <strong>{t(translations.contact.phone)}</strong>
                <p>{restaurantInfo.phone}</p>
              </div>
            </div>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">🕐</span>
              <div>
                <strong>{t(translations.contact.hours)}</strong>
                <p>{t(restaurantInfo.hours.lunch)}</p>
                <p>{t(restaurantInfo.hours.dinner)}</p>
                <p className="mama-closed">{t(restaurantInfo.closedDay)}</p>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div id="reservation" className="mama-reservation">
            <h3>{t(translations.reservation.title)}</h3>

            {reservationSubmitted ? (
              <div className="mama-reservation-success">
                <span>✓</span>
                <p>{t(translations.reservation.success)}</p>
              </div>
            ) : (
              <form onSubmit={handleReservationSubmit}>
                <div className="mama-form-row">
                  <div className="mama-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder={t(translations.reservation.name)}
                      value={reservationForm.name}
                      onChange={handleReservationChange}
                      required
                    />
                  </div>
                  <div className="mama-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t(translations.reservation.phone)}
                      value={reservationForm.phone}
                      onChange={handleReservationChange}
                      required
                    />
                  </div>
                </div>

                <div className="mama-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t(translations.reservation.email)}
                    value={reservationForm.email}
                    onChange={handleReservationChange}
                  />
                </div>

                <div className="mama-form-row">
                  <div className="mama-form-group">
                    <input
                      type="date"
                      name="date"
                      value={reservationForm.date}
                      onChange={handleReservationChange}
                      required
                    />
                  </div>
                  <div className="mama-form-group">
                    <select
                      name="time"
                      value={reservationForm.time}
                      onChange={handleReservationChange}
                      required
                    >
                      <option value="" disabled>{t(translations.reservation.time)}</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mama-form-row">
                  <div className="mama-form-group">
                    <select
                      name="guests"
                      value={reservationForm.guests}
                      onChange={handleReservationChange}
                      required
                    >
                      <option value="" disabled>{t(translations.reservation.guests)}</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map(n => (
                        <option key={n} value={n}>{n} {language === 'zh' ? '人' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mama-form-group">
                    <select
                      name="occasion"
                      value={reservationForm.occasion}
                      onChange={handleReservationChange}
                    >
                      <option value="" disabled>{t(translations.reservation.occasion)}</option>
                      {Object.entries(translations.reservation.occasions).map(([key, value]) => (
                        <option key={key} value={key}>{t(value)}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mama-form-group">
                  <textarea
                    name="notes"
                    placeholder={t(translations.reservation.notes)}
                    value={reservationForm.notes}
                    onChange={handleReservationChange}
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="mama-submit-btn">
                  {t(translations.reservation.submit)}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mama-newsletter">
        <h2 className="mama-newsletter-title">{t(translations.newsletter.title)}</h2>
        <p className="mama-newsletter-subtitle">{t(translations.newsletter.subtitle)}</p>

        {newsletterSubmitted ? (
          <div className="mama-newsletter-success">
            {t(translations.newsletter.success)}
          </div>
        ) : (
          <form className="mama-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder={t(translations.newsletter.placeholder)}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="mama-btn mama-btn-primary">
              {t(translations.newsletter.button)}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="mama-footer">
        <div className="mama-footer-content">
          <div className="mama-footer-brand">
            <h3>{restaurantInfo.name}</h3>
            <p>{t(restaurantInfo.subtitle)}</p>
          </div>

          <div className="mama-footer-social">
            <h4>{t(translations.footer.followUs)}</h4>
            <div className="mama-social-links">
              <a href="#" title="WeChat">WeChat</a>
              <a href="#" title="Instagram">Instagram</a>
              <a href="#" title="Facebook">Facebook</a>
            </div>
          </div>
        </div>

        <p className="mama-copyright">
          &copy; 2024 {restaurantInfo.name}. {t(translations.footer.copyright)}.
        </p>
      </footer>
    </div>
  )
}

export default MamaChen

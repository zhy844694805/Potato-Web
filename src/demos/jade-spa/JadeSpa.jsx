import { useState } from 'react'
import { translations, spaInfo, services, packages, team, reviews, stats, timeSlots, heroImage, galleryImages } from './data/spa-data'
import './JadeSpa.css'

function JadeSpa() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    service: '',
    package: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    therapist: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 4000)
    }
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  const getServiceById = (id) => services.find(s => s.id === id)

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`jade-star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="jade-app">
      {/* Header */}
      <header className="jade-header">
        <div className="jade-header-inner">
          <a href="#home" className="jade-logo">
            <span className="jade-logo-icon">🪷</span>
            <span>JADE WELLNESS</span>
          </a>

          <nav className={`jade-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#packages" onClick={() => setMobileMenuOpen(false)}>{t.nav.packages}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)}>{t.nav.reviews}</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)}>{t.nav.booking}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
          </nav>

          <div className="jade-header-right">
            <div className="jade-lang">
              {['it', 'en', 'zh'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? 'active' : ''}
                >
                  {lang === 'zh' ? '中' : lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              className={`jade-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="jade-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="jade-hero-overlay" />
        <div className="jade-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#booking" className="jade-btn jade-btn-primary">{t.hero.cta}</a>
          <div className="jade-scroll-indicator">
            <span>{t.hero.scroll}</span>
            <div className="jade-scroll-arrow">↓</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="jade-stats">
        <div className="jade-container">
          <div className="jade-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="jade-stat-item">
                <span className="jade-stat-value">
                  {stat.value.toLocaleString()}{stat.suffix || ''}
                </span>
                <span className="jade-stat-label">{stat.label[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="jade-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.services.title}</h2>
          <p className="jade-subtitle">{t.services.subtitle}</p>
          <div className="jade-services-grid">
            {services.map(s => (
              <div
                key={s.id}
                className={`jade-service ${s.popular ? 'popular' : ''} ${s.isNew ? 'new' : ''}`}
                onClick={() => setSelectedService(s)}
              >
                <img src={s.image} alt={s.name[language]} className="jade-service-img" />
                <div className="jade-service-content">
                  <h3>{s.name[language]}</h3>
                  <p>{s.desc[language]}</p>
                  <div className="jade-service-meta">
                    <span>{t.services.duration}: {s.duration}</span>
                    <span className="jade-price">€{s.price}</span>
                  </div>
                </div>
                {s.popular && <span className="jade-badge jade-badge-popular">{t.services.popular}</span>}
                {s.isNew && <span className="jade-badge jade-badge-new">{t.services.new}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="jade-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="jade-modal" onClick={e => e.stopPropagation()}>
            <button className="jade-modal-close" onClick={() => setSelectedService(null)}>×</button>
            <div className="jade-modal-content">
              <img src={selectedService.image} alt={selectedService.name[language]} className="jade-modal-img" />
              <div className="jade-modal-info">
                <h3>{selectedService.name[language]}</h3>
                <p className="jade-modal-desc">{selectedService.desc[language]}</p>
                <div className="jade-modal-meta">
                  <span>{t.services.duration}: {selectedService.duration}</span>
                  <span className="jade-price">€{selectedService.price}</span>
                </div>
                {selectedService.benefits && (
                  <div className="jade-modal-benefits">
                    <h4>{language === 'it' ? 'Benefici' : language === 'zh' ? '功效' : 'Benefits'}</h4>
                    <ul>
                      {selectedService.benefits[language].map((b, i) => (
                        <li key={i}>✓ {b}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <a
                  href="#booking"
                  className="jade-btn jade-btn-primary jade-btn-full"
                  onClick={() => {
                    setFormData({ ...formData, service: selectedService.id.toString() })
                    setSelectedService(null)
                  }}
                >
                  {t.services.book}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Packages */}
      <section id="packages" className="jade-section jade-packages-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.packages.title}</h2>
          <p className="jade-subtitle">{t.packages.subtitle}</p>
          <div className="jade-packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className={`jade-package ${pkg.bestValue ? 'best-value' : ''}`}>
                {pkg.bestValue && <span className="jade-badge jade-badge-best">{t.packages.bestValue}</span>}
                <img src={pkg.image} alt={pkg.name[language]} className="jade-package-img" />
                <div className="jade-package-content">
                  <h3>{pkg.name[language]}</h3>
                  <p>{pkg.desc[language]}</p>
                  <div className="jade-package-includes">
                    <strong>{t.packages.includes}:</strong>
                    <ul>
                      {pkg.includes.map((serviceId, i) => {
                        const service = getServiceById(serviceId)
                        return service ? <li key={i}>• {service.name[language]}</li> : null
                      })}
                    </ul>
                  </div>
                  <div className="jade-package-meta">
                    <span className="jade-package-duration">{pkg.duration}</span>
                    <div className="jade-package-pricing">
                      <span className="jade-package-original">€{pkg.originalPrice}</span>
                      <span className="jade-package-price">€{pkg.price}</span>
                    </div>
                  </div>
                  <div className="jade-package-savings">
                    {t.packages.savings}: €{pkg.originalPrice - pkg.price}
                  </div>
                  <a
                    href="#booking"
                    className="jade-btn jade-btn-outline"
                    onClick={() => setFormData({ ...formData, package: pkg.id })}
                  >
                    {t.packages.book}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Philosophy */}
      <section id="about" className="jade-section jade-about-section">
        <div className="jade-container">
          <div className="jade-about-grid">
            <div className="jade-about-text">
              <h2 className="jade-title">{t.about.title}</h2>
              <p>{t.about.text}</p>
              <h3 className="jade-philosophy-title">{t.about.philosophy}</h3>
              <p className="jade-philosophy-text">{t.about.philosophyText}</p>
            </div>
            <div className="jade-values-grid">
              {Object.entries(t.about.values).map(([key, value]) => (
                <div key={key} className="jade-value-card">
                  <div className="jade-value-icon">
                    {key === 'tradition' && '🏛️'}
                    {key === 'quality' && '🌿'}
                    {key === 'care' && '💝'}
                    {key === 'harmony' && '☯️'}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <h3 className="jade-section-subtitle">{t.about.team}</h3>
          <div className="jade-team">
            {team.map((m) => (
              <div key={m.id} className="jade-team-member">
                <img src={m.image} alt={m.name[language]} />
                <h4>{m.name[language]}</h4>
                <p className="jade-role">{m.role[language]}</p>
                <p className="jade-specialty">{m.specialty[language]}</p>
                <p className="jade-bio">{m.bio[language]}</p>
                <span className="jade-experience">{m.experience} {t.about.experience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="jade-gallery">
        {galleryImages.map((img, i) => (
          <div key={i} className="jade-gallery-item">
            <img src={img.url} alt={img.alt} />
          </div>
        ))}
      </section>

      {/* Reviews */}
      <section id="reviews" className="jade-section jade-reviews-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.reviews.title}</h2>
          <p className="jade-subtitle">{t.reviews.subtitle}</p>

          <div className="jade-reviews-carousel">
            <button className="jade-carousel-btn prev" onClick={prevReview}>‹</button>

            <div className="jade-review-card">
              <div className="jade-review-rating">
                {renderStars(reviews[activeReviewIndex].rating)}
              </div>
              <p className="jade-review-text">"{reviews[activeReviewIndex].text[language]}"</p>
              <div className="jade-review-author">
                <strong>{reviews[activeReviewIndex].author[language]}</strong>
                <span className="jade-review-service">{reviews[activeReviewIndex].service[language]}</span>
                {reviews[activeReviewIndex].verified && (
                  <span className="jade-verified">✓ {t.reviews.verified}</span>
                )}
              </div>
            </div>

            <button className="jade-carousel-btn next" onClick={nextReview}>›</button>
          </div>

          <div className="jade-reviews-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`jade-dot ${i === activeReviewIndex ? 'active' : ''}`}
                onClick={() => setActiveReviewIndex(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="jade-section jade-wellness-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.wellness.title}</h2>
          <p className="jade-subtitle">{t.wellness.subtitle}</p>
          <div className="jade-wellness-grid">
            {t.wellness.tips.map((tip, i) => (
              <div key={i} className="jade-wellness-card">
                <div className="jade-wellness-number">{i + 1}</div>
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="jade-section jade-booking-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.booking.title}</h2>
          <p className="jade-subtitle">{t.booking.subtitle}</p>

          <form className="jade-booking-form" onSubmit={handleSubmit}>
            <div className="jade-form-grid">
              <div className="jade-form-group">
                <label>{t.booking.form.service}</label>
                <select
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value, package: ''})}
                >
                  <option value="">--</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.name[language]} - €{s.price}</option>
                  ))}
                </select>
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.package}</label>
                <select
                  value={formData.package}
                  onChange={e => setFormData({...formData, package: e.target.value, service: ''})}
                >
                  <option value="">--</option>
                  {packages.map(p => (
                    <option key={p.id} value={p.id}>{p.name[language]} - €{p.price}</option>
                  ))}
                </select>
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.date}</label>
                <input
                  type="date"
                  min={minDate}
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.time}</label>
                <select
                  value={formData.time}
                  onChange={e => setFormData({...formData, time: e.target.value})}
                  required
                >
                  <option value="">--</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.therapist}</label>
                <select
                  value={formData.therapist}
                  onChange={e => setFormData({...formData, therapist: e.target.value})}
                >
                  <option value="">{t.booking.form.anyTherapist}</option>
                  {team.map(m => (
                    <option key={m.id} value={m.id}>{m.name[language]}</option>
                  ))}
                </select>
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="jade-form-group">
                <label>{t.booking.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="jade-form-group full">
              <label>{t.booking.form.notes}</label>
              <textarea
                value={formData.notes}
                onChange={e => setFormData({...formData, notes: e.target.value})}
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="jade-btn jade-btn-primary jade-btn-full"
              disabled={submitting}
            >
              {submitting ? t.booking.form.submitting : t.booking.form.submit}
            </button>

            {submitted && (
              <p className="jade-success">✓ {t.booking.success}</p>
            )}
          </form>

          {/* Gift Card CTA */}
          <div className="jade-gift-card">
            <div className="jade-gift-icon">🎁</div>
            <div className="jade-gift-content">
              <h4>{t.booking.giftCard}</h4>
              <p>{t.booking.giftCardText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jade-section jade-faq-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.faq.title}</h2>
          <p className="jade-subtitle">{t.faq.subtitle}</p>
          <div className="jade-faq-list">
            {t.faq.questions.map((faq, i) => (
              <div
                key={i}
                className={`jade-faq-item ${expandedFaq === i ? 'expanded' : ''}`}
              >
                <button
                  className="jade-faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="jade-faq-icon">{expandedFaq === i ? '−' : '+'}</span>
                </button>
                {expandedFaq === i && (
                  <div className="jade-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="jade-newsletter-section">
        <div className="jade-container">
          <div className="jade-newsletter-content">
            <h3>{t.newsletter.title}</h3>
            <p>{t.newsletter.subtitle}</p>
            <form className="jade-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="jade-btn jade-btn-primary">
                {t.newsletter.button}
              </button>
            </form>
            {newsletterSubmitted && (
              <p className="jade-newsletter-success">✓ {t.newsletter.success}</p>
            )}
            <p className="jade-newsletter-privacy">{t.newsletter.privacy}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="jade-section">
        <div className="jade-container jade-contact">
          <h2 className="jade-title">{t.contact.title}</h2>
          <p className="jade-subtitle">{t.contact.subtitle}</p>
          <div className="jade-contact-grid">
            <div className="jade-contact-item">
              <span className="jade-contact-icon">📍</span>
              <div>
                <strong>{t.contact.address}</strong>
                <p>{spaInfo.address.street}</p>
                <p>{spaInfo.address.postalCode} {spaInfo.address.city}</p>
                <p className="jade-contact-note">{t.contact.metro}</p>
              </div>
            </div>
            <div className="jade-contact-item">
              <span className="jade-contact-icon">🕐</span>
              <div>
                <strong>{t.contact.hours}</strong>
                <p>{language === 'it' ? 'Mar-Ven' : language === 'zh' ? '周二至周五' : 'Tue-Fri'}: {spaInfo.hours.weekday}</p>
                <p>{language === 'it' ? 'Sab-Dom' : language === 'zh' ? '周六日' : 'Sat-Sun'}: {spaInfo.hours.weekend}</p>
                <p className="jade-closed">{language === 'it' ? 'Chiuso' : language === 'zh' ? '休息' : 'Closed'}: {spaInfo.hours.closed[language]}</p>
              </div>
            </div>
            <div className="jade-contact-item">
              <span className="jade-contact-icon">📞</span>
              <div>
                <strong>{t.contact.phone}</strong>
                <p><a href={`tel:${spaInfo.phone}`}>{spaInfo.phone}</a></p>
              </div>
            </div>
            <div className="jade-contact-item">
              <span className="jade-contact-icon">✉️</span>
              <div>
                <strong>{t.contact.email}</strong>
                <p><a href={`mailto:${spaInfo.email}`}>{spaInfo.email}</a></p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="jade-social">
            <a href={spaInfo.social.instagram} target="_blank" rel="noopener noreferrer" className="jade-social-link">Instagram</a>
            <a href={spaInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="jade-social-link">Facebook</a>
            <span className="jade-social-link">WeChat: {spaInfo.social.wechat}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="jade-footer">
        <div className="jade-footer-content">
          <p>{t.footer.rights}</p>
          <div className="jade-footer-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
        <a href="/portfolio/jade-spa" className="jade-back">← {t.footer.back}</a>
      </footer>
    </div>
  )
}

export default JadeSpa

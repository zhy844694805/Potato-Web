import { useState } from 'react'
import { useRestaurantLanguage } from '../SakuraMilano'
import { translations, restaurantInfo } from '../data/restaurant-data'

function ContactPage() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="sushi-page-content">
      {/* Page Header */}
      <section className="sushi-page-header">
        <div className="sushi-container">
          <h1 className="sushi-heading-1">{t.contact.title}</h1>
          <div className="sushi-divider" />
          <p className="sushi-text-gray">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="sushi-section">
        <div className="sushi-container">
          <div className="sushi-contact-grid">
            {/* Contact Info */}
            <div className="sushi-contact-info">
              <div className="sushi-contact-item">
                <div className="sushi-contact-icon">📍</div>
                <div>
                  <h4>{t.contact.address}</h4>
                  <p>
                    {restaurantInfo.address.street}<br />
                    {restaurantInfo.address.postalCode} {restaurantInfo.address.city}<br />
                    {restaurantInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="sushi-contact-item">
                <div className="sushi-contact-icon">📞</div>
                <div>
                  <h4>{t.contact.phone}</h4>
                  <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
                </div>
              </div>

              <div className="sushi-contact-item">
                <div className="sushi-contact-icon">✉️</div>
                <div>
                  <h4>{t.contact.email}</h4>
                  <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
                </div>
              </div>

              <div className="sushi-contact-item">
                <div className="sushi-contact-icon">🕐</div>
                <div>
                  <h4>{t.contact.hours}</h4>
                  <p>
                    {restaurantInfo.hours.lunch.days[language]}<br />
                    {t.reservation.form.lunch}: {restaurantInfo.hours.lunch.time}<br />
                    {t.reservation.form.dinner}: {restaurantInfo.hours.dinner.time}
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="sushi-map-placeholder">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗺️</div>
                  <p>Via Montenapoleone 15, Milano</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginTop: 'var(--sushi-space-lg)' }}>
                <h4 style={{ color: 'var(--sushi-gold)', marginBottom: 'var(--sushi-space-sm)' }}>
                  {t.contact.social}
                </h4>
                <div className="sushi-social-links">
                  <a
                    href={restaurantInfo.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sushi-social-link"
                    aria-label="Instagram"
                  >
                    📷
                  </a>
                  <a
                    href={restaurantInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sushi-social-link"
                    aria-label="Facebook"
                  >
                    👤
                  </a>
                  <a
                    href={restaurantInfo.social.tripadvisor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sushi-social-link"
                    aria-label="TripAdvisor"
                  >
                    ✈️
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="sushi-form" onSubmit={handleSubmit}>
              <h3
                style={{
                  fontFamily: 'var(--sushi-font-display)',
                  fontSize: '1.5rem',
                  marginBottom: 'var(--sushi-space-lg)',
                  color: 'var(--sushi-gold)'
                }}
              >
                {t.contact.form.title}
              </h3>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.contact.form.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="sushi-form-input"
                  required
                />
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.contact.form.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="sushi-form-input"
                  required
                />
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.contact.form.subject}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="sushi-form-input"
                  required
                />
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.contact.form.message}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="sushi-form-textarea"
                  required
                />
              </div>

              <button type="submit" className="sushi-btn sushi-btn-primary" style={{ width: '100%' }}>
                {t.contact.form.submit}
              </button>

              {submitted && (
                <div className="sushi-success-message">
                  ✓ {t.contact.form.success}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

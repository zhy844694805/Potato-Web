import { useState } from 'react'
import { useRestaurantLanguage } from '../SakuraMilano'
import { translations, restaurantInfo } from '../data/restaurant-data'

function ReservationPage() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  // Generate time slots
  const lunchSlots = ['12:00', '12:30', '13:00', '13:30', '14:00']
  const dinnerSlots = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00']

  // Get tomorrow's date as minimum
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="sushi-page-content">
      {/* Page Header */}
      <section className="sushi-page-header">
        <div className="sushi-container">
          <h1 className="sushi-heading-1">{t.reservation.title}</h1>
          <div className="sushi-divider" />
          <p className="sushi-text-gray">{t.reservation.subtitle}</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="sushi-section">
        <div className="sushi-container">
          <div className="sushi-reservation-grid">
            {/* Form */}
            <form className="sushi-form" onSubmit={handleSubmit}>
              <div className="sushi-form-row">
                <div className="sushi-form-group">
                  <label className="sushi-form-label">{t.reservation.form.date}</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    className="sushi-form-input"
                    required
                  />
                </div>
                <div className="sushi-form-group">
                  <label className="sushi-form-label">{t.reservation.form.guests}</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="sushi-form-select"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? (language === 'it' ? 'persona' : language === 'zh' ? '人' : 'guest') : (language === 'it' ? 'persone' : language === 'zh' ? '人' : 'guests')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.reservation.form.time}</label>
                <div style={{ marginBottom: 'var(--sushi-space-sm)' }}>
                  <span className="sushi-text-gray" style={{ fontSize: '0.8rem' }}>
                    {t.reservation.form.lunch}:
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {lunchSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`sushi-category-btn ${formData.time === slot ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, time: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                <div style={{ marginBottom: 'var(--sushi-space-sm)' }}>
                  <span className="sushi-text-gray" style={{ fontSize: '0.8rem' }}>
                    {t.reservation.form.dinner}:
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {dinnerSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`sushi-category-btn ${formData.time === slot ? 'active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, time: slot }))}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.reservation.form.name}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="sushi-form-input"
                  required
                />
              </div>

              <div className="sushi-form-row">
                <div className="sushi-form-group">
                  <label className="sushi-form-label">{t.reservation.form.email}</label>
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
                  <label className="sushi-form-label">{t.reservation.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="sushi-form-input"
                    required
                  />
                </div>
              </div>

              <div className="sushi-form-group">
                <label className="sushi-form-label">{t.reservation.form.notes}</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="sushi-form-textarea"
                  placeholder={
                    language === 'it'
                      ? 'Allergie, occasioni speciali, richieste particolari...'
                      : language === 'zh'
                      ? '过敏信息、特殊场合、特别要求...'
                      : 'Allergies, special occasions, special requests...'
                  }
                />
              </div>

              <button type="submit" className="sushi-btn sushi-btn-primary" style={{ width: '100%' }}>
                {t.reservation.form.submit}
              </button>

              {submitted && (
                <div className="sushi-success-message">
                  ✓ {t.reservation.form.success}
                </div>
              )}
            </form>

            {/* Info Card */}
            <div className="sushi-info-card">
              <div className="sushi-info-item">
                <h4>{t.reservation.info.hours}</h4>
                <p>
                  <strong>{t.reservation.form.lunch}:</strong><br />
                  {restaurantInfo.hours.lunch.days[language]} {restaurantInfo.hours.lunch.time}
                </p>
                <p style={{ marginTop: '0.5rem' }}>
                  <strong>{t.reservation.form.dinner}:</strong><br />
                  {restaurantInfo.hours.dinner.days[language]} {restaurantInfo.hours.dinner.time}
                </p>
                <p style={{ marginTop: '0.5rem', color: 'var(--sushi-red-light)' }}>
                  <strong>{restaurantInfo.hours.closed[language]}:</strong>{' '}
                  {language === 'it' ? 'Chiuso' : language === 'zh' ? '休息' : 'Closed'}
                </p>
              </div>

              <div className="sushi-info-item">
                <h4>{t.contact.address}</h4>
                <p>
                  {restaurantInfo.address.street}<br />
                  {restaurantInfo.address.postalCode} {restaurantInfo.address.city}<br />
                  {restaurantInfo.address.country}
                </p>
              </div>

              <div className="sushi-info-item">
                <h4>{t.reservation.info.policy}</h4>
                <p>{t.reservation.info.policyText}</p>
              </div>

              <div className="sushi-info-item">
                <h4>{t.contact.phone}</h4>
                <p>
                  <a href={`tel:${restaurantInfo.phone}`} style={{ color: 'var(--sushi-gold)' }}>
                    {restaurantInfo.phone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReservationPage

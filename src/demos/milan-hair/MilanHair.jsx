import { useState } from 'react'
import { translations, salonInfo, services, stylists, gallery, reviews, timeSlots, heroImage } from './data/salon-data'
import './MilanHair.css'

function MilanHair() {
  const [language, setLanguage] = useState('zh')
  const [activeCategory, setActiveCategory] = useState('women')
  const [formData, setFormData] = useState({
    service: '', stylist: '', date: '', time: '', name: '', phone: '', notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ service: '', stylist: '', date: '', time: '', name: '', phone: '', notes: '' })
    }, 3000)
  }

  const allServices = [...services.men, ...services.women, ...services.treatment]

  const renderStars = (rating) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 ? '½' : '') + '☆'.repeat(5 - Math.ceil(rating))
  }

  return (
    <div className="mhair-app">
      {/* Header */}
      <header className="mhair-header">
        <div className="mhair-header-inner">
          <a href="#home" className="mhair-logo">
            <span className="mhair-logo-icon">&#9986;</span>
            <div className="mhair-logo-text">
              <span>MILAN HAIR</span>
              <span>{language === 'zh' ? '米兰发艺' : 'Studio'}</span>
            </div>
          </a>

          <nav className="mhair-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#gallery">{t.nav.gallery}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#booking">{t.nav.booking}</a>
          </nav>

          <div className="mhair-header-right">
            <div className="mhair-rating">
              <span className="mhair-stars">★</span>
              <span>{salonInfo.rating}</span>
              <small>({salonInfo.reviewCount})</small>
            </div>
            <div className="mhair-lang">
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
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mhair-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="mhair-hero-overlay" />
        <div className="mhair-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#booking" className="mhair-hero-cta">{t.hero.cta}</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mhair-section mhair-services-section">
        <div className="mhair-container">
          <div className="mhair-section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.subtitle}</p>
          </div>

          <div className="mhair-category-tabs">
            {['women', 'men', 'treatment'].map(cat => (
              <button
                key={cat}
                className={activeCategory === cat ? 'active' : ''}
                onClick={() => setActiveCategory(cat)}
              >
                {t.services[cat]}
              </button>
            ))}
          </div>

          <div className="mhair-services-grid">
            {services[activeCategory].map(service => (
              <div key={service.id} className="mhair-service-card">
                <div className="mhair-service-info">
                  <h3>{service.name[language]}</h3>
                  <span className="mhair-service-duration">{service.duration} min</span>
                </div>
                <div className="mhair-service-price">
                  €{service.price}
                  {service.priceMax && <span>-€{service.priceMax}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mhair-section mhair-gallery-section">
        <div className="mhair-container">
          <div className="mhair-section-header">
            <h2>{t.gallery.title}</h2>
            <p>{t.gallery.subtitle}</p>
          </div>

          <div className="mhair-gallery-grid">
            {gallery.map((img, idx) => (
              <div key={idx} className="mhair-gallery-item">
                <img src={img} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mhair-section mhair-team-section">
        <div className="mhair-container">
          <div className="mhair-section-header">
            <h2>{t.team.title}</h2>
            <p>{t.team.subtitle}</p>
          </div>

          <div className="mhair-team-grid">
            {stylists.map(stylist => (
              <div key={stylist.id} className="mhair-team-card">
                <div className="mhair-team-image">
                  <img src={stylist.image} alt={stylist.name} />
                </div>
                <div className="mhair-team-info">
                  <h3>{stylist.name}</h3>
                  <p className="mhair-team-chinese">{stylist.nameChinese}</p>
                  <p className="mhair-team-role">{stylist.role[language]}</p>
                  <p className="mhair-team-specialty">{stylist.specialty[language]}</p>
                  <div className="mhair-team-exp">
                    {stylist.experience} {language === 'zh' ? '年经验' : language === 'en' ? 'years exp.' : 'anni esp.'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mhair-section mhair-reviews-section">
        <div className="mhair-container">
          <div className="mhair-section-header">
            <h2>{t.reviews.title}</h2>
            <p>{t.reviews.subtitle}</p>
            <div className="mhair-overall-rating">
              <span className="mhair-rating-stars">{renderStars(salonInfo.rating)}</span>
              <span className="mhair-rating-score">{salonInfo.rating}/5</span>
              <span className="mhair-rating-count">({salonInfo.reviewCount} {language === 'zh' ? '条评价' : language === 'en' ? 'reviews' : 'recensioni'})</span>
            </div>
          </div>

          <div className="mhair-reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="mhair-review-card">
                <div className="mhair-review-header">
                  <strong>{review.name}</strong>
                  <span className="mhair-review-stars">{renderStars(review.rating)}</span>
                </div>
                <p>{review.text[language]}</p>
                <small>{review.date}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mhair-section mhair-booking-section">
        <div className="mhair-container">
          <div className="mhair-section-header">
            <h2>{t.booking.title}</h2>
            <p>{t.booking.subtitle}</p>
          </div>

          <div className="mhair-booking-grid">
            <div className="mhair-booking-info">
              <div className="mhair-info-card">
                <h3>&#128205; {t.contact.address}</h3>
                <p>{salonInfo.address.street}<br />{salonInfo.address.postalCode} {salonInfo.address.city}</p>
              </div>
              <div className="mhair-info-card">
                <h3>&#128222; {t.contact.phone}</h3>
                <p><a href={`tel:${salonInfo.phone}`}>{salonInfo.phone}</a></p>
              </div>
              <div className="mhair-info-card">
                <h3>&#128337; {t.contact.hours}</h3>
                <p>
                  {salonInfo.hours.tueSat.days[language]}: {salonInfo.hours.tueSat.time}<br />
                  {salonInfo.hours.sunday.days[language]}: {salonInfo.hours.sunday.time}<br />
                  {salonInfo.hours.monday[language]}
                </p>
              </div>
              <div className="mhair-info-card mhair-instagram">
                <span>&#128247;</span>
                <a href="#">{salonInfo.instagram}</a>
              </div>
            </div>

            <div className="mhair-form-wrapper">
              {submitted ? (
                <div className="mhair-form-success">
                  <span>&#10003;</span>
                  {t.booking.form.success}
                </div>
              ) : (
                <form className="mhair-form" onSubmit={handleSubmit}>
                  <div className="mhair-form-row">
                    <div className="mhair-form-group">
                      <label>{t.booking.form.service}</label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        required
                      >
                        <option value="">--</option>
                        {allServices.map(s => (
                          <option key={s.id} value={s.id}>{s.name[language]} - €{s.price}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mhair-form-group">
                      <label>{t.booking.form.stylist}</label>
                      <select
                        value={formData.stylist}
                        onChange={e => setFormData({ ...formData, stylist: e.target.value })}
                      >
                        <option value="">{language === 'zh' ? '无偏好' : language === 'en' ? 'No preference' : 'Nessuna preferenza'}</option>
                        {stylists.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mhair-form-row">
                    <div className="mhair-form-group">
                      <label>{t.booking.form.date}</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mhair-form-group">
                      <label>{t.booking.form.time}</label>
                      <select
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        required
                      >
                        <option value="">--</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mhair-form-row">
                    <div className="mhair-form-group">
                      <label>{t.booking.form.name}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="mhair-form-group">
                      <label>{t.booking.form.phone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="mhair-form-group">
                    <label>{t.booking.form.notes}</label>
                    <textarea
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button type="submit">{t.booking.form.submit}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mhair-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/milan-hair">
          &#8592; {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
        </a>
      </footer>
    </div>
  )
}

export default MilanHair

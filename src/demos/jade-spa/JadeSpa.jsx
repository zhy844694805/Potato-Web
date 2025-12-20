import { useState } from 'react'
import { translations, spaInfo, services, team, timeSlots, heroImage, galleryImages } from './data/spa-data'
import './JadeSpa.css'

function JadeSpa() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ service: '', date: '', time: '', name: '', phone: '', email: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="jade-app">
      {/* Header */}
      <header className="jade-header">
        <div className="jade-header-inner">
          <a href="#home" className="jade-logo">
            <span className="jade-logo-icon">🪷</span>
            <span>JADE WELLNESS</span>
          </a>
          <nav className="jade-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#booking">{t.nav.booking}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="jade-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
                {lang === 'zh' ? '中' : lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="jade-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="jade-hero-overlay" />
        <div className="jade-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#booking" className="jade-btn">{t.hero.cta}</a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="jade-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.services.title}</h2>
          <p className="jade-subtitle">{t.services.subtitle}</p>
          <div className="jade-services-grid">
            {services.map(s => (
              <div key={s.id} className={`jade-service ${s.popular ? 'popular' : ''}`}>
                <img src={s.image} alt={s.name[language]} className="jade-service-img" />
                <div className="jade-service-content">
                  <h3>{s.name[language]}</h3>
                  <p>{s.desc[language]}</p>
                  <div className="jade-service-meta">
                    <span>{t.services.duration}: {s.duration}</span>
                    <span className="jade-price">€{s.price}</span>
                  </div>
                </div>
                {s.popular && <span className="jade-popular-tag">★</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="jade-section jade-about-section">
        <div className="jade-container">
          <h2 className="jade-title">{t.about.title}</h2>
          <p className="jade-about-text">{t.about.text}</p>
          <div className="jade-team">
            {team.map((m, i) => (
              <div key={i} className="jade-team-member">
                <img src={m.image} alt={m.name[language]} />
                <h4>{m.name[language]}</h4>
                <p className="jade-role">{m.role[language]}</p>
                <p className="jade-specialty">{m.specialty[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="jade-gallery">
        {galleryImages.map((img, i) => (
          <div key={i} className="jade-gallery-item">
            <img src={img} alt="Spa atmosphere" />
          </div>
        ))}
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
                <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} required>
                  <option value="">--</option>
                  {services.map(s => (
                    <option key={s.id} value={s.id}>{s.name[language]} - €{s.price}</option>
                  ))}
                </select>
              </div>
              <div className="jade-form-group">
                <label>{t.booking.form.date}</label>
                <input type="date" min={minDate} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} required />
              </div>
              <div className="jade-form-group">
                <label>{t.booking.form.time}</label>
                <select value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} required>
                  <option value="">--</option>
                  {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="jade-form-group">
                <label>{t.booking.form.name}</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="jade-form-group">
                <label>{t.booking.form.phone}</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
              </div>
              <div className="jade-form-group">
                <label>{t.booking.form.email}</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              </div>
            </div>
            <div className="jade-form-group full">
              <label>{t.booking.form.notes}</label>
              <textarea value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} />
            </div>
            <button type="submit" className="jade-btn jade-btn-full">{t.booking.form.submit}</button>
            {submitted && <p className="jade-success">✓ {t.booking.success}</p>}
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="jade-section">
        <div className="jade-container jade-contact">
          <h2 className="jade-title">{t.contact.title}</h2>
          <div className="jade-contact-grid">
            <div className="jade-contact-item">
              <span>📍</span>
              <div>
                <strong>{t.contact.address}</strong>
                <p>{spaInfo.address.street}, {spaInfo.address.postalCode} {spaInfo.address.city}</p>
              </div>
            </div>
            <div className="jade-contact-item">
              <span>🕐</span>
              <div>
                <strong>{t.contact.hours}</strong>
                <p>{language === 'it' ? 'Mar-Dom' : language === 'zh' ? '周二至周日' : 'Tue-Sun'}: {spaInfo.hours.weekday}</p>
              </div>
            </div>
            <div className="jade-contact-item">
              <span>📞</span>
              <div>
                <strong>{t.contact.phone}</strong>
                <p>{spaInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="jade-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/jade-spa" className="jade-back">← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}</a>
      </footer>
    </div>
  )
}

export default JadeSpa

import { useState } from 'react'
import {
  translations,
  clinicInfo,
  services,
  doctors,
  testimonials,
  insuranceProviders,
  timeSlots,
  heroImage
} from './data/clinic-data'
import './VitaCare.css'

// Icon components for services
const ServiceIcon = ({ type }) => {
  const icons = {
    stethoscope: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6v0a6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
        <path d="M8 15v1a6 6 0 006 6v0a6 6 0 006-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    baby: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 00-16 0" />
      </svg>
    ),
    female: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="8" r="6" />
        <path d="M12 14v7M9 18h6" />
      </svg>
    ),
    herbs: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
        <path d="M7 8c0-3 2-5 5-5s5 2 5 5" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    bone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 10c.7-.7 1.69-1 2.5-1a2.5 2.5 0 012.5 2.5c0 .81-.3 1.8-1 2.5l-8 8c-.7.7-1.69 1-2.5 1a2.5 2.5 0 01-2.5-2.5c0-.81.3-1.8 1-2.5l8-8z" />
        <path d="M7 14c-.7.7-1.69 1-2.5 1A2.5 2.5 0 012 12.5c0-.81.3-1.8 1-2.5l8-8c.7-.7 1.69-1 2.5-1A2.5 2.5 0 0116 3.5c0 .81-.3 1.8-1 2.5l-8 8z" />
      </svg>
    )
  }
  return <span className="vitacare-service-icon">{icons[type]}</span>
}

function VitaCare() {
  const [language, setLanguage] = useState('it')
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dob: '',
    insurance: '',
    notes: '',
    newPatient: 'yes'
  })
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        service: '',
        doctor: '',
        date: '',
        time: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dob: '',
        insurance: '',
        notes: '',
        newPatient: 'yes'
      })
    }, 4000)
  }

  const renderStars = (rating) => '★'.repeat(rating)

  return (
    <div className="vitacare-app">
      {/* Header */}
      <header className="vitacare-header">
        <div className="vitacare-header-inner">
          <a href="#home" className="vitacare-logo">
            <span className="vitacare-logo-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
            <div className="vitacare-logo-text">
              <span>VITACARE</span>
              <span>{language === 'zh' ? '维康家庭诊所' : 'Family Clinic'}</span>
            </div>
          </a>

          <nav className={`vitacare-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#doctors" onClick={() => setMobileMenuOpen(false)}>{t.nav.doctors}</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>{t.nav.testimonials}</a>
            <a href="#booking" onClick={() => setMobileMenuOpen(false)}>{t.nav.booking}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
          </nav>

          <div className="vitacare-header-actions">
            <div className="vitacare-lang">
              {['it', 'en', 'zh'].map((lang) => (
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
              className="vitacare-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="vitacare-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="vitacare-hero-overlay" />
        <div className="vitacare-hero-content">
          <div className="vitacare-hero-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z" />
            </svg>
            {t.hero.badge}
          </div>
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="vitacare-hero-actions">
            <a href="#booking" className="vitacare-hero-cta">{t.hero.cta}</a>
            <a href={`tel:${clinicInfo.emergency}`} className="vitacare-hero-emergency">
              {t.hero.emergency}{clinicInfo.emergency}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="vitacare-section vitacare-services-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.services.title}</h2>
            <p>{t.services.subtitle}</p>
          </div>

          <div className="vitacare-services-grid">
            {services.map((service) => (
              <div key={service.id} className="vitacare-service-card">
                <ServiceIcon type={service.icon} />
                <h3>{service.name[language]}</h3>
                <p>{service.desc[language]}</p>
                <ul className="vitacare-service-features">
                  {service.features[language].map((feature, idx) => (
                    <li key={idx}>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="vitacare-service-footer">
                  <span className="vitacare-service-price">
                    {language === 'zh' ? '起价 ' : language === 'it' ? 'Da ' : 'From '}
                    &euro;{service.price}
                  </span>
                  <a href="#booking" className="vitacare-service-btn">{t.services.learnMore}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="vitacare-section vitacare-doctors-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.doctors.title}</h2>
            <p>{t.doctors.subtitle}</p>
          </div>

          <div className="vitacare-doctors-grid">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="vitacare-doctor-card">
                <div className="vitacare-doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="vitacare-doctor-info">
                  <h3>{doctor.name}</h3>
                  {language === 'zh' && (
                    <p className="vitacare-doctor-chinese">{doctor.nameChinese}</p>
                  )}
                  <p className="vitacare-doctor-role">{doctor.role[language]}</p>
                  <div className="vitacare-doctor-details">
                    <p>
                      <strong>{doctor.specialty[language]}</strong>
                    </p>
                    <p>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {doctor.experience} {t.doctors.experience}
                    </p>
                    <p>
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
                      </svg>
                      {t.doctors.languages}: {doctor.languages.join(', ')}
                    </p>
                  </div>
                  <a href="#booking" className="vitacare-doctor-btn">
                    {t.hero.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="vitacare-section vitacare-hours-section">
        <div className="vitacare-container">
          <div className="vitacare-hours-content">
            <div className="vitacare-hours-info">
              <h2>{t.hours.title}</h2>
              <p className="vitacare-hours-subtitle">{t.hours.subtitle}</p>
              <div className="vitacare-hours-list">
                <div className="vitacare-hours-item">
                  <span className="vitacare-hours-day">{clinicInfo.hours.weekdays.days[language]}</span>
                  <span className="vitacare-hours-time">{clinicInfo.hours.weekdays.time}</span>
                </div>
                <div className="vitacare-hours-item">
                  <span className="vitacare-hours-day">{clinicInfo.hours.saturday.days[language]}</span>
                  <span className="vitacare-hours-time">{clinicInfo.hours.saturday.time}</span>
                </div>
                <div className="vitacare-hours-item vitacare-hours-closed">
                  <span>{clinicInfo.hours.sunday[language]}</span>
                </div>
              </div>
              <p className="vitacare-hours-emergency">{t.hours.emergency}</p>
            </div>
            <div className="vitacare-hours-cta">
              <a href={`tel:${clinicInfo.phone}`} className="vitacare-phone-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="vitacare-section vitacare-testimonials-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{t.testimonials.subtitle}</p>
          </div>

          <div className="vitacare-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.id} className="vitacare-testimonial-card">
                <div className="vitacare-testimonial-stars">{renderStars(item.rating)}</div>
                <p className="vitacare-testimonial-text">&ldquo;{item.text[language]}&rdquo;</p>
                <div className="vitacare-testimonial-author">
                  <div className="vitacare-testimonial-avatar">
                    {item.nameDisplay.charAt(0)}
                  </div>
                  <div>
                    <strong>{item.nameDisplay}</strong>
                    <span>{item.condition[language]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="vitacare-section vitacare-insurance-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.insurance.title}</h2>
            <p>{t.insurance.subtitle}</p>
          </div>

          <div className="vitacare-insurance-content">
            <div className="vitacare-insurance-providers">
              <h3>{t.insurance.accepted}</h3>
              <div className="vitacare-insurance-grid">
                {insuranceProviders.map((provider) => (
                  <div key={provider.id} className="vitacare-insurance-item">
                    {provider.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="vitacare-insurance-info">
              <div className="vitacare-insurance-card">
                <h4>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                  {t.insurance.payment}
                </h4>
                <p>{t.insurance.paymentText}</p>
              </div>
              <div className="vitacare-insurance-card">
                <h4>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                  {t.insurance.ssn}
                </h4>
                <p>{t.insurance.ssnText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="vitacare-section vitacare-booking-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.booking.title}</h2>
            <p>{t.booking.subtitle}</p>
          </div>

          <div className="vitacare-booking-wrapper">
            {submitted ? (
              <div className="vitacare-form-success">
                <svg viewBox="0 0 24 24" fill="currentColor" width="64" height="64">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <p>{t.booking.form.success}</p>
              </div>
            ) : (
              <form className="vitacare-form" onSubmit={handleSubmit}>
                <div className="vitacare-form-row">
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.service} *</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">--</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name[language]} - &euro;{s.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.doctor}</label>
                    <select
                      value={formData.doctor}
                      onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    >
                      <option value="">{t.booking.form.noPreference}</option>
                      {doctors.map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name} - {d.specialty[language]}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="vitacare-form-row">
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.date} *</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.time} *</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    >
                      <option value="">--</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="vitacare-form-row">
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.firstName} *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.lastName} *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="vitacare-form-row">
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.phone} *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.email} *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="vitacare-form-row">
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.dob}</label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    />
                  </div>
                  <div className="vitacare-form-group">
                    <label>{t.booking.form.insurance}</label>
                    <select
                      value={formData.insurance}
                      onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
                    >
                      <option value="">{t.booking.form.selectInsurance}</option>
                      {insuranceProviders.map((ins) => (
                        <option key={ins.id} value={ins.id}>
                          {ins.name}
                        </option>
                      ))}
                      <option value="private">
                        {language === 'zh' ? '自费' : language === 'it' ? 'Privato' : 'Private/Self-pay'}
                      </option>
                      <option value="ssn">SSN</option>
                    </select>
                  </div>
                </div>

                <div className="vitacare-form-group">
                  <label>{t.booking.form.newPatient}</label>
                  <div className="vitacare-radio-group">
                    <label className="vitacare-radio">
                      <input
                        type="radio"
                        name="newPatient"
                        value="yes"
                        checked={formData.newPatient === 'yes'}
                        onChange={(e) => setFormData({ ...formData, newPatient: e.target.value })}
                      />
                      <span>{t.booking.form.yes}</span>
                    </label>
                    <label className="vitacare-radio">
                      <input
                        type="radio"
                        name="newPatient"
                        value="no"
                        checked={formData.newPatient === 'no'}
                        onChange={(e) => setFormData({ ...formData, newPatient: e.target.value })}
                      />
                      <span>{t.booking.form.no}</span>
                    </label>
                  </div>
                </div>

                <div className="vitacare-form-group">
                  <label>{t.booking.form.notes}</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.booking.form.notesPlaceholder}
                  />
                </div>

                <button type="submit" className="vitacare-submit-btn">
                  {t.booking.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="vitacare-section vitacare-contact-section">
        <div className="vitacare-container">
          <div className="vitacare-section-header">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>

          <div className="vitacare-contact-grid">
            <div className="vitacare-contact-card">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <h3>{t.contact.address}</h3>
              <p>
                {clinicInfo.address.street}<br />
                {clinicInfo.address.postalCode} {clinicInfo.address.city}<br />
                {clinicInfo.address.country}
              </p>
            </div>

            <div className="vitacare-contact-card">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <h3>{t.contact.phone}</h3>
              <p>
                <a href={`tel:${clinicInfo.phone}`}>{clinicInfo.phone}</a><br />
                WeChat: {clinicInfo.wechat}
              </p>
            </div>

            <div className="vitacare-contact-card">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <h3>{t.contact.email}</h3>
              <p>
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </p>
            </div>

            <div className="vitacare-contact-card vitacare-emergency-card">
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
              </svg>
              <h3>{t.contact.emergency}</h3>
              <p>
                <a href={`tel:${clinicInfo.emergency}`}>{clinicInfo.emergency}</a><br />
                <small>{t.contact.emergencyText}</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="vitacare-footer">
        <div className="vitacare-footer-inner">
          <div className="vitacare-footer-brand">
            <span className="vitacare-footer-logo">VITACARE</span>
            <span>&copy; {t.footer.rights}</span>
          </div>
          <div className="vitacare-footer-links">
            <a href="#privacy">{t.footer.privacy}</a>
            <a href="#terms">{t.footer.terms}</a>
            <a href="/portfolio/vita-care">
              {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default VitaCare

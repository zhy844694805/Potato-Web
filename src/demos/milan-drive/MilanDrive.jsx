import { useState } from 'react'
import {
  translations,
  schoolInfo,
  courses,
  instructors,
  priceList,
  timeSlots,
  languageOptions,
  stats,
  galleryImages
} from './data/school-data'
import './MilanDrive.css'

function MilanDrive() {
  const [language, setLanguage] = useState('zh')
  const [formData, setFormData] = useState({
    course: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    language: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({
      course: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      language: '',
      notes: ''
    })
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  // Get tomorrow's date for min booking date
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  // Icons for Why Us section
  const whyUsIcons = ['🌐', '🏆', '🕐', '🚗']

  return (
    <div className="drive-app">
      {/* Header */}
      <header className="drive-header">
        <div className="drive-header-inner">
          <a href="#home" className="drive-logo">
            <span className="drive-logo-icon">🚗</span>
            <span>Milan Drive</span>
          </a>
          <nav className="drive-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#courses">{t.nav.courses}</a>
            <a href="#prices">{t.nav.prices}</a>
            <a href="#instructors">{t.nav.instructors}</a>
            <a href="#booking">{t.nav.booking}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="drive-lang">
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
          <button className="drive-menu-toggle" aria-label="Menu">
            ☰
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="drive-hero">
        <div className="drive-hero-bg" />
        <div className="drive-hero-pattern" />
        <div className="drive-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#booking" className="drive-btn">
            {t.hero.cta} →
          </a>
          <div className="drive-stats">
            {stats.map((stat, index) => (
              <div key={index} className="drive-stat">
                <div className="drive-stat-value">{stat.value}</div>
                <div className="drive-stat-label">{t.stats[stat.key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="drive-section">
        <div className="drive-container">
          <h2 className="drive-title">{t.whyUs.title}</h2>
          <div className="drive-why-grid">
            {t.whyUs.items.map((item, index) => (
              <div key={index} className="drive-why-item">
                <div className="drive-why-icon">{whyUsIcons[index]}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="drive-section drive-section-alt">
        <div className="drive-container">
          <h2 className="drive-title">{t.courses.title}</h2>
          <p className="drive-subtitle">{t.courses.subtitle}</p>
          <div className="drive-courses-grid">
            {courses.map(course => (
              <div
                key={course.id}
                className={`drive-course ${course.popular ? 'popular' : ''}`}
              >
                {course.popular && (
                  <span className="drive-course-badge">{t.courses.popular}</span>
                )}
                <img
                  src={course.image}
                  alt={course.name[language]}
                  className="drive-course-img"
                />
                <div className="drive-course-content">
                  <h3>{course.name[language]}</h3>
                  <p className="drive-course-desc">{course.description[language]}</p>
                  <div className="drive-course-meta">
                    <div className="drive-course-duration">
                      <span>📚</span>
                      {course.duration.lessons} {t.courses.lessons} / {course.duration.hours} {t.courses.hours}
                    </div>
                    <div className="drive-course-price">€{course.price}</div>
                  </div>
                  <ul className="drive-course-features">
                    {course.features[language].slice(0, 4).map((feature, idx) => (
                      <li key={idx}>
                        <span className="drive-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#booking" className="drive-btn drive-btn-green drive-btn-full">
                    {t.courses.book}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List */}
      <section id="prices" className="drive-section">
        <div className="drive-container">
          <h2 className="drive-title">{t.prices.title}</h2>
          <p className="drive-subtitle">{t.prices.subtitle}</p>
          <div className="drive-price-table">
            <div className="drive-price-row header">
              <span className="drive-price-name">{t.prices.course}</span>
              <span className="drive-price-value">{t.prices.price}</span>
            </div>
            {priceList.map((item, index) => (
              <div key={index} className="drive-price-row">
                <span className="drive-price-name">{item.name[language]}</span>
                <span className="drive-price-value">€{item.price}</span>
              </div>
            ))}
          </div>
          <p className="drive-price-note">
            {t.prices.note}
            <strong>💳 {t.prices.payment}</strong>
          </p>
        </div>
      </section>

      {/* Instructors */}
      <section id="instructors" className="drive-section drive-section-alt">
        <div className="drive-container">
          <h2 className="drive-title">{t.instructors.title}</h2>
          <p className="drive-subtitle">{t.instructors.subtitle}</p>
          <div className="drive-instructors-grid">
            {instructors.map(instructor => (
              <div key={instructor.id} className="drive-instructor">
                <img
                  src={instructor.image}
                  alt={instructor.name[language]}
                  className="drive-instructor-img"
                />
                <h4>{instructor.name[language]}</h4>
                <p className="drive-instructor-role">{instructor.role[language]}</p>
                <p className="drive-instructor-exp">
                  {instructor.experience} {t.instructors.experience}
                </p>
                <div className="drive-instructor-langs">
                  {instructor.languages.map(lang => (
                    <span key={lang} className="drive-lang-tag">
                      {lang === 'it' ? '🇮🇹' : lang === 'en' ? '🇬🇧' : '🇨🇳'}
                    </span>
                  ))}
                </div>
                <p className="drive-instructor-spec">
                  {t.instructors.specialization}: {instructor.specialization[language]}
                </p>
                <div className="drive-instructor-rating">
                  {'★'.repeat(Math.floor(instructor.rating))}
                  <span style={{ color: '#6b7280', marginLeft: '0.25rem' }}>
                    {instructor.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="drive-gallery">
        {galleryImages.map((img, index) => (
          <div key={index} className="drive-gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* Booking */}
      <section id="booking" className="drive-section drive-booking-section">
        <div className="drive-container">
          <h2 className="drive-title">{t.booking.title}</h2>
          <p className="drive-subtitle">{t.booking.subtitle}</p>
          <form className="drive-booking-form" onSubmit={handleSubmit}>
            <div className="drive-form-grid">
              <div className="drive-form-group">
                <label>{t.booking.form.course}</label>
                <select
                  value={formData.course}
                  onChange={(e) => handleInputChange('course', e.target.value)}
                  required
                >
                  <option value="">{t.booking.form.selectCourse}</option>
                  {courses.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name[language]} - €{c.price}
                    </option>
                  ))}
                </select>
              </div>
              <div className="drive-form-group">
                <label>{t.booking.form.language}</label>
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  required
                >
                  <option value="">{t.booking.form.selectLanguage}</option>
                  {languageOptions.map(opt => (
                    <option key={opt.code} value={opt.code}>
                      {opt.name[language]}
                    </option>
                  ))}
                </select>
              </div>
              <div className="drive-form-group">
                <label>{t.booking.form.date}</label>
                <input
                  type="date"
                  min={minDate}
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  required
                />
              </div>
              <div className="drive-form-group">
                <label>{t.booking.form.time}</label>
                <select
                  value={formData.time}
                  onChange={(e) => handleInputChange('time', e.target.value)}
                  required
                >
                  <option value="">{t.booking.form.selectTime}</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              <div className="drive-form-group">
                <label>{t.booking.form.name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              <div className="drive-form-group">
                <label>{t.booking.form.phone}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div className="drive-form-group full">
                <label>{t.booking.form.email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="drive-form-group full">
                <label>{t.booking.form.notes}</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder={language === 'zh' ? '请输入您的特殊需求...' : language === 'it' ? 'Inserisci eventuali richieste...' : 'Enter any special requests...'}
                />
              </div>
            </div>
            <button type="submit" className="drive-btn drive-btn-green drive-btn-full">
              {t.booking.form.submit}
            </button>
            {submitted && (
              <div className="drive-success">
                ✓ {t.booking.success}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="drive-section drive-section-alt">
        <div className="drive-container">
          <h2 className="drive-title">{t.contact.title}</h2>
          <div className="drive-contact-grid">
            <div className="drive-contact-item">
              <div className="drive-contact-icon">📍</div>
              <h4>{t.contact.address}</h4>
              <p>
                {schoolInfo.address.street}<br />
                {schoolInfo.address.postalCode} {schoolInfo.address.city}
              </p>
            </div>
            <div className="drive-contact-item">
              <div className="drive-contact-icon">🕐</div>
              <h4>{t.contact.hours}</h4>
              <p>
                {schoolInfo.hours.weekday[language]}: {schoolInfo.hours.weekday.time}<br />
                {schoolInfo.hours.saturday[language]}: {schoolInfo.hours.saturday.time}
              </p>
            </div>
            <div className="drive-contact-item">
              <div className="drive-contact-icon">📞</div>
              <h4>{t.contact.phone}</h4>
              <p>
                <a href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</a>
              </p>
            </div>
            <div className="drive-contact-item">
              <div className="drive-contact-icon">💬</div>
              <h4>{t.contact.wechat}</h4>
              <p>{schoolInfo.wechat}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="drive-footer">
        <div className="drive-footer-content">
          <div className="drive-footer-logo">
            🚗 Milan Drive
            {language === 'zh' && <span style={{ fontSize: '0.8em', marginLeft: '0.5rem' }}>米兰驾校</span>}
          </div>
          <p className="drive-footer-slogan">{t.footer.slogan}</p>
          <div className="drive-footer-links">
            <a href="#courses">{t.nav.courses}</a>
            <a href="#prices">{t.nav.prices}</a>
            <a href="#instructors">{t.nav.instructors}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <p className="drive-footer-copy">
            © {t.footer.rights}
          </p>
          <a href="/portfolio" className="drive-back">
            ← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default MilanDrive

import { useState } from 'react'
import { translations, clinicInfo, treatments, conditions, doctors, testimonials, timeSlots, heroImage } from './data/tcm-data'
import './YikangTCM.css'

function YikangTCM() {
  const [language, setLanguage] = useState('zh')
  const [formData, setFormData] = useState({
    treatment: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', symptoms: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ treatment: '', doctor: '', date: '', time: '', name: '', phone: '', email: '', symptoms: '' })
    }, 3000)
  }

  const renderStars = (rating) => '★'.repeat(rating)

  return (
    <div className="yikang-app">
      {/* Header */}
      <header className="yikang-header">
        <div className="yikang-header-inner">
          <a href="#home" className="yikang-logo">
            <span className="yikang-logo-icon">&#9775;</span>
            <div className="yikang-logo-text">
              <span>YIKANG TCM</span>
              <span>{language === 'zh' ? '怡康中医' : 'Centro MTC'}</span>
            </div>
          </a>

          <nav className="yikang-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#treatments">{t.nav.treatments}</a>
            <a href="#conditions">{t.nav.conditions}</a>
            <a href="#doctors">{t.nav.doctors}</a>
            <a href="#booking">{t.nav.booking}</a>
          </nav>

          <div className="yikang-lang">
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
      </header>

      {/* Hero */}
      <section id="home" className="yikang-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="yikang-hero-overlay" />
        <div className="yikang-hero-content">
          <div className="yikang-hero-badge">&#9775; {language === 'zh' ? '传统中医' : 'MTC'}</div>
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#booking" className="yikang-hero-cta">{t.hero.cta}</a>
        </div>
      </section>

      {/* Philosophy */}
      <section className="yikang-section yikang-philosophy">
        <div className="yikang-container">
          <div className="yikang-philosophy-content">
            <div className="yikang-philosophy-text">
              <h2>{t.philosophy.title}</h2>
              <p>{t.philosophy.text}</p>
            </div>
            <div className="yikang-philosophy-icons">
              <div className="yikang-philosophy-item">
                <span>&#9775;</span>
                <h4>{t.philosophy.balance}</h4>
              </div>
              <div className="yikang-philosophy-item">
                <span>&#127744;</span>
                <h4>{t.philosophy.qi}</h4>
              </div>
              <div className="yikang-philosophy-item">
                <span>&#129728;</span>
                <h4>{t.philosophy.holistic}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="yikang-section yikang-treatments-section">
        <div className="yikang-container">
          <div className="yikang-section-header">
            <h2>{t.treatments.title}</h2>
            <p>{t.treatments.subtitle}</p>
          </div>

          <div className="yikang-treatments-grid">
            {treatments.map(treatment => (
              <div key={treatment.id} className="yikang-treatment-card">
                <div className="yikang-treatment-image">
                  <img src={treatment.image} alt={treatment.name[language]} />
                </div>
                <div className="yikang-treatment-content">
                  <h3>{treatment.name[language]}</h3>
                  <p>{treatment.desc[language]}</p>
                  <div className="yikang-treatment-meta">
                    <span className="yikang-treatment-duration">
                      &#128337; {treatment.duration} min
                    </span>
                    <span className="yikang-treatment-price">€{treatment.price}</span>
                  </div>
                  <a href="#booking" className="yikang-treatment-btn">{t.treatments.book}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="yikang-section yikang-conditions-section">
        <div className="yikang-container">
          <div className="yikang-section-header">
            <h2>{t.conditions.title}</h2>
            <p>{t.conditions.subtitle}</p>
          </div>

          <div className="yikang-conditions-grid">
            {conditions.map(condition => (
              <div key={condition.id} className="yikang-condition-card">
                <span className="yikang-condition-icon" dangerouslySetInnerHTML={{ __html: condition.icon }} />
                <span>{condition.name[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="yikang-section yikang-doctors-section">
        <div className="yikang-container">
          <div className="yikang-section-header">
            <h2>{t.doctors.title}</h2>
            <p>{t.doctors.subtitle}</p>
          </div>

          <div className="yikang-doctors-grid">
            {doctors.map(doctor => (
              <div key={doctor.id} className="yikang-doctor-card">
                <div className="yikang-doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="yikang-doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="yikang-doctor-chinese">{doctor.nameChinese}</p>
                  <p className="yikang-doctor-role">{doctor.role[language]}</p>
                  <div className="yikang-doctor-details">
                    <p><strong>{language === 'zh' ? '专长：' : language === 'en' ? 'Specialty: ' : 'Specialità: '}</strong>{doctor.specialty[language]}</p>
                    <p><strong>{language === 'zh' ? '学历：' : language === 'en' ? 'Education: ' : 'Studi: '}</strong>{doctor.education[language]}</p>
                    <p><strong>{language === 'zh' ? '经验：' : language === 'en' ? 'Experience: ' : 'Esperienza: '}</strong>{doctor.experience} {language === 'zh' ? '年' : language === 'en' ? 'years' : 'anni'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="yikang-section yikang-testimonials-section">
        <div className="yikang-container">
          <div className="yikang-section-header">
            <h2>{t.testimonials.title}</h2>
            <p>{t.testimonials.subtitle}</p>
          </div>

          <div className="yikang-testimonials-grid">
            {testimonials.map(item => (
              <div key={item.id} className="yikang-testimonial-card">
                <div className="yikang-testimonial-stars">{renderStars(item.rating)}</div>
                <p className="yikang-testimonial-text">"{item.text[language]}"</p>
                <div className="yikang-testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.condition[language]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="yikang-section yikang-booking-section">
        <div className="yikang-container">
          <div className="yikang-section-header">
            <h2>{t.booking.title}</h2>
            <p>{t.booking.subtitle}</p>
          </div>

          <div className="yikang-booking-grid">
            <div className="yikang-booking-info">
              <div className="yikang-info-card">
                <h3>&#128205; {t.contact.address}</h3>
                <p>{clinicInfo.address.street}<br />{clinicInfo.address.postalCode} {clinicInfo.address.city}</p>
              </div>
              <div className="yikang-info-card">
                <h3>&#128222; {t.contact.phone}</h3>
                <p><a href={`tel:${clinicInfo.phone}`}>{clinicInfo.phone}</a></p>
                <p>WeChat: {clinicInfo.wechat}</p>
              </div>
              <div className="yikang-info-card">
                <h3>&#128337; {t.contact.hours}</h3>
                <p>
                  {clinicInfo.hours.weekdays.days[language]}: {clinicInfo.hours.weekdays.time}<br />
                  {clinicInfo.hours.saturday.days[language]}: {clinicInfo.hours.saturday.time}<br />
                  {clinicInfo.hours.sunday[language]}
                </p>
              </div>
            </div>

            <div className="yikang-form-wrapper">
              {submitted ? (
                <div className="yikang-form-success">
                  <span>&#10003;</span>
                  {t.booking.form.success}
                </div>
              ) : (
                <form className="yikang-form" onSubmit={handleSubmit}>
                  <div className="yikang-form-row">
                    <div className="yikang-form-group">
                      <label>{t.booking.form.treatment}</label>
                      <select
                        value={formData.treatment}
                        onChange={e => setFormData({ ...formData, treatment: e.target.value })}
                        required
                      >
                        <option value="">--</option>
                        {treatments.map(t => (
                          <option key={t.id} value={t.id}>{t.name[language]} - €{t.price}</option>
                        ))}
                      </select>
                    </div>
                    <div className="yikang-form-group">
                      <label>{t.booking.form.doctor}</label>
                      <select
                        value={formData.doctor}
                        onChange={e => setFormData({ ...formData, doctor: e.target.value })}
                      >
                        <option value="">{language === 'zh' ? '无偏好' : language === 'en' ? 'No preference' : 'Nessuna preferenza'}</option>
                        {doctors.map(d => (
                          <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="yikang-form-row">
                    <div className="yikang-form-group">
                      <label>{t.booking.form.date}</label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div className="yikang-form-group">
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

                  <div className="yikang-form-row">
                    <div className="yikang-form-group">
                      <label>{t.booking.form.name}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="yikang-form-group">
                      <label>{t.booking.form.phone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="yikang-form-group">
                    <label>{t.booking.form.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="yikang-form-group">
                    <label>{t.booking.form.symptoms}</label>
                    <textarea
                      value={formData.symptoms}
                      onChange={e => setFormData({ ...formData, symptoms: e.target.value })}
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
      <footer className="yikang-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/yikang-tcm">
          &#8592; {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
        </a>
      </footer>
    </div>
  )
}

export default YikangTCM

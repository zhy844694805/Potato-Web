import { useState } from 'react'
import {
  translations,
  schoolInfo,
  courses,
  teachers,
  pricingPlans,
  testimonials,
  stats,
  heroImage
} from './data/school-data'
import './LingoBridge.css'

function LingoBridge() {
  const [language, setLanguage] = useState('it')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    level: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', course: '', level: '', message: '' })
    }, 4000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const scheduleItems = [
    { icon: '🌅', period: 'morning', time: '9:00 - 11:00' },
    { icon: '☀️', period: 'afternoon', time: '14:00 - 16:00' },
    { icon: '🌙', period: 'evening', time: '18:30 - 20:30' },
    { icon: '📅', period: 'weekend', time: '10:00 - 12:00' }
  ]

  return (
    <div className="lingo-app">
      {/* Header */}
      <header className="lingo-header">
        <div className="lingo-header-inner">
          <a href="#home" className="lingo-logo">
            <div className="lingo-logo-icon">🌉</div>
            <div className="lingo-logo-text">
              <span>LingoBridge</span>
              <span>{language === 'zh' ? '语言学校' : language === 'it' ? 'Scuola di Lingue' : 'Language School'}</span>
            </div>
          </a>

          <nav className="lingo-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#courses">{t.nav.courses}</a>
            <a href="#teachers">{t.nav.teachers}</a>
            <a href="#methodology">{t.nav.methodology}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="lingo-lang">
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

          <button className="lingo-menu-btn" aria-label="Menu">
            &#9776;
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="lingo-hero">
        <div className="lingo-hero-content">
          <div className="lingo-hero-text">
            <div className="lingo-hero-badge">
              <span>🎓</span>
              {t.hero.badge}
            </div>
            <h1>
              {language === 'zh' ? (
                <>用语言<span>搭建桥梁</span></>
              ) : language === 'it' ? (
                <>Costruisci <span>Ponti</span> con le Lingue</>
              ) : (
                <>Build <span>Bridges</span> with Languages</>
              )}
            </h1>
            <p>{t.hero.subtitle}</p>
            <div className="lingo-hero-ctas">
              <a href="#contact" className="lingo-btn lingo-btn-primary">
                {t.hero.cta}
                <span>→</span>
              </a>
              <a href="#courses" className="lingo-btn lingo-btn-outline">
                {t.hero.trialCta}
              </a>
            </div>
          </div>

          <div className="lingo-hero-image">
            <div className="lingo-hero-image-wrapper">
              <img src={heroImage} alt="Language Learning" />
            </div>
            <div className="lingo-hero-float lingo-hero-float-1">
              <div className="lingo-hero-float-icon orange">🇨🇳</div>
              <div className="lingo-hero-float-text">
                <strong>HSK 1-6</strong>
                <span>{language === 'zh' ? '中文等级考试' : language === 'it' ? 'Esami Cinese' : 'Chinese Exams'}</span>
              </div>
            </div>
            <div className="lingo-hero-float lingo-hero-float-2">
              <div className="lingo-hero-float-icon green">🇮🇹</div>
              <div className="lingo-hero-float-text">
                <strong>CILS/CELI</strong>
                <span>{language === 'zh' ? '意语等级考试' : language === 'it' ? 'Esami Italiano' : 'Italian Exams'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="lingo-stats">
        {stats.map((stat, index) => (
          <div key={index} className="lingo-stat">
            <span className="lingo-stat-value">{stat.value}</span>
            <span className="lingo-stat-label">{t.stats[stat.key]}</span>
          </div>
        ))}
      </section>

      {/* Courses Section */}
      <section id="courses" className="lingo-section lingo-courses-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.courses.title}</h2>
            <p className="lingo-section-subtitle">{t.courses.subtitle}</p>
          </div>

          <div className="lingo-courses-grid">
            {courses.map((course) => (
              <div
                key={course.id}
                className="lingo-course-card"
                style={{ '--card-color': course.color }}
              >
                <div className="lingo-course-icon">{course.icon}</div>
                <h3>{course.name[language]}</h3>
                <p>{course.desc[language]}</p>
                <div className="lingo-course-meta">
                  <div className="lingo-course-meta-item">
                    <span>⏱</span>
                    <span>{course.duration[language]}</span>
                  </div>
                  <div className="lingo-course-meta-item">
                    <span>📊</span>
                    <span>{course.levels[language]}</span>
                  </div>
                  <div className="lingo-course-meta-item">
                    <span>📅</span>
                    <span>{course.schedule[language]}</span>
                  </div>
                </div>
                <div className="lingo-course-features">
                  {course.features[language].map((feature, idx) => (
                    <span key={idx} className="lingo-course-feature">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="lingo-section lingo-teachers-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.teachers.title}</h2>
            <p className="lingo-section-subtitle">{t.teachers.subtitle}</p>
          </div>

          <div className="lingo-teachers-grid">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="lingo-teacher-card">
                <div className="lingo-teacher-image">
                  <img src={teacher.image} alt={teacher.name} />
                  <div className="lingo-teacher-overlay" />
                </div>
                <div className="lingo-teacher-info">
                  <h3 className="lingo-teacher-name">{teacher.name}</h3>
                  <p className="lingo-teacher-name-zh">{teacher.nameChinese}</p>
                  <p className="lingo-teacher-role">{teacher.role[language]}</p>
                  <p className="lingo-teacher-bio">{teacher.bio[language]}</p>
                  <div className="lingo-teacher-langs">
                    {teacher.languages.map((lang) => (
                      <span key={lang} className="lingo-teacher-lang">
                        {lang === 'zh' ? '中文' : lang === 'en' ? 'EN' : 'IT'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="lingo-section lingo-methodology-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.methodology.title}</h2>
            <p className="lingo-section-subtitle">{t.methodology.subtitle}</p>
          </div>

          <div className="lingo-methodology-grid">
            <div className="lingo-method-card">
              <div className="lingo-method-icon">👥</div>
              <h3>{t.methodology.features.smallGroups.title}</h3>
              <p>{t.methodology.features.smallGroups.desc}</p>
            </div>
            <div className="lingo-method-card">
              <div className="lingo-method-icon">🗣️</div>
              <h3>{t.methodology.features.nativeTeachers.title}</h3>
              <p>{t.methodology.features.nativeTeachers.desc}</p>
            </div>
            <div className="lingo-method-card">
              <div className="lingo-method-icon">💬</div>
              <h3>{t.methodology.features.practical.title}</h3>
              <p>{t.methodology.features.practical.desc}</p>
            </div>
            <div className="lingo-method-card">
              <div className="lingo-method-icon">🎎</div>
              <h3>{t.methodology.features.cultural.title}</h3>
              <p>{t.methodology.features.cultural.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="lingo-section lingo-schedule-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.schedule.title}</h2>
            <p className="lingo-section-subtitle">{t.schedule.subtitle}</p>
          </div>

          <div className="lingo-schedule-grid">
            {scheduleItems.map((item, index) => (
              <div key={index} className="lingo-schedule-card">
                <div className="lingo-schedule-icon">{item.icon}</div>
                <h3>{t.schedule[item.period]}</h3>
                <p className="lingo-schedule-time">{item.time}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="lingo-schedule-note">
              <span>💻</span>
              {t.schedule.online}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="lingo-section lingo-pricing-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.pricing.title}</h2>
            <p className="lingo-section-subtitle">{t.pricing.subtitle}</p>
          </div>

          <div className="lingo-pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`lingo-pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && (
                  <div className="lingo-pricing-badge">{t.pricing.popular}</div>
                )}
                <h3>{plan.name[language]}</h3>
                <p>{plan.description[language]}</p>
                <div className="lingo-pricing-price">
                  <span className="lingo-pricing-currency">€</span>
                  <span className="lingo-pricing-amount">{plan.price}</span>
                  <span className="lingo-pricing-period">{plan.period[language]}</span>
                </div>
                <ul className="lingo-pricing-features">
                  {plan.features[language].map((feature, idx) => (
                    <li key={idx}>
                      <span>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="lingo-pricing-cta">
                  {t.pricing.enroll}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="lingo-section lingo-testimonials-section">
        <div className="lingo-container">
          <div className="lingo-section-header">
            <h2 className="lingo-section-title">{t.testimonials.title}</h2>
            <p className="lingo-section-subtitle">{t.testimonials.subtitle}</p>
          </div>

          <div className="lingo-testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="lingo-testimonial-card">
                <div className="lingo-testimonial-quote">"</div>
                <div className="lingo-testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="lingo-testimonial-text">{testimonial.text[language]}</p>
                <span className="lingo-testimonial-course">{testimonial.course[language]}</span>
                <div className="lingo-testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="lingo-testimonial-avatar"
                  />
                  <div className="lingo-testimonial-info">
                    <h4>{testimonial.nameChinese || testimonial.name}</h4>
                    <span>{testimonial.role[language]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="lingo-section lingo-contact-section">
        <div className="lingo-container">
          <div className="lingo-contact-grid">
            {/* Contact Info */}
            <div className="lingo-contact-info">
              <div className="lingo-contact-card">
                <h3>📍 {t.contact.info}</h3>
                <div className="lingo-contact-item">
                  <div className="lingo-contact-item-icon">🏫</div>
                  <div className="lingo-contact-item-text">
                    <strong>{language === 'zh' ? '地址' : language === 'it' ? 'Indirizzo' : 'Address'}</strong>
                    {schoolInfo.address.street}<br />
                    {schoolInfo.address.postalCode} {schoolInfo.address.city}
                  </div>
                </div>
                <div className="lingo-contact-item">
                  <div className="lingo-contact-item-icon">📞</div>
                  <div className="lingo-contact-item-text">
                    <strong>{language === 'zh' ? '电话' : language === 'it' ? 'Telefono' : 'Phone'}</strong>
                    <a href={`tel:${schoolInfo.phone}`}>{schoolInfo.phone}</a><br />
                    <a href={`tel:${schoolInfo.mobile}`}>{schoolInfo.mobile}</a>
                  </div>
                </div>
                <div className="lingo-contact-item">
                  <div className="lingo-contact-item-icon">📧</div>
                  <div className="lingo-contact-item-text">
                    <strong>Email</strong>
                    <a href={`mailto:${schoolInfo.email}`}>{schoolInfo.email}</a>
                  </div>
                </div>
                <div className="lingo-contact-item">
                  <div className="lingo-contact-item-icon">💬</div>
                  <div className="lingo-contact-item-text">
                    <strong>WeChat</strong>
                    {schoolInfo.wechat}
                  </div>
                </div>
              </div>

              <div className="lingo-contact-card">
                <h3>🕐 {t.contact.hours}</h3>
                <p>
                  <strong>{schoolInfo.hours.weekdays.days[language]}</strong><br />
                  {schoolInfo.hours.weekdays.time}<br /><br />
                  <strong>{schoolInfo.hours.saturday.days[language]}</strong><br />
                  {schoolInfo.hours.saturday.time}<br /><br />
                  {schoolInfo.hours.sunday[language]}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lingo-form-wrapper">
              <h3 className="lingo-form-title">{t.contact.title}</h3>
              <p className="lingo-form-subtitle">{t.contact.subtitle}</p>

              {submitted ? (
                <div className="lingo-form-success">
                  <span>✓</span>
                  <p>{t.contact.form.success}</p>
                </div>
              ) : (
                <form className="lingo-form" onSubmit={handleSubmit}>
                  <div className="lingo-form-row">
                    <div className="lingo-form-group">
                      <label>{t.contact.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="lingo-form-group">
                      <label>{t.contact.form.email}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="lingo-form-row">
                    <div className="lingo-form-group">
                      <label>{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="lingo-form-group">
                      <label>{t.contact.form.course}</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">{t.contact.form.selectCourse}</option>
                        {courses.map(course => (
                          <option key={course.id} value={course.id}>
                            {course.name[language]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="lingo-form-group">
                    <label>{t.contact.form.level}</label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t.contact.form.selectLevel}</option>
                      <option value="beginner">{t.contact.levels.beginner}</option>
                      <option value="elementary">{t.contact.levels.elementary}</option>
                      <option value="intermediate">{t.contact.levels.intermediate}</option>
                      <option value="advanced">{t.contact.levels.advanced}</option>
                    </select>
                  </div>

                  <div className="lingo-form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button type="submit" className="lingo-form-submit">
                    {t.contact.form.send}
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lingo-footer">
        <div className="lingo-footer-inner">
          <div className="lingo-footer-brand">
            <span className="lingo-footer-logo">🌉 LingoBridge</span>
            <span className="lingo-footer-slogan">{t.footer.slogan}</span>
          </div>
          <p>{t.footer.rights}</p>
          <a href="/portfolio/lingo-bridge" className="lingo-footer-back">
            <span>←</span>
            {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default LingoBridge

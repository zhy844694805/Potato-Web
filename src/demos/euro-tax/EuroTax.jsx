import { useState } from 'react'
import { translations, companyInfo, services, teamMembers, stats } from './data/services-data'
import './EuroTax.css'

function EuroTax() {
  const [language, setLanguage] = useState('zh')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="eurotax-app">
      {/* Header */}
      <header className="eurotax-header">
        <div className="eurotax-header-inner">
          <a href="#home" className="eurotax-logo">
            <div className="eurotax-logo-icon">ET</div>
            <div className="eurotax-logo-text">
              <span>EURO TAX</span>
              <span>{language === 'zh' ? '欧税会计事务所' : 'Studio Commercialista'}</span>
            </div>
          </a>

          <nav className="eurotax-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#team">{t.nav.team}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="eurotax-lang">
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

          <button className="eurotax-menu-btn" aria-label="Menu">
            &#9776;
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="eurotax-hero">
        <div className="eurotax-hero-bg" />
        <div className="eurotax-hero-pattern" />
        <div className="eurotax-hero-grid" />
        <div className="eurotax-hero-content">
          <div className="eurotax-hero-badge">
            <span>&#9989;</span>
            {language === 'zh' ? '专业注册会计师事务所' : language === 'en' ? 'Professional Accounting Firm' : 'Studio Commercialisti Registrato'}
          </div>
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="eurotax-hero-cta">
            {t.hero.cta}
            <span>&#8594;</span>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="eurotax-stats">
        {stats.map((stat, index) => (
          <div key={index} className="eurotax-stat">
            <span className="eurotax-stat-value">{stat.value}</span>
            <span className="eurotax-stat-label">{t.stats[stat.key]}</span>
          </div>
        ))}
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="eurotax-section eurotax-services-section">
        <div className="eurotax-container">
          <div className="eurotax-section-header">
            <h2 className="eurotax-section-title">{t.services.title}</h2>
            <p className="eurotax-section-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="eurotax-bento-grid">
            {services.map((service) => (
              <div key={service.id} className="eurotax-bento-item">
                <div className="eurotax-bento-icon">{service.icon}</div>
                <h3>{service.name[language]}</h3>
                <p>{service.desc[language]}</p>
                <div className="eurotax-bento-features">
                  {service.features[language].map((feature, idx) => (
                    <span key={idx} className="eurotax-bento-feature">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="eurotax-section eurotax-team-section">
        <div className="eurotax-container">
          <div className="eurotax-section-header">
            <h2 className="eurotax-section-title">{t.team.title}</h2>
            <p className="eurotax-section-subtitle">{t.team.subtitle}</p>
          </div>

          <div className="eurotax-team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="eurotax-team-card">
                <div className="eurotax-team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="eurotax-team-overlay" />
                </div>
                <div className="eurotax-team-info">
                  <h3 className="eurotax-team-name">{member.name}</h3>
                  <p className="eurotax-team-name-zh">{member.nameChinese}</p>
                  <p className="eurotax-team-role">{member.role[language]}</p>
                  <p className="eurotax-team-bio">{member.bio[language]}</p>
                  <div className="eurotax-team-langs">
                    {member.languages.map((lang) => (
                      <span key={lang} className="eurotax-team-lang">
                        {lang === 'zh' ? '中' : lang.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="eurotax-section eurotax-about-section">
        <div className="eurotax-container">
          <div className="eurotax-about-content">
            <div className="eurotax-about-text">
              <h2>{t.about.title}</h2>
              <p>{t.about.text}</p>
              <p className="eurotax-about-mission">{t.about.mission}</p>
            </div>
            <div className="eurotax-about-cards">
              <div className="eurotax-about-card">
                <div className="eurotax-about-card-icon">&#128197;</div>
                <h4>15+</h4>
                <p>{t.about.experience}</p>
              </div>
              <div className="eurotax-about-card">
                <div className="eurotax-about-card-icon">&#128101;</div>
                <h4>500+</h4>
                <p>{t.about.clients}</p>
              </div>
              <div className="eurotax-about-card">
                <div className="eurotax-about-card-icon">&#127760;</div>
                <h4>3</h4>
                <p>{t.about.languages}</p>
              </div>
              <div className="eurotax-about-card">
                <div className="eurotax-about-card-icon">&#9989;</div>
                <h4>98%</h4>
                <p>{language === 'zh' ? '客户满意度' : language === 'en' ? 'Satisfaction Rate' : 'Soddisfazione'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="eurotax-section eurotax-contact-section">
        <div className="eurotax-container">
          <div className="eurotax-section-header">
            <h2 className="eurotax-section-title">{t.contact.title}</h2>
            <p className="eurotax-section-subtitle">{t.contact.subtitle}</p>
          </div>

          <div className="eurotax-contact-grid">
            {/* Contact Info */}
            <div className="eurotax-contact-info">
              <div className="eurotax-contact-card">
                <h3>&#128205; {t.contact.info}</h3>
                <div className="eurotax-contact-item">
                  <div className="eurotax-contact-item-icon">&#127968;</div>
                  <div className="eurotax-contact-item-text">
                    <strong>{t.footer.address}</strong>
                    {companyInfo.address.street}<br />
                    {companyInfo.address.postalCode} {companyInfo.address.city}
                  </div>
                </div>
                <div className="eurotax-contact-item">
                  <div className="eurotax-contact-item-icon">&#128222;</div>
                  <div className="eurotax-contact-item-text">
                    <strong>{t.footer.phone}</strong>
                    <a href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a><br />
                    <a href={`tel:${companyInfo.mobile}`}>{companyInfo.mobile}</a>
                  </div>
                </div>
                <div className="eurotax-contact-item">
                  <div className="eurotax-contact-item-icon">&#128231;</div>
                  <div className="eurotax-contact-item-text">
                    <strong>{t.footer.email}</strong>
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a><br />
                    <a href={`mailto:${companyInfo.pec}`}>{companyInfo.pec}</a>
                  </div>
                </div>
                <div className="eurotax-contact-item">
                  <div className="eurotax-contact-item-icon">&#128172;</div>
                  <div className="eurotax-contact-item-text">
                    <strong>WeChat</strong>
                    {companyInfo.wechat}
                  </div>
                </div>
              </div>

              <div className="eurotax-contact-card">
                <h3>&#128337; {t.contact.hours}</h3>
                <p>
                  <strong>{companyInfo.hours.weekdays.days[language]}</strong><br />
                  {companyInfo.hours.weekdays.time}<br /><br />
                  <strong>{companyInfo.hours.saturday.days[language]}</strong><br />
                  {companyInfo.hours.saturday.time}<br /><br />
                  {companyInfo.hours.sunday[language]}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="eurotax-form-wrapper">
              <h3 className="eurotax-form-title">
                {language === 'zh' ? '发送咨询' : language === 'en' ? 'Send Inquiry' : 'Invia Richiesta'}
              </h3>

              {submitted ? (
                <div className="eurotax-form-success">
                  <span>&#10003;</span>
                  {t.contact.form.success}
                </div>
              ) : (
                <form className="eurotax-form" onSubmit={handleSubmit}>
                  <div className="eurotax-form-row">
                    <div className="eurotax-form-group">
                      <label>{t.contact.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="eurotax-form-group">
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

                  <div className="eurotax-form-row">
                    <div className="eurotax-form-group">
                      <label>{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="eurotax-form-group">
                      <label>{t.contact.form.company}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="eurotax-form-group">
                    <label>{t.contact.form.service}</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">{t.contact.form.selectService}</option>
                      {services.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="eurotax-form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="eurotax-form-submit">
                    {t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="eurotax-footer">
        <div className="eurotax-footer-inner">
          <p>{t.footer.rights}</p>
          <a href="/portfolio/euro-tax" className="eurotax-footer-back">
            <span>&#8592;</span>
            {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default EuroTax

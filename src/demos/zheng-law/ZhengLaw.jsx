import { useState } from 'react'
import { translations, firmInfo, services, team, stats, heroImage } from './data/law-data'
import CasesPage from './pages/CasesPage'
import FAQPage from './pages/FAQPage'
import './ZhengLaw.css'

function ZhengLaw() {
  const [language, setLanguage] = useState('zh')
  const [currentPage, setCurrentPage] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render different pages based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'cases':
        return <CasesPage language={language} onNavigate={handleNavigate} />
      case 'faq':
        return <FAQPage language={language} onNavigate={handleNavigate} />
      default:
        return renderHomePage()
    }
  }

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="zheng-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="zheng-hero-overlay" />
        <div className="zheng-hero-content">
          <div className="zheng-hero-badge">
            <span>&#9878;</span>
            {language === 'zh' ? '意大利注册律师事务所' : language === 'en' ? 'Registered Italian Law Firm' : 'Studio Legale Registrato'}
          </div>
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="zheng-hero-cta">
            {t.hero.cta}
            <span>&#8594;</span>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="zheng-stats">
        {stats.map((stat, index) => (
          <div key={index} className="zheng-stat">
            <span className="zheng-stat-value">{stat.value}</span>
            <span className="zheng-stat-label">{t.stats[stat.key]}</span>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section id="services" className="zheng-section zheng-services-section">
        <div className="zheng-container">
          <div className="zheng-section-header">
            <h2 className="zheng-section-title">{t.services.title}</h2>
            <p className="zheng-section-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="zheng-services-grid">
            {services.map((service) => (
              <div key={service.id} className="zheng-service-card">
                <div className="zheng-service-icon">{service.icon}</div>
                <h3>{service.name[language]}</h3>
                <p>{service.desc[language]}</p>
                <div className="zheng-service-features">
                  {service.features[language].map((feature, idx) => (
                    <span key={idx} className="zheng-feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="zheng-section zheng-team-section">
        <div className="zheng-container">
          <div className="zheng-section-header">
            <h2 className="zheng-section-title">{t.team.title}</h2>
            <p className="zheng-section-subtitle">{t.team.subtitle}</p>
          </div>

          <div className="zheng-team-grid">
            {team.map((member) => (
              <div key={member.id} className="zheng-team-card">
                <div className="zheng-team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="zheng-team-overlay" />
                </div>
                <div className="zheng-team-info">
                  <h3 className="zheng-team-name">{member.name}</h3>
                  <p className="zheng-team-name-zh">{member.nameChinese}</p>
                  <p className="zheng-team-role">{member.role[language]}</p>
                  <p className="zheng-team-bio">{member.bio[language]}</p>
                  <div className="zheng-team-langs">
                    {member.languages.map((lang) => (
                      <span key={lang} className="zheng-team-lang">
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

      {/* About Section */}
      <section id="about" className="zheng-section zheng-about-section">
        <div className="zheng-container">
          <div className="zheng-about-content">
            <div className="zheng-about-text">
              <h2>{t.about.title}</h2>
              <p>{t.about.text}</p>
              <p className="zheng-about-mission">{t.about.mission}</p>
            </div>
            <div className="zheng-about-features">
              <div className="zheng-about-feature">
                <span className="zheng-about-icon">&#128101;</span>
                <h4>{language === 'zh' ? '专业团队' : language === 'en' ? 'Expert Team' : 'Team Esperto'}</h4>
              </div>
              <div className="zheng-about-feature">
                <span className="zheng-about-icon">&#127760;</span>
                <h4>{language === 'zh' ? '三语服务' : language === 'en' ? 'Trilingual' : 'Trilingue'}</h4>
              </div>
              <div className="zheng-about-feature">
                <span className="zheng-about-icon">&#128200;</span>
                <h4>{language === 'zh' ? '高成功率' : language === 'en' ? 'High Success Rate' : 'Alto Successo'}</h4>
              </div>
              <div className="zheng-about-feature">
                <span className="zheng-about-icon">&#128172;</span>
                <h4>{language === 'zh' ? '贴心服务' : language === 'en' ? 'Personal Care' : 'Cura Personale'}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="zheng-section zheng-contact-section">
        <div className="zheng-container">
          <div className="zheng-section-header">
            <h2 className="zheng-section-title">{t.contact.title}</h2>
            <p className="zheng-section-subtitle">{t.contact.subtitle}</p>
          </div>

          <div className="zheng-contact-grid">
            {/* Contact Info */}
            <div className="zheng-contact-info">
              <div className="zheng-contact-card">
                <h3>&#128205; {t.contact.info}</h3>
                <div className="zheng-contact-item">
                  <div className="zheng-contact-item-icon">&#127968;</div>
                  <div className="zheng-contact-item-text">
                    <strong>{t.footer.address}</strong>
                    {firmInfo.address.street}<br />
                    {firmInfo.address.postalCode} {firmInfo.address.city}
                  </div>
                </div>
                <div className="zheng-contact-item">
                  <div className="zheng-contact-item-icon">&#128222;</div>
                  <div className="zheng-contact-item-text">
                    <strong>{t.footer.phone}</strong>
                    <a href={`tel:${firmInfo.phone}`}>{firmInfo.phone}</a><br />
                    <a href={`tel:${firmInfo.mobile}`}>{firmInfo.mobile}</a>
                  </div>
                </div>
                <div className="zheng-contact-item">
                  <div className="zheng-contact-item-icon">&#128231;</div>
                  <div className="zheng-contact-item-text">
                    <strong>{t.footer.email}</strong>
                    <a href={`mailto:${firmInfo.email}`}>{firmInfo.email}</a><br />
                    <small>PEC: {firmInfo.pec}</small>
                  </div>
                </div>
                <div className="zheng-contact-item">
                  <div className="zheng-contact-item-icon">&#128172;</div>
                  <div className="zheng-contact-item-text">
                    <strong>WeChat</strong>
                    {firmInfo.wechat}
                  </div>
                </div>
              </div>

              <div className="zheng-contact-card">
                <h3>&#128337; {t.contact.hours}</h3>
                <p>
                  <strong>{firmInfo.hours.weekdays.days[language]}</strong><br />
                  {firmInfo.hours.weekdays.time}<br /><br />
                  <strong>{firmInfo.hours.saturday.days[language]}</strong><br />
                  {firmInfo.hours.saturday.time}<br /><br />
                  {firmInfo.hours.sunday[language]}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="zheng-form-wrapper">
              <h3 className="zheng-form-title">
                {language === 'zh' ? '预约咨询' : language === 'en' ? 'Book Consultation' : 'Prenota Consulenza'}
              </h3>

              {submitted ? (
                <div className="zheng-form-success">
                  <span>&#10003;</span>
                  {t.contact.form.success}
                </div>
              ) : (
                <form className="zheng-form" onSubmit={handleSubmit}>
                  <div className="zheng-form-row">
                    <div className="zheng-form-group">
                      <label>{t.contact.form.name}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="zheng-form-group">
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

                  <div className="zheng-form-row">
                    <div className="zheng-form-group">
                      <label>{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="zheng-form-group">
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
                  </div>

                  <div className="zheng-form-group">
                    <label>{t.contact.form.message}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="zheng-form-submit">
                    {t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )

  return (
    <div className="zheng-app">
      {/* Header */}
      <header className="zheng-header">
        <div className="zheng-header-inner">
          <a href="#home" className="zheng-logo">
            <div className="zheng-logo-icon">SZ</div>
            <div className="zheng-logo-text">
              <span>STUDIO ZHENG</span>
              <span>{language === 'zh' ? '郑氏律师事务所' : 'Avvocati'}</span>
            </div>
          </a>

          <nav className="zheng-nav">
            <a href="#home" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>{t.nav.home}</a>
            <a href="#services" className={currentPage === 'home' ? '' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>{t.nav.services}</a>
            <a href="#cases" className={currentPage === 'cases' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('cases'); }}>{language === 'zh' ? '案例' : language === 'en' ? 'Cases' : 'Casi'}</a>
            <a href="#faq" className={currentPage === 'faq' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setCurrentPage('faq'); }}>{language === 'zh' ? '问答' : 'FAQ'}</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>{t.nav.contact}</a>
          </nav>

          <div className="zheng-lang">
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

          <button className="zheng-menu-btn" aria-label="Menu">
            &#9776;
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ paddingTop: '70px' }}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="zheng-footer">
        <div className="zheng-footer-inner">
          <p>{t.footer.rights}</p>
          <a href="/portfolio/zheng-law" className="zheng-footer-back">
            <span>&#8592;</span>
            {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
          </a>
        </div>
      </footer>
    </div>
  )
}

export default ZhengLaw

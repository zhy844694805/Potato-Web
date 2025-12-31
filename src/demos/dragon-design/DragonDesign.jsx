import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  translations,
  companyInfo,
  services,
  projectTypes,
  budgetRanges,
  heroImage,
  getProjectsByCategory
} from './data/projects-data'
import './DragonDesign.css'

function DragonDesign() {
  const [language, setLanguage] = useState('it')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    area: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]
  const filteredProjects = getProjectsByCategory(activeCategory)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (import.meta.env.DEV) {
      console.log('Form submitted:', formData)
    }
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        area: '',
        message: ''
      })
    }, 3000)
  }

  const categories = ['all', 'residential', 'commercial', 'restaurant', 'office']

  return (
    <div className="dragon-app">
      {/* Header */}
      <header className="dragon-header">
        <div className="dragon-header-inner">
          <a href="#home" className="dragon-logo">
            <div className="dragon-logo-icon">D</div>
            <span>DRAGON DESIGN</span>
          </a>

          <nav className="dragon-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#portfolio">{t.nav.portfolio}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="dragon-header-right">
            <div className="dragon-lang">
              {['it', 'en', 'zh'].map(lang => (
                <button
                  key={lang}
                  className={language === lang ? 'active' : ''}
                  onClick={() => setLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="dragon-mobile-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="dragon-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="dragon-hero-overlay"></div>
        <div className="dragon-hero-content">
          <div className="dragon-hero-tag">
            <span>DRAGON DESIGN</span>
          </div>
          <h1>
            {t.hero.tagline.split(' ').map((word, i) => (
              i === t.hero.tagline.split(' ').length - 1
                ? <span key={i}>{word}</span>
                : word + ' '
            ))}
          </h1>
          <p>{t.hero.subtitle}</p>
          <div className="dragon-hero-buttons">
            <a href="#contact" className="dragon-btn dragon-btn-primary">
              {t.hero.cta}
            </a>
            <a href="#portfolio" className="dragon-btn dragon-btn-outline">
              {t.portfolio.viewAll}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="dragon-section dragon-section-dark">
        <div className="dragon-container">
          <div className="dragon-section-header">
            <span className="dragon-section-tag">{t.nav.services}</span>
            <h2 className="dragon-title">{t.services.title}</h2>
            <p className="dragon-subtitle">{t.services.subtitle}</p>
          </div>

          <div className="dragon-services-grid">
            {services.map(service => (
              <div key={service.id} className="dragon-service">
                <img
                  src={service.image}
                  alt={service.name[language]}
                  className="dragon-service-img"
                />
                <div className="dragon-service-content">
                  <div className="dragon-service-icon">{service.icon}</div>
                  <h3>{service.name[language]}</h3>
                  <p>{service.description[language]}</p>
                  <div className="dragon-service-features">
                    {service.features[language].map((feature, i) => (
                      <span key={i}>{feature}</span>
                    ))}
                  </div>
                  <div className="dragon-service-price">
                    {language === 'zh' ? '\u4ece ' : language === 'it' ? 'Da ' : 'From '}
                    {service.priceFrom}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="dragon-section dragon-section-light">
        <div className="dragon-container">
          <div className="dragon-section-header">
            <span className="dragon-section-tag">{t.nav.portfolio}</span>
            <h2 className="dragon-title">{t.portfolio.title}</h2>
            <p className="dragon-subtitle">{t.portfolio.subtitle}</p>
          </div>

          <div className="dragon-portfolio-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`dragon-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t.portfolio.categories[cat]}
              </button>
            ))}
          </div>

          <div className="dragon-portfolio-grid">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="dragon-project"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.name[language]}
                  className="dragon-project-img"
                />
                <div className="dragon-project-overlay">
                  <h3>{project.name[language]}</h3>
                  <div className="dragon-project-meta">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                    <span>{project.duration[language]}</span>
                  </div>
                  <p>{project.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="dragon-modal" onClick={() => setSelectedProject(null)}>
          <button
            className="dragon-modal-close"
            onClick={() => setSelectedProject(null)}
          >
            &times;
          </button>
          <div
            className="dragon-modal-content"
            onClick={e => e.stopPropagation()}
          >
            <div className="dragon-modal-gallery">
              {selectedProject.gallery.map((img, i) => (
                <img key={i} src={img} alt={`Gallery ${i + 1}`} />
              ))}
            </div>
            <div className="dragon-modal-info">
              <h3>{selectedProject.name[language]}</h3>
              <p>{selectedProject.description[language]}</p>
            </div>
          </div>
        </div>
      )}

      {/* About */}
      <section id="about" className="dragon-section dragon-section-dark">
        <div className="dragon-container">
          <div className="dragon-about-content">
            <div>
              <span className="dragon-section-tag">{t.nav.about}</span>
              <h2 className="dragon-title">{t.about.title}</h2>
              <p className="dragon-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                {t.about.subtitle}
              </p>
              <p className="dragon-about-text">{t.about.story}</p>

              <div className="dragon-stats">
                <div className="dragon-stat">
                  <span className="dragon-stat-number">{companyInfo.stats.experience}+</span>
                  <span className="dragon-stat-label">{t.about.experience}</span>
                </div>
                <div className="dragon-stat">
                  <span className="dragon-stat-number">{companyInfo.stats.projects}+</span>
                  <span className="dragon-stat-label">{t.about.projects}</span>
                </div>
                <div className="dragon-stat">
                  <span className="dragon-stat-number">{companyInfo.stats.clients}+</span>
                  <span className="dragon-stat-label">{t.about.clients}</span>
                </div>
                <div className="dragon-stat">
                  <span className="dragon-stat-number">{companyInfo.stats.team}+</span>
                  <span className="dragon-stat-label">{t.about.team}</span>
                </div>
              </div>
            </div>

            <div className="dragon-about-image">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800"
                alt="Dragon Design Office"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dragon-section dragon-contact-section">
        <div className="dragon-container">
          <div className="dragon-section-header">
            <span className="dragon-section-tag">{t.nav.contact}</span>
            <h2 className="dragon-title">{t.contact.title}</h2>
            <p className="dragon-subtitle">{t.contact.subtitle}</p>
          </div>

          <div className="dragon-contact-wrapper">
            <form className="dragon-contact-form" onSubmit={handleSubmit}>
              <div className="dragon-form-grid">
                <div className="dragon-form-group">
                  <label>{t.contact.form.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="dragon-form-group">
                  <label>{t.contact.form.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="dragon-form-group">
                  <label>{t.contact.form.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="dragon-form-group">
                  <label>{t.contact.form.area}</label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleFormChange}
                    placeholder="mq"
                  />
                </div>
                <div className="dragon-form-group">
                  <label>{t.contact.form.projectType}</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    required
                  >
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label[language]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="dragon-form-group">
                  <label>{t.contact.form.budget}</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleFormChange}
                  >
                    {budgetRanges.map(range => (
                      <option key={range.value} value={range.value}>
                        {range.label[language]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="dragon-form-group full">
                  <label>{t.contact.form.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="dragon-btn dragon-btn-primary dragon-btn-full">
                {t.contact.form.submit}
              </button>
              {submitted && (
                <div className="dragon-success">{t.contact.form.success}</div>
              )}
            </form>

            <div className="dragon-contact-info">
              <div className="dragon-contact-item">
                <div className="dragon-contact-icon">&#128205;</div>
                <div>
                  <strong>{t.contact.info.address}</strong>
                  <p>
                    {companyInfo.address.street}<br />
                    {companyInfo.address.postalCode} {companyInfo.address.city}<br />
                    {companyInfo.address.country}
                  </p>
                </div>
              </div>
              <div className="dragon-contact-item">
                <div className="dragon-contact-icon">&#128222;</div>
                <div>
                  <strong>{t.contact.info.phone}</strong>
                  <p>
                    {companyInfo.phone}<br />
                    WhatsApp: {companyInfo.whatsapp}
                  </p>
                </div>
              </div>
              <div className="dragon-contact-item">
                <div className="dragon-contact-icon">&#9993;</div>
                <div>
                  <strong>{t.contact.info.email}</strong>
                  <p>{companyInfo.email}</p>
                </div>
              </div>
              <div className="dragon-contact-item">
                <div className="dragon-contact-icon">&#128337;</div>
                <div>
                  <strong>{t.contact.info.hours}</strong>
                  <p>
                    {companyInfo.hours.weekdays[language]}: {companyInfo.hours.weekdaysTime}<br />
                    {companyInfo.hours.saturday[language]}: {companyInfo.hours.saturdayTime}<br />
                    {companyInfo.hours.sunday[language]}: {companyInfo.hours.sundayTime[language]}
                  </p>
                </div>
              </div>

              <div className="dragon-social">
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  &#128247;
                </a>
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  &#102;
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    alert(`WeChat: ${companyInfo.social.wechat}`)
                  }}
                  aria-label="WeChat"
                >
                  &#128172;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dragon-footer">
        <div className="dragon-footer-content">
          <div className="dragon-footer-logo">
            <span>&#128296;</span>
            <span>DRAGON DESIGN</span>
          </div>
          <p className="dragon-footer-tagline">{t.footer.tagline}</p>
          <p className="dragon-footer-copyright">{t.footer.copyright}</p>
          <Link to="/portfolio" className="dragon-back">
            &larr; {language === 'zh' ? '\u8fd4\u56de\u4f5c\u54c1\u96c6' : language === 'it' ? 'Torna al Portfolio' : 'Back to Portfolio'}
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default DragonDesign

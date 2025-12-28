import { useState } from 'react'
import { translations, agencyInfo, routes, packages, visaServices, serviceTypes, heroImage } from './data/travel-data'
import './DragonTravel.css'

function DragonTravel() {
  const [language, setLanguage] = useState('zh')
  const [activeTab, setActiveTab] = useState('flights')
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', destination: '', date: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', destination: '', date: '', message: '' })
    }, 3000)
  }

  return (
    <div className="dtravel-app">
      {/* Header */}
      <header className="dtravel-header">
        <div className="dtravel-header-inner">
          <a href="#home" className="dtravel-logo">
            <span className="dtravel-logo-icon">&#9992;</span>
            <div className="dtravel-logo-text">
              <span>DRAGON TRAVEL</span>
              <span>{language === 'zh' ? '龙腾旅行社' : 'Agenzia Viaggi'}</span>
            </div>
          </a>

          <nav className="dtravel-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#routes">{t.nav.flights}</a>
            <a href="#packages">{t.nav.tours}</a>
            <a href="#visa">{t.nav.visa}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="dtravel-header-right">
            <span className="dtravel-iata">IATA</span>
            <div className="dtravel-lang">
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
      <section id="home" className="dtravel-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="dtravel-hero-overlay" />
        <div className="dtravel-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="dtravel-hero-cta">{t.hero.cta}</a>
        </div>
      </section>

      {/* Quick Services */}
      <section className="dtravel-quick-services">
        <div className="dtravel-service-tabs">
          <button
            className={activeTab === 'flights' ? 'active' : ''}
            onClick={() => setActiveTab('flights')}
          >
            <span>&#9992;</span>
            <div>
              <strong>{t.services.flights}</strong>
              <small>{t.services.flightsDesc}</small>
            </div>
          </button>
          <button
            className={activeTab === 'tours' ? 'active' : ''}
            onClick={() => setActiveTab('tours')}
          >
            <span>&#127963;</span>
            <div>
              <strong>{t.services.tours}</strong>
              <small>{t.services.toursDesc}</small>
            </div>
          </button>
          <button
            className={activeTab === 'visa' ? 'active' : ''}
            onClick={() => setActiveTab('visa')}
          >
            <span>&#128196;</span>
            <div>
              <strong>{t.services.visa}</strong>
              <small>{t.services.visaDesc}</small>
            </div>
          </button>
        </div>
      </section>

      {/* Popular Routes */}
      <section id="routes" className="dtravel-section dtravel-routes-section">
        <div className="dtravel-container">
          <div className="dtravel-section-header">
            <h2>{t.routes.title}</h2>
            <p>{t.routes.subtitle}</p>
          </div>

          <div className="dtravel-routes-grid">
            {routes.map(route => (
              <div key={route.id} className="dtravel-route-card">
                <div className="dtravel-route-image">
                  <img src={route.image} alt={route.to.city} />
                  {route.direct && (
                    <span className="dtravel-route-badge">
                      {language === 'zh' ? '直飞' : language === 'en' ? 'Direct' : 'Diretto'}
                    </span>
                  )}
                </div>
                <div className="dtravel-route-info">
                  <div className="dtravel-route-cities">
                    <span>{route.from.city}</span>
                    <span className="dtravel-route-arrow">&#8594;</span>
                    <span>{language === 'zh' ? route.to.zh : route.to.city}</span>
                  </div>
                  <div className="dtravel-route-codes">
                    {route.from.code} - {route.to.code}
                  </div>
                  <div className="dtravel-route-airline">{route.airline}</div>
                  <div className="dtravel-route-price">
                    <small>{t.routes.price}</small>
                    <strong>€{route.price}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="dtravel-section dtravel-packages-section">
        <div className="dtravel-container">
          <div className="dtravel-section-header">
            <h2>{t.packages.title}</h2>
            <p>{t.packages.subtitle}</p>
          </div>

          <div className="dtravel-packages-grid">
            {packages.map(pkg => (
              <div key={pkg.id} className="dtravel-package-card">
                <div className="dtravel-package-image">
                  <img src={pkg.image} alt={pkg.name[language]} />
                  <div className="dtravel-package-duration">
                    {pkg.days} {t.packages.days}
                  </div>
                </div>
                <div className="dtravel-package-content">
                  <h3>{pkg.name[language]}</h3>
                  <p>{pkg.desc[language]}</p>
                  <div className="dtravel-package-highlights">
                    {pkg.highlights[language].map((h, i) => (
                      <span key={i}>{h}</span>
                    ))}
                  </div>
                  <div className="dtravel-package-footer">
                    <div className="dtravel-package-price">
                      <small>{t.routes.price}</small>
                      <strong>€{pkg.price}</strong>
                    </div>
                    <a href="#contact" className="dtravel-package-btn">{t.packages.book}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services */}
      <section id="visa" className="dtravel-section dtravel-visa-section">
        <div className="dtravel-container">
          <div className="dtravel-section-header">
            <h2>{t.services.visa}</h2>
            <p>{t.services.visaDesc}</p>
          </div>

          <div className="dtravel-visa-grid">
            {visaServices.map(visa => (
              <div key={visa.id} className="dtravel-visa-card">
                <div className="dtravel-visa-type">Type {visa.type}</div>
                <h3>{visa.name[language]}</h3>
                <div className="dtravel-visa-details">
                  <div>
                    <span>{language === 'zh' ? '有效期' : language === 'en' ? 'Duration' : 'Durata'}</span>
                    <strong>{visa.duration[language]}</strong>
                  </div>
                  <div>
                    <span>{language === 'zh' ? '办理时间' : language === 'en' ? 'Processing' : 'Tempi'}</span>
                    <strong>{visa.processing[language]}</strong>
                  </div>
                </div>
                <div className="dtravel-visa-price">€{visa.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dtravel-section dtravel-why-section">
        <div className="dtravel-container">
          <h2 className="dtravel-why-title">{t.why.title}</h2>
          <div className="dtravel-why-grid">
            <div className="dtravel-why-card">
              <span className="dtravel-why-icon">&#9992;</span>
              <h3>{t.why.iata}</h3>
              <p>{t.why.iataDesc}</p>
            </div>
            <div className="dtravel-why-card">
              <span className="dtravel-why-icon">&#128197;</span>
              <h3>{t.why.experience}</h3>
              <p>{t.why.experienceDesc}</p>
            </div>
            <div className="dtravel-why-card">
              <span className="dtravel-why-icon">&#128176;</span>
              <h3>{t.why.prices}</h3>
              <p>{t.why.pricesDesc}</p>
            </div>
            <div className="dtravel-why-card">
              <span className="dtravel-why-icon">&#127760;</span>
              <h3>{t.why.bilingual}</h3>
              <p>{t.why.bilingualDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dtravel-section dtravel-contact-section">
        <div className="dtravel-container">
          <div className="dtravel-section-header">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.subtitle}</p>
          </div>

          <div className="dtravel-contact-grid">
            <div className="dtravel-contact-info">
              <div className="dtravel-contact-card">
                <h3>&#128205; {agencyInfo.nameChinese}</h3>
                <p>{agencyInfo.address.street}<br />{agencyInfo.address.postalCode} {agencyInfo.address.city}</p>
              </div>
              <div className="dtravel-contact-methods">
                <a href={`tel:${agencyInfo.phone}`} className="dtravel-contact-method">
                  <span>&#128222;</span>
                  <div>
                    <small>Telefono</small>
                    <strong>{agencyInfo.phone}</strong>
                  </div>
                </a>
                <a href={`https://wa.me/${agencyInfo.whatsapp.replace(/\s/g, '')}`} className="dtravel-contact-method whatsapp">
                  <span>&#128172;</span>
                  <div>
                    <small>WhatsApp</small>
                    <strong>{agencyInfo.whatsapp}</strong>
                  </div>
                </a>
                <div className="dtravel-contact-method wechat">
                  <span>&#128172;</span>
                  <div>
                    <small>WeChat</small>
                    <strong>{agencyInfo.wechat}</strong>
                  </div>
                </div>
                <a href={`mailto:${agencyInfo.email}`} className="dtravel-contact-method">
                  <span>&#128231;</span>
                  <div>
                    <small>Email</small>
                    <strong>{agencyInfo.email}</strong>
                  </div>
                </a>
              </div>
            </div>

            <div className="dtravel-form-wrapper">
              {submitted ? (
                <div className="dtravel-form-success">
                  <span>&#10003;</span>
                  {t.contact.form.success}
                </div>
              ) : (
                <form className="dtravel-form" onSubmit={handleSubmit}>
                  <div className="dtravel-form-row">
                    <input
                      type="text"
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="dtravel-form-row">
                    <input
                      type="tel"
                      placeholder={t.contact.form.phone}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">{t.contact.form.selectService}</option>
                      {serviceTypes.map(s => (
                        <option key={s.id} value={s.id}>{s.name[language]}</option>
                      ))}
                    </select>
                  </div>
                  <div className="dtravel-form-row">
                    <input
                      type="text"
                      placeholder={t.contact.form.destination}
                      value={formData.destination}
                      onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    />
                    <input
                      type="date"
                      placeholder={t.contact.form.date}
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <textarea
                    placeholder={t.contact.form.message}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                  <button type="submit">{t.contact.form.send}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dtravel-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/dragon-travel">
          &#8592; {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
        </a>
      </footer>
    </div>
  )
}

export default DragonTravel

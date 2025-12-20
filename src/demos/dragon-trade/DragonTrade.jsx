import { useState } from 'react'
import { translations, companyInfo, services, productCategories, stats, heroImage } from './data/trade-data'
import './DragonTrade.css'

function DragonTrade() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="dragon-app">
      {/* Header */}
      <header className="dragon-header">
        <div className="dragon-header-inner">
          <a href="#home" className="dragon-logo">
            <span className="dragon-logo-icon">🐉</span>
            <span>DRAGON TRADE</span>
          </a>
          <nav className="dragon-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#products">{t.nav.products}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="dragon-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
                {lang === 'zh' ? '中' : lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="dragon-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="dragon-hero-overlay" />
        <div className="dragon-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#contact" className="dragon-btn">{t.hero.cta}</a>
        </div>
      </section>

      {/* Stats */}
      <section className="dragon-stats">
        {stats.map((s, i) => (
          <div key={i} className="dragon-stat">
            <span className="dragon-stat-value">{s.value}</span>
            <span className="dragon-stat-label">{t.stats[s.key]}</span>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="dragon-section">
        <div className="dragon-container">
          <h2 className="dragon-title">{t.services.title}</h2>
          <p className="dragon-subtitle">{t.services.subtitle}</p>
          <div className="dragon-services-grid">
            {services.map(s => (
              <div key={s.id} className="dragon-service">
                <span className="dragon-service-icon">{s.icon}</span>
                <h3>{s.name[language]}</h3>
                <p>{s.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="dragon-section dragon-products-section">
        <div className="dragon-container">
          <h2 className="dragon-title">{t.products.title}</h2>
          <p className="dragon-subtitle">{t.products.subtitle}</p>
          <div className="dragon-products-grid">
            {productCategories.map(p => (
              <div key={p.id} className="dragon-product">
                <img src={p.image} alt={p.name[language]} />
                <div className="dragon-product-overlay">
                  <h3>{p.name[language]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="dragon-section">
        <div className="dragon-container dragon-about">
          <h2 className="dragon-title">{t.about.title}</h2>
          <p className="dragon-about-text">{t.about.text}</p>
          <p className="dragon-mission">{t.about.mission}</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dragon-section dragon-contact-section">
        <div className="dragon-container">
          <h2 className="dragon-title">{t.contact.title}</h2>
          <div className="dragon-contact-grid">
            <div className="dragon-offices">
              <div className="dragon-office">
                <h3>🇮🇹 {t.contact.italy}</h3>
                <p>{companyInfo.italy.address}</p>
                <p>{companyInfo.italy.phone}</p>
                <p>{companyInfo.italy.email}</p>
              </div>
              <div className="dragon-office">
                <h3>🇨🇳 {t.contact.china}</h3>
                <p>{companyInfo.china.address}</p>
                <p>{companyInfo.china.phone}</p>
                <p>{companyInfo.china.email}</p>
              </div>
            </div>
            <form className="dragon-form" onSubmit={handleSubmit}>
              <div className="dragon-form-row">
                <input type="text" placeholder={t.contact.form.company} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} required />
                <input type="text" placeholder={t.contact.form.name} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="dragon-form-row">
                <input type="email" placeholder={t.contact.form.email} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                <input type="tel" placeholder={t.contact.form.phone} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <textarea placeholder={t.contact.form.message} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
              <button type="submit" className="dragon-btn">{t.contact.form.send}</button>
              {submitted && <p className="dragon-success">✓ Request sent!</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dragon-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/dragon-trade" className="dragon-back">← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}</a>
      </footer>
    </div>
  )
}

export default DragonTrade

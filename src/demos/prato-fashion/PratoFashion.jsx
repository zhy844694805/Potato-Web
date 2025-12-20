import { useState } from 'react'
import { translations, brandInfo, collections, features, heroImage } from './data/fashion-data'
import './PratoFashion.css'

function PratoFashion() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="prato-app">
      {/* Header */}
      <header className="prato-header">
        <div className="prato-header-inner">
          <a href="#home" className="prato-logo">PRATO FASHION</a>
          <nav className="prato-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#collections">{t.nav.collections}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
          <div className="prato-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="prato-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="prato-hero-overlay" />
        <div className="prato-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <a href="#collections" className="prato-btn">{t.hero.cta}</a>
        </div>
      </section>

      {/* Features */}
      <section className="prato-features">
        {features.map((f, i) => (
          <div key={i} className="prato-feature">
            <span className="prato-feature-icon">{f.icon}</span>
            <span>{f.title[language]}</span>
          </div>
        ))}
      </section>

      {/* Collections */}
      <section id="collections" className="prato-section">
        <div className="prato-container">
          <h2 className="prato-title">{t.collections.title}</h2>
          <p className="prato-subtitle">{t.collections.subtitle}</p>
          <div className="prato-grid">
            {collections.map(c => (
              <div key={c.id} className="prato-card">
                <div className="prato-card-img">
                  <img src={c.image} alt={c.name[language]} />
                  {c.tag && <span className="prato-tag">{c.tag}</span>}
                </div>
                <h3>{c.name[language]}</h3>
                <p>{c.desc[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="prato-section prato-about">
        <div className="prato-container">
          <h2 className="prato-title">{t.about.title}</h2>
          <p className="prato-about-text">{t.about.text}</p>
          <div className="prato-values">
            <div className="prato-value"><span>✂️</span>{t.about.craftsmanship}</div>
            <div className="prato-value"><span>💎</span>{t.about.quality}</div>
            <div className="prato-value"><span>🌿</span>{t.about.sustainable}</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="prato-section prato-contact">
        <div className="prato-container">
          <h2 className="prato-title">{t.contact.title}</h2>
          <div className="prato-contact-grid">
            <div className="prato-contact-info">
              <div className="prato-info-item">
                <strong>{t.contact.showroom}</strong>
                <p>{brandInfo.address.street}<br />{brandInfo.address.postalCode} {brandInfo.address.city}</p>
              </div>
              <div className="prato-info-item">
                <strong>{t.contact.email}</strong>
                <p>{brandInfo.email}</p>
              </div>
              <div className="prato-info-item">
                <strong>{t.contact.phone}</strong>
                <p>{brandInfo.phone}</p>
              </div>
            </div>
            <form className="prato-form" onSubmit={handleSubmit}>
              <input type="text" placeholder={t.contact.form.name} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              <input type="email" placeholder={t.contact.form.email} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
              <textarea placeholder={t.contact.form.message} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
              <button type="submit" className="prato-btn">{t.contact.form.send}</button>
              {submitted && <p className="prato-success">✓ Message sent!</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="prato-footer">
        <p>{t.footer.rights}</p>
        <a href="/portfolio/prato-fashion" className="prato-back">← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}</a>
      </footer>
    </div>
  )
}

export default PratoFashion

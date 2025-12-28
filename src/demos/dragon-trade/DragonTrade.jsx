import { useState } from 'react'
import { translations, companyInfo, services, productCategories, stats, heroImage, cases, partners, team, faq, process } from './data/trade-data'
import './DragonTrade.css'

function DragonTrade() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ company: '', name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [openFaq, setOpenFaq] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ company: '', name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSubmitted(false), 3000)
  }

  return (
    <div className="dtrade-app">
      {/* Header */}
      <header className="dtrade-header">
        <div className="dtrade-header-inner">
          <a href="#home" className="dtrade-logo">
            <span className="dtrade-logo-icon">🐉</span>
            <span>DRAGON TRADE</span>
          </a>

          <button className="dtrade-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`dtrade-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</a>
            <a href="#cases" onClick={() => setMobileMenuOpen(false)}>{t.nav.cases}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
          </nav>

          <div className="dtrade-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
                {lang === 'zh' ? '中' : lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="dtrade-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="dtrade-hero-overlay" />
        <div className="dtrade-hero-content">
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="dtrade-hero-btns">
            <a href="#contact" className="dtrade-btn primary">{t.hero.cta}</a>
            <a href="#services" className="dtrade-btn secondary">{t.hero.secondary}</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="dtrade-stats">
        {stats.map((s, i) => (
          <div key={i} className="dtrade-stat">
            <span className="dtrade-stat-value">{s.value}</span>
            <span className="dtrade-stat-label">{t.stats[s.key]}</span>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="dtrade-section dtrade-process-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.process.title}</h2>
          <p className="dtrade-subtitle">{t.process.subtitle}</p>
          <div className="dtrade-process-grid">
            {process.map((p, i) => (
              <div key={p.step} className="dtrade-process-step">
                <div className="dtrade-process-icon">{p.icon}</div>
                <div className="dtrade-process-num">{p.step}</div>
                <h3>{p.title[language]}</h3>
                <p>{p.desc[language]}</p>
                {i < process.length - 1 && <div className="dtrade-process-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="dtrade-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.services.title}</h2>
          <p className="dtrade-subtitle">{t.services.subtitle}</p>
          <div className="dtrade-services-grid">
            {services.map(s => (
              <div key={s.id} className="dtrade-service" onClick={() => setSelectedService(s)}>
                <span className="dtrade-service-icon">{s.icon}</span>
                <h3>{s.name[language]}</h3>
                <p>{s.desc[language]}</p>
                <button className="dtrade-service-link">{t.services.learnMore} →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="dtrade-modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="dtrade-modal" onClick={e => e.stopPropagation()}>
            <button className="dtrade-modal-close" onClick={() => setSelectedService(null)}>×</button>
            <div className="dtrade-modal-icon">{selectedService.icon}</div>
            <h2>{selectedService.name[language]}</h2>
            <p className="dtrade-modal-desc">{selectedService.desc[language]}</p>
            <p className="dtrade-modal-details">{selectedService.details[language]}</p>
            <a href="#contact" className="dtrade-btn primary" onClick={() => setSelectedService(null)}>{t.hero.cta}</a>
          </div>
        </div>
      )}

      {/* Products */}
      <section id="products" className="dtrade-section dtrade-products-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.products.title}</h2>
          <p className="dtrade-subtitle">{t.products.subtitle}</p>
          <div className="dtrade-products-grid">
            {productCategories.map(p => (
              <div key={p.id} className="dtrade-product" onClick={() => setSelectedProduct(p)}>
                <img src={p.image} alt={p.name[language]} />
                <div className="dtrade-product-overlay">
                  <h3>{p.name[language]}</h3>
                  <div className="dtrade-product-info">
                    <span>{t.products.moq}: {p.moq}</span>
                    <span>{t.products.leadTime}: {p.leadTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="dtrade-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="dtrade-modal dtrade-product-modal" onClick={e => e.stopPropagation()}>
            <button className="dtrade-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="dtrade-product-modal-content">
              <img src={selectedProduct.image} alt={selectedProduct.name[language]} />
              <div className="dtrade-product-modal-info">
                <h2>{selectedProduct.name[language]}</h2>
                <div className="dtrade-product-specs">
                  <div><strong>{t.products.moq}:</strong> {selectedProduct.moq}</div>
                  <div><strong>{t.products.leadTime}:</strong> {selectedProduct.leadTime}</div>
                </div>
                <div className="dtrade-product-list">
                  <strong>Products:</strong>
                  <ul>
                    {selectedProduct.products.map((prod, i) => (
                      <li key={i}>{prod}</li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="dtrade-btn primary" onClick={() => setSelectedProduct(null)}>{t.products.enquire}</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cases */}
      <section id="cases" className="dtrade-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.cases.title}</h2>
          <p className="dtrade-subtitle">{t.cases.subtitle}</p>
          <div className="dtrade-cases-grid">
            {cases.map(c => (
              <div key={c.id} className="dtrade-case">
                <div className="dtrade-case-img">
                  <img src={c.image} alt={c.client} />
                  <span className="dtrade-case-industry">{c.industry[language]}</span>
                </div>
                <div className="dtrade-case-content">
                  <h3>{c.client}</h3>
                  <div className="dtrade-case-item">
                    <strong>Challenge:</strong>
                    <p>{c.challenge[language]}</p>
                  </div>
                  <div className="dtrade-case-item">
                    <strong>Solution:</strong>
                    <p>{c.solution[language]}</p>
                  </div>
                  <div className="dtrade-case-results">
                    <strong>{t.cases.results}:</strong>
                    <span>{c.results[language]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="dtrade-section dtrade-partners-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.partners.title}</h2>
          <p className="dtrade-subtitle">{t.partners.subtitle}</p>
          <div className="dtrade-partners-grid">
            {partners.map(p => (
              <div key={p.id} className="dtrade-partner">
                <span className="dtrade-partner-logo">{p.logo}</span>
                <span className="dtrade-partner-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="dtrade-section dtrade-team-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.team.title}</h2>
          <p className="dtrade-subtitle">{t.team.subtitle}</p>
          <div className="dtrade-team-grid">
            {team.map(m => (
              <div key={m.id} className="dtrade-team-member">
                <img src={m.image} alt={m.name} />
                <h3>{m.name}</h3>
                <span className="dtrade-team-role">{m.role[language]}</span>
                <p>{m.bio[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="dtrade-section dtrade-about-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.about.title}</h2>
          <div className="dtrade-about-content">
            <p className="dtrade-about-text">{t.about.text}</p>
            <div className="dtrade-about-values">
              <div className="dtrade-about-item">
                <span>🎯</span>
                <p>{t.about.mission}</p>
              </div>
              <div className="dtrade-about-item">
                <span>🌍</span>
                <p>{t.about.vision}</p>
              </div>
              <div className="dtrade-about-item">
                <span>💎</span>
                <p>{t.about.values}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dtrade-section dtrade-faq-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.faq.title}</h2>
          <p className="dtrade-subtitle">{t.faq.subtitle}</p>
          <div className="dtrade-faq-list">
            {faq.map(f => (
              <div key={f.id} className={`dtrade-faq-item ${openFaq === f.id ? 'open' : ''}`}>
                <button className="dtrade-faq-question" onClick={() => setOpenFaq(openFaq === f.id ? null : f.id)}>
                  <span>{f.question[language]}</span>
                  <span className="dtrade-faq-toggle">{openFaq === f.id ? '−' : '+'}</span>
                </button>
                {openFaq === f.id && (
                  <div className="dtrade-faq-answer">
                    <p>{f.answer[language]}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="dtrade-newsletter">
        <div className="dtrade-container">
          <h2>{t.newsletter.title}</h2>
          <p>{t.newsletter.subtitle}</p>
          <form className="dtrade-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="dtrade-btn primary">{t.newsletter.button}</button>
          </form>
          {newsletterSubmitted && <p className="dtrade-newsletter-success">{t.newsletter.success}</p>}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="dtrade-section dtrade-contact-section">
        <div className="dtrade-container">
          <h2 className="dtrade-title">{t.contact.title}</h2>
          <p className="dtrade-subtitle">{t.contact.subtitle}</p>
          <div className="dtrade-contact-grid">
            <div className="dtrade-offices">
              <div className="dtrade-office">
                <h3>🇮🇹 {t.contact.italy}</h3>
                <p>{companyInfo.italy.address}</p>
                <p>{companyInfo.italy.phone}</p>
                <p>{companyInfo.italy.email}</p>
              </div>
              <div className="dtrade-office">
                <h3>🇨🇳 {t.contact.china}</h3>
                <p>{companyInfo.china.address}</p>
                <p>{companyInfo.china.phone}</p>
                <p>{companyInfo.china.email}</p>
              </div>
              <div className="dtrade-office">
                <h3>🕐 {t.contact.hours}</h3>
                <p>{t.contact.hoursText}</p>
              </div>
            </div>
            <form className="dtrade-form" onSubmit={handleSubmit}>
              <div className="dtrade-form-row">
                <input type="text" placeholder={t.contact.form.company} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} required />
                <input type="text" placeholder={t.contact.form.name} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="dtrade-form-row">
                <input type="email" placeholder={t.contact.form.email} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                <input type="tel" placeholder={t.contact.form.phone} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} required>
                <option value="">{t.contact.form.selectService}</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name[language]}</option>
                ))}
              </select>
              <textarea placeholder={t.contact.form.message} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
              <button type="submit" className="dtrade-btn primary">{t.contact.form.send}</button>
              {submitted && <p className="dtrade-success">✓ {language === 'zh' ? '请求已发送！' : language === 'it' ? 'Richiesta inviata!' : 'Request sent!'}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dtrade-footer">
        <div className="dtrade-footer-inner">
          <div className="dtrade-footer-brand">
            <div className="dtrade-logo">
              <span className="dtrade-logo-icon">🐉</span>
              <span>DRAGON TRADE</span>
            </div>
            <p>{t.hero.tagline}</p>
          </div>
          <div className="dtrade-footer-links">
            <h4>{t.footer.quickLinks}</h4>
            <a href="#services">{t.nav.services}</a>
            <a href="#products">{t.nav.products}</a>
            <a href="#cases">{t.nav.cases}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="dtrade-footer-legal">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
          <div className="dtrade-footer-social">
            <h4>{t.footer.followUs}</h4>
            <div className="dtrade-social-icons">
              <a href={companyInfo.social.linkedin} target="_blank" rel="noopener noreferrer">in</a>
              <a href="#">WeChat</a>
            </div>
          </div>
        </div>
        <div className="dtrade-footer-bottom">
          <p>{t.footer.rights}</p>
          <a href="/portfolio/dragon-trade" className="dtrade-back">← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}</a>
        </div>
      </footer>
    </div>
  )
}

export default DragonTrade

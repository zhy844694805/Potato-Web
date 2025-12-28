import { useState } from 'react'
import { translations, brandInfo, collections, features, heroImage, products, testimonials, partners, news, stats } from './data/fashion-data'
import './PratoFashion.css'

function PratoFashion() {
  const [language, setLanguage] = useState('en')
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productFilter, setProductFilter] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setNewsletterSubmitted(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSubmitted(false), 3000)
  }

  const filteredProducts = productFilter === 'all'
    ? products
    : products.filter(p => p.category === productFilter)

  const formatDate = (dateStr) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : language === 'it' ? 'it-IT' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="prato-app">
      {/* Header */}
      <header className="prato-header">
        <div className="prato-header-inner">
          <a href="#home" className="prato-logo">PRATO FASHION</a>

          <button className="prato-mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`prato-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a>
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>{t.nav.collections}</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>{t.nav.products}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
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

      {/* Products */}
      <section id="products" className="prato-section prato-products-section">
        <div className="prato-container">
          <h2 className="prato-title">{t.products.title}</h2>
          <p className="prato-subtitle">{t.products.subtitle}</p>

          <div className="prato-product-filters">
            <button
              className={productFilter === 'all' ? 'active' : ''}
              onClick={() => setProductFilter('all')}
            >
              {t.products.filterAll}
            </button>
            <button
              className={productFilter === 'dresses' ? 'active' : ''}
              onClick={() => setProductFilter('dresses')}
            >
              {t.products.filterDresses}
            </button>
            <button
              className={productFilter === 'suits' ? 'active' : ''}
              onClick={() => setProductFilter('suits')}
            >
              {t.products.filterSuits}
            </button>
            <button
              className={productFilter === 'outerwear' ? 'active' : ''}
              onClick={() => setProductFilter('outerwear')}
            >
              {t.products.filterOuterwear}
            </button>
            <button
              className={productFilter === 'accessories' ? 'active' : ''}
              onClick={() => setProductFilter('accessories')}
            >
              {t.products.filterAccessories}
            </button>
          </div>

          <div className="prato-products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="prato-product-card">
                <div className="prato-product-img">
                  <img src={product.image} alt={product.name[language]} />
                  {product.isNew && <span className="prato-product-badge new">NEW</span>}
                  {product.isBestseller && <span className="prato-product-badge bestseller">BESTSELLER</span>}
                  {product.originalPrice && (
                    <span className="prato-product-badge sale">SALE</span>
                  )}
                  <button className="prato-quick-view" onClick={() => setSelectedProduct(product)}>
                    {t.products.viewDetails}
                  </button>
                </div>
                <div className="prato-product-info">
                  <h3>{product.name[language]}</h3>
                  <p className="prato-product-material">{product.material[language]}</p>
                  <div className="prato-product-colors">
                    {product.colors.map((color, i) => (
                      <span key={i} className="prato-color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  <div className="prato-product-price">
                    {product.originalPrice && (
                      <span className="prato-original-price">€{product.originalPrice}</span>
                    )}
                    <span className="prato-current-price">€{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="prato-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="prato-modal" onClick={e => e.stopPropagation()}>
            <button className="prato-modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <div className="prato-modal-content">
              <div className="prato-modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name[language]} />
              </div>
              <div className="prato-modal-details">
                <h2>{selectedProduct.name[language]}</h2>
                <div className="prato-modal-price">
                  {selectedProduct.originalPrice && (
                    <span className="prato-original-price">€{selectedProduct.originalPrice}</span>
                  )}
                  <span className="prato-current-price">€{selectedProduct.price}</span>
                </div>
                <div className="prato-modal-info">
                  <div className="prato-modal-row">
                    <strong>{t.products.material}:</strong>
                    <span>{selectedProduct.material[language]}</span>
                  </div>
                  <div className="prato-modal-row">
                    <strong>{t.products.sizes}:</strong>
                    <div className="prato-size-options">
                      {selectedProduct.sizes.map((size, i) => (
                        <span key={i} className="prato-size-option">{size}</span>
                      ))}
                    </div>
                  </div>
                  <div className="prato-modal-row">
                    <strong>{t.products.colors}:</strong>
                    <div className="prato-color-options">
                      {selectedProduct.colors.map((color, i) => (
                        <span key={i} className="prato-color-option" style={{ backgroundColor: color }}></span>
                      ))}
                    </div>
                  </div>
                </div>
                <button className="prato-btn prato-add-to-cart">{t.products.addToCart}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="prato-section prato-testimonials">
        <div className="prato-container">
          <h2 className="prato-title">{t.testimonials.title}</h2>
          <p className="prato-subtitle">{t.testimonials.subtitle}</p>
          <div className="prato-testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="prato-testimonial-card">
                <div className="prato-testimonial-stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="prato-testimonial-text">"{testimonial.text[language]}"</p>
                <div className="prato-testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role[language]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="prato-section prato-partners">
        <div className="prato-container">
          <h2 className="prato-title">{t.partners.title}</h2>
          <p className="prato-subtitle">{t.partners.subtitle}</p>
          <div className="prato-partners-grid">
            {partners.map(partner => (
              <div key={partner.id} className="prato-partner-logo">
                <span>{partner.logo}</span>
                <small>{partner.name}</small>
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

          <div className="prato-stats">
            {stats.map((stat, i) => (
              <div key={i} className="prato-stat">
                <span className="prato-stat-value">{stat.value}</span>
                <span className="prato-stat-label">{t.about.stats[stat.key]}</span>
              </div>
            ))}
          </div>

          <div className="prato-values">
            <div className="prato-value"><span>✂️</span>{t.about.craftsmanship}</div>
            <div className="prato-value"><span>💎</span>{t.about.quality}</div>
            <div className="prato-value"><span>🌿</span>{t.about.sustainable}</div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="prato-section prato-news">
        <div className="prato-container">
          <h2 className="prato-title">{t.news.title}</h2>
          <p className="prato-subtitle">{t.news.subtitle}</p>
          <div className="prato-news-grid">
            {news.map(item => (
              <article key={item.id} className="prato-news-card">
                <div className="prato-news-img">
                  <img src={item.image} alt={item.title[language]} />
                  <span className="prato-news-category">{item.category[language]}</span>
                </div>
                <div className="prato-news-content">
                  <time>{formatDate(item.date)}</time>
                  <h3>{item.title[language]}</h3>
                  <p>{item.excerpt[language]}</p>
                  <a href="#" className="prato-news-link">{t.news.readMore} →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="prato-newsletter">
        <div className="prato-container">
          <h2>{t.newsletter.title}</h2>
          <p>{t.newsletter.subtitle}</p>
          <form className="prato-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="prato-btn">{t.newsletter.button}</button>
          </form>
          {newsletterSubmitted && <p className="prato-newsletter-success">{t.newsletter.success}</p>}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="prato-section prato-contact">
        <div className="prato-container">
          <h2 className="prato-title">{t.contact.title}</h2>
          <div className="prato-contact-grid">
            <div className="prato-contact-info">
              <div className="prato-info-item">
                <span className="prato-info-icon">📍</span>
                <div>
                  <strong>{t.contact.showroom}</strong>
                  <p>{brandInfo.address.street}<br />{brandInfo.address.postalCode} {brandInfo.address.city}</p>
                </div>
              </div>
              <div className="prato-info-item">
                <span className="prato-info-icon">✉️</span>
                <div>
                  <strong>{t.contact.email}</strong>
                  <p>{brandInfo.email}</p>
                </div>
              </div>
              <div className="prato-info-item">
                <span className="prato-info-icon">📞</span>
                <div>
                  <strong>{t.contact.phone}</strong>
                  <p>{brandInfo.phone}</p>
                </div>
              </div>
              <div className="prato-info-item">
                <span className="prato-info-icon">🕐</span>
                <div>
                  <strong>{t.contact.hours}</strong>
                  <p style={{ whiteSpace: 'pre-line' }}>{t.contact.hoursText}</p>
                </div>
              </div>
            </div>
            <form className="prato-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                required
              />
              <input
                type="text"
                placeholder={t.contact.form.subject}
                value={formData.subject}
                onChange={e => setFormData({...formData, subject: e.target.value})}
                required
              />
              <textarea
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                required
              />
              <button type="submit" className="prato-btn">{t.contact.form.send}</button>
              {submitted && <p className="prato-success">✓ {language === 'zh' ? '消息已发送！' : language === 'it' ? 'Messaggio inviato!' : 'Message sent!'}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="prato-footer">
        <div className="prato-footer-inner">
          <div className="prato-footer-brand">
            <h3>PRATO FASHION</h3>
            <p>{t.hero.tagline}</p>
          </div>
          <div className="prato-footer-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
          <div className="prato-footer-social">
            <span>{t.footer.followUs}:</span>
            <div className="prato-social-icons">
              <a href={brandInfo.social.instagram} target="_blank" rel="noopener noreferrer">IG</a>
              <a href={brandInfo.social.facebook} target="_blank" rel="noopener noreferrer">FB</a>
              <a href={brandInfo.social.pinterest} target="_blank" rel="noopener noreferrer">PIN</a>
            </div>
          </div>
        </div>
        <div className="prato-footer-bottom">
          <p>{t.footer.rights}</p>
          <a href="/portfolio/prato-fashion" className="prato-back">← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}</a>
        </div>
      </footer>
    </div>
  )
}

export default PratoFashion

import { useState } from 'react'
import { translations, appScreens, stats, pricingPlans, testimonials, techStack } from './data/showcase-data'
import './BeautyBook.css'

function BeautyBook() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [demoForm, setDemoForm] = useState({
    name: '', salon: '', phone: '', email: '', employees: '', message: ''
  })
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [demoSubmitting, setDemoSubmitting] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const t = translations[language]

  const handleDemoSubmit = (e) => {
    e.preventDefault()
    setDemoSubmitting(true)
    setTimeout(() => {
      setDemoSubmitting(false)
      setDemoSubmitted(true)
      setDemoForm({ name: '', salon: '', phone: '', email: '', employees: '', message: '' })
      setTimeout(() => setDemoSubmitted(false), 5000)
    }, 1500)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
      setTimeout(() => setNewsletterSubmitted(false), 4000)
    }
  }

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={`beauty-star ${i < rating ? 'filled' : ''}`}>★</span>
    ))
  }

  const renderScreenContent = (screen) => {
    switch (screen.id) {
      case 'home':
        return (
          <div className="beauty-phone-content" style={{ background: screen.gradient }}>
            <div className="beauty-mock-header">美丽预约</div>
            <div className="beauty-mock-greeting">欢迎回来，王小姐 👋</div>
            <div className="beauty-mock-section">🌟 推荐服务</div>
            <div className="beauty-mock-section">👩‍💼 热门技师</div>
            <div className="beauty-mock-section">🎁 最新优惠</div>
          </div>
        )
      case 'services':
        return (
          <div className="beauty-phone-content" style={{ background: screen.gradient }}>
            <div className="beauty-mock-header">服务项目</div>
            <div className="beauty-mock-categories">
              <span className="beauty-mock-cat">护肤</span>
              <span className="beauty-mock-cat">美发</span>
              <span className="beauty-mock-cat">美甲</span>
              <span className="beauty-mock-cat">按摩</span>
            </div>
            <div className="beauty-mock-item"><span>深层清洁</span><span>¥288</span></div>
            <div className="beauty-mock-item"><span>精剪造型</span><span>¥168</span></div>
            <div className="beauty-mock-item"><span>日式美甲</span><span>¥188</span></div>
            <div className="beauty-mock-item"><span>肩颈按摩</span><span>¥128</span></div>
          </div>
        )
      case 'booking':
        return (
          <div className="beauty-phone-content" style={{ background: screen.gradient }}>
            <div className="beauty-mock-booking">
              <div className="beauty-mock-booking-title">预约确认</div>
              <div className="beauty-mock-booking-detail">📋 深层清洁护理</div>
              <div className="beauty-mock-booking-detail">📅 2024年12月25日</div>
              <div className="beauty-mock-booking-detail">🕐 14:00 - 15:00</div>
              <div className="beauty-mock-booking-detail">👩‍💼 Lisa 高级美容师</div>
              <div className="beauty-mock-booking-detail" style={{ marginTop: '1rem', fontWeight: 600 }}>💰 ¥288</div>
              <button className="beauty-mock-booking-btn">确认预约</button>
            </div>
          </div>
        )
      case 'confirm':
        return (
          <div className="beauty-phone-content" style={{ background: screen.gradient }}>
            <div className="beauty-mock-success">
              <div className="beauty-mock-success-icon">✓</div>
              <div className="beauty-mock-success-text">预约成功！</div>
              <div className="beauty-mock-success-sub">确认短信已发送</div>
              <div className="beauty-mock-success-sub" style={{ marginTop: '1.5rem' }}>
                📅 12月25日 14:00<br />
                📍 时尚美容院
              </div>
            </div>
          </div>
        )
      case 'profile':
        return (
          <div className="beauty-phone-content" style={{ background: screen.gradient }}>
            <div className="beauty-mock-profile">
              <div className="beauty-mock-avatar">👩</div>
              <div className="beauty-mock-name">王小姐</div>
              <div className="beauty-mock-points">✨ 2,580 积分</div>
              <div className="beauty-mock-menu-item">📅 我的预约</div>
              <div className="beauty-mock-menu-item">📋 历史记录</div>
              <div className="beauty-mock-menu-item">🎁 优惠券 (3)</div>
              <div className="beauty-mock-menu-item">⚙️ 设置</div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="beauty-showcase">
      {/* Header */}
      <header className="beauty-header">
        <div className="beauty-header-inner">
          <a href="#home" className="beauty-logo">
            <span>💅</span>
            <span>BellaBook</span>
          </a>

          <nav className={`beauty-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>{language === 'zh' ? '功能' : language === 'it' ? 'Funzionalità' : 'Features'}</a>
            <a href="#screens" onClick={() => setMobileMenuOpen(false)}>{language === 'zh' ? '截图' : language === 'it' ? 'Schermate' : 'Screens'}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>{language === 'zh' ? '价格' : language === 'it' ? 'Prezzi' : 'Pricing'}</a>
            <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>{language === 'zh' ? '评价' : language === 'it' ? 'Testimonianze' : 'Testimonials'}</a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)}>{language === 'zh' ? '演示' : language === 'it' ? 'Demo' : 'Demo'}</a>
          </nav>

          <div className="beauty-header-right">
            <div className="beauty-lang">
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

            <button
              className={`beauty-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="beauty-hero">
        <div className="beauty-hero-content">
          <h1>{t.title}</h1>
          <p className="subtitle">{t.subtitle}</p>
          <p className="description">{t.description}</p>
          <div className="beauty-hero-cta">
            <a href="#demo" className="beauty-btn beauty-btn-primary">{t.cta}</a>
            <a href="#screens" className="beauty-btn beauty-btn-outline">{t.screens.title}</a>
          </div>
        </div>
        <div className="beauty-hero-visual">
          <div className="beauty-hero-phone">
            <div className="beauty-phone-frame">
              <div className="beauty-phone-notch" />
              <div className="beauty-phone-screen">
                {renderScreenContent(appScreens[0])}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="beauty-stats-section">
        <div className="beauty-stats">
          <div className="beauty-stat">
            <div className="beauty-stat-value">{stats.users}</div>
            <div className="beauty-stat-label">{t.stats.users}</div>
          </div>
          <div className="beauty-stat">
            <div className="beauty-stat-value">{stats.bookings}</div>
            <div className="beauty-stat-label">{t.stats.bookings}</div>
          </div>
          <div className="beauty-stat">
            <div className="beauty-stat-value">{stats.rating}</div>
            <div className="beauty-stat-label">{t.stats.rating}</div>
          </div>
          <div className="beauty-stat">
            <div className="beauty-stat-value">{stats.salons}</div>
            <div className="beauty-stat-label">{t.stats.salons}</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="beauty-how-it-works">
        <div className="beauty-container">
          <h2>{t.howItWorks.title}</h2>
          <p className="beauty-section-subtitle">{t.howItWorks.subtitle}</p>
          <div className="beauty-steps">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="beauty-step">
                <div className="beauty-step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="beauty-features">
        <div className="beauty-features-inner">
          <h2>{t.features.title}</h2>
          <p className="beauty-section-subtitle">{t.features.subtitle}</p>
          <div className="beauty-features-grid">
            {t.features.list.map((feature, index) => (
              <div key={index} className="beauty-feature">
                <span className="beauty-feature-icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Mockups */}
      <section id="screens" className="beauty-phones">
        <h2 className="beauty-phones-title">{t.screens.title}</h2>
        <p className="beauty-section-subtitle">{t.screens.subtitle}</p>
        <div className="beauty-phones-scroll">
          {appScreens.map((screen, index) => (
            <div key={screen.id} className="beauty-phone">
              <div className="beauty-phone-frame">
                <div className="beauty-phone-notch" />
                <div className="beauty-phone-screen">
                  {renderScreenContent(screen)}
                </div>
              </div>
              <div className="beauty-phone-label">{t.screens.list[index]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="beauty-tech">
        <div className="beauty-container">
          <div className="beauty-tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="beauty-tech-item">
                <span className="beauty-tech-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="beauty-pricing">
        <div className="beauty-container">
          <h2>{t.pricing.title}</h2>
          <p className="beauty-section-subtitle">{t.pricing.subtitle}</p>
          <div className="beauty-pricing-grid">
            {pricingPlans.map(plan => (
              <div key={plan.id} className={`beauty-pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
                {plan.highlighted && <span className="beauty-pricing-badge">{t.pricing.popular}</span>}
                <h3>{plan.name[language]}</h3>
                <p className="beauty-pricing-desc">{plan.desc[language]}</p>
                <div className="beauty-pricing-price">
                  <span className="beauty-pricing-amount">{plan.price[language]}</span>
                  <span className="beauty-pricing-period">{t.pricing.monthly}</span>
                </div>
                <ul className="beauty-pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {t.pricing.features[feature]}</li>
                  ))}
                </ul>
                <a href="#demo" className={`beauty-btn ${plan.highlighted ? 'beauty-btn-primary' : 'beauty-btn-outline'}`}>
                  {t.pricing.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="beauty-testimonials">
        <div className="beauty-container">
          <h2>{t.testimonials.title}</h2>
          <p className="beauty-section-subtitle">{t.testimonials.subtitle}</p>
          <div className="beauty-testimonial-carousel">
            <button className="beauty-carousel-btn prev" onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>‹</button>
            <div className="beauty-testimonial-card">
              <div className="beauty-testimonial-rating">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>
              <p className="beauty-testimonial-text">"{testimonials[activeTestimonial].text[language]}"</p>
              <div className="beauty-testimonial-author">
                <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].author[language]} />
                <div>
                  <strong>{testimonials[activeTestimonial].author[language]}</strong>
                  <span>{testimonials[activeTestimonial].salon[language]}</span>
                </div>
              </div>
            </div>
            <button className="beauty-carousel-btn next" onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}>›</button>
          </div>
          <div className="beauty-testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`beauty-dot ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="beauty-faq">
        <div className="beauty-container">
          <h2>{t.faq.title}</h2>
          <p className="beauty-section-subtitle">{t.faq.subtitle}</p>
          <div className="beauty-faq-list">
            {t.faq.questions.map((faq, i) => (
              <div key={i} className={`beauty-faq-item ${expandedFaq === i ? 'expanded' : ''}`}>
                <button className="beauty-faq-question" onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="beauty-faq-icon">{expandedFaq === i ? '−' : '+'}</span>
                </button>
                {expandedFaq === i && (
                  <div className="beauty-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request */}
      <section id="demo" className="beauty-demo">
        <div className="beauty-container">
          <div className="beauty-demo-content">
            <div className="beauty-demo-text">
              <h2>{t.demo.title}</h2>
              <p>{t.demo.subtitle}</p>
            </div>
            <form className="beauty-demo-form" onSubmit={handleDemoSubmit}>
              <div className="beauty-demo-form-grid">
                <div className="beauty-form-group">
                  <label>{t.demo.form.name}</label>
                  <input
                    type="text"
                    value={demoForm.name}
                    onChange={e => setDemoForm({...demoForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="beauty-form-group">
                  <label>{t.demo.form.salon}</label>
                  <input
                    type="text"
                    value={demoForm.salon}
                    onChange={e => setDemoForm({...demoForm, salon: e.target.value})}
                    required
                  />
                </div>
                <div className="beauty-form-group">
                  <label>{t.demo.form.phone}</label>
                  <input
                    type="tel"
                    value={demoForm.phone}
                    onChange={e => setDemoForm({...demoForm, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="beauty-form-group">
                  <label>{t.demo.form.email}</label>
                  <input
                    type="email"
                    value={demoForm.email}
                    onChange={e => setDemoForm({...demoForm, email: e.target.value})}
                    required
                  />
                </div>
                <div className="beauty-form-group">
                  <label>{t.demo.form.employees}</label>
                  <select
                    value={demoForm.employees}
                    onChange={e => setDemoForm({...demoForm, employees: e.target.value})}
                    required
                  >
                    <option value="">--</option>
                    <option value="1-3">1-3</option>
                    <option value="4-10">4-10</option>
                    <option value="11-30">11-30</option>
                    <option value="30+">30+</option>
                  </select>
                </div>
                <div className="beauty-form-group full">
                  <label>{t.demo.form.message}</label>
                  <textarea
                    value={demoForm.message}
                    onChange={e => setDemoForm({...demoForm, message: e.target.value})}
                    rows={3}
                  />
                </div>
              </div>
              <button type="submit" className="beauty-btn beauty-btn-primary beauty-btn-full" disabled={demoSubmitting}>
                {demoSubmitting ? t.demo.form.submitting : t.demo.form.submit}
              </button>
              {demoSubmitted && (
                <p className="beauty-success">✓ {t.demo.success}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="beauty-newsletter">
        <div className="beauty-container">
          <div className="beauty-newsletter-content">
            <h3>{t.newsletter.title}</h3>
            <p>{t.newsletter.subtitle}</p>
            <form className="beauty-newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="beauty-btn beauty-btn-primary">{t.newsletter.button}</button>
            </form>
            {newsletterSubmitted && (
              <p className="beauty-newsletter-success">✓ {t.newsletter.success}</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="beauty-footer">
        <div className="beauty-footer-content">
          <div className="beauty-footer-brand">
            <span className="beauty-footer-logo">💅 BellaBook</span>
            <p>{t.footer.rights}</p>
          </div>
          <div className="beauty-footer-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="/portfolio/beauty-book" className="beauty-back">← {t.back}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BeautyBook

import { useState } from 'react'
import {
  translations,
  stats,
  trackingTimeline,
  samplePackages,
  carriers,
  testimonials,
  faqItems,
  notifications,
  settingsOptions
} from './data/tracking-data'
import './DragonShip.css'

function DragonShip() {
  const [language, setLanguage] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeReview, setActiveReview] = useState(0)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const t = translations[language]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % testimonials.length)
  }

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="ship-showcase">
      {/* Header */}
      <header className="ship-header">
        <div className="ship-logo">
          <span>🚢</span>
          <span>DragonShip</span>
        </div>

        <button
          className={`ship-menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`ship-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>{t.features.title}</a>
          <a href="#carriers" onClick={() => setMenuOpen(false)}>{t.carriers.title}</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>{t.faq.title}</a>
          <div className="ship-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setMenuOpen(false); }}
                className={language === lang ? 'active' : ''}
              >
                {lang === 'zh' ? '中' : lang.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="ship-hero">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <p className="description">{t.description}</p>
        <div className="ship-hero-btns">
          <a href="#download" className="ship-hero-btn primary">
            <span></span> App Store
          </a>
          <a href="#download" className="ship-hero-btn secondary">
            <span>🤖</span> Google Play
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="ship-stats">
        <div className="ship-stat">
          <div className="ship-stat-value">{stats.packages}</div>
          <div className="ship-stat-label">{t.stats.packages}</div>
        </div>
        <div className="ship-stat">
          <div className="ship-stat-value">{stats.users}</div>
          <div className="ship-stat-label">{t.stats.users}</div>
        </div>
        <div className="ship-stat">
          <div className="ship-stat-value">{stats.countries}</div>
          <div className="ship-stat-label">{t.stats.countries}</div>
        </div>
        <div className="ship-stat">
          <div className="ship-stat-value">{stats.carriers}</div>
          <div className="ship-stat-label">{t.stats.carriers}</div>
        </div>
      </section>

      {/* Phone Mockups */}
      <section className="ship-phones">
        <h2 className="ship-phones-title">{t.screens.title}</h2>
        <div className="ship-phones-scroll">
          {/* Screen 1: Tracking */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-tracking">
                  <div className="ship-track-header">
                    <h3>📦 {language === 'zh' ? '包裹追踪' : language === 'it' ? 'Traccia Pacco' : 'Track Package'}</h3>
                  </div>
                  <div className="ship-track-search">
                    <span>🔍</span>
                    <input type="text" defaultValue="SF1234567890" readOnly />
                  </div>
                  <div className="ship-track-card">
                    <div className="ship-track-card-header">
                      <span className="ship-track-id">SF1234567890</span>
                      <span className="ship-track-status">{language === 'zh' ? '已送达' : language === 'it' ? 'Consegnato' : 'Delivered'}</span>
                    </div>
                    <div className="ship-track-route">
                      <div className="ship-track-city">
                        <strong>🇨🇳</strong>
                        <span>Shanghai</span>
                      </div>
                      <div className="ship-track-line" />
                      <div className="ship-track-city">
                        <strong>🇮🇹</strong>
                        <span>Milano</span>
                      </div>
                    </div>
                    <div className="ship-track-progress">
                      {language === 'zh' ? '配送完成 · 用时8天' : language === 'it' ? 'Consegnato · 8 giorni' : 'Delivered · 8 days'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[0]}</div>
          </div>

          {/* Screen 2: Details/Timeline */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-details">
                  <div className="ship-details-header">
                    <h3>SF1234567890</h3>
                    <p>{language === 'zh' ? '顺丰国际' : 'SF Express'}</p>
                  </div>
                  <div className="ship-timeline">
                    {trackingTimeline.slice(0, 5).map((item, index) => (
                      <div key={index} className={`ship-timeline-item ${index === 0 ? 'active' : ''}`}>
                        <div className="ship-timeline-time">{item.time}</div>
                        <div className="ship-timeline-desc">
                          {language === 'zh' ? item.desc : language === 'it' ? item.descIt : item.descEn}
                        </div>
                        <div className="ship-timeline-loc">📍 {item.location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[1]}</div>
          </div>

          {/* Screen 3: My Packages */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-packages">
                  <div className="ship-packages-header">
                    📦 {language === 'zh' ? '我的包裹' : language === 'it' ? 'I Miei Pacchi' : 'My Packages'} ({samplePackages.length})
                  </div>
                  {samplePackages.slice(0, 4).map((pkg, index) => (
                    <div key={index} className="ship-package-card">
                      <div className="ship-package-top">
                        <span className="ship-package-id">{pkg.id}</span>
                        <span className={`ship-package-badge ${pkg.status}`}>
                          {pkg.status === 'delivered' ? (language === 'zh' ? '已送达' : language === 'it' ? 'Consegnato' : 'Delivered') :
                           pkg.status === 'transit' ? (language === 'zh' ? '运输中' : language === 'it' ? 'In Transito' : 'In Transit') :
                           pkg.status === 'out' ? (language === 'zh' ? '派送中' : language === 'it' ? 'In Consegna' : 'Out for Delivery') :
                           (language === 'zh' ? '清关中' : language === 'it' ? 'In Dogana' : 'Customs')}
                        </span>
                      </div>
                      <div className="ship-package-info">
                        <span>{language === 'zh' ? pkg.carrier : pkg.carrierEn}</span>
                        <span>{language === 'zh' ? pkg.eta : language === 'it' ? pkg.etaIt : pkg.etaEn}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[2]}</div>
          </div>

          {/* Screen 4: Notifications */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-notif">
                  <div className="ship-notif-header">
                    🔔 {language === 'zh' ? '消息通知' : language === 'it' ? 'Notifiche' : 'Notifications'}
                  </div>
                  {notifications.slice(0, 4).map((notif, index) => (
                    <div key={index} className="ship-notif-item">
                      <div className={`ship-notif-icon ${notif.type}`}>{notif.icon}</div>
                      <div className="ship-notif-content">
                        <h4>{notif.title[language]}</h4>
                        <p>{notif.pkg} · {notif.time[language]}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[3]}</div>
          </div>

          {/* Screen 5: Settings */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-settings">
                  <div className="ship-settings-header">
                    ⚙️ {language === 'zh' ? '设置' : language === 'it' ? 'Impostazioni' : 'Settings'}
                  </div>
                  {settingsOptions.map((opt, index) => (
                    <div key={index} className="ship-settings-item">
                      <span className="ship-settings-icon">{opt.icon}</span>
                      <span className="ship-settings-title">{opt.title[language]}</span>
                      {opt.toggle && <span className="ship-settings-toggle on"></span>}
                      {opt.value && <span className="ship-settings-value">{opt.value}</span>}
                      {opt.arrow && <span className="ship-settings-arrow">›</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[4]}</div>
          </div>

          {/* Screen 6: Carriers */}
          <div className="ship-phone">
            <div className="ship-phone-frame">
              <div className="ship-phone-notch" />
              <div className="ship-phone-screen">
                <div className="ship-screen-carriers">
                  <div className="ship-carriers-header">
                    🚚 {language === 'zh' ? '物流公司' : language === 'it' ? 'Corrieri' : 'Carriers'}
                  </div>
                  <div className="ship-carriers-grid">
                    {carriers.filter(c => c.popular).slice(0, 8).map((carrier, index) => (
                      <div key={index} className="ship-carrier-item">
                        <span className="ship-carrier-logo">{carrier.logo}</span>
                        <span className="ship-carrier-name">
                          {language === 'zh' ? carrier.name : carrier.nameEn}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="ship-carriers-more">+{carriers.length - 8} {language === 'zh' ? '更多' : language === 'it' ? 'altri' : 'more'}</div>
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[5]}</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="ship-how-it-works">
        <div className="ship-how-container">
          <h2>{t.howItWorks.title}</h2>
          <div className="ship-steps">
            {t.howItWorks.steps.map((step, index) => (
              <div key={index} className="ship-step">
                <div className="ship-step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="ship-features">
        <div className="ship-features-inner">
          <h2>{t.features.title}</h2>
          <div className="ship-features-grid">
            {t.features.list.map((feature, index) => (
              <div key={index} className="ship-feature">
                <span className="ship-feature-icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Carriers */}
      <section id="carriers" className="ship-carriers-section">
        <div className="ship-carriers-container">
          <h2>{t.carriers.title}</h2>
          <p className="ship-carriers-subtitle">{t.carriers.subtitle}</p>
          <div className="ship-carriers-list">
            {carriers.map((carrier, index) => (
              <div key={index} className={`ship-carrier-card ${carrier.popular ? 'popular' : ''}`}>
                <span className="ship-carrier-badge">{carrier.logo}</span>
                <span className="ship-carrier-text">
                  {language === 'zh' ? carrier.name : carrier.nameEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="ship-testimonials">
        <div className="ship-testimonials-container">
          <h2>{t.testimonials.title}</h2>
          <p className="ship-testimonials-subtitle">{t.testimonials.subtitle}</p>

          <div className="ship-testimonial-carousel">
            <button className="ship-testimonial-nav prev" onClick={prevReview}>‹</button>

            <div className="ship-testimonial-card">
              <div className="ship-testimonial-avatar">{testimonials[activeReview].avatar}</div>
              <div className="ship-testimonial-rating">
                {'★'.repeat(testimonials[activeReview].rating)}
                {'☆'.repeat(5 - testimonials[activeReview].rating)}
              </div>
              <p className="ship-testimonial-text">"{testimonials[activeReview].text[language]}"</p>
              <div className="ship-testimonial-author">
                <strong>{testimonials[activeReview].name}</strong>
                <span>{testimonials[activeReview].location}</span>
              </div>
            </div>

            <button className="ship-testimonial-nav next" onClick={nextReview}>›</button>
          </div>

          <div className="ship-testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`ship-testimonial-dot ${index === activeReview ? 'active' : ''}`}
                onClick={() => setActiveReview(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="ship-faq">
        <div className="ship-faq-container">
          <h2>{t.faq.title}</h2>
          <p className="ship-faq-subtitle">{t.faq.subtitle}</p>

          <div className="ship-faq-list">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`ship-faq-item ${expandedFaq === item.id ? 'active' : ''}`}
              >
                <button
                  className="ship-faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
                >
                  <span>{item.question[language]}</span>
                  <span className="ship-faq-icon">{expandedFaq === item.id ? '−' : '+'}</span>
                </button>
                <div className="ship-faq-answer">
                  <p>{item.answer[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="ship-newsletter">
        <div className="ship-newsletter-container">
          <h3>{t.newsletter.title}</h3>
          <p>{t.newsletter.subtitle}</p>

          {subscribed ? (
            <div className="ship-newsletter-success">
              ✅ {t.newsletter.success}
            </div>
          ) : (
            <form className="ship-newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
                required
              />
              <button type="submit">{t.newsletter.button}</button>
            </form>
          )}
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="ship-cta">
        <h2>{t.ctaTitle}</h2>
        <p>{t.ctaSubtitle}</p>
        <div className="ship-cta-buttons">
          <a href="#" className="ship-cta-btn">
            <span></span>
            <div>
              <small>{language === 'zh' ? '下载自' : language === 'it' ? 'Scarica da' : 'Download on'}</small>
              <strong>App Store</strong>
            </div>
          </a>
          <a href="#" className="ship-cta-btn">
            <span>🤖</span>
            <div>
              <small>{language === 'zh' ? '下载自' : language === 'it' ? 'Disponibile su' : 'Get it on'}</small>
              <strong>Google Play</strong>
            </div>
          </a>
        </div>
        <div className="ship-cta-qr">
          <div className="ship-qr-code">📱</div>
          <p>{language === 'zh' ? '扫码下载' : language === 'it' ? 'Scansiona per scaricare' : 'Scan to download'}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="ship-footer">
        <div className="ship-footer-content">
          <div className="ship-footer-brand">
            <div className="ship-footer-logo">🚢 DragonShip</div>
            <p>{language === 'zh' ? '龙运物流 - 国际包裹追踪专家' : language === 'it' ? 'Esperti in tracciamento pacchi internazionali' : 'International Package Tracking Experts'}</p>
          </div>

          <div className="ship-footer-links">
            <h4>{language === 'zh' ? '快速链接' : language === 'it' ? 'Link Rapidi' : 'Quick Links'}</h4>
            <a href="#features">{t.features.title}</a>
            <a href="#carriers">{t.carriers.title}</a>
            <a href="#faq">{t.faq.title}</a>
            <a href="#download">{t.cta}</a>
          </div>

          <div className="ship-footer-contact">
            <h4>{language === 'zh' ? '联系我们' : language === 'it' ? 'Contatti' : 'Contact'}</h4>
            <p>📧 support@dragonship.app</p>
            <p>📱 WeChat: DragonShipApp</p>
          </div>
        </div>

        <div className="ship-footer-bottom">
          <p>© 2024 DragonShip - {language === 'zh' ? '龙运物流' : 'International Logistics'}</p>
          <a href="/portfolio/dragon-ship" className="ship-back">← {t.back}</a>
        </div>
      </footer>
    </div>
  )
}

export default DragonShip

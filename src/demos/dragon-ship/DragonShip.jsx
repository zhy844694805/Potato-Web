import { useState } from 'react'
import { translations, stats, trackingTimeline, samplePackages } from './data/tracking-data'
import './DragonShip.css'

function DragonShip() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  return (
    <div className="ship-showcase">
      {/* Header */}
      <header className="ship-header">
        <div className="ship-logo">
          <span>🚢</span>
          <span>DragonShip</span>
        </div>
        <div className="ship-lang">
          {['it', 'en', 'zh'].map(lang => (
            <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
              {lang === 'zh' ? '中' : lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="ship-hero">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <p className="description">{t.description}</p>
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
                    <h3>📦 {language === 'zh' ? '包裹追踪' : 'Track Package'}</h3>
                  </div>
                  <div className="ship-track-search">
                    <span>🔍</span>
                    <input type="text" defaultValue="SF1234567890" readOnly />
                  </div>
                  <div className="ship-track-card">
                    <div className="ship-track-card-header">
                      <span className="ship-track-id">SF1234567890</span>
                      <span className="ship-track-status">{language === 'zh' ? '已送达' : 'Delivered'}</span>
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
                      {language === 'zh' ? '配送完成 · 用时8天' : 'Delivered · 8 days'}
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
                        <div className="ship-timeline-desc">{item.desc}</div>
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
                    📦 {language === 'zh' ? '我的包裹' : 'My Packages'} (3)
                  </div>
                  {samplePackages.map((pkg, index) => (
                    <div key={index} className="ship-package-card">
                      <div className="ship-package-top">
                        <span className="ship-package-id">{pkg.id}</span>
                        <span className={`ship-package-badge ${pkg.status}`}>
                          {pkg.status === 'delivered' ? (language === 'zh' ? '已送达' : 'Delivered') :
                           pkg.status === 'transit' ? (language === 'zh' ? '运输中' : 'In Transit') :
                           (language === 'zh' ? '清关中' : 'Customs')}
                        </span>
                      </div>
                      <div className="ship-package-info">
                        <span>{pkg.carrier}</span>
                        <span>{pkg.eta}</span>
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
                    🔔 {language === 'zh' ? '消息通知' : 'Notifications'}
                  </div>
                  <div className="ship-notif-item">
                    <div className="ship-notif-icon success">✅</div>
                    <div className="ship-notif-content">
                      <h4>{language === 'zh' ? '包裹已送达' : 'Package Delivered'}</h4>
                      <p>SF1234567890 · {language === 'zh' ? '2分钟前' : '2 min ago'}</p>
                    </div>
                  </div>
                  <div className="ship-notif-item">
                    <div className="ship-notif-icon info">🚚</div>
                    <div className="ship-notif-content">
                      <h4>{language === 'zh' ? '包裹派送中' : 'Out for Delivery'}</h4>
                      <p>YT9876543210 · {language === 'zh' ? '1小时前' : '1 hour ago'}</p>
                    </div>
                  </div>
                  <div className="ship-notif-item">
                    <div className="ship-notif-icon warning">📋</div>
                    <div className="ship-notif-content">
                      <h4>{language === 'zh' ? '清关处理中' : 'Customs Processing'}</h4>
                      <p>ZTO456789012 · {language === 'zh' ? '昨天' : 'Yesterday'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ship-phone-label">{t.screens.list[3]}</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="ship-features">
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

      {/* CTA */}
      <section className="ship-cta">
        <div className="ship-cta-buttons">
          <a href="#" className="ship-cta-btn">
            <span></span>
            <span>App Store</span>
          </a>
          <a href="#" className="ship-cta-btn">
            <span>🤖</span>
            <span>Google Play</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="ship-footer">
        <p>© 2024 DragonShip - {language === 'zh' ? '龙运物流' : 'International Logistics'}</p>
        <a href="/portfolio/dragon-ship" className="ship-back">← {t.back}</a>
      </footer>
    </div>
  )
}

export default DragonShip

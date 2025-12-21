import { useState } from 'react'
import { translations, appScreens, stats } from './data/showcase-data'
import './BeautyBook.css'

function BeautyBook() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

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
        <div className="beauty-logo">
          <span>💅</span>
          <span>BellaBook</span>
        </div>
        <div className="beauty-lang">
          {['it', 'en', 'zh'].map(lang => (
            <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
              {lang === 'zh' ? '中' : lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="beauty-hero">
        <h1>{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
        <p className="description">{t.description}</p>
      </section>

      {/* Stats */}
      <section className="beauty-stats">
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
      </section>

      {/* Phone Mockups */}
      <section className="beauty-phones">
        <h2 className="beauty-phones-title">{t.screens.title}</h2>
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

      {/* Features */}
      <section className="beauty-features">
        <div className="beauty-features-inner">
          <h2>{t.features.title}</h2>
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

      {/* CTA */}
      <section className="beauty-cta">
        <a href="/contact" className="beauty-cta-btn">{t.cta}</a>
      </section>

      {/* Footer */}
      <footer className="beauty-footer">
        <p>© 2024 BellaBook Mini Program</p>
        <a href="/portfolio/beauty-book" className="beauty-back">← {t.back}</a>
      </footer>
    </div>
  )
}

export default BeautyBook

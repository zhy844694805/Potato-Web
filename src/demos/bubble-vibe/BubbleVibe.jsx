import { useState } from 'react'
import './BubbleVibe.css'

function BubbleVibe() {
  const [language, setLanguage] = useState('it')

  // Trilingual content
  const content = {
    hero: {
      it: { title: 'BUBBLE VIBE', subtitle: 'Milano', tagline: 'L\'Arte del Bubble Tea', cta: 'Scopri il Menu' },
      en: { title: 'BUBBLE VIBE', subtitle: 'Milan', tagline: 'The Art of Bubble Tea', cta: 'Discover Menu' },
      zh: { title: 'BUBBLE VIBE', subtitle: '米兰', tagline: '珍珠茶艺术', cta: '探索菜单' }
    },
    stats: [
      { value: '50+', label: { it: 'Creazioni Uniche', en: 'Unique Creations', zh: '独特饮品' } },
      { value: '100%', label: { it: 'Ingredienti Naturali', en: 'Natural Ingredients', zh: '天然原料' } },
      { value: '∞', label: { it: 'Vibes Positivi', en: 'Good Vibes', zh: '美好氛围' } }
    ],
    menu: {
      title: { it: 'I Nostri Bestseller', en: 'Our Bestsellers', zh: '热销推荐' },
      items: [
        {
          name: { it: 'Taro Dream', en: 'Taro Dream', zh: '香芋梦境' },
          desc: { it: 'Taro fresco, latte di avena, perle di tapioca', en: 'Fresh taro, oat milk, tapioca pearls', zh: '新鲜香芋，燕麦奶，珍珠' },
          price: '€6.50',
          color: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
          tag: 'BESTSELLER'
        },
        {
          name: { it: 'Matcha Vibes', en: 'Matcha Vibes', zh: '抹茶风情' },
          desc: { it: 'Matcha Kyoto, panna, boba casa', en: 'Kyoto matcha, cream, house boba', zh: '京都抹茶，奶油，自制波霸' },
          price: '€7.00',
          color: 'linear-gradient(135deg, #27ae60, #2ecc71)',
          tag: 'NEW'
        },
        {
          name: { it: 'Peach Paradise', en: 'Peach Paradise', zh: '蜜桃天堂' },
          desc: { it: 'Pesca fresca, tè verde, jelly di cocco', en: 'Fresh peach, green tea, coconut jelly', zh: '新鲜蜜桃，绿茶，椰果' },
          price: '€6.00',
          color: 'linear-gradient(135deg, #f39c12, #e74c3c)',
          tag: 'REFRESHING'
        },
        {
          name: { it: 'Mango Fusion', en: 'Mango Fusion', zh: '芒果融合' },
          desc: { it: 'Mango alphonso, latte di cocco, popping boba', en: 'Alphonso mango, coconut milk, popping boba', zh: '阿方索芒果，椰奶，爆爆珠' },
          price: '€7.50',
          color: 'linear-gradient(135deg, #f1c40f, #f39c12)',
          tag: 'TRENDING'
        },
        {
          name: { it: 'Berry Bliss', en: 'Berry Bliss', zh: '浆果极乐' },
          desc: { it: 'Mix di frutti di bosco, yogurt greco, granola', en: 'Mixed berries, Greek yogurt, granola', zh: '混合浆果，希腊酸奶，格兰诺拉' },
          price: '€7.00',
          color: 'linear-gradient(135deg, #e74c3c, #c0392b)',
          tag: 'HEALTHY'
        },
        {
          name: { it: 'Classic Milk Tea', en: 'Classic Milk Tea', zh: '经典奶茶' },
          desc: { it: 'Tè nero Ceylon, latte fresco, boba 5H', en: 'Ceylon black tea, fresh milk, 5H boba', zh: '锡兰红茶，鲜奶，5小时波霸' },
          price: '€5.50',
          color: 'linear-gradient(135deg, #5d4e37, #8b7355)',
          tag: 'CLASSIC'
        }
      ]
    },
    features: [
      { icon: '🌿', title: { it: 'Bio & Vegano', en: 'Organic & Vegan', zh: '有机纯素' } },
      { icon: '🫧', title: { it: 'Boba Fatto in Casa', en: 'House-Made Boba', zh: '自制波霸' } },
      { icon: '🎨', title: { it: 'Design Unico', en: 'Unique Design', zh: '独特设计' } },
      { icon: '💜', title: { it: 'Vibe Italiano', en: 'Italian Vibe', zh: '意式风情' } }
    ],
    locations: {
      title: { it: 'Dove Trovarci', en: 'Find Us', zh: '找到我们' },
      spots: [
        { area: { it: 'Duomo', en: 'Duomo', zh: '大教堂' }, address: 'Via Torino 15', vibe: '♥️♥️♥️♥️♥️' },
        { area: { it: 'Brera', en: 'Brera', zh: '布雷拉' }, address: 'Via Brera 28', vibe: '♥️♥️♥️♥️♥️' },
        { area: { it: 'Navigli', en: 'Navigli', zh: '运河区' }, address: 'Via Vigevano 10', vibe: '♥️♥️♥️♥️♥️' }
      ]
    },
    social: {
      title: { it: 'Seguici su', en: 'Follow Us', zh: '关注我们' },
      instagram: '@bubblevibe.milano',
      tiktok: '@bubblevibe_official'
    }
  }

  const t = (obj) => obj[language] || obj.it

  return (
    <div className="bv-app">
      {/* Floating Decorations */}
      <div className="bv-float-bubbles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bv-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Language Toggle */}
      <div className="bv-lang-toggle">
        {['IT', 'EN', 'ZH'].map(lang => (
          <button
            key={lang}
            className={language === lang.toLowerCase() ? 'active' : ''}
            onClick={() => setLanguage(lang.toLowerCase())}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="bv-hero">
        <div className="bv-hero-content">
          <div className="bv-hero-badge">🫧 MILANO 2024</div>
          <h1 className="bv-hero-title">
            <span className="bv-title-main">{t(content.hero.title)}</span>
            <span className="bv-title-sub">{t(content.hero.subtitle)}</span>
          </h1>
          <p className="bv-hero-tagline">{t(content.hero.tagline)}</p>
          <button className="bv-cta-btn">
            {t(content.hero.cta)}
            <span className="bv-btn-glow"></span>
          </button>
        </div>

        {/* 3D Tea Cup Visual */}
        <div className="bv-hero-visual">
          <div className="bv-tea-cup">
            <div className="bv-cup-body">
              <div className="bv-liquid">
                <div className="bv-liquid-wave"></div>
              </div>
              <div className="bv-boba">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bv-boba-pearl" style={{
                    left: `${20 + i * 10}%`,
                    animationDelay: `${i * 0.1}s`
                  }} />
                ))}
              </div>
            </div>
            <div className="bv-cup-handle"></div>
            <div className="bv-straw"></div>
            <div className="bv-steam">
              {[...Array(3)].map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.3}s` }}>~</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bv-stats">
        {content.stats.map((stat, i) => (
          <div key={i} className="bv-stat-card">
            <span className="bv-stat-value">{stat.value}</span>
            <span className="bv-stat-label">{t(stat.label)}</span>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section className="bv-menu">
        <h2 className="bv-section-title">
          <span className="bv-title-glow">{t(content.menu.title)}</span>
        </h2>

        <div className="bv-menu-grid">
          {content.menu.items.map((item, i) => (
            <div key={i} className="bv-drink-card">
              <div className="bv-card-glow" style={{ background: item.color }}></div>
              <div className="bv-card-inner">
                <span className="bv-drink-tag" style={{ background: item.color }}>
                  {item.tag}
                </span>
                <div className="bv-drink-visual" style={{ background: item.color }}>
                  <span className="bv-drink-emoji">🧋</span>
                </div>
                <h3 className="bv-drink-name">{t(item.name)}</h3>
                <p className="bv-drink-desc">{t(item.desc)}</p>
                <span className="bv-drink-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bv-features">
        <div className="bv-features-grid">
          {content.features.map((feature, i) => (
            <div key={i} className="bv-feature-card">
              <span className="bv-feature-icon">{feature.icon}</span>
              <span className="bv-feature-text">{t(feature.title)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section className="bv-locations">
        <h2 className="bv-section-title">{t(content.locations.title)}</h2>
        <div className="bv-locations-grid">
          {content.locations.spots.map((spot, i) => (
            <div key={i} className="bv-location-card">
              <span className="bv-location-vibe">{spot.vibe}</span>
              <h3>{t(spot.area)}</h3>
              <p>{spot.address}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section className="bv-social">
        <div className="bv-social-content">
          <span className="bv-social-icon">💜</span>
          <h2>{t(content.social.title)}</h2>
          <p className="bv-social-handle">{content.social.instagram}</p>
          <p className="bv-social-handle">{content.social.tiktok}</p>
          <button className="bv-social-btn">
            #BubbleVibeMilano
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bv-footer">
        <div className="bv-footer-logo">
          <span>BUBBLE VIBE</span>
          <span>MILANO</span>
        </div>
        <p className="bv-footer-tagline">L'Arte del Bubble Tea • Made with 💜 in Milano</p>
      </footer>
    </div>
  )
}

export default BubbleVibe

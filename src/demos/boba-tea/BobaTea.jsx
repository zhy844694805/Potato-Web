import { useState } from 'react'
import { restaurantInfo, categories, drinks, toppings, promotions, navigation } from './data/drinks-data'
import './BobaTea.css'

function BobaTea() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('signature')
  const [cartCount, setCartCount] = useState(0)

  const t = (obj) => obj[language] || obj.en

  const filteredDrinks = drinks.filter(drink => drink.category === activeCategory)

  const addToCart = (e) => {
    e.stopPropagation()
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="boba-app">
      {/* Header */}
      <header className="boba-header">
        <div className="boba-logo">BOBA DREAM</div>
        <nav className="boba-nav">
          <a href="#menu">{t(navigation.menu)}</a>
          <a href="#about">{t(navigation.about)}</a>
          <a href="#contact">{t(navigation.locations)}</a>
          <div className="boba-lang-toggle">
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
        </nav>
      </header>

      {/* Hero Section */}
      <section className="boba-hero">
        <h1>{restaurantInfo.name}</h1>
        <p className="tagline">{t(restaurantInfo.tagline)}</p>
        <div className="boba-hero-cta">
          <a href="#menu" className="boba-btn boba-btn-primary">
            {t(navigation.order)}
          </a>
          <a href="#about" className="boba-btn boba-btn-secondary">
            {t(navigation.about)}
          </a>
        </div>
      </section>

      {/* Promotions */}
      <section className="boba-promo">
        {promotions.map(promo => (
          <div key={promo.id} className="boba-promo-card">
            <h3>{t(promo.title)}</h3>
            <p>{t(promo.description)}</p>
            <span className="boba-promo-code">{promo.code}</span>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section id="menu" className="boba-menu">
        <h2 className="boba-menu-title">{t(navigation.menu)}</h2>

        {/* Category Filter */}
        <div className="boba-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`boba-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="boba-drinks-grid">
          {filteredDrinks.map(drink => (
            <div key={drink.id} className={`boba-drink-card ${drink.popular ? 'popular' : ''}`}>
              <img src={drink.image} alt={t(drink.name)} className="boba-drink-image" />
              <div className="boba-drink-info">
                <h3 className="boba-drink-name">{t(drink.name)}</h3>
                <p className="boba-drink-desc">{t(drink.description)}</p>
                <div className="boba-drink-footer">
                  <span className="boba-drink-price">&euro;{drink.price}</span>
                  <button className="boba-add-btn" onClick={addToCart}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toppings Section */}
      <section className="boba-toppings">
        <h2 className="boba-toppings-title">
          {language === 'zh' ? '加料' : language === 'it' ? 'Aggiungi Topping' : 'Add Toppings'}
        </h2>
        <div className="boba-toppings-grid">
          {toppings.map(topping => (
            <div key={topping.id} className="boba-topping-item">
              <div className="boba-topping-name">{t(topping.name)}</div>
              <div className="boba-topping-price">+&euro;{topping.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="boba-about">
        <h2>{language === 'zh' ? '关于我们' : language === 'it' ? 'Chi Siamo' : 'About Us'}</h2>
        <p>{t(restaurantInfo.description)}</p>

        <div className="boba-features">
          <div className="boba-feature">
            <div className="boba-feature-icon">🧋</div>
            <h3>{language === 'zh' ? '新鲜珍珠' : language === 'it' ? 'Boba Fresco' : 'Fresh Boba'}</h3>
            <p>{language === 'zh' ? '每日现煮' : language === 'it' ? 'Fatto ogni giorno' : 'Made daily'}</p>
          </div>
          <div className="boba-feature">
            <div className="boba-feature-icon">🍃</div>
            <h3>{language === 'zh' ? '天然食材' : language === 'it' ? 'Ingredienti Naturali' : 'Natural Ingredients'}</h3>
            <p>{language === 'zh' ? '无人工添加' : language === 'it' ? 'Senza additivi' : 'No additives'}</p>
          </div>
          <div className="boba-feature">
            <div className="boba-feature-icon">💜</div>
            <h3>{language === 'zh' ? '用心制作' : language === 'it' ? 'Fatto con Amore' : 'Made with Love'}</h3>
            <p>{language === 'zh' ? '每一杯都是艺术' : language === 'it' ? 'Ogni tazza è arte' : 'Every cup is art'}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="boba-footer">
        <div className="boba-footer-content">
          <h3>{restaurantInfo.name}</h3>
          <div className="boba-footer-info">
            <span>{restaurantInfo.address}</span>
            <span>{restaurantInfo.phone}</span>
            <span>{t(restaurantInfo.hours)}</span>
          </div>
          <div className="boba-social">
            <a href="#" title="Instagram">IG</a>
            <a href="#" title="TikTok">TT</a>
            <a href="#" title="WeChat">WC</a>
          </div>
          <p className="boba-copyright">
            &copy; 2024 {restaurantInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="boba-cart">
          🛒
          <span className="boba-cart-count">{cartCount}</span>
        </div>
      )}
    </div>
  )
}

export default BobaTea

import { useState } from 'react'
import { restaurantInfo, categories, dishes, lunchMenu, navigation } from './data/restaurant-data'
import './MamaChen.css'

function MamaChen() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('appetizer')

  const t = (obj) => obj[language] || obj.en

  const filteredDishes = dishes.filter(dish => dish.category === activeCategory)

  return (
    <div className="mama-app">
      {/* Header */}
      <header className="mama-header">
        <div className="mama-logo">
          <span className="mama-logo-text">MAMA CHEN</span>
          <span className="mama-logo-subtitle">{t(restaurantInfo.subtitle)}</span>
        </div>
        <nav className="mama-nav">
          <a href="#menu">{t(navigation.menu)}</a>
          <a href="#lunch">{t(navigation.lunch)}</a>
          <a href="#reservation">{t(navigation.reservation)}</a>
          <a href="#contact">{t(navigation.contact)}</a>
          <div className="mama-lang-select">
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
      <section className="mama-hero">
        <div className="mama-hero-content">
          <h1>{restaurantInfo.name}</h1>
          <p className="subtitle">{t(restaurantInfo.subtitle)}</p>
          <p className="description">{t(restaurantInfo.description)}</p>
          <div className="mama-hero-btns">
            <a href="#menu" className="mama-btn mama-btn-primary">{t(navigation.menu)}</a>
            <a href="#reservation" className="mama-btn mama-btn-secondary">{t(navigation.reservation)}</a>
          </div>
        </div>
      </section>

      {/* Lunch Special Banner */}
      <section id="lunch" className="mama-lunch-banner">
        <h3>{t(lunchMenu.title)}</h3>
        <p>{t(lunchMenu.includes)}</p>
        <p className="mama-lunch-price">&euro;{lunchMenu.price}</p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="mama-menu">
        <h2 className="mama-section-title">{t(navigation.menu)}</h2>

        {/* Category Tabs */}
        <div className="mama-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`mama-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="mama-category-icon">{cat.icon}</span>
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Dishes Grid */}
        <div className="mama-dishes-grid">
          {filteredDishes.map(dish => (
            <div key={dish.id} className={`mama-dish-card ${dish.popular ? 'popular' : ''}`}>
              <div className="mama-dish-header">
                <h3 className="mama-dish-name">
                  {t(dish.name)}
                  {dish.spicy && <span className="mama-spicy-icon">🌶️</span>}
                </h3>
                <span className="mama-dish-price">&euro;{dish.price}</span>
              </div>
              <p className="mama-dish-desc">{t(dish.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Reservation Section */}
      <section id="contact" className="mama-contact">
        <div className="mama-contact-grid">
          {/* Contact Info */}
          <div className="mama-contact-info">
            <h3>{t(navigation.contact)}</h3>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">📍</span>
              <span>{restaurantInfo.address}</span>
            </div>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">📞</span>
              <span>{restaurantInfo.phone}</span>
            </div>
            <div className="mama-contact-item">
              <span className="mama-contact-icon">🕐</span>
              <div>
                <div>{t(restaurantInfo.hours.lunch)}</div>
                <div>{t(restaurantInfo.hours.dinner)}</div>
                <div style={{ color: '#d4af37' }}>{t(restaurantInfo.closedDay)}</div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div id="reservation" className="mama-reservation">
            <h3>{t(navigation.reservation)}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mama-form-group">
                <input
                  type="text"
                  placeholder={language === 'zh' ? '姓名' : language === 'it' ? 'Nome' : 'Name'}
                />
              </div>
              <div className="mama-form-group">
                <input
                  type="tel"
                  placeholder={language === 'zh' ? '电话' : language === 'it' ? 'Telefono' : 'Phone'}
                />
              </div>
              <div className="mama-form-row">
                <div className="mama-form-group">
                  <input type="date" />
                </div>
                <div className="mama-form-group">
                  <select defaultValue="">
                    <option value="" disabled>
                      {language === 'zh' ? '时间' : language === 'it' ? 'Ora' : 'Time'}
                    </option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>
              <div className="mama-form-group">
                <select defaultValue="">
                  <option value="" disabled>
                    {language === 'zh' ? '人数' : language === 'it' ? 'Persone' : 'Guests'}
                  </option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {language === 'zh' ? '人' : ''}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="mama-submit-btn">
                {language === 'zh' ? '确认预约' : language === 'it' ? 'Conferma' : 'Confirm Reservation'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mama-footer">
        <div className="mama-footer-logo">MAMA CHEN</div>
        <div className="mama-social-links">
          <a href="#">WeChat</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
        <p className="mama-copyright">
          &copy; 2024 Mama Chen. {language === 'zh' ? '版权所有' : 'All rights reserved.'}
        </p>
      </footer>
    </div>
  )
}

export default MamaChen

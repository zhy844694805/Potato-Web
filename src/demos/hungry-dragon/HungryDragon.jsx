import { useState } from 'react'
import { translations, restaurantInfo, menuItems, categories } from './data/food-data'
import './HungryDragon.css'

function HungryDragon() {
  const [language, setLanguage] = useState('en')
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState('home') // home, cart, checkout
  const [showSuccess, setShowSuccess] = useState(false)
  const [checkoutData, setCheckoutData] = useState({ address: '', phone: '', notes: '' })
  const t = translations[language]

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id)
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c))
    } else {
      setCart([...cart, { ...item, qty: 1 }])
    }
  }

  const updateQty = (id, delta) => {
    setCart(cart.map(c => {
      if (c.id === id) {
        const newQty = c.qty + delta
        return newQty > 0 ? { ...c, qty: newQty } : null
      }
      return c
    }).filter(Boolean))
  }

  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.qty, 0)
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0)

  const handleCheckout = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setCart([])
      setCheckoutData({ address: '', phone: '', notes: '' })
      setCurrentPage('home')
    }, 3000)
  }

  return (
    <div className="hungry-app">
      {/* Header */}
      <header className="hungry-header">
        <div className="hungry-header-inner">
          <div className="hungry-logo">
            <span>🐉</span>
            <span>{t.appName}</span>
          </div>
          <div className="hungry-lang">
            {['it', 'en', 'zh'].map(lang => (
              <button key={lang} onClick={() => setLanguage(lang)} className={language === lang ? 'active' : ''}>
                {lang === 'zh' ? '中' : lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Home Page */}
      {currentPage === 'home' && (
        <>
          <div className="hungry-hero">
            <h1>{t.hero.title}</h1>
            <p>{t.hero.subtitle}</p>
            <div className="hungry-info-bar">
              <span>⭐ {restaurantInfo.rating}</span>
              <span>🕐 {restaurantInfo.deliveryTime}</span>
              <span>🛵 €{restaurantInfo.deliveryFee.toFixed(2)}</span>
            </div>
          </div>

          <div className="hungry-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`hungry-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t.categories[cat]}
              </button>
            ))}
          </div>

          <div className="hungry-menu">
            <div className="hungry-menu-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="hungry-item">
                  <img src={item.image} alt={item.name[language]} className="hungry-item-img" />
                  <div className="hungry-item-content">
                    <div>
                      <h3>{item.name[language]}</h3>
                      <p>{item.desc[language]}</p>
                      <div className="hungry-item-tags">
                        {item.tags.includes('spicy') && <span className="hungry-tag spicy">{t.item.spicy}</span>}
                        {item.tags.includes('vegetarian') && <span className="hungry-tag vegetarian">{t.item.vegetarian}</span>}
                      </div>
                    </div>
                    <div className="hungry-item-footer">
                      <span className="hungry-price">€{item.price.toFixed(2)}</span>
                      <button className="hungry-add-btn" onClick={() => addToCart(item)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Cart Page */}
      {currentPage === 'cart' && (
        <div className="hungry-cart-page">
          <h2>{t.cart.title}</h2>
          {cart.length === 0 ? (
            <div className="hungry-cart-empty">
              <span>🛒</span>
              <p>{t.cart.empty}</p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="hungry-cart-item">
                  <img src={item.image} alt={item.name[language]} />
                  <div className="hungry-cart-item-info">
                    <h4>{item.name[language]}</h4>
                    <p>€{(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <div className="hungry-qty-control">
                    <button className="hungry-qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span className="hungry-qty">{item.qty}</span>
                    <button className="hungry-qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
              <div className="hungry-cart-summary">
                <div className="hungry-summary-row">
                  <span>Subtotale</span>
                  <span>€{cartTotal.toFixed(2)}</span>
                </div>
                <div className="hungry-summary-row">
                  <span>{t.cart.deliveryFee}</span>
                  <span>€{restaurantInfo.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="hungry-summary-row total">
                  <span>{t.cart.total}</span>
                  <span>€{(cartTotal + restaurantInfo.deliveryFee).toFixed(2)}</span>
                </div>
                <button
                  className="hungry-checkout-btn"
                  onClick={() => setCurrentPage('checkout')}
                  disabled={cartTotal < restaurantInfo.minOrder}
                >
                  {t.cart.checkout}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Checkout Page */}
      {currentPage === 'checkout' && (
        <div className="hungry-checkout-page">
          <h2>{t.checkout.title}</h2>
          <form onSubmit={handleCheckout}>
            <div className="hungry-form-group">
              <label>{t.checkout.address}</label>
              <input
                type="text"
                value={checkoutData.address}
                onChange={e => setCheckoutData({...checkoutData, address: e.target.value})}
                placeholder="Via Roma 123, Milano"
                required
              />
            </div>
            <div className="hungry-form-group">
              <label>{t.checkout.phone}</label>
              <input
                type="tel"
                value={checkoutData.phone}
                onChange={e => setCheckoutData({...checkoutData, phone: e.target.value})}
                placeholder="+39 333 123 4567"
                required
              />
            </div>
            <div className="hungry-form-group">
              <label>{t.checkout.notes}</label>
              <textarea
                value={checkoutData.notes}
                onChange={e => setCheckoutData({...checkoutData, notes: e.target.value})}
                placeholder={language === 'zh' ? '如：不要辣、门铃坏了请打电话' : 'e.g., No spicy, call on arrival'}
              />
            </div>
            <div className="hungry-order-summary">
              <h3>{t.cart.title}</h3>
              {cart.map(item => (
                <div key={item.id} className="hungry-order-item">
                  <span>{item.qty}x {item.name[language]}</span>
                  <span>€{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              <div className="hungry-order-item" style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #ddd', fontWeight: 600 }}>
                <span>{t.cart.total}</span>
                <span>€{(cartTotal + restaurantInfo.deliveryFee).toFixed(2)}</span>
              </div>
            </div>
            <button type="submit" className="hungry-confirm-btn">{t.checkout.confirm}</button>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="hungry-success-modal">
          <div className="hungry-success-content">
            <span>✅</span>
            <h3>{t.checkout.success}</h3>
            <p>{restaurantInfo.deliveryTime}</p>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="hungry-bottom-nav">
        <button className={`hungry-nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>
          <span>🏠</span>
          <span>{t.nav.home}</span>
        </button>
        <button className={`hungry-nav-item ${currentPage === 'cart' ? 'active' : ''}`} onClick={() => setCurrentPage('cart')}>
          <span>🛒</span>
          <span>{t.nav.cart}</span>
          {cartCount > 0 && <span className="hungry-cart-badge">{cartCount}</span>}
        </button>
        <button className="hungry-nav-item">
          <span>📋</span>
          <span>{t.nav.orders}</span>
        </button>
      </nav>

      {/* Back Link */}
      <a href="/portfolio/hungry-dragon" className="hungry-back">
        ← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
      </a>
    </div>
  )
}

export default HungryDragon

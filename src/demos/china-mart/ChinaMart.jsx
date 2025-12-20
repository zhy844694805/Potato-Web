import { useState } from 'react'
import { translations, shopInfo, products, categories } from './data/shop-data'
import './ChinaMart.css'

function ChinaMart() {
  const [language, setLanguage] = useState('zh')
  const [activeCategory, setActiveCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [currentPage, setCurrentPage] = useState('home')
  const [deliveryType, setDeliveryType] = useState('delivery')
  const [showSuccess, setShowSuccess] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const t = translations[language]

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    const matchesSearch = searchQuery === '' ||
      p.name[language].toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product) => {
    if (!product.inStock) return
    const existing = cart.find(c => c.id === product.id)
    if (existing) {
      setCart(cart.map(c => c.id === product.id ? { ...c, qty: c.qty + 1 } : c))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
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
  const deliveryFee = cartTotal >= shopInfo.freeDeliveryMin ? 0 : shopInfo.deliveryFee

  const handleCheckout = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setCart([])
      setCurrentPage('home')
    }, 3000)
  }

  return (
    <div className="mart-app">
      {/* Header */}
      <header className="mart-header">
        <div className="mart-header-inner">
          <div className="mart-logo">
            <span>🛒</span>
            <span>{t.appName}</span>
          </div>
          <div className="mart-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mart-lang">
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
          <div className="mart-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`mart-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {t.categories[cat]}
              </button>
            ))}
          </div>

          <div className="mart-products">
            <div className="mart-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className={`mart-product ${!product.inStock ? 'out-of-stock' : ''}`}>
                  <img src={product.image} alt={product.name[language]} className="mart-product-img" />
                  {!product.inStock && <span className="mart-out-badge">{t.product.outOfStock}</span>}
                  <div className="mart-product-info">
                    <h3>{product.name[language]}</h3>
                    <div className="mart-product-footer">
                      <span className="mart-price">€{product.price.toFixed(2)}</span>
                      <button
                        className="mart-add-btn"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                      >
                        +
                      </button>
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
        <div className="mart-cart-page">
          <h2>{t.cart.title}</h2>
          {cart.length === 0 ? (
            <div className="mart-cart-empty">
              <span>🛒</span>
              <p>{t.cart.empty}</p>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="mart-cart-item">
                  <img src={item.image} alt={item.name[language]} />
                  <div className="mart-cart-item-info">
                    <h4>{item.name[language]}</h4>
                    <p>€{(item.price * item.qty).toFixed(2)}</p>
                  </div>
                  <div className="mart-qty-control">
                    <button className="mart-qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span className="mart-qty">{item.qty}</span>
                    <button className="mart-qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
              <div className="mart-cart-summary">
                <div className="mart-summary-left">
                  <span className="mart-summary-total">€{(cartTotal + deliveryFee).toFixed(2)}</span>
                  {deliveryFee > 0 && (
                    <span className="mart-summary-delivery">+€{deliveryFee.toFixed(2)} {t.checkout.delivery}</span>
                  )}
                </div>
                <button
                  className="mart-checkout-btn"
                  onClick={() => setCurrentPage('checkout')}
                  disabled={cartTotal < shopInfo.minOrder}
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
        <div className="mart-checkout-page">
          <h2>{t.checkout.title}</h2>
          <div className="mart-delivery-options">
            <div
              className={`mart-delivery-option ${deliveryType === 'delivery' ? 'active' : ''}`}
              onClick={() => setDeliveryType('delivery')}
            >
              <span>🚗</span>
              <span>{t.checkout.delivery}</span>
            </div>
            <div
              className={`mart-delivery-option ${deliveryType === 'pickup' ? 'active' : ''}`}
              onClick={() => setDeliveryType('pickup')}
            >
              <span>🏪</span>
              <span>{t.checkout.pickup}</span>
            </div>
          </div>

          <form onSubmit={handleCheckout}>
            {deliveryType === 'delivery' && (
              <div className="mart-form-group">
                <label>{t.checkout.address}</label>
                <input type="text" placeholder="Via Roma 123, Milano" required />
              </div>
            )}
            <div className="mart-form-group">
              <label>Telefono</label>
              <input type="tel" placeholder="+39 333 123 4567" required />
            </div>

            <div className="mart-order-summary">
              <h3>{t.cart.title}</h3>
              {cart.map(item => (
                <div key={item.id} className="mart-order-item">
                  <span>{item.qty}x {item.name[language]}</span>
                  <span>€{(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
              {deliveryType === 'delivery' && deliveryFee > 0 && (
                <div className="mart-order-item">
                  <span>{t.checkout.delivery}</span>
                  <span>€{deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="mart-order-item mart-order-total">
                <span>{t.cart.total}</span>
                <span>€{(cartTotal + (deliveryType === 'delivery' ? deliveryFee : 0)).toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" className="mart-confirm-btn">{t.checkout.confirm}</button>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="mart-success-modal">
          <div className="mart-success-content">
            <span>✅</span>
            <h3>{t.checkout.success}</h3>
            <p>{deliveryType === 'delivery' ? '30-45 min' : shopInfo.address}</p>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="mart-bottom-nav">
        <button className={`mart-nav-item ${currentPage === 'home' ? 'active' : ''}`} onClick={() => setCurrentPage('home')}>
          <span>🏠</span>
          <span>{t.nav.home}</span>
        </button>
        <button className={`mart-nav-item ${currentPage === 'cart' ? 'active' : ''}`} onClick={() => setCurrentPage('cart')}>
          <span>🛒</span>
          <span>{t.nav.cart}</span>
          {cartCount > 0 && <span className="mart-cart-badge">{cartCount}</span>}
        </button>
        <button className="mart-nav-item">
          <span>📋</span>
          <span>{t.nav.orders}</span>
        </button>
        <button className="mart-nav-item">
          <span>👤</span>
          <span>{t.nav.profile}</span>
        </button>
      </nav>

      {/* Back Link */}
      <a href="/portfolio/china-mart" className="mart-back">
        ← {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
      </a>
    </div>
  )
}

export default ChinaMart

import { useState, useRef } from 'react'
import {
  restaurantInfo,
  categories,
  drinks,
  toppings,
  promotions,
  translations,
  stats,
  sizes,
  iceOptions,
  sweetnessOptions,
  reviews,
  rewardTiers,
  locations,
  faqItems
} from './data/drinks-data'
import './BobaTea.css'

function BobaTea() {
  const [language, setLanguage] = useState('en')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('signature')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedDrink, setSelectedDrink] = useState(null)
  const [customization, setCustomization] = useState({
    size: 'regular',
    ice: 'regular',
    sweetness: '100',
    toppings: []
  })
  const [activeReviewIndex, setActiveReviewIndex] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)
  const cartIdCounter = useRef(0)

  const t = (obj) => obj[language] || obj.en

  const filteredDrinks = drinks.filter(drink => drink.category === activeCategory)

  // Calculate cart totals
  const cartSubtotal = cart.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0)
  const cartTax = cartSubtotal * 0.22
  const cartTotal = cartSubtotal + cartTax
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Open customization modal
  const openCustomization = (drink) => {
    setSelectedDrink(drink)
    setCustomization({
      size: 'regular',
      ice: 'regular',
      sweetness: '100',
      toppings: []
    })
  }

  // Calculate item price with customizations
  const calculateItemPrice = () => {
    if (!selectedDrink) return 0
    const sizePrice = sizes.find(s => s.id === customization.size)?.priceAdd || 0
    const toppingsPrice = customization.toppings.reduce((sum, toppingId) => {
      const topping = toppings.find(t => t.id === toppingId)
      return sum + (topping?.price || 0)
    }, 0)
    return selectedDrink.price + sizePrice + toppingsPrice
  }

  // Add to cart
  const addToCart = () => {
    if (!selectedDrink) return
    cartIdCounter.current += 1

    const newItem = {
      id: cartIdCounter.current,
      drink: selectedDrink,
      size: customization.size,
      ice: customization.ice,
      sweetness: customization.sweetness,
      toppings: customization.toppings,
      totalPrice: calculateItemPrice(),
      quantity: 1
    }

    setCart(prev => [...prev, newItem])
    setSelectedDrink(null)
  }

  // Quick add to cart (without customization)
  const quickAddToCart = (e, drink) => {
    e.stopPropagation()
    cartIdCounter.current += 1
    const newItem = {
      id: cartIdCounter.current,
      drink: drink,
      size: 'regular',
      ice: 'regular',
      sweetness: '100',
      toppings: [],
      totalPrice: drink.price,
      quantity: 1
    }
    setCart(prev => [...prev, newItem])
  }

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
  }

  // Update cart item quantity
  const updateQuantity = (itemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  // Clear cart
  const clearCart = () => {
    setCart([])
  }

  // Toggle topping selection
  const toggleTopping = (toppingId) => {
    setCustomization(prev => ({
      ...prev,
      toppings: prev.toppings.includes(toppingId)
        ? prev.toppings.filter(id => id !== toppingId)
        : [...prev.toppings, toppingId]
    }))
  }

  // Newsletter submit
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (newsletterEmail) {
      setNewsletterSubmitted(true)
      setNewsletterEmail('')
    }
  }

  // Review navigation
  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="boba-app">
      {/* Header */}
      <header className="boba-header">
        <div className="boba-logo">BOBA DREAM</div>

        <button
          className={`boba-hamburger ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`boba-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.menu)}</a>
          <a href="#rewards" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.rewards)}</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.locations)}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t(translations.nav.about)}</a>
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
        <p className="boba-tagline">{t(restaurantInfo.tagline)}</p>
        <p className="boba-subtitle">{t(translations.hero.subtitle)}</p>
        <div className="boba-hero-cta">
          <a href="#menu" className="boba-btn boba-btn-primary">
            {t(translations.hero.orderNow)}
          </a>
          <a href="#about" className="boba-btn boba-btn-secondary">
            {t(translations.hero.viewMenu)}
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="boba-stats">
        {stats.map((stat, index) => (
          <div key={index} className="boba-stat">
            <span className="boba-stat-value">{stat.value}</span>
            <span className="boba-stat-label">{t(stat.label)}</span>
          </div>
        ))}
      </section>

      {/* Promotions */}
      <section className="boba-promo">
        {promotions.map(promo => (
          <div key={promo.id} className="boba-promo-card">
            <span className="boba-promo-badge">{t(promo.badge)}</span>
            <h3>{t(promo.title)}</h3>
            <p>{t(promo.description)}</p>
            <span className="boba-promo-code">{promo.code}</span>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section id="menu" className="boba-menu">
        <h2 className="boba-section-title">{t(translations.menu.title)}</h2>

        {/* Category Filter */}
        <div className="boba-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`boba-category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="boba-category-icon">{cat.icon}</span>
              {t(cat.label)}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="boba-drinks-grid">
          {filteredDrinks.map(drink => (
            <div
              key={drink.id}
              className={`boba-drink-card ${drink.popular ? 'popular' : ''} ${drink.isNew ? 'new' : ''}`}
              onClick={() => openCustomization(drink)}
            >
              {drink.popular && <span className="boba-badge boba-badge-hot">HOT</span>}
              {drink.isNew && <span className="boba-badge boba-badge-new">{t(translations.menu.new)}</span>}
              <img src={drink.image} alt={t(drink.name)} className="boba-drink-image" />
              <div className="boba-drink-info">
                <h3 className="boba-drink-name">{t(drink.name)}</h3>
                <p className="boba-drink-desc">{t(drink.description)}</p>
                {drink.calories && (
                  <span className="boba-drink-calories">{drink.calories} kcal</span>
                )}
                <div className="boba-drink-footer">
                  <span className="boba-drink-price">&euro;{drink.price.toFixed(2)}</span>
                  <button
                    className="boba-add-btn"
                    onClick={(e) => quickAddToCart(e, drink)}
                    title={t(translations.menu.addToCart)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Toppings Section */}
      <section className="boba-toppings-section">
        <h2 className="boba-section-title">{t(translations.toppings.title)}</h2>
        <div className="boba-toppings-grid">
          {toppings.map(topping => (
            <div key={topping.id} className="boba-topping-item">
              <span className="boba-topping-icon">{topping.icon}</span>
              <div className="boba-topping-name">{t(topping.name)}</div>
              <div className="boba-topping-price">+&euro;{topping.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="boba-rewards">
        <h2 className="boba-section-title">{t(translations.rewards.title)}</h2>
        <p className="boba-rewards-subtitle">{t(translations.rewards.subtitle)}</p>

        {/* How it works */}
        <div className="boba-rewards-steps">
          <div className="boba-rewards-step">
            <div className="boba-step-icon">1</div>
            <h4>{t(translations.rewards.step1.title)}</h4>
            <p>{t(translations.rewards.step1.desc)}</p>
          </div>
          <div className="boba-rewards-step">
            <div className="boba-step-icon">2</div>
            <h4>{t(translations.rewards.step2.title)}</h4>
            <p>{t(translations.rewards.step2.desc)}</p>
          </div>
          <div className="boba-rewards-step">
            <div className="boba-step-icon">3</div>
            <h4>{t(translations.rewards.step3.title)}</h4>
            <p>{t(translations.rewards.step3.desc)}</p>
          </div>
        </div>

        {/* Tiers */}
        <div className="boba-tiers">
          {rewardTiers.map(tier => (
            <div key={tier.id} className="boba-tier-card" style={{ borderColor: tier.color }}>
              <div className="boba-tier-header" style={{ background: tier.color }}>
                <h4>{t(tier.name)}</h4>
                <span>{tier.points}+ pts</span>
              </div>
              <ul className="boba-tier-benefits">
                {t(tier.benefits).map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="boba-btn boba-btn-primary boba-rewards-btn">
          {t(translations.rewards.joinNow)}
        </button>
      </section>

      {/* Reviews Section */}
      <section className="boba-reviews">
        <h2 className="boba-section-title">{t(translations.reviews.title)}</h2>

        <div className="boba-reviews-carousel">
          <button className="boba-carousel-btn prev" onClick={prevReview}>&lt;</button>

          <div className="boba-review-card">
            <img
              src={reviews[activeReviewIndex].avatar}
              alt={reviews[activeReviewIndex].name}
              className="boba-review-avatar"
            />
            <div className="boba-review-stars">
              {'★'.repeat(reviews[activeReviewIndex].rating)}
              {'☆'.repeat(5 - reviews[activeReviewIndex].rating)}
            </div>
            <p className="boba-review-text">&ldquo;{t(reviews[activeReviewIndex].text)}&rdquo;</p>
            <p className="boba-review-author">— {reviews[activeReviewIndex].name}</p>
          </div>

          <button className="boba-carousel-btn next" onClick={nextReview}>&gt;</button>
        </div>

        <div className="boba-review-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`boba-dot ${index === activeReviewIndex ? 'active' : ''}`}
              onClick={() => setActiveReviewIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="boba-locations">
        <h2 className="boba-section-title">{t(translations.locations.title)}</h2>

        <div className="boba-locations-grid">
          {locations.map(location => (
            <div key={location.id} className={`boba-location-card ${location.isNew ? 'new' : ''}`}>
              {location.isNew && <span className="boba-location-new">NEW</span>}
              <h3>{t(location.name)}</h3>
              <p className="boba-location-address">{location.address}</p>
              <p className="boba-location-phone">{location.phone}</p>
              <div className="boba-location-hours">
                <h4>{t(translations.locations.hours)}</h4>
                <p>{t(location.hours.weekday)}</p>
                <p>{t(location.hours.weekend)}</p>
              </div>
              <div className="boba-location-features">
                {t(location.features).map((feature, index) => (
                  <span key={index} className="boba-feature-tag">{feature}</span>
                ))}
              </div>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="boba-btn boba-btn-outline"
              >
                {t(translations.locations.getDirections)}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="boba-about">
        <h2 className="boba-section-title">{t(translations.about.title)}</h2>
        <p className="boba-about-story">{t(translations.about.story)}</p>

        <div className="boba-features">
          <div className="boba-feature">
            <div className="boba-feature-icon">🧋</div>
            <h3>{t(translations.about.features.fresh.title)}</h3>
            <p>{t(translations.about.features.fresh.desc)}</p>
          </div>
          <div className="boba-feature">
            <div className="boba-feature-icon">🍃</div>
            <h3>{t(translations.about.features.natural.title)}</h3>
            <p>{t(translations.about.features.natural.desc)}</p>
          </div>
          <div className="boba-feature">
            <div className="boba-feature-icon">💜</div>
            <h3>{t(translations.about.features.love.title)}</h3>
            <p>{t(translations.about.features.love.desc)}</p>
          </div>
          <div className="boba-feature">
            <div className="boba-feature-icon">♻️</div>
            <h3>{t(translations.about.features.sustainable.title)}</h3>
            <p>{t(translations.about.features.sustainable.desc)}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="boba-faq">
        <h2 className="boba-section-title">{t(translations.faq.title)}</h2>

        <div className="boba-faq-list">
          {faqItems.map(item => (
            <div
              key={item.id}
              className={`boba-faq-item ${expandedFaq === item.id ? 'expanded' : ''}`}
            >
              <button
                className="boba-faq-question"
                onClick={() => setExpandedFaq(expandedFaq === item.id ? null : item.id)}
              >
                <span>{t(item.question)}</span>
                <span className="boba-faq-icon">{expandedFaq === item.id ? '−' : '+'}</span>
              </button>
              {expandedFaq === item.id && (
                <div className="boba-faq-answer">
                  <p>{t(item.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="boba-newsletter">
        <h2 className="boba-newsletter-title">{t(translations.newsletter.title)}</h2>
        <p className="boba-newsletter-subtitle">{t(translations.newsletter.subtitle)}</p>

        {newsletterSubmitted ? (
          <div className="boba-newsletter-success">
            {t(translations.newsletter.success)}
          </div>
        ) : (
          <form className="boba-newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder={t(translations.newsletter.placeholder)}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
            />
            <button type="submit" className="boba-btn boba-btn-primary">
              {t(translations.newsletter.button)}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="boba-footer">
        <div className="boba-footer-content">
          <div className="boba-footer-brand">
            <h3>{restaurantInfo.name}</h3>
            <p>{t(restaurantInfo.tagline)}</p>
          </div>

          <div className="boba-footer-contact">
            <h4>{t(translations.footer.contactUs)}</h4>
            <p>{restaurantInfo.phone}</p>
            <p>{restaurantInfo.email}</p>
          </div>

          <div className="boba-footer-social">
            <h4>{t(translations.footer.followUs)}</h4>
            <div className="boba-social-links">
              <a href="#" title="Instagram">IG</a>
              <a href="#" title="TikTok">TT</a>
              <a href="#" title="WeChat">WC</a>
            </div>
          </div>
        </div>

        <p className="boba-copyright">
          &copy; 2024 {restaurantInfo.name}. {t(translations.footer.copyright)}.
        </p>
      </footer>

      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <button className="boba-cart-fab" onClick={() => setCartOpen(true)}>
          🛒
          <span className="boba-cart-count">{cartItemCount}</span>
        </button>
      )}

      {/* Customization Modal */}
      {selectedDrink && (
        <div className="boba-modal-overlay" onClick={() => setSelectedDrink(null)}>
          <div className="boba-modal" onClick={e => e.stopPropagation()}>
            <button className="boba-modal-close" onClick={() => setSelectedDrink(null)}>&times;</button>

            <div className="boba-modal-header">
              <img src={selectedDrink.image} alt={t(selectedDrink.name)} />
              <div>
                <h3>{t(selectedDrink.name)}</h3>
                <p>{t(selectedDrink.description)}</p>
                {selectedDrink.ingredients && (
                  <p className="boba-modal-ingredients">{t(selectedDrink.ingredients)}</p>
                )}
              </div>
            </div>

            <div className="boba-modal-options">
              {/* Size */}
              <div className="boba-option-group">
                <h4>{t(translations.customization.size)}</h4>
                <div className="boba-option-buttons">
                  {sizes.map(size => (
                    <button
                      key={size.id}
                      className={`boba-option-btn ${customization.size === size.id ? 'active' : ''}`}
                      onClick={() => setCustomization(prev => ({ ...prev, size: size.id }))}
                    >
                      {t(size.label)}
                      {size.priceAdd > 0 && <span>+&euro;{size.priceAdd.toFixed(2)}</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ice */}
              <div className="boba-option-group">
                <h4>{t(translations.customization.ice)}</h4>
                <div className="boba-option-buttons">
                  {iceOptions.map(ice => (
                    <button
                      key={ice.id}
                      className={`boba-option-btn ${customization.ice === ice.id ? 'active' : ''}`}
                      onClick={() => setCustomization(prev => ({ ...prev, ice: ice.id }))}
                    >
                      {t(ice.label)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sweetness */}
              <div className="boba-option-group">
                <h4>{t(translations.customization.sweetness)}</h4>
                <div className="boba-option-buttons">
                  {sweetnessOptions.map(sweet => (
                    <button
                      key={sweet.id}
                      className={`boba-option-btn ${customization.sweetness === sweet.id ? 'active' : ''}`}
                      onClick={() => setCustomization(prev => ({ ...prev, sweetness: sweet.id }))}
                    >
                      {t(sweet.label)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toppings */}
              <div className="boba-option-group">
                <h4>{t(translations.customization.toppings)}</h4>
                <div className="boba-option-toppings">
                  {toppings.map(topping => (
                    <button
                      key={topping.id}
                      className={`boba-topping-btn ${customization.toppings.includes(topping.id) ? 'active' : ''}`}
                      onClick={() => toggleTopping(topping.id)}
                    >
                      <span className="boba-topping-icon">{topping.icon}</span>
                      <span>{t(topping.name)}</span>
                      <span className="boba-topping-price">+&euro;{topping.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="boba-modal-footer">
              <div className="boba-modal-total">
                <span>{t(translations.customization.total)}:</span>
                <span className="boba-total-price">&euro;{calculateItemPrice().toFixed(2)}</span>
              </div>
              <button className="boba-btn boba-btn-primary boba-add-cart-btn" onClick={addToCart}>
                {t(translations.menu.addToCart)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <div className="boba-cart-overlay" onClick={() => setCartOpen(false)}>
          <div className="boba-cart-sidebar" onClick={e => e.stopPropagation()}>
            <div className="boba-cart-header">
              <h3>{t(translations.cart.title)}</h3>
              <button className="boba-cart-close" onClick={() => setCartOpen(false)}>&times;</button>
            </div>

            {cart.length === 0 ? (
              <div className="boba-cart-empty">
                <span>🧋</span>
                <p>{t(translations.cart.empty)}</p>
              </div>
            ) : (
              <>
                <div className="boba-cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="boba-cart-item">
                      <img src={item.drink.image} alt={t(item.drink.name)} />
                      <div className="boba-cart-item-info">
                        <h4>{t(item.drink.name)}</h4>
                        <p className="boba-cart-item-options">
                          {t(sizes.find(s => s.id === item.size)?.label)} •
                          {t(iceOptions.find(i => i.id === item.ice)?.label)} •
                          {t(sweetnessOptions.find(s => s.id === item.sweetness)?.label)}
                        </p>
                        {item.toppings.length > 0 && (
                          <p className="boba-cart-item-toppings">
                            + {item.toppings.map(tId => t(toppings.find(t => t.id === tId)?.name)).join(', ')}
                          </p>
                        )}
                        <div className="boba-cart-item-bottom">
                          <div className="boba-quantity-controls">
                            <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                          </div>
                          <span className="boba-cart-item-price">&euro;{(item.totalPrice * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <button
                        className="boba-cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                        title={t(translations.cart.remove)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                <div className="boba-cart-summary">
                  <div className="boba-cart-row">
                    <span>{t(translations.cart.subtotal)}</span>
                    <span>&euro;{cartSubtotal.toFixed(2)}</span>
                  </div>
                  <div className="boba-cart-row">
                    <span>{t(translations.cart.tax)}</span>
                    <span>&euro;{cartTax.toFixed(2)}</span>
                  </div>
                  <div className="boba-cart-row total">
                    <span>{t(translations.cart.total)}</span>
                    <span>&euro;{cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <div className="boba-cart-actions">
                  <button className="boba-btn boba-btn-primary boba-checkout-btn">
                    {t(translations.cart.checkout)}
                  </button>
                  <button
                    className="boba-btn boba-btn-outline"
                    onClick={() => setCartOpen(false)}
                  >
                    {t(translations.cart.continueShopping)}
                  </button>
                  <button
                    className="boba-clear-cart"
                    onClick={clearCart}
                  >
                    {t(translations.cart.clearCart)}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default BobaTea

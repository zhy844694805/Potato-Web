import { useState, useRef, useEffect } from 'react'
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
  faqItems,
  seasonalDrinks,
  makingProcess,
  instagramPhotos,
  popularCombos,
  wheelPrizes,
  liveStats,
  brandTimeline,
  floatingMenuItems,
  achievements
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
  const [wheelSpinning, setWheelSpinning] = useState(false)
  const [wheelRotation, setWheelRotation] = useState(0)
  const [wheelPrize, setWheelPrize] = useState(null)
  const [todayOrderCount, setTodayOrderCount] = useState(1247)
  const [activeUserCount, setActiveUserCount] = useState(83)
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false)
  const [animatedAchievements, setAnimatedAchievements] = useState(
    achievements.map(() => ({ current: 0, hasAnimated: false }))
  )
  const [flippedCards, setFlippedCards] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const achievementsRef = useRef(null)
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

  // Lucky Wheel Spin
  const spinWheel = () => {
    if (wheelSpinning) return

    setWheelSpinning(true)
    setWheelPrize(null)

    // Calculate prize based on probability
    const random = Math.random() * 100
    let cumulative = 0
    let selectedPrize = wheelPrizes[0]

    for (const prize of wheelPrizes) {
      cumulative += prize.probability
      if (random <= cumulative) {
        selectedPrize = prize
        break
      }
    }

    // Calculate rotation (5-10 full spins + position for selected prize)
    const prizeIndex = wheelPrizes.findIndex(p => p.id === selectedPrize.id)
    const prizeAngle = (360 / wheelPrizes.length) * prizeIndex
    const fullSpins = 5 + Math.floor(Math.random() * 5)
    const totalRotation = wheelRotation + (fullSpins * 360) + (360 - prizeAngle)

    setWheelRotation(totalRotation)

    setTimeout(() => {
      setWheelPrize(selectedPrize)
      setWheelSpinning(false)
    }, 4000)
  }

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTodayOrderCount(prev => prev + Math.floor(Math.random() * 3))
      setActiveUserCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3
        return Math.max(50, Math.min(150, prev + change))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated counter for achievements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animatedAchievements.forEach((_, index) => {
              if (!animatedAchievements[index].hasAnimated) {
                animateCounter(index)
              }
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounter = (index) => {
    const targetValue = achievements[index].value
    const duration = 2000
    const startTime = Date.now()

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(easeOutQuart * targetValue)

      setAnimatedAchievements(prev => {
        const newState = [...prev]
        newState[index] = {
          current: currentValue,
          hasAnimated: progress === 1
        }
        return newState
      })

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  // Toggle card flip
  const toggleCardFlip = (drinkId) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(drinkId)) {
        newSet.delete(drinkId)
      } else {
        newSet.add(drinkId)
      }
      return newSet
    })
  }

  return (
    <div className="boba-app">
      {/* Bubble Particles Background */}
      <div className="boba-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="boba-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`
            }}
          />
        ))}
      </div>

      {/* Floating Action Menu */}
      <div className={`boba-floating-menu ${floatingMenuOpen ? 'open' : ''}`}>
        <button
          className="boba-floating-toggle"
          onClick={() => setFloatingMenuOpen(!floatingMenuOpen)}
          aria-label="Toggle menu"
        >
          {floatingMenuOpen ? '✕' : '☰'}
        </button>
        <div className="boba-floating-items">
          {floatingMenuItems.map(item => (
            <a
              key={item.id}
              href={item.link}
              className="boba-floating-item"
              title={t(item.label)}
              onClick={() => setFloatingMenuOpen(false)}
            >
              <span className="boba-floating-icon">{item.icon}</span>
              <span className="boba-floating-label">{t(item.label)}</span>
            </a>
          ))}
        </div>
      </div>

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
      <section className="boba-hero" style={{
        transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
      }}>
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

      {/* Achievements Counter */}
      <section ref={achievementsRef} className="boba-achievements">
        <h2 className="boba-section-title">
          {language === 'it' ? 'I Nostri Traguardi' : language === 'zh' ? '我们的成就' : 'Our Achievements'}
        </h2>
        <div className="boba-achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="boba-achievement-card">
              <span className="boba-achievement-icon">{achievement.icon}</span>
              <div className="boba-achievement-value">
                {animatedAchievements[index].current.toLocaleString()}{achievement.suffix}
              </div>
              <div className="boba-achievement-label">{t(achievement.label)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Timeline */}
      <section className="boba-timeline-section">
        <h2 className="boba-section-title">
          {language === 'it' ? 'La Nostra Storia' : language === 'zh' ? '品牌故事' : 'Our Story'}
        </h2>
        <p className="boba-timeline-subtitle">
          {language === 'it' ? 'Il viaggio dal sogno alla realtà' : language === 'zh' ? '从梦想到现实的旅程' : 'The journey from dream to reality'}
        </p>
        <div className="boba-timeline">
          {brandTimeline.map((milestone, index) => (
            <div key={milestone.id} className={`boba-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="boba-timeline-content" style={{ borderColor: milestone.color }}>
                <div className="boba-timeline-year" style={{ background: milestone.color }}>
                  {milestone.year}
                </div>
                <div className="boba-timeline-icon">{milestone.icon}</div>
                <h3>{t(milestone.title)}</h3>
                <p>{t(milestone.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Stats Banner */}
      <section className="boba-live-stats">
        <div className="boba-live-stat-item">
          <span className="boba-live-stat-icon">📊</span>
          <div>
            <span className="boba-live-stat-value">{todayOrderCount}+</span>
            <span className="boba-live-stat-label">{t(liveStats.todayOrders)}</span>
          </div>
        </div>
        <div className="boba-live-stat-item">
          <span className="boba-live-stat-icon">🔥</span>
          <div>
            <span className="boba-live-stat-value">Brown Sugar</span>
            <span className="boba-live-stat-label">{t(liveStats.popularNow)}</span>
          </div>
        </div>
        <div className="boba-live-stat-item">
          <span className="boba-live-stat-icon">👥</span>
          <div>
            <span className="boba-live-stat-value">{activeUserCount}</span>
            <span className="boba-live-stat-label">{t(liveStats.activeUsers)}</span>
          </div>
        </div>
      </section>

      {/* Seasonal Limited Edition */}
      <section className="boba-seasonal">
        <h2 className="boba-section-title">
          <span className="boba-title-badge">LIMITED</span>
          {language === 'it' ? 'Edizione Limitata Stagionale' : language === 'zh' ? '季节限定' : 'Seasonal Limited Edition'}
        </h2>
        <div className="boba-seasonal-grid">
          {seasonalDrinks.map(drink => (
            <div key={drink.id} className="boba-seasonal-card">
              <div className="boba-seasonal-badge">{t(drink.season)}</div>
              <img src={drink.image} alt={t(drink.name)} />
              <div className="boba-seasonal-content">
                <h3>{t(drink.name)}</h3>
                <p>{t(drink.description)}</p>
                <div className="boba-seasonal-footer">
                  <span className="boba-seasonal-price">&euro;{drink.price.toFixed(2)}</span>
                  <span className="boba-seasonal-available">{t(drink.available)}</span>
                </div>
                <button className="boba-btn boba-btn-primary">
                  {language === 'it' ? 'Ordina Ora' : language === 'zh' ? '立即下单' : 'Order Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
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

        {/* Drinks Grid with 3D Flip */}
        <div className="boba-drinks-grid">
          {filteredDrinks.map(drink => (
            <div
              key={drink.id}
              className={`boba-drink-card-wrapper ${flippedCards.has(drink.id) ? 'flipped' : ''}`}
            >
              <div className="boba-drink-card-flipper">
                {/* Front Side */}
                <div className={`boba-drink-card boba-drink-card-front ${drink.popular ? 'popular' : ''} ${drink.isNew ? 'new' : ''}`}>
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
                        className="boba-flip-btn"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleCardFlip(drink.id)
                        }}
                        title={language === 'it' ? 'Info' : language === 'zh' ? '详情' : 'Details'}
                      >
                        ℹ️
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="boba-drink-card boba-drink-card-back">
                  <div className="boba-drink-back-content">
                    <h3>{t(drink.name)}</h3>
                    {drink.ingredients && (
                      <div className="boba-drink-ingredients">
                        <strong>{language === 'it' ? 'Ingredienti:' : language === 'zh' ? '配料：' : 'Ingredients:'}</strong>
                        <p>{t(drink.ingredients)}</p>
                      </div>
                    )}
                    <div className="boba-drink-details">
                      {drink.calories && (
                        <div className="boba-detail-item">
                          <span>🔥</span>
                          <span>{drink.calories} kcal</span>
                        </div>
                      )}
                      <div className="boba-detail-item">
                        <span>💰</span>
                        <span>&euro;{drink.price.toFixed(2)}</span>
                      </div>
                    </div>
                    <div className="boba-drink-back-actions">
                      <button
                        className="boba-btn boba-btn-primary boba-btn-small"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleCardFlip(drink.id)
                          openCustomization(drink)
                        }}
                      >
                        {t(translations.menu.customize)}
                      </button>
                      <button
                        className="boba-btn boba-btn-outline boba-btn-small"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleCardFlip(drink.id)
                        }}
                      >
                        {language === 'it' ? 'Indietro' : language === 'zh' ? '返回' : 'Back'}
                      </button>
                    </div>
                  </div>
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

      {/* Boba Making Process */}
      <section className="boba-making-process">
        <h2 className="boba-section-title">
          {language === 'it' ? 'Come Facciamo le Nostre Perle' : language === 'zh' ? '珍珠制作工艺' : 'How We Make Our Pearls'}
        </h2>
        <p className="boba-process-subtitle">
          {language === 'it' ? 'Ogni perla è un\'opera d\'arte artigianale' : language === 'zh' ? '每颗珍珠都是手工艺术品' : 'Every pearl is a handcrafted work of art'}
        </p>
        <div className="boba-process-timeline">
          {makingProcess.map((step, index) => (
            <div key={step.id} className="boba-process-step">
              <div className="boba-process-number">{index + 1}</div>
              <div className="boba-process-icon">{step.icon}</div>
              <div className="boba-process-content">
                <h3>{t(step.title)}</h3>
                <p>{t(step.description)}</p>
                <span className="boba-process-time">⏱ {t(step.time)}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="boba-process-total">
          <span className="boba-process-total-label">
            {language === 'it' ? 'Tempo Totale di Preparazione' : language === 'zh' ? '总制作时间' : 'Total Preparation Time'}
          </span>
          <span className="boba-process-total-value">~75 {language === 'it' ? 'minuti' : language === 'zh' ? '分钟' : 'minutes'}</span>
        </div>
      </section>

      {/* Popular Combos */}
      <section className="boba-combos">
        <h2 className="boba-section-title">
          {language === 'it' ? 'Combo Più Popolari' : language === 'zh' ? '热门套餐推荐' : 'Popular Combos'}
        </h2>
        <p className="boba-combos-subtitle">
          {language === 'it' ? 'Risparmia ordinando i nostri combo speciali' : language === 'zh' ? '订购特惠套餐更划算' : 'Save more with our special combos'}
        </p>
        <div className="boba-combos-grid">
          {popularCombos.map(combo => (
            <div key={combo.id} className={`boba-combo-card ${combo.popular ? 'popular' : ''}`}>
              {combo.popular && <span className="boba-combo-hot">🔥 HOT</span>}
              <img src={combo.image} alt={t(combo.name)} />
              <div className="boba-combo-content">
                <h3>{t(combo.name)}</h3>
                <p className="boba-combo-desc">{t(combo.description)}</p>
                <div className="boba-combo-includes">
                  <div className="boba-combo-include-item">
                    <span className="boba-combo-include-icon">🧋</span>
                    <span>{combo.drink}</span>
                  </div>
                  {combo.toppings.map((topping, idx) => (
                    <div key={idx} className="boba-combo-include-item">
                      <span className="boba-combo-include-icon">+</span>
                      <span>{topping}</span>
                    </div>
                  ))}
                </div>
                <div className="boba-combo-pricing">
                  <div className="boba-combo-price">
                    <span className="boba-combo-price-current">&euro;{combo.totalPrice.toFixed(2)}</span>
                    <span className="boba-combo-savings">
                      {language === 'it' ? 'Risparmi' : language === 'zh' ? '节省' : 'Save'} &euro;{combo.savings.toFixed(2)}
                    </span>
                  </div>
                  <button className="boba-btn boba-btn-primary">
                    {language === 'it' ? 'Aggiungi' : language === 'zh' ? '加入购物车' : 'Add to Cart'}
                  </button>
                </div>
              </div>
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

      {/* Lucky Wheel */}
      <section className="boba-lucky-wheel-section">
        <h2 className="boba-section-title">
          {language === 'it' ? 'Ruota della Fortuna' : language === 'zh' ? '幸运转盘' : 'Lucky Wheel'}
        </h2>
        <p className="boba-wheel-subtitle">
          {language === 'it' ? 'Gira la ruota e vinci premi esclusivi!' : language === 'zh' ? '转动转盘，赢取专属奖励！' : 'Spin the wheel and win exclusive prizes!'}
        </p>

        <div className="boba-wheel-container">
          <div className="boba-wheel-wrapper">
            <div className="boba-wheel-pointer">▼</div>
            <div
              className="boba-wheel"
              style={{
                transform: `rotate(${wheelRotation}deg)`,
                transition: wheelSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
              }}
            >
              {wheelPrizes.map((prize, index) => {
                const angle = (360 / wheelPrizes.length) * index
                return (
                  <div
                    key={prize.id}
                    className="boba-wheel-segment"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      background: prize.color
                    }}
                  >
                    <span className="boba-wheel-prize-text">
                      {t(prize.name)}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            className={`boba-btn boba-btn-primary boba-spin-btn ${wheelSpinning ? 'spinning' : ''}`}
            onClick={spinWheel}
            disabled={wheelSpinning}
          >
            {wheelSpinning
              ? (language === 'it' ? 'Girando...' : language === 'zh' ? '转动中...' : 'Spinning...')
              : (language === 'it' ? 'Gira Ora!' : language === 'zh' ? '立即转动' : 'Spin Now!')}
          </button>

          {wheelPrize && (
            <div className="boba-wheel-result">
              <h3>🎉 {language === 'it' ? 'Hai Vinto!' : language === 'zh' ? '恭喜中奖！' : 'You Won!'}</h3>
              <p className="boba-wheel-prize-name">{t(wheelPrize.name)}</p>
              <p className="boba-wheel-prize-desc">{t(wheelPrize.description)}</p>
              <button className="boba-btn boba-btn-outline">
                {language === 'it' ? 'Usa Ora' : language === 'zh' ? '立即使用' : 'Use Now'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Photo Wall */}
      <section className="boba-instagram">
        <h2 className="boba-section-title">
          #{language === 'it' ? 'BobaDreamMilano' : language === 'zh' ? 'Boba梦想米兰' : 'BobaDreamMilano'}
        </h2>
        <p className="boba-instagram-subtitle">
          {language === 'it' ? 'Condividi il tuo momento Boba con noi!' : language === 'zh' ? '分享你的Boba时刻！' : 'Share your Boba moment with us!'}
        </p>
        <div className="boba-instagram-grid">
          {instagramPhotos.map(photo => (
            <div key={photo.id} className="boba-instagram-photo">
              <img src={photo.image} alt={photo.username} />
              <div className="boba-instagram-overlay">
                <span className="boba-instagram-username">{photo.username}</span>
                <span className="boba-instagram-likes">❤️ {photo.likes.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="boba-btn boba-btn-outline boba-instagram-cta">
          <span>📸</span>
          {language === 'it' ? 'Segui su Instagram' : language === 'zh' ? '在Instagram上关注我们' : 'Follow on Instagram'}
        </button>
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

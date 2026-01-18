import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import GoldParticles from '../components/GoldParticles'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useMouseParallax } from '../hooks/useParallax'
import { siteInfo, heroData, statsData, heritageData, menuItems, testimonials } from '../data/siteData'

function HomePage() {
  const { language, t } = useDCLanguage()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)
  const basePath = '/demo/dragon-court'

  // Enable scroll-triggered animations
  useScrollAnimation(0.15)

  // Mouse parallax for hero content
  const heroContentRef = useMouseParallax(15)

  const featuredDishes = menuItems.filter(item => item.featured).slice(0, 4)

  return (
    <div className="dc-home">
      <Helmet>
        <title>{t(siteInfo.name)} | {t(siteInfo.tagline)}</title>
        <meta name="description" content={t(heroData.text)} />
      </Helmet>

      <GoldParticles />

      {/* Hero Section */}
      <section className="dc-hero">
        <div className="dc-hero-bg dc-parallax-bg">
          <video
            ref={videoRef}
            className={`dc-hero-video ${videoLoaded ? 'loaded' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={heroData.video} type="video/mp4" />
          </video>
          <img
            src={heroData.fallbackImage}
            alt=""
            className={`dc-hero-fallback ${videoLoaded ? 'hidden' : ''}`}
          />
          <div className="dc-hero-overlay"></div>
        </div>

        <div className="dc-hero-content" ref={heroContentRef}>
          <div className="dc-hero-dragon dc-fade-in-up">龍</div>
          <h1 className="dc-hero-title">
            <span className="dc-title-zh dc-fade-in-up dc-delay-1">龙庭</span>
            <span className="dc-title-en dc-fade-in-up dc-delay-2">DRAGON COURT</span>
          </h1>
          <p className="dc-hero-subtitle dc-fade-in-up dc-delay-3">{t(heroData.subtitle)}</p>
          <p className="dc-hero-text dc-fade-in-up dc-delay-4">{t(heroData.text)}</p>
          <div className="dc-hero-buttons dc-fade-in-up dc-delay-5">
            <Link to={`${basePath}/reservation`} className="dc-hero-cta primary">
              <span>{language === 'zh' ? '立即预约' : 'Reserve Now'}</span>
              <span className="dc-cta-arrow">→</span>
            </Link>
            <Link to={`${basePath}/menu`} className="dc-hero-cta secondary">
              <span>{language === 'zh' ? '浏览菜单' : 'View Menu'}</span>
            </Link>
          </div>
        </div>

        <div className="dc-hero-stats dc-fade-in-up dc-delay-6">
          {statsData.map((stat, i) => (
            <div key={i} className="dc-stat" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="dc-stat-number">{stat.number}</span>
              <span className="dc-stat-label">{t(stat.label)}</span>
            </div>
          ))}
        </div>

        <div className="dc-scroll-hint">
          <span className="dc-scroll-text">{language === 'zh' ? '向下探索' : 'Scroll'}</span>
          <div className="dc-scroll-line"></div>
        </div>
      </section>

      {/* Heritage Preview */}
      <section className="dc-section dc-heritage-preview">
        <div className="dc-container">
          <div className="dc-section-header dc-animate-on-scroll">
            <span className="dc-section-icon">鳳</span>
            <h2 className="dc-section-title">
              {language === 'zh' ? '百年传承' : 'Century of Heritage'}
            </h2>
            <p className="dc-section-subtitle">{t(heritageData.intro).slice(0, 100)}...</p>
          </div>

          <div className="dc-heritage-grid">
            {heritageData.values.map((item, i) => (
              <div key={i} className={`dc-heritage-card dc-animate-on-scroll dc-stagger-${i % 3}`}>
                <div className="dc-heritage-image">
                  <img src={item.image} alt={t(item.title)} loading="lazy" />
                  <div className="dc-heritage-icon">{item.icon}</div>
                </div>
                <div className="dc-heritage-content">
                  <h3>{t(item.title)}</h3>
                  <p>{t(item.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dc-section-cta dc-animate-on-scroll">
            <Link to={`${basePath}/about`} className="dc-btn-outline">
              {language === 'zh' ? '了解更多' : 'Learn More'}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="dc-section dc-dishes-preview light">
        <div className="dc-container">
          <div className="dc-section-header dc-animate-on-scroll">
            <span className="dc-section-icon">膳</span>
            <h2 className="dc-section-title">
              {language === 'zh' ? '御膳精选' : 'Signature Dishes'}
            </h2>
            <p className="dc-section-subtitle">
              {language === 'zh' ? '匠心传承，极致呈现' : 'Crafted with mastery, presented with excellence'}
            </p>
          </div>

          <div className="dc-dishes-grid home">
            {featuredDishes.map((dish, i) => (
              <div key={i} className={`dc-dish-card dc-animate-on-scroll dc-stagger-${i % 4}`}>
                <div className="dc-dish-image">
                  <img src={dish.image} alt={t(dish.name)} loading="lazy" />
                  <div className="dc-dish-overlay">
                    <span className="dc-dish-price">€{dish.price}</span>
                  </div>
                </div>
                <div className="dc-dish-info">
                  <h3>{t(dish.name)}</h3>
                  <p>{t(dish.desc)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dc-section-cta dc-animate-on-scroll">
            <Link to={`${basePath}/menu`} className="dc-btn-gold">
              {language === 'zh' ? '查看完整菜单' : 'View Full Menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="dc-section dc-testimonials-preview">
        <div className="dc-container">
          <div className="dc-section-header dc-animate-on-scroll">
            <span className="dc-section-icon">贊</span>
            <h2 className="dc-section-title">
              {language === 'zh' ? '宾客赞誉' : 'Guest Reviews'}
            </h2>
          </div>

          <div className="dc-testimonials-grid">
            {testimonials.map((item, i) => (
              <div key={i} className={`dc-testimonial-card dc-animate-on-scroll dc-stagger-${i % 3}`}>
                <div className="dc-testimonial-rating">
                  {'★'.repeat(item.rating)}
                </div>
                <p className="dc-testimonial-text">"{t(item.text)}"</p>
                <div className="dc-testimonial-author">
                  <span className="dc-testimonial-name">{t(item.name)}</span>
                  <span className="dc-testimonial-role">{t(item.role)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dc-section dc-cta-section dc-animate-on-scroll">
        <div className="dc-cta-bg">
          <img src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-cta-overlay"></div>
        </div>
        <div className="dc-container">
          <div className="dc-cta-content">
            <span className="dc-cta-icon">預</span>
            <h2>{language === 'zh' ? '预约尊享体验' : 'Reserve Your Experience'}</h2>
            <p>
              {language === 'zh'
                ? '为您呈现难忘的皇家御膳之旅'
                : 'Let us create an unforgettable imperial culinary journey for you'}
            </p>
            <Link to={`${basePath}/reservation`} className="dc-hero-cta primary">
              <span>{language === 'zh' ? '立即预约' : 'Make Reservation'}</span>
              <span className="dc-cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

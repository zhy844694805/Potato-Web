import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRestaurantLanguage } from '../SakuraMilano'
import {
  translations,
  featuredItems,
  atmosphereImages,
  chefImage,
  heroImage
} from '../data/restaurant-data'

function HomePage() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.sushi-reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="sushi-home">
      {/* Hero */}
      <section className="sushi-hero">
        <div className="sushi-hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="sushi-hero-overlay"></div>
        <div className="sushi-hero-content">
          <div className="sushi-hero-decoration">
            <div className="sushi-vertical-line"></div>
            <span className="sushi-hero-logo-text">桜 · ミラノ</span>
          </div>
          <h1>Sakura Milano</h1>
          <p className="sushi-hero-tagline">{t.hero.tagline}</p>
          <div className="sushi-hero-btn-group">
             <Link to="/demo/sakura-milano/reservation" className="sushi-btn sushi-btn-primary">
              {t.hero.cta}
            </Link>
             <Link to="/demo/sakura-milano/menu" className="sushi-btn sushi-btn-outline">
              {language === 'it' ? 'Menu' : language === 'zh' ? '菜单' : 'Menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="sushi-section">
        <div className="sushi-container sushi-reveal">
          <div className="sushi-section-header">
            <span className="sushi-section-subtitle">Since 2010</span>
            <h2 className="sushi-heading-2">{language === 'it' ? 'L\'Arte del Sushi' : language === 'zh' ? '寿司的艺术' : 'The Art of Sushi'}</h2>
            <div className="sushi-divider"></div>
            <p className="sushi-text-lead">
              {language === 'it' 
                ? 'Dove la tradizione giapponese incontra l\'eleganza milanese. Un\'esperienza gastronomica senza compromessi.' 
                : language === 'zh'
                ? '当日本传统遇上米兰优雅。一场不妥协的美食体验。'
                : 'Where Japanese tradition meets Milanese elegance. An uncompromising gastronomic experience.'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Menu (Parallax Cards) */}
      <section className="sushi-section" style={{ background: 'var(--sushi-bg-secondary)' }}>
        <div className="sushi-container">
           <div className="sushi-featured-grid">
            {featuredItems.map((item, index) => (
              <Link 
                to="/demo/sakura-milano/menu" 
                key={item.id} 
                className="sushi-featured-card sushi-reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="sushi-featured-image-wrapper">
                  <img src={item.image} alt={item.name[language]} />
                </div>
                <div className="sushi-featured-overlay">
                  <div className="sushi-featured-content">
                    <span className="sushi-featured-price">€{item.price}</span>
                    <h3 className="sushi-featured-title">{item.name[language]}</h3>
                    <p className="sushi-featured-desc">{item.description[language]}</p>
                  </div>
                </div>
              </Link>
            ))}
           </div>
        </div>
      </section>

      {/* Atmosphere / Story Split */}
      <section className="sushi-atmosphere-section">
        <div className="sushi-atmosphere-image">
           <img src={atmosphereImages[0]?.url || heroImage} alt="Atmosphere" />
        </div>
        <div className="sushi-atmosphere-content">
          <div className="sushi-reveal">
            <span className="sushi-section-subtitle">Atmosphere</span>
            <h2 className="sushi-heading-2">{t.home.atmosphere}</h2>
            <div className="sushi-divider" style={{ margin: '2rem 0' }}></div>
            <p className="sushi-text-gray" style={{ marginBottom: '2rem' }}>
               {language === 'it' 
                ? 'Un ambiente intimo e raffinato, progettato per esaltare i sensi.' 
                : language === 'zh'
                ? '私密而精致的环境，旨在提升感官体验。'
                : 'An intimate and refined environment, designed to heighten the senses.'}
            </p>
            <div className="sushi-gallery" style={{ gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {atmosphereImages.slice(1, 3).map((img, i) => (
                <div key={i} className="sushi-gallery-item">
                  <img src={img.url} alt="Detail" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="sushi-chef-preview">
        <div className="sushi-chef-bg-text">TANAKA</div>
        <div className="sushi-chef-content-box sushi-reveal">
          <div className="sushi-chef-image-circle">
            <img src={chefImage} alt="Chef" />
          </div>
          <h2 className="sushi-heading-2">{t.home.aboutPreview}</h2>
          <p className="sushi-text-gray" style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>{t.home.aboutText}</p>
          <Link to="/demo/sakura-milano/about" className="sushi-btn sushi-btn-outline">
            {t.home.learnMore}
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="sushi-cta-section">
        <div className="sushi-cta-content sushi-reveal">
          <h2 className="sushi-heading-1">{language === 'it' ? 'Prenota Ora' : language === 'zh' ? '立即预订' : 'Book Now'}</h2>
          <p className="sushi-text-lead" style={{ marginBottom: '2rem' }}>
            {language === 'it' ? 'Assicurati il tuo tavolo per una serata indimenticabile.' : language === 'zh' ? '预订您的餐桌，享受难忘的夜晚。' : 'Secure your table for an unforgettable evening.'}
          </p>
          <Link to="/demo/sakura-milano/reservation" className="sushi-btn sushi-btn-primary">
            {t.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage

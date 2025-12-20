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

  return (
    <div className="sushi-home">
      {/* Hero Section */}
      <section className="sushi-hero">
        <div
          className="sushi-hero-bg"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="sushi-hero-overlay" />
        <div className="sushi-hero-content">
          <div className="sushi-hero-logo">🌸</div>
          <h1>Sakura Milano</h1>
          <p className="sushi-hero-tagline">{t.hero.tagline}</p>
          <p className="sushi-hero-subtitle">{t.hero.subtitle}</p>
          <Link to="/demo/sakura-milano/reservation" className="sushi-btn sushi-btn-primary">
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="sushi-section">
        <div className="sushi-container">
          <div className="sushi-section-header">
            <h2 className="sushi-heading-2">{t.home.featured}</h2>
            <div className="sushi-divider" />
          </div>

          <div className="sushi-featured-grid">
            {featuredItems.map((item) => (
              <Link
                to="/demo/sakura-milano/menu"
                key={item.id}
                className="sushi-featured-card"
              >
                <img src={item.image} alt={item.name[language]} />
                <div className="sushi-featured-overlay">
                  <h3>{item.name[language]}</h3>
                  <p>{item.description[language]}</p>
                  <div className="sushi-featured-price">€{item.price}</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--sushi-space-xl)' }}>
            <Link to="/demo/sakura-milano/menu" className="sushi-btn sushi-btn-outline">
              {language === 'it' ? 'Vedi Menu Completo' : language === 'zh' ? '查看完整菜单' : 'View Full Menu'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="sushi-section" style={{ background: 'var(--sushi-bg-secondary)' }}>
        <div className="sushi-container">
          <div className="sushi-about-grid">
            <div className="sushi-about-image sushi-fade-in-up">
              <img src={chefImage} alt="Chef Marco Tanaka" />
            </div>
            <div className="sushi-about-content">
              <h2 className="sushi-heading-2 sushi-text-gold">{t.home.aboutPreview}</h2>
              <div className="sushi-divider" style={{ margin: 'var(--sushi-space-md) 0' }} />
              <p>{t.home.aboutText}</p>
              <Link
                to="/demo/sakura-milano/about"
                className="sushi-btn sushi-btn-outline"
                style={{ marginTop: 'var(--sushi-space-md)' }}
              >
                {t.home.learnMore} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Gallery */}
      <section className="sushi-section">
        <div className="sushi-container">
          <div className="sushi-section-header">
            <h2 className="sushi-heading-2">{t.home.atmosphere}</h2>
            <div className="sushi-divider" />
          </div>

          <div className="sushi-gallery">
            {atmosphereImages.map((image, index) => (
              <div key={index} className="sushi-gallery-item">
                <img src={image.url} alt={image.caption[language]} />
                <div className="sushi-gallery-caption">{image.caption[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="sushi-section"
        style={{
          background: 'linear-gradient(to right, var(--sushi-bg-secondary), var(--sushi-bg-primary))',
          textAlign: 'center'
        }}
      >
        <div className="sushi-container-narrow">
          <h2 className="sushi-heading-2" style={{ marginBottom: 'var(--sushi-space-sm)' }}>
            {language === 'it'
              ? 'Prenota la Tua Esperienza'
              : language === 'zh'
              ? '预订您的用餐体验'
              : 'Book Your Experience'}
          </h2>
          <p className="sushi-text-gray" style={{ marginBottom: 'var(--sushi-space-lg)' }}>
            {language === 'it'
              ? 'Lasciati trasportare in un viaggio culinario unico'
              : language === 'zh'
              ? '让我们带您踏上独特的美食之旅'
              : 'Let us take you on a unique culinary journey'}
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

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { siteConfig, categories, heroSlides, features, translations } from '../data/siteData';
import TZProductCard from '../components/TZProductCard';

export default function HomePage() {
  const { t } = useTZLanguage();
  const { getActiveProducts } = useTZAdmin();
  const [currentSlide, setCurrentSlide] = useState(0);
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const products = getActiveProducts();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);
  const saleProducts = products.filter(p => p.discount > 0).slice(0, 4);

  // Auto-slide hero
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="tz-home">
      {/* Hero Section */}
      <section className="tz-hero">
        <div className="tz-hero-slides">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`tz-hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="tz-hero-overlay" style={{ background: slide.overlay }} />
              <div className="tz-hero-content">
                <h1>{t(slide.title)}</h1>
                <p>{t(slide.subtitle)}</p>
                <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
                  {t(translations.hero.cta)}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="tz-hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`tz-hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="tz-features">
        <div className="tz-container">
          <div className="tz-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="tz-feature-card">
                <span className="tz-feature-icon">{feature.icon}</span>
                <h3>{t(feature.title)}</h3>
                <p>{t(feature.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.categories)}</h2>
            <Link to={`${basePath}/shop`} className="tz-view-all">
              {t(common.viewAll)} <span>→</span>
            </Link>
          </div>
          <div className="tz-categories-grid">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`${basePath}/shop/${cat.id}`}
                className="tz-category-card"
              >
                <span className="tz-category-icon">{cat.icon}</span>
                <span className="tz-category-name">{t(cat.name)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.featuredProducts)}</h2>
            <Link to={`${basePath}/shop`} className="tz-view-all">
              {t(common.viewAll)} <span>→</span>
            </Link>
          </div>
          <div className="tz-products-grid">
            {featuredProducts.map(product => (
              <TZProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      {saleProducts.length > 0 && (
        <section className="tz-sale-banner">
          <div className="tz-container">
            <div className="tz-sale-content">
              <span className="tz-sale-tag">{t(common.sale)}</span>
              <h2>Up to 30% Off on Selected Items</h2>
              <p>Limited time offer on premium electronics</p>
              <Link to={`${basePath}/shop?sale=true`} className="tz-btn tz-btn-light">
                Shop Sale
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* New Arrivals */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.newArrivals)}</h2>
            <Link to={`${basePath}/shop`} className="tz-view-all">
              {t(common.viewAll)} <span>→</span>
            </Link>
          </div>
          <div className="tz-products-grid">
            {newProducts.map(product => (
              <TZProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* On Sale */}
      {saleProducts.length > 0 && (
        <section className="tz-section tz-section-sale">
          <div className="tz-container">
            <div className="tz-section-header">
              <h2>🔥 {t(translations.sections.onSale)}</h2>
              <Link to={`${basePath}/shop?sale=true`} className="tz-view-all">
                {t(common.viewAll)} <span>→</span>
              </Link>
            </div>
            <div className="tz-products-grid">
              {saleProducts.map(product => (
                <TZProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="tz-newsletter-section">
        <div className="tz-container">
          <div className="tz-newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to get special offers, free giveaways, and new arrivals.</p>
            <form className="tz-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className="tz-btn tz-btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

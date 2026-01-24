import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { categories, features, translations } from '../data/siteData';
import TZProductCard from '../components/TZProductCard';

export default function HomePage() {
  const { t } = useTZLanguage();
  const { getActiveProducts } = useTZAdmin();
  const common = translations.common;
  const basePath = '/demo/tech-zone';

  const products = getActiveProducts();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="tz-home">
      {/* Hero Section - Cyber Grid */}
      <section className="tz-hero">
        <div className="tz-container">
          <div className="tz-hero-grid">
            <div className="tz-hero-content">
              <span className="tz-hero-tag">Next Gen Tech</span>
              <h1>
                <span className="tz-text-gradient">Future</span> Is Here.<br />
                Upgrade Your Reality.
              </h1>
              <p className="tz-hero-desc">
                {t(translations.hero.slide1.subtitle)}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link to={`${basePath}/shop`} className="tz-btn tz-btn-primary tz-btn-lg">
                  {t(translations.hero.cta)}
                </Link>
                <Link to={`${basePath}/about`} className="tz-btn tz-btn-outline tz-btn-lg">
                  Explore
                </Link>
              </div>

              <div className="tz-hero-stats">
                <div className="tz-stat-item">
                  <span className="value">50+</span>
                  <span className="label">Premium Brands</span>
                </div>
                <div className="tz-stat-item">
                  <span className="value">24h</span>
                  <span className="label">Fast Delivery</span>
                </div>
                <div className="tz-stat-item">
                  <span className="value">2k+</span>
                  <span className="label">Happy Geeks</span>
                </div>
              </div>
            </div>

            <div className="tz-hero-visual">
              <div className="tz-hero-card">
                <img 
                  src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80" 
                  alt="Hero Device" 
                  style={{ width: '100%', borderRadius: '12px', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="tz-features" style={{ background: 'var(--tz-bg-primary)', borderBottom: '1px solid var(--tz-border)' }}>
        <div className="tz-container">
          <div className="tz-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="tz-feature-card" style={{ textAlign: 'left', padding: '1rem' }}>
                <span className="tz-feature-icon" style={{ color: 'var(--tz-primary)', fontSize: '1.5rem' }}>{feature.icon}</span>
                <h3 style={{ fontSize: '1rem', color: 'var(--tz-text-primary)' }}>{t(feature.title)}</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--tz-text-secondary)' }}>{t(feature.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.categories)}</h2>
            <Link to={`${basePath}/shop`} className="tz-view-all">
              {t(common.viewAll)} <span>→</span>
            </Link>
          </div>
          
          <div className="tz-bento-grid">
            {/* Custom mapping for a bento layout manually for better control or map smartly */}
            {categories.slice(0, 6).map((cat, index) => {
              // Create layout logic: 0 is large, 1,2 standard, 3 wide...
              let itemClass = 'tz-bento-item';
              if (index === 0) itemClass += ' large';
              else if (index === 3) itemClass += ' wide';

              // Dummy BG images for demo based on index to look cool
              const bgImages = [
                'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80', // Phone
                'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', // Gaming
                'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=800&q=80', // Laptop
                'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', // Audio
                'https://images.unsplash.com/photo-1572569028738-411a56103304?w=800&q=80', // Tablet
                'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'  // Accessory
              ];

              return (
                <Link
                  key={cat.id}
                  to={`${basePath}/shop/${cat.id}`}
                  className={itemClass}
                >
                  <div 
                    className="tz-bento-bg" 
                    style={{ backgroundImage: `url(${bgImages[index] || bgImages[0]})` }}
                  />
                  <div className="tz-bento-content">
                    <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.icon}</span>
                    <span style={{ fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>{t(cat.name)}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.featuredProducts)}</h2>
            <Link to={`${basePath}/shop`} className="tz-btn tz-btn-outline tz-btn-sm">
              {t(common.viewAll)}
            </Link>
          </div>
          <div className="tz-products-grid">
            {featuredProducts.map(product => (
              <TZProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner (Cyber Style) */}
      <section className="tz-section">
        <div className="tz-container">
          <div style={{
            background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
              mixBlendMode: 'overlay'
            }}></div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="tz-hero-tag" style={{ background: 'white', color: 'black', border: 'none' }}>
                Limited Time
              </span>
              <h2 style={{ fontSize: '3rem', margin: '1rem 0' }}>Cyber Week Sale</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
                Get up to 50% off on selected premium tech gear.
              </p>
              <Link to={`${basePath}/shop?sale=true`} className="tz-btn" style={{ background: 'white', color: 'black' }}>
                Access Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="tz-section">
        <div className="tz-container">
          <div className="tz-section-header">
            <h2>{t(translations.sections.newArrivals)}</h2>
            <Link to={`${basePath}/shop`} className="tz-btn tz-btn-outline tz-btn-sm">
              {t(common.viewAll)}
            </Link>
          </div>
          <div className="tz-products-grid">
            {newProducts.map(product => (
              <TZProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="tz-section" style={{ background: 'var(--tz-bg-secondary)' }}>
        <div className="tz-container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 className="tz-text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Stay Connected</h2>
          <p style={{ color: 'var(--tz-text-secondary)', marginBottom: '2rem' }}>
            Join the tech revolution. Subscribe for exclusive drops and insider news.
          </p>
          <form style={{ display: 'flex', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter email address" 
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--tz-border)',
                background: 'var(--tz-bg-primary)',
                color: 'white'
              }}
            />
            <button type="submit" className="tz-btn tz-btn-primary">Join</button>
          </form>
        </div>
      </section>
    </div>
  );
}
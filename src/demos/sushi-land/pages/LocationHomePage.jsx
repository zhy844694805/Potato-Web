import { useSLLanguage } from '../context/SLLanguageContext';
import { useSLLocation } from '../context/SLLocationContext';
import { translations, galleryImages } from '../data/siteData';
import SLDishCarousel from '../components/SLDishCarousel';

export default function LocationHomePage() {
  const { t } = useSLLanguage();
  const location = useSLLocation();
  const loc = translations.locationHome;

  return (
    <>
      {/* Hero */}
      <section className="sl-loc-hero">
        <img
          className="sl-loc-hero-bg"
          src={location.heroImage}
          alt={location.name}
        />
        <div className="sl-loc-hero-overlay" />
        <div className="sl-loc-hero-content">
          <h1>
            Sushi <span>Land</span>
          </h1>
          <p>{location.shortName}</p>
        </div>
      </section>

      {/* AYCE Intro */}
      <section className="sl-section sl-ayce">
        <h2 className="sl-section-heading">
          {t(loc.ayceTitle)} <span>{t(loc.ayceAccent)}</span>
        </h2>
        <p className="sl-ayce-description">{t(loc.ayceDescription)}</p>
      </section>

      {/* QR Ordering */}
      <section className="sl-section">
        <div className="sl-qr-section">
          <div>
            <h3>{t(loc.qrTitle)}</h3>
            <p>{t(loc.qrDescription)}</p>
          </div>
          <div className="sl-qr-mockup">
            <svg className="sl-qr-icon" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="10" y="10" width="40" height="40" rx="4" />
              <rect x="20" y="20" width="20" height="20" rx="2" fill="currentColor" />
              <rect x="70" y="10" width="40" height="40" rx="4" />
              <rect x="80" y="20" width="20" height="20" rx="2" fill="currentColor" />
              <rect x="10" y="70" width="40" height="40" rx="4" />
              <rect x="20" y="80" width="20" height="20" rx="2" fill="currentColor" />
              <rect x="70" y="70" width="14" height="14" rx="2" />
              <rect x="90" y="70" width="14" height="14" rx="2" />
              <rect x="70" y="90" width="14" height="14" rx="2" />
              <rect x="90" y="90" width="14" height="14" rx="2" />
            </svg>
            <p>QR Code Ordering</p>
          </div>
        </div>
      </section>

      {/* Special Dishes Carousel */}
      <section className="sl-section--full" style={{ background: 'var(--sl-bg-secondary)' }}>
        <div className="sl-section">
          <h2 className="sl-section-heading">
            {t(loc.specialsTitle)} <span>{t(loc.specialsAccent)}</span>
          </h2>
          <SLDishCarousel />
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="sl-section--full">
        <div className="sl-section">
          <h2 className="sl-section-heading">
            {t(loc.galleryTitle)} <span>{t(loc.galleryAccent)}</span>
          </h2>
        </div>
        <div className="sl-gallery-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
          {galleryImages.map((img, i) => (
            <div key={i} className="sl-gallery-item">
              <img src={img.src} alt={t(img.alt)} loading="lazy" />
              <div className="sl-gallery-item-overlay" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

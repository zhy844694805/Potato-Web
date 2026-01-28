import { Link } from 'react-router-dom';
import { useSLLanguage } from '../context/SLLanguageContext';
import { locations, translations } from '../data/siteData';

export default function MainPage() {
  const { t } = useSLLanguage();
  const main = translations.main;

  return (
    <>
      <section className="sl-main-hero">
        <h1>{t(main.heroTitle)}</h1>
        <p className="sl-main-subtitle">{t(main.heroSubtitle)}</p>
      </section>

      <div className="sl-locations-grid">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            to={`/demo/sushi-land/${loc.slug}`}
            className="sl-location-card"
          >
            <img
              className="sl-location-card-bg"
              src={loc.cardImage}
              alt={loc.name}
              loading="lazy"
            />
            <div className="sl-location-card-overlay">
              <h2 className="sl-location-card-name">{loc.shortName}</h2>
              <p className="sl-location-card-province">{loc.province}</p>
              <span className="sl-btn sl-btn--small">{t(main.visitButton)}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

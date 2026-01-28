import { useSLLanguage } from '../context/SLLanguageContext';
import { useSLLocation } from '../context/SLLocationContext';
import { translations } from '../data/siteData';

export default function ContactPage() {
  const { t } = useSLLanguage();
  const location = useSLLocation();
  const ct = translations.contatti;

  return (
    <>
      <section className="sl-page-hero">
        <h1>
          <span>{t(ct.title)}</span>
        </h1>
      </section>

      <section className="sl-section">
        <div className="sl-contact-grid">
          <div className="sl-contact-card">
            <div className="sl-contact-card-label">{t(ct.address)}</div>
            <div className="sl-contact-card-value">{location.address}</div>
          </div>
          <div className="sl-contact-card">
            <div className="sl-contact-card-label">{t(ct.phone)}</div>
            <div className="sl-contact-card-value">
              <a href={`tel:${location.phone}`}>{location.phone}</a>
            </div>
          </div>
          <div className="sl-contact-card">
            <div className="sl-contact-card-label">{t(ct.whatsapp)}</div>
            <div className="sl-contact-card-value">
              <a href={`https://wa.me/${location.whatsapp.replace(/[^0-9+]/g, '')}`}>
                {location.whatsapp}
              </a>
            </div>
          </div>
          <div className="sl-contact-card">
            <div className="sl-contact-card-label">{t(ct.email)}</div>
            <div className="sl-contact-card-value">
              <a href={`mailto:${location.email}`}>{location.email}</a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="sl-contact-hours">
          <h3>{t(ct.hours)}</h3>
          <div className="sl-contact-hour-row">
            <span className="sl-contact-hour-label">{t(ct.lunch)}</span>
            <span className="sl-contact-hour-value">{location.hours.lunch}</span>
          </div>
          <div className="sl-contact-hour-row">
            <span className="sl-contact-hour-label">{t(ct.dinner)}</span>
            <span className="sl-contact-hour-value">{location.hours.dinner}</span>
          </div>
          <div className="sl-contact-hour-row">
            <span className="sl-contact-hour-label"></span>
            <span className="sl-contact-hour-value">{t(location.hours.days)}</span>
          </div>
        </div>

        {/* Parking */}
        <div className="sl-contact-grid" style={{ marginBottom: '24px' }}>
          <div className="sl-contact-card">
            <div className="sl-contact-card-label">{t(ct.parking)}</div>
            <div className="sl-contact-card-value">{t(location.parking)}</div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="sl-map-placeholder">
          <svg className="sl-map-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M24 4C16.268 4 10 10.268 10 18c0 10 14 26 14 26s14-16 14-26c0-7.732-6.268-14-14-14z" />
            <circle cx="24" cy="18" r="5" fill="currentColor" />
          </svg>
          <p>{t(ct.mapPlaceholder)} — {location.shortName}</p>
        </div>
      </section>
    </>
  );
}

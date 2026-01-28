import { useSLLanguage } from '../context/SLLanguageContext';
import { aycePricing, translations } from '../data/siteData';

export default function MenuPage() {
  const { t } = useSLLanguage();
  const menu = translations.menu;

  const handlePdfDownload = (label) => {
    alert(`Demo: ${t(label)} PDF download`);
  };

  return (
    <>
      <section className="sl-page-hero">
        <h1>
          {t(menu.title)} <span>{t(menu.titleAccent)}</span>
        </h1>
      </section>

      <section className="sl-section">
        <div className="sl-pricing-grid">
          {aycePricing.map((plan) => (
            <div
              key={plan.id}
              className={`sl-pricing-card${plan.featured ? ' sl-pricing-card--featured' : ''}`}
            >
              <h3>{t(plan.label)}</h3>
              <p className="sl-pricing-subtitle">{t(plan.subtitle)}</p>
              <div className="sl-pricing-price">
                <sup>&euro;</sup>{plan.price}
              </div>
              <p className="sl-pricing-per">{t(menu.priceLabel)}</p>
              <div className="sl-pricing-details">
                <p>{t(menu.coverLabel)}: &euro;{plan.cover}</p>
                <p>{t(plan.childPrice)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sl-menu-qr-reminder">
          <p>{t(menu.qrReminder)}</p>
        </div>

        <div className="sl-pdf-buttons">
          {menu.pdfButtons.map((btn, i) => (
            <button
              key={i}
              className="sl-btn sl-btn--outline"
              onClick={() => handlePdfDownload(btn)}
            >
              {t(btn)}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

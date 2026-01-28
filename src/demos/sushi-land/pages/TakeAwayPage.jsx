import { useSLLanguage } from '../context/SLLanguageContext';
import { takeawayInfo, translations } from '../data/siteData';

export default function TakeAwayPage() {
  const { t } = useSLLanguage();
  const ta = translations.takeaway;

  return (
    <>
      <section className="sl-page-hero">
        <h1>
          {t(ta.title)} <span>{t(ta.titleAccent)}</span>
        </h1>
      </section>

      <section className="sl-section">
        {/* Pickup & Delivery Cards */}
        <div className="sl-takeaway-grid">
          <div className="sl-takeaway-card">
            <h3>{t(ta.pickupTitle)}</h3>
            <div className="sl-takeaway-stat">
              <span className="sl-takeaway-stat-label">{t(ta.discount)}</span>
              <span className="sl-takeaway-stat-value">{takeawayInfo.pickup.discount}</span>
            </div>
            <div className="sl-takeaway-stat">
              <span className="sl-takeaway-stat-label">{t(ta.minOrder)}</span>
              <span className="sl-takeaway-stat-value">{takeawayInfo.pickup.minOrder}</span>
            </div>
            <p className="sl-takeaway-desc">{t(takeawayInfo.pickup.description)}</p>
          </div>

          <div className="sl-takeaway-card">
            <h3>{t(ta.deliveryTitle)}</h3>
            <div className="sl-takeaway-stat">
              <span className="sl-takeaway-stat-label">{t(ta.discount)}</span>
              <span className="sl-takeaway-stat-value">{takeawayInfo.delivery.discount}</span>
            </div>
            <div className="sl-takeaway-stat">
              <span className="sl-takeaway-stat-label">{t(ta.minOrder)}</span>
              <span className="sl-takeaway-stat-value">{takeawayInfo.delivery.minOrder}</span>
            </div>
            <div className="sl-takeaway-stat">
              <span className="sl-takeaway-stat-label">{t(ta.maxDistance)}</span>
              <span className="sl-takeaway-stat-value">{takeawayInfo.delivery.maxDistance}</span>
            </div>
            <p className="sl-takeaway-desc">{t(takeawayInfo.delivery.description)}</p>
          </div>
        </div>

        {/* Sushi Land Boxes */}
        <h2 className="sl-section-heading">
          <span>{t(ta.boxesTitle)}</span>
        </h2>
        <table className="sl-boxes-table">
          <thead>
            <tr>
              <th>Box</th>
              <th>{t(ta.pieces)}</th>
              <th>Prezzo / Price</th>
            </tr>
          </thead>
          <tbody>
            {takeawayInfo.boxes.map((box, i) => (
              <tr key={i}>
                <td>{box.name}</td>
                <td>{box.pieces} {t(ta.pieces)}</td>
                <td className="sl-box-price">&euro;{box.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Free Drink Tiers */}
        <h2 className="sl-section-heading">
          <span>{t(ta.freeDrinkTitle)}</span>
        </h2>
        <div className="sl-drink-tiers">
          {takeawayInfo.freeDrinkTiers.map((tier, i) => (
            <div key={i} className="sl-drink-tier">
              <div className="sl-drink-tier-min">
                {t(ta.orderFrom)} {tier.minOrder}
              </div>
              <div className="sl-drink-tier-reward">{t(tier.drink)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

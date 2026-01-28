import { Link, useParams } from 'react-router-dom';
import { useSLLanguage } from '../context/SLLanguageContext';
import { filosofiaContent, translations } from '../data/siteData';

export default function FilosofiaPage() {
  const { t } = useSLLanguage();
  const { locationSlug } = useParams();

  return (
    <>
      <section className="sl-page-hero">
        <h1>
          {t(filosofiaContent[0].heading)} <span>{t(filosofiaContent[0].headingAccent)}</span>
        </h1>
      </section>

      <section className="sl-section">
        {filosofiaContent.map((item, index) => (
          <div
            key={item.id}
            className={`sl-filosofia-section${index % 2 !== 0 ? ' sl-filosofia-section--reverse' : ''}`}
          >
            <div className="sl-filosofia-text">
              <h3>
                {t(item.heading)} <span>{t(item.headingAccent)}</span>
              </h3>
              <p>{t(item.text)}</p>
            </div>
            <img
              className="sl-filosofia-img"
              src={item.image}
              alt={t(item.headingAccent)}
              loading="lazy"
            />
          </div>
        ))}

        <div className="sl-filosofia-cta">
          <Link to={`/demo/sushi-land/${locationSlug}/menu`} className="sl-btn">
            {t(translations.nav.menu)}
          </Link>
        </div>
      </section>
    </>
  );
}

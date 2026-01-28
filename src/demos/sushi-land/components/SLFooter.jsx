import { Link } from 'react-router-dom';
import { useSLLanguage } from '../context/SLLanguageContext';
import { locations, translations } from '../data/siteData';

export default function SLFooter() {
  const { t } = useSLLanguage();
  const footer = translations.footer;

  return (
    <footer className="sl-footer">
      <div className="sl-footer-content">
        <div className="sl-footer-section">
          <h4>{t(footer.allLocations)}</h4>
          <ul className="sl-footer-links">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link to={`/demo/sushi-land/${loc.slug}`}>{loc.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="sl-footer-section">
          <h4>{t(footer.followUs)}</h4>
          <div className="sl-footer-social">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="TikTok">tk</a>
          </div>
        </div>
        <div className="sl-footer-section">
          <h4>Sushi Land</h4>
          <ul className="sl-footer-links">
            <li>
              <Link to="/demos" className="sl-footer-back">{t(footer.backToPortfolio)}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sl-footer-bottom">
        <span className="sl-footer-copyright">{footer.copyright}</span>
        <Link to="/demos" className="sl-footer-back">{t(footer.backToPortfolio)}</Link>
      </div>
    </footer>
  );
}

import { useSLLanguage } from '../context/SLLanguageContext';
import { appInfo, translations } from '../data/siteData';

export default function AppPage() {
  const { t } = useSLLanguage();
  const app = translations.app;

  return (
    <>
      <section className="sl-page-hero">
        <h1>
          <span>App</span> Sushi Land
        </h1>
      </section>

      <section className="sl-section">
        <div className="sl-app-content">
          <div className="sl-app-text">
            <h2>{t(appInfo.title)}</h2>
            <p>{t(appInfo.description)}</p>

            <ul className="sl-app-features">
              {appInfo.features.map((feat, i) => (
                <li key={i}>{t(feat)}</li>
              ))}
            </ul>

            <div className="sl-store-buttons">
              <a href="#" className="sl-store-btn" onClick={(e) => e.preventDefault()}>
                <span className="sl-store-btn-icon">&#xf179;</span>
                <span className="sl-store-btn-text">
                  <small>{t(app.appStore)}</small>
                  <strong>App Store</strong>
                </span>
              </a>
              <a href="#" className="sl-store-btn" onClick={(e) => e.preventDefault()}>
                <span className="sl-store-btn-icon">&#x25B6;</span>
                <span className="sl-store-btn-text">
                  <small>{t(app.googlePlay)}</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>

          <div className="sl-app-mockup">
            <svg className="sl-app-mockup-icon" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="20" y="5" width="40" height="70" rx="6" />
              <line x1="20" y1="15" x2="60" y2="15" />
              <line x1="20" y1="62" x2="60" y2="62" />
              <circle cx="40" cy="68" r="3" />
              <rect x="28" y="22" width="24" height="4" rx="1" fill="currentColor" opacity="0.3" />
              <rect x="28" y="30" width="16" height="3" rx="1" fill="currentColor" opacity="0.2" />
              <rect x="28" y="37" width="24" height="12" rx="2" fill="currentColor" opacity="0.15" />
              <rect x="28" y="53" width="10" height="4" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
            <p>Sushi Land App</p>
          </div>
        </div>
      </section>
    </>
  );
}

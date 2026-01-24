import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { siteConfig, translations, categories } from '../data/siteData';

export default function TZFooter() {
  const { t } = useTZLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const footer = translations.footer;
  const nav = translations.nav;
  const basePath = '/demo/tech-zone';

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="tz-footer">
      <div className="tz-footer-glow-line"></div>
      <div className="tz-container">
        <div className="tz-footer-content">
          {/* Top Section: Brand & Newsletter */}
          <div className="tz-footer-top">
            <div className="tz-footer-brand-area">
              <Link to={basePath} className="tz-footer-logo">
                <span className="tz-logo-icon">⚡</span>
                <span className="tz-logo-text">{t(siteConfig.name)}</span>
              </Link>
              <p className="tz-footer-mission">
                {t(siteConfig.description)}
              </p>
            </div>
            
            <div className="tz-footer-newsletter-area">
              <h4>{t(footer.newsletterTitle)}</h4>
              <p>{t(footer.newsletterDesc)}</p>
              <form onSubmit={handleSubscribe} className="tz-newsletter-modern">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(footer.yourEmail)}
                  required
                />
                <button type="submit" className="tz-btn-icon">
                  →
                </button>
              </form>
              {subscribed && (
                <span className="tz-subscribe-success-msg">✓ {t(footer.subscribed)}</span>
              )}
            </div>
          </div>

          <div className="tz-footer-divider"></div>

          {/* Middle Section: Links */}
          <div className="tz-footer-links-grid">
            <div className="tz-footer-col">
              <h5>{t(footer.shopLinks)}</h5>
              <ul>
                <li><Link to={`${basePath}/shop`}>{t(nav.shop)}</Link></li>
                <li><Link to={`${basePath}/shop?sort=newest`}>{t(translations.common.new)}</Link></li>
                <li><Link to={`${basePath}/shop?sale=true`}>{t(translations.common.sale)}</Link></li>
              </ul>
            </div>

            <div className="tz-footer-col">
              <h5>{t(translations.common.allCategories)}</h5>
              <ul>
                {categories.slice(0, 4).map(cat => (
                  <li key={cat.id}>
                    <Link to={`${basePath}/shop/${cat.id}`}>{t(cat.name)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tz-footer-col">
              <h5>{t(footer.supportLinks)}</h5>
              <ul>
                <li><Link to={`${basePath}/contact`}>{t(nav.contact)}</Link></li>
                <li><Link to={`${basePath}/about`}>{t(footer.faq)}</Link></li>
                <li><Link to={`${basePath}/about`}>{t(footer.shippingPolicy)}</Link></li>
              </ul>
            </div>

            <div className="tz-footer-col">
              <h5>{t(siteConfig.name)}</h5>
              <ul>
                <li><Link to={`${basePath}/about`}>{t(nav.about)}</Link></li>
                <li><Link to={`${basePath}/about`}>{t(footer.careers)}</Link></li>
                <li><Link to={`${basePath}/about`}>{t(footer.privacyPolicy)}</Link></li>
              </ul>
            </div>
          </div>

          <div className="tz-footer-divider"></div>

          {/* Bottom Section: Copyright & Social */}
          <div className="tz-footer-bottom">
            <p className="tz-copyright">
              &copy; {new Date().getFullYear()} {t(siteConfig.name)}. {t(footer.copyright)}.
            </p>
            
            <div className="tz-social-links">
              <a href="#" className="tz-social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" className="tz-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="tz-social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
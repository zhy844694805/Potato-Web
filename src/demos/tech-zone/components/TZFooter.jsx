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
      <div className="tz-footer-main">
        <div className="tz-footer-container">
          {/* Brand Section */}
          <div className="tz-footer-brand">
            <Link to={basePath} className="tz-footer-logo">
              <span className="tz-logo-icon">⚡</span>
              <span className="tz-logo-text">{t(siteConfig.name)}</span>
            </Link>
            <p className="tz-footer-desc">{t(siteConfig.description)}</p>
            <div className="tz-footer-social">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="tz-footer-section">
            <h4>{t(footer.quickLinks)}</h4>
            <ul>
              <li><Link to={basePath}>{t(nav.home)}</Link></li>
              <li><Link to={`${basePath}/shop`}>{t(nav.shop)}</Link></li>
              <li><Link to={`${basePath}/about`}>{t(nav.about)}</Link></li>
              <li><Link to={`${basePath}/contact`}>{t(nav.contact)}</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="tz-footer-section">
            <h4>{t(translations.common.allCategories)}</h4>
            <ul>
              {categories.slice(0, 5).map(cat => (
                <li key={cat.id}>
                  <Link to={`${basePath}/shop/${cat.id}`}>{t(cat.name)}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="tz-footer-section">
            <h4>{t(footer.customerService)}</h4>
            <ul>
              <li><Link to={`${basePath}/contact`}>{t(footer.faq)}</Link></li>
              <li><Link to={`${basePath}/contact`}>{t(footer.shipping)}</Link></li>
              <li><Link to={`${basePath}/contact`}>{t(footer.returns)}</Link></li>
              <li><Link to={`${basePath}/contact`}>{t(footer.privacyPolicy)}</Link></li>
              <li><Link to={`${basePath}/contact`}>{t(footer.termsOfService)}</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="tz-footer-section tz-footer-newsletter">
            <h4>{t(footer.newsletter)}</h4>
            <p>{t(siteConfig.tagline)}</p>
            <form onSubmit={handleSubscribe} className="tz-newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(footer.enterEmail)}
                required
              />
              <button type="submit">{t(footer.subscribe)}</button>
            </form>
            {subscribed && (
              <p className="tz-subscribe-success">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="tz-footer-contact">
        <div className="tz-footer-container">
          <div className="tz-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>{siteConfig.contact.email}</span>
          </div>
          <div className="tz-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>{siteConfig.contact.phone}</span>
          </div>
          <div className="tz-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>{t(siteConfig.contact.address)}</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="tz-footer-bottom">
        <div className="tz-footer-container">
          <p>&copy; {new Date().getFullYear()} {t(siteConfig.name)}. {t(footer.copyright)}.</p>
          <p className="tz-demo-notice">Demo Site - Not a real store</p>
        </div>
      </div>
    </footer>
  );
}

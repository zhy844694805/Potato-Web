import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSLLanguage } from '../context/SLLanguageContext';
import { translations } from '../data/siteData';

export default function SLHeader({ locationSlug, minimal }) {
  const { language, setLanguage, t } = useSLLanguage();
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const nav = translations.nav;

  useEffect(() => {
    if (minimal) return;
    const handleScroll = () => {
      setFloating(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [minimal]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const basePath = locationSlug ? `/demo/sushi-land/${locationSlug}` : '/demo/sushi-land';

  const isActive = (path) => {
    const fullPath = `${basePath}${path}`;
    return location.pathname === fullPath ? 'sl-nav-active' : '';
  };

  return (
    <header className={`sl-header ${minimal || floating ? 'sl-header--floating' : 'sl-header--transparent'}`}>
      <Link to="/demo/sushi-land" className="sl-header-logo">
        <svg className="sl-header-logo-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="20" r="18" />
          <path d="M10 20 C10 14, 30 14, 30 20" />
          <path d="M12 20 L28 20" />
          <circle cx="16" cy="17" r="1.5" fill="currentColor" />
          <circle cx="24" cy="17" r="1.5" fill="currentColor" />
        </svg>
        <span className="sl-header-logo-text">
          Sushi <span>Land</span>
        </span>
      </Link>

      {!minimal && locationSlug && (
        <div className={`sl-header-center${menuOpen ? ' sl-header-center--open' : ''}`}>
          <nav>
            <ul className="sl-header-nav">
              <li><Link to={basePath} className={isActive('')}>{t(nav.home)}</Link></li>
              <li><Link to={`${basePath}/filosofia`} className={isActive('/filosofia')}>{t(nav.filosofia)}</Link></li>
              <li><Link to={`${basePath}/menu`} className={isActive('/menu')}>{t(nav.menu)}</Link></li>
              <li><Link to={`${basePath}/take-away`} className={isActive('/take-away')}>{t(nav.takeaway)}</Link></li>
              <li><Link to={`${basePath}/app`} className={isActive('/app')}>{t(nav.app)}</Link></li>
              <li><Link to={`${basePath}/contatti`} className={isActive('/contatti')}>{t(nav.contatti)}</Link></li>
            </ul>
          </nav>
        </div>
      )}

      <div className="sl-header-right">
        <div className="sl-lang-switcher">
          <button
            className={`sl-lang-btn${language === 'it' ? ' sl-lang-btn--active' : ''}`}
            onClick={() => setLanguage('it')}
          >
            IT
          </button>
          <button
            className={`sl-lang-btn${language === 'en' ? ' sl-lang-btn--active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={`sl-lang-btn${language === 'zh' ? ' sl-lang-btn--active' : ''}`}
            onClick={() => setLanguage('zh')}
          >
            中
          </button>
        </div>

        {!minimal && locationSlug && (
          <button
            className={`sl-menu-toggle${menuOpen ? ' sl-menu-toggle--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </header>
  );
}

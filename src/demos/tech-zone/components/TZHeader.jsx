import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTZLanguage } from '../context/TZLanguageContext';
import { useTZCart } from '../context/TZCartContext';
import { useTZWishlist } from '../context/TZWishlistContext';
import { useTZAdmin } from '../context/TZAdminContext';
import { siteConfig, translations } from '../data/siteData';
import TZSearchBar from './TZSearchBar';

export default function TZHeader() {
  const { language, setLanguage, t } = useTZLanguage();
  const { cartCount, toggleCart } = useTZCart();
  const { wishlistCount } = useTZWishlist();
  const { isAuthenticated } = useTZAdmin();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const nav = translations.nav;
  const basePath = '/demo/tech-zone';

  const navLinks = [
    { to: '', label: nav.home },
    { to: '/shop', label: nav.shop },
    { to: '/about', label: nav.about },
    { to: '/contact', label: nav.contact }
  ];

  const isActive = (path) => {
    const currentPath = location.pathname;
    const fullPath = basePath + path;
    if (path === '') {
      return currentPath === basePath || currentPath === basePath + '/';
    }
    return currentPath.startsWith(fullPath);
  };

  return (
    <header className="tz-header">
      <div className="tz-header-container">
        {/* Logo */}
        <Link to={basePath} className="tz-logo">
          <span className="tz-logo-icon">⚡</span>
          <span className="tz-logo-text">{t(siteConfig.name)}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="tz-nav-desktop">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={basePath + link.to}
              className={`tz-nav-link ${isActive(link.to) ? 'active' : ''}`}
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="tz-header-actions">
          {/* Search Toggle (Redesigned) */}
          <button
            className="tz-search-trigger"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <span className="tz-search-trigger-text">{t(nav.search)}...</span>
            <span className="tz-search-shortcut">⌘K</span>
          </button>

          {/* Wishlist */}
          <Link to={`${basePath}/wishlist`} className="tz-header-btn tz-wishlist-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            {wishlistCount > 0 && (
              <span className="tz-badge">{wishlistCount}</span>
            )}
          </Link>

          {/* Cart */}
          <button className="tz-header-btn tz-cart-btn" onClick={toggleCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && (
              <span className="tz-badge">{cartCount}</span>
            )}
          </button>

          {/* Admin Link */}
          {isAuthenticated && (
            <Link to={`${basePath}/admin`} className="tz-header-btn tz-admin-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </Link>
          )}

          {/* Language Selector */}
          <div className="tz-lang-selector">
            <button
              className={`tz-lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={`tz-lang-btn ${language === 'zh' ? 'active' : ''}`}
              onClick={() => setLanguage('zh')}
            >
              中
            </button>
            <button
              className={`tz-lang-btn ${language === 'it' ? 'active' : ''}`}
              onClick={() => setLanguage('it')}
            >
              IT
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="tz-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`tz-hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      {/* Search Bar (expandable) */}
      <div className={`tz-search-container ${searchOpen ? 'open' : ''}`}>
        <TZSearchBar onClose={() => setSearchOpen(false)} />
      </div>

      {/* Mobile Menu */}
      <div className={`tz-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="tz-mobile-nav">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={basePath + link.to}
              className={`tz-mobile-link ${isActive(link.to) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(link.label)}
            </Link>
          ))}
          <Link
            to={`${basePath}/wishlist`}
            className="tz-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t(nav.wishlist)} {wishlistCount > 0 && `(${wishlistCount})`}
          </Link>
          {isAuthenticated && (
            <Link
              to={`${basePath}/admin`}
              className="tz-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(nav.admin)}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

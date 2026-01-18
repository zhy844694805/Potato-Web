import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDCLanguage } from '../DragonCourt'
import { siteInfo, navItems } from '../data/siteData'

function DCHeader() {
  const { language, setLanguage, t } = useDCLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const basePath = '/demo/dragon-court'

  return (
    <>
      <header className={`dc-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="dc-header-inner">
          <Link to={basePath} className="dc-logo">
            <span className="dc-logo-icon">龍</span>
            <div className="dc-logo-text">
              <span className="dc-logo-zh">{t(siteInfo.name)}</span>
              <span className="dc-logo-en">DRAGON COURT</span>
            </div>
          </Link>

          <nav className="dc-nav-desktop">
            {navItems.map(item => (
              <Link
                key={item.id}
                to={item.path ? `${basePath}/${item.path}` : basePath}
                className={`dc-nav-link ${location.pathname === (item.path ? `${basePath}/${item.path}` : basePath) ? 'active' : ''}`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          <div className="dc-header-actions">
            <div className="dc-lang-switch">
              {['zh', 'en', 'it'].map(l => (
                <button
                  key={l}
                  className={`dc-lang-btn ${language === l ? 'active' : ''}`}
                  onClick={() => setLanguage(l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <Link to={`${basePath}/reservation`} className="dc-header-cta">
              {language === 'zh' ? '预约' : 'Reserve'}
            </Link>
            <button className="dc-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span className={menuOpen ? 'open' : ''}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className={`dc-mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button className="dc-mobile-close" onClick={() => setMenuOpen(false)}>
          <span></span><span></span>
        </button>
        <div className="dc-mobile-nav-content">
          <div className="dc-mobile-logo">
            <span className="dc-dragon-char">龍</span>
            <span>龙庭</span>
          </div>
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path ? `${basePath}/${item.path}` : basePath}
              className="dc-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(item.label)}
            </Link>
          ))}
          <div className="dc-mobile-lang">
            {['zh', 'en', 'it'].map(l => (
              <button
                key={l}
                className={`dc-lang-btn ${language === l ? 'active' : ''}`}
                onClick={() => setLanguage(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default DCHeader

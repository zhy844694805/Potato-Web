import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useRestaurantLanguage } from '../SakuraMilano'
import { translations } from '../data/restaurant-data'

function SushiHeader() {
  const { language, setLanguage } = useRestaurantLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[language]

  const navItems = [
    { path: '/demo/sakura-milano', label: t.nav.home, end: true },
    { path: '/demo/sakura-milano/menu', label: t.nav.menu },
    { path: '/demo/sakura-milano/reservation', label: t.nav.reservation },
    { path: '/demo/sakura-milano/about', label: t.nav.about },
    { path: '/demo/sakura-milano/contact', label: t.nav.contact }
  ]

  const languages = [
    { code: 'it', label: 'IT' },
    { code: 'en', label: 'EN' },
    { code: 'zh', label: '中' }
  ]

  return (
    <header className="sushi-header">
      <div className="sushi-header-inner">
        <Link to="/demo/sakura-milano" className="sushi-logo">
          <span className="sushi-logo-icon">🌸</span>
          <span className="sushi-logo-text">Sakura Milano</span>
        </Link>

        <button
          className="sushi-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`sushi-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `sushi-nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="sushi-lang-switch">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`sushi-lang-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default SushiHeader

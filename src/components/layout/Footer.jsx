import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-brutalist">
      {/* Marquee Section */}
      <div className="footer-marquee">
        <div className="marquee-content">
          <span>AVAILABLE FOR NEW PROJECTS • GET IN TOUCH • START YOUR DIGITAL JOURNEY • </span>
          <span>AVAILABLE FOR NEW PROJECTS • GET IN TOUCH • START YOUR DIGITAL JOURNEY • </span>
          <span>AVAILABLE FOR NEW PROJECTS • GET IN TOUCH • START YOUR DIGITAL JOURNEY • </span>
          <span>AVAILABLE FOR NEW PROJECTS • GET IN TOUCH • START YOUR DIGITAL JOURNEY • </span>
        </div>
      </div>

      <div className="footer-main-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-giant-text">
            POTATO<br />WEB
          </div>
          <div className="footer-slogan font-mono">
            // DIGITAL AGENCY<br />
            // EST. 2024
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-col links-col">
          <div className="footer-col-header font-mono">[01] SITEMAP</div>
          <nav className="footer-nav">
            <Link to="/">{t('nav.home')}</Link>
            <Link to="/services">{t('nav.services')}</Link>
            <Link to="/demos">{t('nav.demos')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/blog">{t('nav.blog')}</Link>
          </nav>
        </div>

        {/* Links Column 2 */}
        <div className="footer-col links-col">
          <div className="footer-col-header font-mono">[02] CONNECT</div>
          <nav className="footer-nav">
            <Link to="/contact">{t('nav.contact')}</Link>
            <Link to="/quote">{t('nav.quote')}</Link>
            <a href="mailto:hello@potatoweb.it">HELLO@POTATOWEB.IT</a>
            <a href="tel:+39123456789">+39 123 456 789</a>
          </nav>
        </div>

        {/* Legal/Social Column */}
        <div className="footer-col links-col">
          <div className="footer-col-header font-mono">[03] LEGAL</div>
          <nav className="footer-nav">
            <Link to="/privacy">PRIVACY POLICY</Link>
            <Link to="/terms">TERMS OF USE</Link>
            <Link to="/cookie">COOKIE POLICY</Link>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar font-mono">
        <div className="copyright">
          &copy; {currentYear} POTATO WEB. ALL RIGHTS RESERVED.
        </div>
        <div className="system-status">
          <span className="status-dot"></span> SYSTEM: ONLINE
        </div>
        <div className="location">
          MILANO, IT :: 45.4642° N, 9.1900° E
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
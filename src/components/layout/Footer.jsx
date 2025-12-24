import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">{t('footer.brand')}</div>
          <nav className="footer-links">
            <Link to="/services">{t('footer.services')}</Link>
            <Link to="/pricing">{t('footer.pricing')}</Link>
            <Link to="/portfolio">{t('footer.portfolio')}</Link>
            <Link to="/blog">{t('footer.blog')}</Link>
            <Link to="/faq">{t('footer.faq')}</Link>
            <Link to="/testimonials">{t('footer.testimonials')}</Link>
            <Link to="/about">{t('footer.about')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <div className="copyright">{t('footer.copyright')}</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

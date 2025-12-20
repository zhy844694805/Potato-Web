import { Link } from 'react-router-dom'
import { useRestaurantLanguage } from '../SakuraMilano'
import { translations, restaurantInfo } from '../data/restaurant-data'

function SushiFooter() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]

  return (
    <footer className="sushi-footer">
      <div className="sushi-footer-inner">
        <div className="sushi-footer-section">
          <h4>Sakura Milano</h4>
          <p>{t.footer.tagline}</p>
          <div className="sushi-social-links" style={{ marginTop: '1rem' }}>
            <a
              href={restaurantInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="sushi-social-link"
              aria-label="Instagram"
            >
              📷
            </a>
            <a
              href={restaurantInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="sushi-social-link"
              aria-label="Facebook"
            >
              👤
            </a>
            <a
              href={restaurantInfo.social.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="sushi-social-link"
              aria-label="TripAdvisor"
            >
              ✈️
            </a>
          </div>
        </div>

        <div className="sushi-footer-section">
          <h4>{t.reservation.info.hours}</h4>
          <p>
            {restaurantInfo.hours.lunch.days[language]}<br />
            {t.reservation.form.lunch}: {restaurantInfo.hours.lunch.time}<br />
            {t.reservation.form.dinner}: {restaurantInfo.hours.dinner.time}
          </p>
          <p style={{ marginTop: '0.5rem', color: 'var(--sushi-red-light)' }}>
            {restaurantInfo.hours.closed[language]}:{' '}
            {language === 'it' ? 'Chiuso' : language === 'zh' ? '休息' : 'Closed'}
          </p>
        </div>

        <div className="sushi-footer-section">
          <h4>{t.contact.title}</h4>
          <p>
            {restaurantInfo.address.street}<br />
            {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
          </p>
          <a href={`tel:${restaurantInfo.phone}`}>{restaurantInfo.phone}</a>
          <a href={`mailto:${restaurantInfo.email}`}>{restaurantInfo.email}</a>
        </div>

        <div className="sushi-footer-section">
          <h4>Menu</h4>
          <Link to="/demo/sakura-milano">{t.nav.home}</Link>
          <Link to="/demo/sakura-milano/menu">{t.nav.menu}</Link>
          <Link to="/demo/sakura-milano/reservation">{t.nav.reservation}</Link>
          <Link to="/demo/sakura-milano/about">{t.nav.about}</Link>
          <Link to="/demo/sakura-milano/contact">{t.nav.contact}</Link>
        </div>
      </div>

      <div className="sushi-footer-bottom">
        <p>{t.footer.copyright}</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          <Link to="/portfolio/italian-sushi-restaurant" style={{ color: 'var(--sushi-gold)' }}>
            ← {language === 'zh' ? '返回案例详情' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default SushiFooter

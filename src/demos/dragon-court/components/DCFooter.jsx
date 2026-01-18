import { Link } from 'react-router-dom'
import { useDCLanguage } from '../DragonCourt'
import { siteInfo, navItems, contactInfo } from '../data/siteData'

function DCFooter() {
  const { language, t } = useDCLanguage()
  const basePath = '/demo/dragon-court'

  return (
    <footer className="dc-footer">
      <div className="dc-footer-main">
        <div className="dc-footer-brand">
          <div className="dc-footer-logo">
            <span className="dc-footer-icon">龍</span>
            <div>
              <span className="dc-footer-name">{t(siteInfo.name)}</span>
              <span className="dc-footer-tagline">{t(siteInfo.tagline)}</span>
            </div>
          </div>
          <p className="dc-footer-desc">
            {language === 'zh'
              ? '传承千年宫廷御膳精髓，为您呈现极致中华美食体验。'
              : 'Inheriting thousand-year imperial cuisine, presenting the ultimate Chinese culinary experience.'}
          </p>
        </div>

        <div className="dc-footer-nav">
          <h4>{language === 'zh' ? '快速链接' : 'Quick Links'}</h4>
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <Link to={item.path ? `${basePath}/${item.path}` : basePath}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="dc-footer-contact">
          <h4>{language === 'zh' ? '联系我们' : 'Contact Us'}</h4>
          <ul>
            <li>
              <span className="dc-footer-icon-sm">📍</span>
              <span>{contactInfo.address}</span>
            </li>
            <li>
              <span className="dc-footer-icon-sm">📞</span>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <span className="dc-footer-icon-sm">✉️</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>

        <div className="dc-footer-hours">
          <h4>{language === 'zh' ? '营业时间' : 'Opening Hours'}</h4>
          <ul>
            {contactInfo.hours.map((item, i) => (
              <li key={i} className={item.closed ? 'dc-closed' : ''}>
                {t(item.day)}: {item.closed ? (language === 'zh' ? '休息' : 'Closed') : item.time}
              </li>
            ))}
          </ul>
          <div className="dc-footer-social">
            {contactInfo.social.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                <span>{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="dc-footer-bottom">
        <p>© 2024 Dragon Court Milano. {language === 'zh' ? '版权所有' : 'All rights reserved.'}</p>
        <p className="dc-footer-credit">
          {language === 'zh' ? '由 ' : 'Crafted by '}
          <a href="https://aimodel.it" target="_blank" rel="noopener noreferrer">土豆建站</a>
          {language === 'zh' ? ' 精心打造' : ''}
        </p>
      </div>
    </footer>
  )
}

export default DCFooter

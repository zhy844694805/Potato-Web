import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import { getServiceById } from '../../data/services'
import './ServiceDetail.css'

function ServiceDetail() {
  const { id } = useParams()
  const { t, language } = useLanguageText()
  const service = getServiceById(id)

  if (!service) {
    return <Navigate to="/404" replace />
  }

  const descriptionParagraphs = service.longDescription[language].split('\n\n')

  return (
    <div className="service-detail-page">
      <SEO
        title={service.title[language]}
        description={service.description[language]}
        path={`/services/${service.id}`}
        type="article"
      />
      
      <div className="brutalist-container">
        {/* Hero */}
        <section className="detail-hero-brutalist">
          <div className="breadcrumbs font-mono">
            <Link to="/services">SERVICES</Link> / {service.id}
          </div>
          
          <div className="detail-hero-grid">
            <div className="detail-hero-icon">
              {service.icon}
            </div>
            <div className="detail-hero-content">
              <h1 className="detail-title">{service.title[language]}</h1>
              <div className="detail-tags font-mono">
                {service.tags.map((tag, index) => (
                  <span key={index} className="detail-tag">
                    #{tag[language]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <div className="detail-content-grid">
          {/* Main Description */}
          <section className="detail-main-section">
            <h2 className="section-label font-mono">// DESCRIPTION</h2>
            <div className="detail-text">
              {descriptionParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Features Sidebar */}
          <section className="detail-features-section">
            <h2 className="section-label font-mono">// SPECIFICATIONS</h2>
            <ul className="detail-features-list">
              {service.features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="check-mark">::</span>
                  {feature[language]}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="detail-actions">
          <Link to="/contact" className="btn-brutalist big full-width">
            {t('开始项目', 'START PROJECT', 'INIZIA PROGETTO')}
          </Link>
          <Link to="/services" className="btn-brutalist outline full-width">
            {t('返回列表', 'BACK TO LIST', 'TORNA ALLA LISTA')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
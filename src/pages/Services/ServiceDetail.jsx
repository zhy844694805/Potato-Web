import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import Button from '../../components/ui/Button'
import { getServiceById } from '../../data/services'
import './ServiceDetail.css'

function ServiceDetail() {
  const { id } = useParams()
  const { language } = useLanguage()
  const service = getServiceById(id)
  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

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
      <div className="container">
        <section className="service-detail-hero">
          <div className="service-detail-icon">{service.icon}</div>
          <h1 className="service-detail-title">{service.title[language]}</h1>
          <p className="service-detail-subtitle">{service.description[language]}</p>
          <div className="service-detail-tags">
            {service.tags.map((tag, index) => (
              <span key={index} className="service-tag">
                {tag[language]}
              </span>
            ))}
          </div>
        </section>

        <section className="service-detail-description">
          <h2>{t('服务详情', 'Service Details', 'Dettagli del Servizio')}</h2>
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="service-detail-features">
          <h2>{t('服务内容', 'What We Offer', 'Cosa Offriamo')}</h2>
          <div className="features-list">
            {service.features.map((feature, index) => (
              <div key={index} className="feature-list-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature[language]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="service-detail-cta">
          <h2>{t('开始您的项目', 'Start Your Project', 'Inizia il Tuo Progetto')}</h2>
          <p>
            {t('准备好开始了吗？联系我们讨论您的需求。',
              'Ready to get started? Contact us to discuss your needs.',
              'Pronto per iniziare? Contattaci per discutere le tue esigenze.')}
          </p>
          <div className="cta-buttons">
            <Link to="/services">
              <Button variant="secondary">
                {t('返回服务列表', 'Back to Services', 'Torna ai Servizi')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary">
                {t('联系我们', 'Contact Us', 'Contattaci')}
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceDetail

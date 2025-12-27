import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { serviceSchema } from '../../utils/schemas'
import ServiceCard from '../../components/business/ServiceCard'
import Button from '../../components/ui/Button'
import { services } from '../../data/services'
import './Services.css'

function Services() {
  const { language } = useLanguage()

  const seoData = {
    zh: {
      title: '服务项目',
      description: '独立开发者提供Web开发、全栈开发、网站维护、技术咨询等专业服务',
      keywords: '独立开发者,Web开发,全栈开发,网站维护,技术咨询'
    },
    en: {
      title: 'Services',
      description: 'Independent developer offering web development, full-stack development, website maintenance, and technical consultation',
      keywords: 'independent developer,web development,full stack,website maintenance,technical consultation'
    },
    it: {
      title: 'Servizi',
      description: 'Sviluppatore indipendente che offre sviluppo web, sviluppo full-stack, manutenzione siti e consulenza tecnica',
      keywords: 'sviluppatore indipendente,sviluppo web,full stack,manutenzione siti,consulenza tecnica'
    }
  }

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  return (
    <div className="services-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/services"
      />
      <StructuredData data={serviceSchema(language)} />
      <div className="container">
        <section className="services-hero">
          <h1 className="page-title">
            {t('服务项目', 'Services', 'Servizi')}
          </h1>
          <p className="page-subtitle">
            {t('为你提供专业的Web开发和技术服务',
              'Providing professional web development and technical services',
              'Fornendo servizi professionali di sviluppo web e tecnici')}
          </p>
        </section>

        <section className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-detail">
              <div className="service-detail-header">
                <ServiceCard service={service} />
              </div>
              <div className="service-detail-content">
                <h3>{t('服务特点', 'Features', 'Caratteristiche')}</h3>
                <ul className="feature-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature[language]}</li>
                  ))}
                </ul>
                {service.longDescription && (
                  <p className="service-long-desc">
                    {service.longDescription[language]}
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="services-cta">
          <h2>{t('准备开始你的项目？', 'Ready to Start Your Project?', 'Pronto per Iniziare il Tuo Progetto?')}</h2>
          <p>
            {t('联系我，获取项目咨询和报价',
              'Contact me for project consultation and quotes',
              'Contattami per consulenza e preventivi')}
          </p>
          <Link to="/contact">
            <Button variant="primary">
              {t('立即咨询', 'Contact Now', 'Contatta Ora')}
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Services

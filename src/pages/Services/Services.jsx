import { Link } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { serviceSchema } from '../../utils/schemas'
import ServiceCard from '../../components/business/ServiceCard'
import Button from '../../components/ui/Button'
import { services } from '../../data/services'
import './Services.css'

function Services() {
  const { t, language } = useLanguageText()

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

  return (
    <div className="services-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/services"
      />
      <StructuredData data={serviceSchema(language)} />
      
      <div className="brutalist-container">
        {/* Header Section */}
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// SERVICES</span>
            <span>SYSTEM_CAPABILITIES_LIST</span>
          </div>
          <h1 className="page-title-giant">
            {t('核心服务', 'OUR SERVICES', 'I NOSTRI SERVIZI')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        {/* Services Grid */}
        <section className="services-grid-layout">
          {services.map((service, index) => (
            <div key={service.id} className="service-grid-item">
              <div className="service-index font-mono">{(index + 1).toString().padStart(2, '0')}</div>
              <ServiceCard service={service} />
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="services-cta-brutalist">
          <div className="cta-content">
            <h2 className="cta-title">
              {t('准备开始？', 'READY TO START?', 'PRONTO PER INIZIARE?')}
            </h2>
            <p className="cta-desc font-mono">
              {t('联系我，获取项目咨询和报价',
                'INITIALIZE PROJECT CONSULTATION SEQUENCE.',
                'INIZIALIZZA SEQUENZA DI CONSULENZA.')}
            </p>
            <Link to="/contact" className="btn-brutalist big">
              {t('立即咨询', 'CONTACT NOW', 'CONTATTA ORA')}
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
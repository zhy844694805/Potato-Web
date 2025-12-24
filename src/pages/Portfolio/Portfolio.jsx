import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData, { breadcrumbSchema } from '../../components/StructuredData'
import PortfolioCard from '../../components/business/PortfolioCard'
import { portfolioData, categories } from '../../data/portfolio'
import './Portfolio.css'

function Portfolio() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPortfolio =
    activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory)

  const seoData = {
    zh: {
      title: '服务能力',
      description: '独立开发者服务能力展示，包括Web开发、全栈应用、数据平台等技术服务',
      keywords: '服务能力,Web开发,全栈开发,技术服务,开发案例'
    },
    en: {
      title: 'Capabilities',
      description: 'Independent developer service capabilities including web development, full-stack applications, data platforms and more',
      keywords: 'capabilities,web development,full stack,technical services,development portfolio'
    }
  }

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  const breadcrumbItems = [
    { name: t('首页', 'Home', 'Home'), url: '/' },
    { name: t('案例作品集', 'Portfolio', 'Portfolio'), url: '/portfolio' }
  ]

  return (
    <div className="portfolio-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/portfolio"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      <div className="container">
        <section className="portfolio-hero">
          <h1 className="page-title">
            {t('服务能力展示', 'Service Capabilities', 'Capacità di Servizio')}
          </h1>
          <p className="page-subtitle">
            {t('了解我可以为你提供的开发服务', 'Discover the development services I can provide for you', 'Scopri i servizi di sviluppo che posso offrirti')}
          </p>
        </section>

        <section className="portfolio-filter">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-grid">
          {filteredPortfolio.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Portfolio

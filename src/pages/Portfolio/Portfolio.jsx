import { useState, useMemo } from 'react'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { breadcrumbSchema } from '../../utils/schemas'
import PortfolioCard from '../../components/business/PortfolioCard'
import Pagination from '../../components/ui/Pagination'
import { portfolioData, categories } from '../../data/portfolio'
import './Portfolio.css'

const ITEMS_PER_PAGE = 6

function Portfolio() {
  const { t, language } = useLanguageText()
  const [activeCategory, setActiveCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredPortfolio = useMemo(() => {
    return activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const totalPages = Math.ceil(filteredPortfolio.length / ITEMS_PER_PAGE)

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return filteredPortfolio.slice(startIndex, endIndex)
  }, [filteredPortfolio, currentPage])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1) // Reset to first page when category changes
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

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
    },
    it: {
      title: 'Capacità',
      description: 'Capacità di servizio dello sviluppatore indipendente tra cui sviluppo web, applicazioni full-stack, piattaforme dati e altro',
      keywords: 'capacità,sviluppo web,full stack,servizi tecnici,portfolio sviluppo'
    }
  }

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
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </section>

        <section className="portfolio-grid">
          {currentItems.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </section>

        {filteredPortfolio.length === 0 && (
          <div className="no-results">
            <p>
              {t('暂无相关作品', 'No portfolio items found', 'Nessun elemento trovato')}
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default Portfolio

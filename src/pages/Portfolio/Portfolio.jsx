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
    setCurrentPage(1) 
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const seoData = {
    zh: { title: '案例作品', description: '服务能力展示' },
    en: { title: 'Portfolio', description: 'Service Capabilities' },
    it: { title: 'Portfolio', description: 'Capacità di Servizio' }
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
        path="/portfolio"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      
      <div className="brutalist-container">
        {/* Header */}
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// ARCHIVE</span>
            <span>PROJECT_INDEX_V1.0</span>
          </div>
          <h1 className="page-title-giant">
            {t('精选案例', 'SELECTED WORKS', 'LAVORI SELEZIONATI')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        {/* Filter Bar */}
        <div className="portfolio-filter-bar font-mono">
          <div className="filter-label">FILTER_BY:</div>
          <div className="filter-list">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                [{cat.label[language].toUpperCase()}]
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="portfolio-grid-layout">
          {currentItems.map((portfolio) => (
            <div key={portfolio.id} className="portfolio-grid-item">
              <PortfolioCard portfolio={portfolio} />
            </div>
          ))}
        </section>

        {/* Footer / Pagination */}
        <div className="portfolio-footer-bar">
          <div className="result-count font-mono">
            SHOWING {currentItems.length} / {filteredPortfolio.length} RESULTS
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
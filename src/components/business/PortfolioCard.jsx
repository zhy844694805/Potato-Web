import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { trackPortfolioView } from '../../utils/analytics'
import LazyImage from '../ui/LazyImage'
import './PortfolioCard.css'

const PortfolioCard = memo(function PortfolioCard({ portfolio, size = 'standard' }) {
  const { language } = useLanguage()

  const handleClick = () => {
    trackPortfolioView(portfolio.id, portfolio.title[language])
  }

  // If portfolio has demo URL, link to demo; otherwise link to detail page
  const linkTo = portfolio.demoUrl || `/portfolio/${portfolio.slug}`

  // Format ID to ensure 2 digits (e.g., 01, 05)
  const formattedId = portfolio.id < 10 ? `0${portfolio.id}` : portfolio.id

  return (
    <Link
      to={linkTo}
      className={`portfolio-card ${size}`}
      onClick={handleClick}
    >
      <div className="portfolio-image-container">
        {portfolio.thumbnail ? (
          <LazyImage
            src={portfolio.thumbnail}
            alt={portfolio.title[language]}
            className="portfolio-thumbnail"
          />
        ) : (
          <div className="portfolio-placeholder">
            <span>NO IMAGE</span>
          </div>
        )}
        <div className="portfolio-overlay">
          <span className="view-project-btn">VIEW PROJECT</span>
        </div>
      </div>
      
      <div className="portfolio-info">
        <div className="portfolio-meta">
          <span className="portfolio-id">[{formattedId}]</span>
          <span className="portfolio-year">{portfolio.year || '2024'}</span>
        </div>
        
        <h3 className="portfolio-title">{portfolio.title[language]}</h3>
        
        {size === 'large' && portfolio.shortDesc && (
          <p className="portfolio-desc font-mono">{portfolio.shortDesc[language]}</p>
        )}
        
        <div className="portfolio-footer">
          <span className="portfolio-category">{portfolio.industry[language]}</span>
          <span className="portfolio-arrow">↗</span>
        </div>
      </div>
    </Link>
  )
})

export default PortfolioCard
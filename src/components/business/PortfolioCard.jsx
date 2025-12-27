import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { trackPortfolioView } from '../../utils/analytics'
import LazyImage from '../ui/LazyImage'
import './PortfolioCard.css'

function PortfolioCard({ portfolio }) {
  const { language } = useLanguage()

  const handleClick = () => {
    trackPortfolioView(portfolio.id, portfolio.title[language])
  }

  return (
    <Link
      to={`/portfolio/${portfolio.slug}`}
      className="portfolio-card"
      onClick={handleClick}
    >
      <div className="portfolio-header">
        <div className="portfolio-number">0{portfolio.id}</div>
        <div className="portfolio-year">{portfolio.year}</div>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-category" style={{ color: portfolio.color }}>
          {portfolio.industry[language]}
        </div>
        <h3 className="portfolio-title">{portfolio.title[language]}</h3>
        <p className="portfolio-description">{portfolio.shortDesc[language]}</p>
      </div>
      <div className="portfolio-visual">
        {portfolio.thumbnail ? (
          <LazyImage
            src={portfolio.thumbnail}
            alt={portfolio.title[language]}
            className="portfolio-thumbnail"
          />
        ) : (
          <div
            className="portfolio-placeholder"
            style={{
              background: `linear-gradient(135deg, ${portfolio.color}20, ${portfolio.color}10)`
            }}
          >
            <div className="visual-shape" style={{ borderColor: portfolio.color }}></div>
          </div>
        )}
      </div>
      <div className="portfolio-hover">查看项目 →</div>
    </Link>
  )
}

export default PortfolioCard

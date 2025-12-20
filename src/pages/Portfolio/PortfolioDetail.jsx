import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData, { portfolioSchema } from '../../components/StructuredData'
import Button from '../../components/ui/Button'
import LazyImage from '../../components/ui/LazyImage'
import { getPortfolioById } from '../../data/portfolio'
import './PortfolioDetail.css'

function PortfolioDetail() {
  const { id } = useParams()
  const { language } = useLanguage()
  const portfolio = getPortfolioById(id)

  if (!portfolio) {
    return <Navigate to="/404" replace />
  }

  return (
    <div className="portfolio-detail-page">
      <SEO
        title={portfolio.title[language]}
        description={portfolio.description[language]}
        image={portfolio.thumbnail}
        path={`/portfolio/${portfolio.slug}`}
        type="article"
      />
      <StructuredData data={portfolioSchema(portfolio, language)} />
      <div className="container">
        <section className="detail-hero" style={{ borderColor: portfolio.color }}>
          <div className="detail-meta">
            <span className="detail-category" style={{ color: portfolio.color }}>
              {portfolio.industry[language]}
            </span>
            <span className="detail-year">{portfolio.year}</span>
          </div>
          <h1 className="detail-title">{portfolio.title[language]}</h1>
          <p className="detail-client">
            {language === 'zh' ? '客户：' : 'Client: '}
            {portfolio.client[language]}
          </p>
        </section>

        <section className="detail-overview">
          <h2>{language === 'zh' ? '项目概述' : 'Project Overview'}</h2>
          <p>{portfolio.description[language]}</p>
        </section>

        {portfolio.challenge && (
          <section className="detail-section">
            <h2>{language === 'zh' ? '项目挑战' : 'Challenge'}</h2>
            <p>{portfolio.challenge[language]}</p>
          </section>
        )}

        {portfolio.solution && (
          <section className="detail-section">
            <h2>{language === 'zh' ? '解决方案' : 'Solution'}</h2>
            <p>{portfolio.solution[language]}</p>
          </section>
        )}

        {portfolio.features && portfolio.features.length > 0 && (
          <section className="detail-section detail-features">
            <h2>{language === 'zh' ? '项目亮点' : 'Key Features'}</h2>
            <div className="features-grid">
              {portfolio.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title[language]}</h3>
                  <p className="feature-desc">{feature.desc[language]}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {portfolio.results && portfolio.results.length > 0 && (
          <section className="detail-results">
            <h2>{language === 'zh' ? '项目成果' : 'Results'}</h2>
            <div className="results-grid">
              {portfolio.results.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="result-value" style={{ color: portfolio.color }}>
                    {result.value}
                  </div>
                  <div className="result-label">{result.label[language]}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {portfolio.timeline && portfolio.timeline.length > 0 && (
          <section className="detail-section detail-timeline">
            <h2>{language === 'zh' ? '实施时间线' : 'Implementation Timeline'}</h2>
            <div className="timeline-wrapper">
              {portfolio.timeline.map((phase, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker" style={{ backgroundColor: portfolio.color }}></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-phase">{phase.phase[language]}</h3>
                      <span className="timeline-duration">{phase.duration[language]}</span>
                    </div>
                    <p className="timeline-desc">{phase.desc[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {portfolio.technologies && portfolio.technologies.length > 0 && (
          <section className="detail-section">
            <h2>{language === 'zh' ? '技术栈' : 'Technologies'}</h2>
            <div className="tech-stack">
              {portfolio.technologies.map((tech, index) => (
                <span key={index} className="tech-tag" style={{ borderColor: portfolio.color }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        {portfolio.images && portfolio.images.length > 0 && (
          <section className="detail-section detail-images">
            <h2>{language === 'zh' ? '项目展示' : 'Project Showcase'}</h2>
            <div className="images-grid">
              {portfolio.images.map((image, index) => (
                <div key={index} className="image-item">
                  <LazyImage src={image.url} alt={image.caption[language]} />
                  <p className="image-caption">{image.caption[language]}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {portfolio.testimonial && (
          <section className="detail-section detail-testimonial">
            <h2>{language === 'zh' ? '客户评价' : 'Client Testimonial'}</h2>
            <div className="testimonial-card" style={{ borderColor: portfolio.color }}>
              <div className="testimonial-quote">"{portfolio.testimonial.quote[language]}"</div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{portfolio.testimonial.author[language]}</div>
                  <div className="author-role">{portfolio.testimonial.role[language]}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="detail-cta">
          <Link to="/portfolio">
            <Button variant="secondary">
              {language === 'zh' ? '返回案例列表' : 'Back to Portfolio'}
            </Button>
          </Link>
          {portfolio.demoUrl && (
            <Link to={portfolio.demoUrl}>
              <Button variant="primary" style={{ background: 'linear-gradient(135deg, #d4a574, #8b6914)' }}>
                {language === 'zh' ? '查看在线演示' : 'View Live Demo'} →
              </Button>
            </Link>
          )}
          <Link to="/contact">
            <Button variant="primary">
              {language === 'zh' ? '开始您的项目' : 'Start Your Project'}
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default PortfolioDetail

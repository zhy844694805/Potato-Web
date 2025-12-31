import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { portfolioSchema } from '../../utils/schemas'
import Button from '../../components/ui/Button'
import LazyImage from '../../components/ui/LazyImage'
import ShareButtons from '../../components/business/ShareButtons'
import ExportPDF from '../../components/business/ExportPDF'
import { getPortfolioById } from '../../data/portfolio'
import './PortfolioDetail.css'

function PortfolioDetail() {
  const { id } = useParams()
  const { t, language } = useLanguageText()
  const contentRef = useRef(null)
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
      <div className="container" ref={contentRef}>
        <section className="detail-hero" style={{ borderColor: portfolio.color }}>
          <div className="detail-meta">
            <span className="detail-category" style={{ color: portfolio.color }}>
              {portfolio.industry[language]}
            </span>
            <span className="detail-year">{portfolio.year}</span>
          </div>
          <h1 className="detail-title">{portfolio.title[language]}</h1>
          <p className="detail-client">
            {t('客户：', 'Client: ', 'Cliente: ')}
            {portfolio.client[language]}
          </p>
        </section>

        <section className="detail-overview">
          <h2>{t('项目概述', 'Project Overview', 'Panoramica del Progetto')}</h2>
          <p>{portfolio.description[language]}</p>
        </section>

        {portfolio.challenge && (
          <section className="detail-section">
            <h2>{t('项目挑战', 'Challenge', 'Sfida')}</h2>
            <p>{portfolio.challenge[language]}</p>
          </section>
        )}

        {portfolio.solution && (
          <section className="detail-section">
            <h2>{t('解决方案', 'Solution', 'Soluzione')}</h2>
            <p>{portfolio.solution[language]}</p>
          </section>
        )}

        {portfolio.features && portfolio.features.length > 0 && (
          <section className="detail-section detail-features">
            <h2>{t('项目亮点', 'Key Features', 'Caratteristiche Chiave')}</h2>
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
            <h2>{t('项目成果', 'Results', 'Risultati')}</h2>
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
            <h2>{t('实施时间线', 'Implementation Timeline', 'Timeline di Implementazione')}</h2>
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
            <h2>{t('技术栈', 'Technologies', 'Tecnologie')}</h2>
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
            <h2>{t('项目展示', 'Project Showcase', 'Vetrina del Progetto')}</h2>
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
            <h2>{t('客户评价', 'Client Testimonial', 'Testimonianza del Cliente')}</h2>
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

        <section className="detail-section detail-share">
          <h2>{t('分享案例', 'Share This Project', 'Condividi Progetto')}</h2>
          <ShareButtons
            url={`${window.location.origin}/portfolio/${portfolio.slug}`}
            title={portfolio.title[language]}
            description={portfolio.shortDesc[language]}
          />
        </section>

        <section className="detail-cta">
          <Link to="/portfolio">
            <Button variant="secondary">
              {t('返回案例列表', 'Back to Portfolio', 'Torna al Portfolio')}
            </Button>
          </Link>
          <ExportPDF
            contentRef={contentRef}
            filename={`${portfolio.slug}-case-study`}
          />
          {portfolio.demoUrl && (
            <Link to={portfolio.demoUrl}>
              <Button variant="primary" style={{ background: 'linear-gradient(135deg, #d4a574, #8b6914)' }}>
                {t('查看在线演示', 'View Live Demo', 'Vedi Demo Live')} →
              </Button>
            </Link>
          )}
          <Link to="/contact">
            <Button variant="primary">
              {t('开始您的项目', 'Start Your Project', 'Inizia il Tuo Progetto')}
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default PortfolioDetail

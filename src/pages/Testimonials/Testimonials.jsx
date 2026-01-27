import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import TestimonialCard from '../../components/business/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

function Testimonials() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const tr = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  // Extract unique tags
  const allTags = [...new Set(testimonials.flatMap(t => t.tags.map(tag => tag[language])))]

  const filterOptions = [
    { value: 'all', label: { zh: '全部', en: 'ALL', it: 'TUTTI' } },
    ...allTags.map(tag => ({
      value: tag,
      label: { zh: tag, en: tag.toUpperCase(), it: tag.toUpperCase() }
    }))
  ]

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t =>
        t.tags.some(tag => tag[language] === activeFilter)
      )

  const seoData = {
    zh: { title: '客户评价', description: '真实用户反馈数据库' },
    en: { title: 'Feedback', description: 'User Feedback Database' },
    it: { title: 'Feedback', description: 'Database Feedback Utenti' }
  }

  const stats = [
    { label: 'TOTAL_REVIEWS', value: '50+' },
    { label: 'SATISFACTION', value: '100%' },
    { label: 'NPS_SCORE', value: '95' }
  ]

  return (
    <div className="testimonials-page">
      <SEO title={seoData[language].title} description={seoData[language].description} path="/testimonials" />
      
      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// DATABASE</span>
            <span>USER_FEEDBACK_LOGS</span>
          </div>
          <h1 className="page-title-giant">
            {tr('客户评价', 'CLIENT FEEDBACK', 'FEEDBACK CLIENTI')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        {/* Stats Row */}
        <div className="stats-row font-mono">
          {stats.map((stat, i) => (
            <div key={i} className="stats-cell">
              <span className="stats-label">{stat.label}</span>
              <span className="stats-val">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="filter-bar-brutalist font-mono">
          <div className="filter-label">FILTER_LOGS:</div>
          <div className="filter-list">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(option.value)}
              >
                [{option.label[language]}]
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="testimonials-grid-layout">
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-grid-item">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
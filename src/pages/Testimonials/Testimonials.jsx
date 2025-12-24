import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SEO from '../../components/SEO'
import StructuredData, { breadcrumbSchema } from '../../components/StructuredData'
import TestimonialCard from '../../components/business/TestimonialCard'
import { testimonials } from '../../data/testimonials'
import './Testimonials.css'

function Testimonials() {
  const { language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const tr = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })

  // Extract unique tags from all testimonials
  const allTags = [...new Set(testimonials.flatMap(t => t.tags.map(tag => tag[language])))]

  const filterOptions = [
    { value: 'all', label: { zh: '全部', en: 'All', it: 'Tutti' } },
    ...allTags.map(tag => ({
      value: tag,
      label: { zh: tag, en: tag, it: tag }
    }))
  ]

  const filteredTestimonials = activeFilter === 'all'
    ? testimonials
    : testimonials.filter(t =>
        t.tags.some(tag => tag[language] === activeFilter)
      )

  const seoData = {
    zh: {
      title: '客户评价',
      description: '查看客户对我们服务的真实评价和反馈，了解项目合作体验',
      keywords: '客户评价,用户反馈,项目评价,服务质量,独立开发者'
    },
    en: {
      title: 'Testimonials',
      description: 'Read real client reviews and feedback about our services and project collaboration experience',
      keywords: 'testimonials,client reviews,project feedback,service quality,independent developer'
    },
    it: {
      title: 'Testimonianze',
      description: 'Leggi le recensioni e i feedback reali dei clienti sui nostri servizi e l\'esperienza di collaborazione',
      keywords: 'testimonianze,recensioni clienti,feedback progetti,qualità servizio,sviluppatore indipendente'
    }
  }

  const breadcrumbItems = [
    { name: tr('首页', 'Home', 'Home'), url: '/' },
    { name: tr('客户评价', 'Testimonials', 'Testimonianze'), url: '/testimonials' }
  ]

  const stats = [
    {
      value: '10',
      suffix: '+',
      label: { zh: '客户评价', en: 'Client Reviews', it: 'Recensioni Clienti' }
    },
    {
      value: '100',
      suffix: '%',
      label: { zh: '五星好评', en: '5-Star Rating', it: 'Valutazione 5 Stelle' }
    },
    {
      value: '95',
      suffix: '%',
      label: { zh: '客户推荐', en: 'Recommendation', it: 'Raccomandazione' }
    }
  ]

  return (
    <div className="testimonials-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/testimonials"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />

      <div className="container">
        <section className="testimonials-hero">
          <h1 className="page-title">
            {tr('客户评价', 'Client Testimonials', 'Testimonianze dei Clienti')}
          </h1>
          <p className="page-subtitle">
            {tr('真实的客户反馈，见证我们的服务质量与专业态度',
              'Real client feedback showcasing our service quality and professional attitude',
              'Feedback reali dei clienti che dimostrano la qualità del servizio e l\'atteggiamento professionale')}
          </p>
        </section>

        {/* Stats Section */}
        <section
          ref={statsAnimation.ref}
          className={`testimonials-stats fade-in-up ${statsAnimation.inView ? 'in-view' : ''}`}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`stat-item fade-in-up delay-${(index + 1) * 100} ${statsAnimation.inView ? 'in-view' : ''}`}
              >
                <div className="stat-value">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label[language]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter Section */}
        <section className="testimonials-filter">
          <div className="filter-buttons">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(option.value)}
              >
                {option.label[language]}
              </button>
            ))}
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="testimonials-grid">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </section>

        {filteredTestimonials.length === 0 && (
          <div className="no-results">
            <p>
              {tr('暂无相关评价', 'No testimonials found', 'Nessuna testimonianza trovata')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonials

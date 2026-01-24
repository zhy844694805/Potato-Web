import { useMemo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema } from '../../utils/schemas'
import Button from '../../components/ui/Button'
import ServiceCard from '../../components/business/ServiceCard'
import PortfolioCard from '../../components/business/PortfolioCard'
import TestimonialCard from '../../components/business/TestimonialCard'
import BlogCard from '../../components/business/BlogCard'
import { services } from '../../data/services'
import { portfolioData } from '../../data/portfolio'
import { stats } from '../../data/stats'
import { getLatestTestimonials } from '../../data/testimonials'
import { getLatestPosts } from '../../data/blog'
import './Home.css'

function Home() {
  const { t } = useTranslation()
  const { language } = useLanguage()

  // Scroll animations for different sections
  const { ref: statsRef, inView: statsInView } = useScrollAnimation({ threshold: 0.2 })
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: casesRef, inView: casesInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: blogRef, inView: blogInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: testimonialsRef, inView: testimonialsInView } = useScrollAnimation({ threshold: 0.1 })
  const { ref: ctaRef, inView: ctaInView } = useScrollAnimation({ threshold: 0.3 })

  // Memoize featured content
  const featuredCases = useMemo(() => portfolioData.slice(0, 4), [])
  const featuredBlogs = useMemo(() => getLatestPosts(3), [])
  const featuredTestimonials = useMemo(() => getLatestTestimonials(3), [])

  // Memoize SEO data
  const seoData = useMemo(() => ({
    zh: {
      title: '首页',
      description: '独立开发者 - 专注于Web开发和全栈解决方案，为个人和小型企业提供高性价比的技术服务。',
      keywords: '独立开发者,Web开发,全栈开发,React开发,网站开发,技术顾问'
    },
    en: {
      title: 'Home',
      description: 'Independent Developer - Focused on web development and full-stack solutions, providing cost-effective technical services for individuals and small businesses.',
      keywords: 'independent developer,web development,full stack,React development,freelance developer'
    },
    it: {
      title: 'Home',
      description: 'Sviluppatore Indipendente - Focalizzato sullo sviluppo web e soluzioni full-stack, fornendo servizi tecnici convenienti per privati e piccole imprese.',
      keywords: 'sviluppatore indipendente,sviluppo web,full stack,sviluppo React,sviluppatore freelance'
    }
  }), [])

  // Mouse move effect for hero
  const heroRef = useRef(null)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`)
      heroRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="home">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/"
      />
      <StructuredData data={organizationSchema(language)} />
      
      {/* Brutalist Hero Section */}
      <section className="hero-brutalist" ref={heroRef}>
        <div className="grid-overlay"></div>
        <div className="hero-content-brutalist">
          <div className="hero-meta font-mono">
            <span>// SINCE 2024</span>
            <span className="scrolling-text">:: SYSTEM READY :: INITIALIZING...</span>
            <span>LOC: MILANO, IT</span>
          </div>
          
          <h1 className="hero-title-giant">
            <span className="glitch" data-text="POTATO">POTATO</span>
            <span className="glitch" data-text="WEB">WEB</span>
          </h1>
          
          <div className="hero-description-block glass-panel">
            <p className="hero-text font-mono">
              {language === 'zh'
                ? '我们也曾是初创公司，深知每一分预算的珍贵。拒绝虚高的报价，拒绝华而不实的功能。我们提供最纯粹、最高效的技术解决方案，助力您的业务起飞。'
                : 'We were a startup too. We know every penny counts. No inflated quotes, no useless features. Just pure, efficient technical solutions to help your business take off.'}
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn-brutalist">
                {t('button.viewCase')}
              </Link>
              <Link to="/contact" className="btn-brutalist outline">
                {t('button.contactUs')}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-footer-bar font-mono">
          <div className="scroll-indicator">
            SCROLL_DOWN <span className="arrow">↓</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot"></span> SYSTEM_ONLINE
          </div>
        </div>
      </section>

      {/* Stats Section - Redesigned */}
      <section
        ref={statsRef}
        className={`home-stats-brutalist ${statsInView ? 'in-view' : ''}`}
      >
        <div className="stats-grid-brutalist">
          {stats.map((stat, index) => (
            <div key={stat.id} className="stat-item-brutalist">
              <div className="stat-value font-mono">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label[language]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <div
            ref={servicesRef}
            className={`section-header-brutalist fade-in-up ${servicesInView ? 'in-view' : ''}`}
          >
            <div className="section-tag font-mono">// 01 SERVICES</div>
            <h2 className="section-title">
              {language === 'zh' ? '核心服务' : 'CORE SERVICES'}
            </h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`fade-in-up delay-${(index + 1) * 100} ${servicesInView ? 'in-view' : ''}`}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="home-cases">
        <div className="container">
          <div
            ref={casesRef}
            className={`section-header-brutalist fade-in-up ${casesInView ? 'in-view' : ''}`}
          >
            <div className="section-tag font-mono">// 02 WORKS</div>
            <h2 className="section-title">
              {language === 'zh' ? '精选案例' : 'SELECTED WORKS'}
            </h2>
          </div>
          <div className="cases-grid">
            {featuredCases.map((portfolio, index) => (
              <div
                key={portfolio.id}
                className={`fade-in-up delay-${(index + 1) * 100} ${casesInView ? 'in-view' : ''}`}
              >
                <PortfolioCard portfolio={portfolio} />
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/portfolio" className="btn-brutalist outline">
              {language === 'zh' ? '查看更多' : 'VIEW ALL WORKS'} →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="home-blog">
        <div className="container">
          <div
            ref={blogRef}
            className={`section-header-brutalist fade-in-up ${blogInView ? 'in-view' : ''}`}
          >
            <div className="section-tag font-mono">// 03 INSIGHTS</div>
            <h2 className="section-title">
              {language === 'zh' ? '技术洞察' : 'TECH INSIGHTS'}
            </h2>
          </div>
          <div className="blog-grid-home">
            {featuredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`fade-in-up delay-${(index + 1) * 100} ${blogInView ? 'in-view' : ''}`}
              >
                <BlogCard post={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="home-testimonials">
        <div className="container">
          <div
            ref={testimonialsRef}
            className={`section-header-brutalist fade-in-up ${testimonialsInView ? 'in-view' : ''}`}
          >
            <div className="section-tag font-mono">// 04 FEEDBACK</div>
            <h2 className="section-title">
              {language === 'zh' ? '客户反馈' : 'CLIENT FEEDBACK'}
            </h2>
          </div>
          <div className="testimonials-grid">
            {featuredTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`fade-in-up delay-${(index + 1) * 100} ${testimonialsInView ? 'in-view' : ''}`}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-brutalist">
        <div
          ref={ctaRef}
          className={`cta-content-brutalist scale-in ${ctaInView ? 'in-view' : ''}`}
        >
          <h2 className="cta-title-giant">
            {language === 'zh' ? '准备好了吗?' : 'READY TO LAUNCH?'}
          </h2>
          <p className="cta-subtitle font-mono">
            {language === 'zh'
              ? '让我们开始构建您的数字未来。'
              : 'LET\'S BUILD YOUR DIGITAL FUTURE.'}
          </p>
          <Link to="/contact" className="btn-brutalist big">
            {t('button.contactUs')}
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
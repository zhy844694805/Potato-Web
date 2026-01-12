import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { organizationSchema } from '../../utils/schemas'
import FloatingElements from '../../components/ui/FloatingElements'
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

  // Memoize featured content to prevent recalculation on every render
  const featuredCases = useMemo(() => portfolioData.slice(0, 4), [])
  const featuredBlogs = useMemo(() => getLatestPosts(3), [])
  const featuredTestimonials = useMemo(() => getLatestTestimonials(3), [])

  // Memoize SEO data based on language
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

  return (
    <div className="home">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/"
      />
      <StructuredData data={organizationSchema(language)} />
      {/* Hero Section */}
      <section className="hero">
        <FloatingElements />
        <div className="hero-content">
          <div className="hero-badge">
            {language === 'zh' ? '简约 · 优雅 · 高效' : 'Simple · Elegant · Efficient'}
          </div>
          <h1 className="hero-title">
            <span className="title-line">Less is</span>
            <span className="title-line">More</span>
          </h1>
          <p className="hero-subtitle">
            {language === 'zh'
              ? '你好！我是一名独立开发者，专注于Web开发和全栈解决方案。我会全心投入每个项目，用专业的技术帮你实现想法。直接沟通、快速响应、高性价比——这是独立开发的优势。'
              : 'Hello! I\'m an independent developer focused on web development and full-stack solutions. I fully commit to every project, using professional skills to bring your ideas to life. Direct communication, quick response, cost-effective—these are the advantages of independent development.'}
          </p>
          <div className="hero-cta">
            <Link to="/portfolio">
              <Button variant="primary">{t('button.viewCase')}</Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary">{t('button.learnMore')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className={`home-stats fade-in-up ${statsInView ? 'in-view' : ''}`}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`stat-item fade-in-up delay-${(index + 1) * 100} ${statsInView ? 'in-view' : ''}`}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-value">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label[language]}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <div
            ref={servicesRef}
            className={`section-header-home fade-in-up ${servicesInView ? 'in-view' : ''}`}
          >
            <div className="section-number">01</div>
            <h2 className="section-title">
              {language === 'zh' ? '我们的服务' : 'Our Services'}
            </h2>
            <p className="section-description">
              {language === 'zh'
                ? '提供从网站开发到全栈解决方案的专业技术服务。直接沟通、灵活响应、专注高效——我会认真对待每一个项目，用心交付高质量的作品。'
                : 'Providing professional technical services from web development to full-stack solutions. Direct communication, flexible response, focused and efficient—I treat every project seriously and deliver high-quality work with care.'}
            </p>
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
          <div className="section-cta">
            <Link to="/services">
              <Button variant="secondary">{t('button.viewDetails')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="home-cases">
        <div className="container">
          <div
            ref={casesRef}
            className={`section-header-home fade-in-up ${casesInView ? 'in-view' : ''}`}
          >
            <div className="section-number">02</div>
            <h2 className="section-title">
              {language === 'zh' ? '服务能力展示' : 'Service Capabilities'}
            </h2>
            <p className="section-description">
              {language === 'zh'
                ? '这里展示了我可以提供的开发服务类型。从响应式网站到全栈应用，从简单的落地页到复杂的数据平台——我能够为你提供专业的技术解决方案。'
                : 'Here are the types of development services I can provide. From responsive websites to full-stack applications, from simple landing pages to complex data platforms—I can provide professional technical solutions for you.'}
            </p>
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
            <Link to="/portfolio">
              <Button variant="secondary">
                {language === 'zh' ? '查看更多能力' : 'View More Capabilities'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="home-blog">
        <div className="container">
          <div
            ref={blogRef}
            className={`section-header-home fade-in-up ${blogInView ? 'in-view' : ''}`}
          >
            <div className="section-number">03</div>
            <h2 className="section-title">
              {language === 'zh' ? '技术博客' : 'Tech Blog'}
            </h2>
            <p className="section-description">
              {language === 'zh'
                ? '分享我在开发过程中的技术心得、经验总结和思考。希望这些文章能对你的学习和工作有所帮助。'
                : 'Sharing my technical insights, experience summaries and reflections during development. Hope these articles can help your learning and work.'}
            </p>
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
          <div className="section-cta">
            <Link to="/blog">
              <Button variant="secondary">
                {language === 'zh' ? '查看更多文章' : 'View More Articles'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="home-testimonials">
        <div className="container">
          <div
            ref={testimonialsRef}
            className={`section-header-home fade-in-up ${testimonialsInView ? 'in-view' : ''}`}
          >
            <div className="section-number">04</div>
            <h2 className="section-title">
              {language === 'zh' ? '客户评价' : 'Client Testimonials'}
            </h2>
            <p className="section-description">
              {language === 'zh'
                ? '来自真实客户的反馈，是对我工作质量的最好证明。每一条评价都代表着一份信任和认可，激励我继续提供优质的技术服务。'
                : 'Feedback from real clients is the best proof of my work quality. Every testimonial represents trust and recognition, motivating me to continue providing excellent technical services.'}
            </p>
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
          <div className="section-cta">
            <Link to="/testimonials">
              <Button variant="secondary">
                {language === 'zh' ? '查看更多评价' : 'View More Testimonials'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div
          ref={ctaRef}
          className={`cta-content scale-in ${ctaInView ? 'in-view' : ''}`}
        >
          <h2 className="cta-title">
            {language === 'zh' ? '开始你的项目' : 'Start Your Project'}
          </h2>
          <p className="cta-subtitle">
            {language === 'zh'
              ? '如果你有想法需要实现，如果你正在寻找专业可靠的技术伙伴，我很乐意和你深入探讨。没有套路，只有真诚的沟通和专业的技术。让我们一起把想法变成现实。'
              : 'If you have ideas to realize, if you\'re looking for a professional and reliable technical partner, I\'d love to discuss in depth. No sales pitch, just honest communication and professional skills. Let\'s turn your ideas into reality together.'}
          </p>
          <Link to="/contact">
            <Button variant="primary">{t('button.contactUs')}</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

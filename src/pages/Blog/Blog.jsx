import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SEO from '../../components/SEO'
import StructuredData, { breadcrumbSchema } from '../../components/StructuredData'
import BlogCard from '../../components/business/BlogCard'
import { categories, getPostsByCategory, getFeaturedPosts } from '../../data/blog'
import './Blog.css'

function Blog() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const featuredAnimation = useScrollAnimation({ threshold: 0.1 })

  const filteredPosts = getPostsByCategory(activeCategory)
  const featuredPosts = getFeaturedPosts()

  const seoData = {
    zh: {
      title: '技术博客',
      description: '分享Web开发、全栈技术、设计思考和独立开发经验',
      keywords: '技术博客,Web开发,全栈开发,React,独立开发者'
    },
    en: {
      title: 'Blog',
      description: 'Sharing web development, full-stack technology, design thinking and freelance development experience',
      keywords: 'tech blog,web development,full stack,React,independent developer'
    },
    it: {
      title: 'Blog',
      description: 'Condivisione di sviluppo web, tecnologia full-stack, design thinking ed esperienza di sviluppo freelance',
      keywords: 'blog tecnico,sviluppo web,full stack,React,sviluppatore indipendente'
    }
  }

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  const breadcrumbItems = [
    { name: t('首页', 'Home', 'Home'), url: '/' },
    { name: t('技术博客', 'Blog', 'Blog'), url: '/blog' }
  ]

  return (
    <div className="blog-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/blog"
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />

      <div className="container">
        <section className="blog-hero">
          <h1 className="page-title">
            {language === 'zh' ? '技术博客' : 'Tech Blog'}
          </h1>
          <p className="page-subtitle">
            {language === 'zh'
              ? '分享技术心得、开发经验和设计思考'
              : 'Sharing technical insights, development experience and design thinking'}
          </p>
        </section>

        {/* Featured Posts */}
        {activeCategory === 'all' && featuredPosts.length > 0 && (
          <section
            ref={featuredAnimation.ref}
            className={`blog-featured fade-in-up ${featuredAnimation.inView ? 'in-view' : ''}`}
          >
            <h2 className="section-title">
              {language === 'zh' ? '精选文章' : 'Featured Posts'}
            </h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* Filter */}
        <section className="blog-filter">
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="blog-grid">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </section>

        {filteredPosts.length === 0 && (
          <div className="no-results">
            <p>
              {language === 'zh'
                ? '暂无相关文章'
                : 'No articles found'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog

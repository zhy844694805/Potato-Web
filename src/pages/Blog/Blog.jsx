import { useState, useMemo } from 'react'
import { useLanguageText } from '../../hooks/useLanguageText'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { breadcrumbSchema } from '../../utils/schemas'
import BlogCard from '../../components/business/BlogCard'
import SearchInput from '../../components/ui/SearchInput'
import Pagination from '../../components/ui/Pagination'
import { categories, getPostsByCategory, getFeaturedPosts, searchPosts } from '../../data/blog'
import './Blog.css'

const ITEMS_PER_PAGE = 9

function Blog() {
  const { t, language } = useLanguageText()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { ref: featuredRef, inView: featuredInView } = useScrollAnimation({ threshold: 0.1 })

  const categoryPosts = getPostsByCategory(activeCategory)
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return categoryPosts
    return searchPosts(searchQuery, language).filter(post =>
      activeCategory === 'all' || post.category.value === activeCategory
    )
  }, [searchQuery, categoryPosts, activeCategory, language])

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return filteredPosts.slice(startIndex, endIndex)
  }, [filteredPosts, currentPage])

  const featuredPosts = getFeaturedPosts()

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1) // Reset to first page
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

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
            ref={featuredRef}
            className={`blog-featured fade-in-up ${featuredInView ? 'in-view' : ''}`}
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

        {/* Search and Filter */}
        <section className="blog-filter">
          <div className="blog-search">
            <SearchInput
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section className="blog-grid">
          {currentItems.map((post) => (
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

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  )
}

export default Blog

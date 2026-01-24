import { useState, useMemo } from 'react'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { breadcrumbSchema } from '../../utils/schemas'
import BlogCard from '../../components/business/BlogCard'
import SearchInput from '../../components/ui/SearchInput'
import Pagination from '../../components/ui/Pagination'
import { categories, getPostsByCategory, searchPosts } from '../../data/blog'
import './Blog.css'

const ITEMS_PER_PAGE = 9

function Blog() {
  const { t, language } = useLanguageText()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

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

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const seoData = {
    zh: { title: '技术博客', description: '技术心得与开发经验' },
    en: { title: 'Tech Blog', description: 'Technical Insights' },
    it: { title: 'Blog Tecnico', description: 'Approfondimenti Tecnici' }
  }

  return (
    <div className="blog-page">
      <SEO title={seoData[language].title} description={seoData[language].description} path="/blog" />
      
      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// LOGS</span>
            <span>SYSTEM_UPDATES</span>
          </div>
          <h1 className="page-title-giant">
            {t('技术博客', 'TECH BLOG', 'BLOG TECNICO')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        {/* Toolbar */}
        <div className="blog-toolbar">
          <div className="blog-categories font-mono">
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`cat-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
          <div className="blog-search-container">
            <SearchInput value={searchQuery} onChange={handleSearchChange} />
          </div>
        </div>

        {/* Blog Grid */}
        <section className="blog-grid-layout">
          {currentItems.map((post) => (
            <div key={post.id} className="blog-grid-item">
              <BlogCard post={post} />
            </div>
          ))}
        </section>

        {/* Footer */}
        <div className="blog-footer-bar">
          <div className="result-info font-mono">
            :: DISPLAYING {currentItems.length} ENTRIES
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog
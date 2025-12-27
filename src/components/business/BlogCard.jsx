import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { trackEvent } from '../../utils/analytics'
import LazyImage from '../ui/LazyImage'
import './BlogCard.css'

function BlogCard({ post }) {
  const { language } = useLanguage()

  const handleClick = () => {
    trackEvent('blog_click', {
      blog_id: post.id,
      blog_title: post.title[language],
      blog_category: post.category[language]
    })
  }

  return (
    <Link to={`/blog/${post.slug}`} className="blog-card" onClick={handleClick}>
      <div className="blog-thumbnail">
        <LazyImage
          src={post.thumbnail}
          alt={post.title[language]}
          className="thumbnail-image"
        />
        {post.featured && (
          <div className="featured-badge">
            {language === 'zh' ? '精选' : 'Featured'}
          </div>
        )}
      </div>

      <div className="blog-content">
        <div className="blog-meta">
          <span className="blog-category">{post.category[language]}</span>
          <span className="blog-divider">·</span>
          <span className="blog-date">{post.date}</span>
          <span className="blog-divider">·</span>
          <span className="blog-read-time">{post.readTime[language]}</span>
        </div>

        <h3 className="blog-title">{post.title[language]}</h3>
        <p className="blog-excerpt">{post.excerpt[language]}</p>

        <div className="blog-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag[language]}
            </span>
          ))}
        </div>

        <div className="blog-read-more">
          {language === 'zh' ? '阅读全文' : 'Read More'} →
        </div>
      </div>
    </Link>
  )
}

export default BlogCard

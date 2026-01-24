import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import BlogCard from '../../components/business/BlogCard'
import ShareButtons from '../../components/business/ShareButtons'
import { getBlogBySlug, getRelatedPosts } from '../../data/blog'
import { siteConfig } from '../../config/site'
import './BlogDetail.css'

function BlogDetail() {
  const { id } = useParams()
  const { t, language } = useLanguageText()
  const post = getBlogBySlug(id)

  if (!post) {
    return <Navigate to="/404" replace />
  }

  const relatedPosts = getRelatedPosts(post, 2)

  return (
    <div className="blog-detail-page">
      <SEO
        title={post.title[language]}
        description={post.excerpt[language]}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <div className="brutalist-container">
        {/* Navigation Bar */}
        <div className="detail-nav-bar font-mono">
          <Link to="/blog">← INDEX</Link>
          <span>LOG_ID: {post.id}</span>
        </div>

        {/* Article Header */}
        <header className="detail-header-brutalist">
          <div className="meta-row font-mono">
            <span className="meta-tag">[{post.category[language].toUpperCase()}]</span>
            <span className="meta-date">{post.date}</span>
            <span className="meta-time">READ_TIME: {post.readTime[language]}</span>
          </div>
          <h1 className="detail-title-giant">{post.title[language]}</h1>
        </header>

        {/* Main Content Grid */}
        <div className="detail-layout-grid">
          {/* Left: Content */}
          <article className="article-column">
            <div className="article-body-brutalist">
              {/* Optional: Add abstract/excerpt block */}
              <div className="article-abstract">
                <p>{post.excerpt[language]}</p>
              </div>
              
              {/* Main Text */}
              <div className="article-text">
                {post.content[language]}
              </div>
            </div>
            
            <div className="article-footer-brutalist">
              <ShareButtons
                url={`${siteConfig.url}/blog/${post.slug}`}
                title={post.title[language]}
              />
            </div>
          </article>

          {/* Right: Sidebar / Meta */}
          <aside className="sidebar-column">
            <div className="sidebar-block">
              <h3 className="sidebar-title font-mono">// AUTHOR</h3>
              <div className="author-card">
                <div className="author-name">{post.author[language]}</div>
                <div className="author-role font-mono">DEVELOPER</div>
              </div>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title font-mono">// TAGS</h3>
              <div className="tags-cloud">
                {post.tags.map((tag, i) => (
                  <span key={i} className="sidebar-tag font-mono">
                    #{tag[language]}
                  </span>
                ))}
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="sidebar-block">
                <h3 className="sidebar-title font-mono">// RELATED_LOGS</h3>
                <div className="related-list">
                  {relatedPosts.map(p => (
                    <Link key={p.id} to={`/blog/${p.slug}`} className="related-link">
                      {p.title[language]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail
import { useParams, Link, Navigate } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { breadcrumbSchema, articleSchema } from '../../utils/schemas'
import BlogCard from '../../components/business/BlogCard'
import LazyImage from '../../components/ui/LazyImage'
import ShareButtons from '../../components/business/ShareButtons'
import Comments from '../../components/business/Comments'
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

  const relatedPosts = getRelatedPosts(post, 3)

  const breadcrumbItems = [
    { name: language === 'zh' ? '首页' : language === 'it' ? 'Home' : 'Home', url: '/' },
    { name: language === 'zh' ? '技术博客' : language === 'it' ? 'Blog' : 'Blog', url: '/blog' },
    { name: post.title[language] || post.title.en, url: `/blog/${post.slug}` }
  ]

  return (
    <div className="blog-detail-page">
      <SEO
        title={post.title[language]}
        description={post.excerpt[language]}
        keywords={post.tags.map(t => t[language]).join(',')}
        path={`/blog/${post.slug}`}
      />
      <StructuredData data={breadcrumbSchema(breadcrumbItems)} />
      <StructuredData data={articleSchema(post, language)} />

      <article className="blog-article">
        <div className="container-narrow">
          {/* Article Header */}
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{post.category[language]}</span>
              <span className="meta-divider">·</span>
              <span className="article-date">{post.date}</span>
              <span className="meta-divider">·</span>
              <span className="article-read-time">{post.readTime[language]}</span>
            </div>

            <h1 className="article-title">{post.title[language]}</h1>

            <div className="article-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag[language]}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="article-image">
            <LazyImage
              src={post.thumbnail}
              alt={post.title[language]}
              className="featured-image"
            />
          </div>

          {/* Article Content */}
          <div className="article-content">
            <div className="article-excerpt">
              {post.excerpt[language]}
            </div>

            <div className="article-body">
              {post.content[language]}
            </div>
          </div>

          {/* Author Info */}
          <div className="article-author">
            <div className="author-info">
              <div className="author-name">{post.author[language]}</div>
              <div className="author-bio">
                {t('专注于Web开发和全栈解决方案的独立开发者',
                  'Independent developer focused on web development and full-stack solutions',
                  'Sviluppatore indipendente focalizzato su sviluppo web e soluzioni full-stack')}
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="article-share">
            <ShareButtons
              url={`${siteConfig.url}/blog/${post.slug}`}
              title={post.title[language]}
              description={post.excerpt[language]}
            />
          </div>

          {/* Back to Blog */}
          <div className="article-navigation">
            <Link to="/blog" className="back-link">
              ← {t('返回博客列表', 'Back to Blog', 'Torna al Blog')}
            </Link>
          </div>

          {/* Comments Section */}
          <Comments slug={post.slug} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts">
            <div className="container">
              <h2 className="section-title">
                {t('相关文章', 'Related Posts', 'Articoli Correlati')}
              </h2>
              <div className="related-grid">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}

export default BlogDetail

import { useState } from 'react'
import './MinimalPrototype.css'

function MinimalPrototype() {
  const [hoveredService, setHoveredService] = useState(null)
  const [hoveredCase, setHoveredCase] = useState(null)

  const services = [
    {
      title: '网站开发',
      icon: '🌐',
      description: '精致设计，极致性能',
      tags: ['响应式', 'SEO', '高性能']
    },
    {
      title: 'APP开发',
      icon: '📱',
      description: '原生体验，流畅交互',
      tags: ['iOS', 'Android', '跨平台']
    },
    {
      title: '微信小程序',
      icon: '💬',
      description: '快速部署，即用即走',
      tags: ['商城', '工具', '社交']
    },
    {
      title: '软件定制',
      icon: '⚙️',
      description: '量身定制，灵活扩展',
      tags: ['CRM', 'ERP', '数据平台']
    }
  ]

  const cases = [
    {
      title: '极简商城',
      category: '电商',
      year: '2024',
      color: '#667eea',
      description: '现代电商体验平台'
    },
    {
      title: '企业门户',
      category: '企业',
      year: '2024',
      color: '#764ba2',
      description: '专业企业形象展示'
    },
    {
      title: '社交网络',
      category: '社交',
      year: '2023',
      color: '#f093fb',
      description: '新一代社交平台'
    },
    {
      title: '数据中心',
      category: '数据',
      year: '2023',
      color: '#4facfe',
      description: '智能数据分析平台'
    }
  ]

  return (
    <div className="minimal-prototype">
      {/* Hero Section */}
      <section className="minimal-hero">
        <div className="hero-minimal-content">
          <div className="minimal-badge">简约 · 优雅 · 高效</div>
          <h1 className="minimal-title">
            <span className="title-line">Less is</span>
            <span className="title-line">More</span>
          </h1>
          <p className="minimal-subtitle">
            用最简洁的设计，传达最深刻的理念
          </p>
          <div className="minimal-cta">
            <button className="btn-primary">开始项目</button>
            <button className="btn-secondary">了解更多</button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="minimal-services">
        <div className="container">
          <div className="section-header">
            <div className="section-number">01</div>
            <h2 className="section-title">我们的服务</h2>
            <p className="section-description">
              专注于为客户提供高品质的数字产品解决方案
            </p>
          </div>

          <div className="services-minimal-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-minimal-card ${hoveredService === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="service-minimal-icon">{service.icon}</div>
                <h3 className="service-minimal-title">{service.title}</h3>
                <p className="service-minimal-description">{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="minimal-cases">
        <div className="container">
          <div className="section-header">
            <div className="section-number">02</div>
            <h2 className="section-title">精选案例</h2>
            <p className="section-description">
              每一个项目都是对完美的追求
            </p>
          </div>

          <div className="cases-minimal-grid">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`case-minimal-card ${hoveredCase === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
              >
                <div className="case-minimal-header">
                  <div className="case-number">0{index + 1}</div>
                  <div className="case-year">{caseItem.year}</div>
                </div>
                <div className="case-minimal-content">
                  <div className="case-category" style={{ color: caseItem.color }}>
                    {caseItem.category}
                  </div>
                  <h3 className="case-minimal-title">{caseItem.title}</h3>
                  <p className="case-minimal-description">{caseItem.description}</p>
                </div>
                <div className="case-minimal-visual" style={{ background: `linear-gradient(135deg, ${caseItem.color}20, ${caseItem.color}10)` }}>
                  <div className="visual-shape" style={{ borderColor: caseItem.color }}></div>
                </div>
                <div className="case-hover-indicator">查看项目 →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="minimal-stats">
        <div className="container">
          <div className="stats-minimal-grid">
            <div className="stat-minimal-item">
              <div className="stat-minimal-number">500+</div>
              <div className="stat-minimal-label">成功项目</div>
              <div className="stat-minimal-bar">
                <div className="stat-bar-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="stat-minimal-item">
              <div className="stat-minimal-number">1000+</div>
              <div className="stat-minimal-label">合作客户</div>
              <div className="stat-minimal-bar">
                <div className="stat-bar-fill" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="stat-minimal-item">
              <div className="stat-minimal-number">98%</div>
              <div className="stat-minimal-label">满意度</div>
              <div className="stat-minimal-bar">
                <div className="stat-bar-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="stat-minimal-item">
              <div className="stat-minimal-number">24/7</div>
              <div className="stat-minimal-label">技术支持</div>
              <div className="stat-minimal-bar">
                <div className="stat-bar-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="minimal-cta-section">
        <div className="container">
          <div className="cta-minimal-content">
            <h2 className="cta-minimal-title">准备开始了吗？</h2>
            <p className="cta-minimal-subtitle">
              让我们一起创造简约而不简单的作品
            </p>
            <button className="cta-minimal-button">
              <span>联系我们</span>
              <span className="button-underline"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="minimal-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">土豆建站</div>
            <div className="footer-links">
              <a href="#services">服务</a>
              <a href="#cases">案例</a>
              <a href="#about">关于</a>
              <a href="#contact">联系</a>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">© 2024 土豆建站. 保留所有权利.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MinimalPrototype

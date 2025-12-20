import { useState, useEffect } from 'react'
import './ThreeDPrototype.css'

function ThreeDPrototype() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const services = [
    {
      title: '网站开发',
      icon: '🌐',
      description: '响应式网站设计与开发，极致用户体验',
      features: ['前端开发', '后端开发', '全栈解决方案'],
      color: '#6366f1'
    },
    {
      title: 'APP开发',
      icon: '📱',
      description: '跨平台移动应用，原生性能体验',
      features: ['iOS应用', 'Android应用', 'React Native'],
      color: '#8b5cf6'
    },
    {
      title: '微信小程序',
      icon: '💬',
      description: '微信生态开发，快速部署上线',
      features: ['小程序商城', '企业工具', '社交应用'],
      color: '#ec4899'
    },
    {
      title: '软件定制',
      icon: '⚙️',
      description: '企业级系统定制，满足复杂需求',
      features: ['CRM系统', 'ERP系统', '数据平台'],
      color: '#06b6d4'
    }
  ]

  const cases = [
    {
      title: 'AI智能平台',
      category: '人工智能',
      image: '🤖',
      description: '基于深度学习的智能分析平台',
      metrics: { users: '100K+', rating: '4.9', uptime: '99.9%' }
    },
    {
      title: '云端协作系统',
      category: '企业服务',
      image: '☁️',
      description: '团队协作与项目管理一体化',
      metrics: { users: '50K+', rating: '4.8', uptime: '99.8%' }
    },
    {
      title: '智慧物流',
      category: '物流',
      image: '🚚',
      description: '全链路物流追踪与优化系统',
      metrics: { users: '200K+', rating: '4.9', uptime: '99.9%' }
    },
    {
      title: '在线教育平台',
      category: '教育',
      image: '📚',
      description: '互动式在线学习体验平台',
      metrics: { users: '300K+', rating: '4.7', uptime: '99.7%' }
    }
  ]

  return (
    <div className="threed-prototype">
      {/* Floating Shapes Background */}
      <div className="floating-shapes">
        <div className="shape shape-1" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}></div>
        <div className="shape shape-2" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}></div>
        <div className="shape shape-3" style={{ transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)` }}></div>
      </div>

      {/* Hero Section */}
      <section className="threed-hero">
        <div
          className="hero-content"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <h1 className="threed-title">
            <span className="title-3d" style={{ transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)` }}>
              创新科技
            </span>
            <span className="title-gradient">驱动未来</span>
          </h1>
          <p className="threed-subtitle">立体化视觉体验 · 沉浸式交互设计</p>
          <div className="hero-cards">
            {['专业团队', '极速交付', '持续服务'].map((text, index) => (
              <div
                key={index}
                className="hero-card"
                style={{
                  transform: `translateY(${scrollY * 0.2 * (index + 1)}px) rotateY(${mousePosition.x * 0.3}deg)`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="card-inner">
                  <div className="card-front">{text}</div>
                  <div className="card-back">✨</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="threed-services">
        <h2 className="section-title-3d">
          <span style={{ transform: `translateZ(${scrollY * 0.1}px)` }}>核心服务</span>
        </h2>
        <div className="services-3d-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-3d-card"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              <div className="card-3d-inner">
                <div className="card-shine" style={{ background: `linear-gradient(135deg, transparent, ${service.color}40, transparent)` }}></div>
                <div className="service-3d-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-3d-title" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="service-3d-description">{service.description}</p>
                <ul className="service-3d-features">
                  {service.features.map((feature, i) => (
                    <li key={i} style={{ borderColor: service.color }}>
                      <span style={{ background: service.color }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section className="threed-cases">
        <h2 className="section-title-3d">
          <span style={{ transform: `translateZ(${scrollY * 0.1}px)` }}>成功案例</span>
        </h2>
        <div className="cases-3d-grid">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="case-3d-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="case-3d-image">
                <div className="image-overlay"></div>
                <span className="case-emoji">{caseItem.image}</span>
              </div>
              <div className="case-3d-content">
                <div className="case-3d-category">{caseItem.category}</div>
                <h3 className="case-3d-title">{caseItem.title}</h3>
                <p className="case-3d-description">{caseItem.description}</p>
                <div className="case-metrics">
                  <div className="metric">
                    <div className="metric-value">{caseItem.metrics.users}</div>
                    <div className="metric-label">用户</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">{caseItem.metrics.rating}</div>
                    <div className="metric-label">评分</div>
                  </div>
                  <div className="metric">
                    <div className="metric-value">{caseItem.metrics.uptime}</div>
                    <div className="metric-label">稳定性</div>
                  </div>
                </div>
              </div>
              <div className="case-3d-hover">
                <button className="view-button">查看项目</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="threed-cta">
        <div className="cta-3d-container">
          <h2 className="cta-3d-title">准备开始您的项目了吗？</h2>
          <p className="cta-3d-subtitle">让我们一起打造令人惊艳的数字产品</p>
          <button className="cta-3d-button">
            <span className="button-layer layer-1">立即咨询</span>
            <span className="button-layer layer-2">立即咨询</span>
            <span className="button-layer layer-3">立即咨询</span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default ThreeDPrototype

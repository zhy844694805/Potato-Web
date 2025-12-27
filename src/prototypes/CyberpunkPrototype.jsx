import { useEffect, useRef } from 'react'
import './CyberpunkPrototype.css'

// Particle class for canvas animation - moved outside component for Fast Refresh compatibility
function createParticle(canvasWidth, canvasHeight) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 2
  }
}

function updateParticle(particle, canvasWidth, canvasHeight) {
  particle.x += particle.vx
  particle.y += particle.vy

  if (particle.x < 0 || particle.x > canvasWidth) particle.vx *= -1
  if (particle.y < 0 || particle.y > canvasHeight) particle.vy *= -1
}

function drawParticle(ctx, particle) {
  ctx.beginPath()
  ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)'
  ctx.fill()
}

function CyberpunkPrototype() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 100

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(canvas.width, canvas.height))
    }

    function animate() {
      ctx.fillStyle = 'rgba(10, 0, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        updateParticle(particle, canvas.width, canvas.height)
        drawParticle(ctx, particle)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const services = [
    {
      title: '网站开发',
      icon: '🌐',
      description: '高性能响应式网站，支持PC、移动端、平板多端适配',
      features: ['定制开发', '模板建站', 'SEO优化']
    },
    {
      title: 'APP开发',
      icon: '📱',
      description: '原生/跨平台移动应用开发，流畅体验',
      features: ['iOS开发', 'Android开发', '跨平台方案']
    },
    {
      title: '微信小程序',
      icon: '💬',
      description: '微信生态小程序，快速触达用户',
      features: ['商城小程序', '工具小程序', '社交小程序']
    },
    {
      title: '软件定制',
      icon: '⚙️',
      description: '企业级软件系统定制开发',
      features: ['管理系统', '数据平台', '自动化工具']
    }
  ]

  const cases = [
    {
      title: '智能电商平台',
      category: '电商',
      image: '🛒',
      tech: ['React', 'Node.js', 'MongoDB'],
      description: 'AI驱动的个性化推荐电商平台'
    },
    {
      title: '企业管理系统',
      category: '企业服务',
      image: '📊',
      tech: ['Vue', 'Spring Boot', 'MySQL'],
      description: '全流程数字化管理解决方案'
    },
    {
      title: '社交APP',
      category: '社交',
      image: '👥',
      tech: ['React Native', 'GraphQL', 'Redis'],
      description: '实时通讯与社交网络平台'
    },
    {
      title: '金融科技平台',
      category: '金融',
      image: '💰',
      tech: ['Next.js', 'Python', 'PostgreSQL'],
      description: '安全可靠的金融服务平台'
    }
  ]

  return (
    <div className="cyberpunk-prototype">
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      {/* Hero Section */}
      <section className="cyber-hero">
        <div className="glitch-container">
          <h1 className="cyber-title glitch" data-text="未来科技 · 智能开发">
            未来科技 · 智能开发
          </h1>
        </div>
        <p className="cyber-subtitle">打造极致科技体验的数字产品</p>
        <div className="cyber-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">成功案例</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">客户满意度</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">技术支持</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="cyber-services">
        <h2 className="section-title">
          <span className="title-line"></span>
          核心服务
          <span className="title-line"></span>
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <div className="card-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section className="cyber-cases">
        <h2 className="section-title">
          <span className="title-line"></span>
          精选案例
          <span className="title-line"></span>
        </h2>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="case-image">{caseItem.image}</div>
              <div className="case-content">
                <div className="case-category">{caseItem.category}</div>
                <h3 className="case-title">{caseItem.title}</h3>
                <p className="case-description">{caseItem.description}</p>
                <div className="case-tech">
                  {caseItem.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="case-overlay">查看详情 →</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cyber-cta">
        <h2 className="cta-title">准备开始您的项目？</h2>
        <p className="cta-subtitle">让我们一起创造令人惊叹的数字体验</p>
        <button className="cyber-button">
          <span className="button-text">立即咨询</span>
          <span className="button-glow"></span>
        </button>
      </section>
    </div>
  )
}

export default CyberpunkPrototype

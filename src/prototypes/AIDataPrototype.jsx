import { useState, useEffect } from 'react'
import './AIDataPrototype.css'

function AIDataPrototype() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    efficiency: 0
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        projects: 500,
        clients: 1000,
        satisfaction: 98,
        efficiency: 99
      })
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      title: '网站开发',
      icon: '🌐',
      description: 'AI驱动的智能网站开发平台',
      stats: { speed: '85%', quality: '95%', satisfaction: '98%' },
      trend: 'up'
    },
    {
      title: 'APP开发',
      icon: '📱',
      description: '跨平台移动应用开发解决方案',
      stats: { speed: '90%', quality: '93%', satisfaction: '96%' },
      trend: 'up'
    },
    {
      title: '微信小程序',
      icon: '💬',
      description: '微信生态一站式开发服务',
      stats: { speed: '88%', quality: '94%', satisfaction: '97%' },
      trend: 'up'
    },
    {
      title: '软件定制',
      icon: '⚙️',
      description: '企业级软件智能定制平台',
      stats: { speed: '82%', quality: '96%', satisfaction: '99%' },
      trend: 'up'
    }
  ]

  const cases = [
    {
      title: 'AI智能分析平台',
      category: '人工智能',
      image: '🤖',
      description: '基于机器学习的数据分析系统',
      performance: { cpu: 45, memory: 62, network: 88 },
      status: 'active'
    },
    {
      title: '实时数据看板',
      category: '数据可视化',
      image: '📊',
      description: '企业级实时数据监控平台',
      performance: { cpu: 38, memory: 55, network: 92 },
      status: 'active'
    },
    {
      title: '智能推荐引擎',
      category: '机器学习',
      image: '🎯',
      description: '个性化内容推荐算法平台',
      performance: { cpu: 52, memory: 68, network: 85 },
      status: 'active'
    },
    {
      title: '云计算平台',
      category: '云服务',
      image: '☁️',
      description: '弹性可扩展的云计算基础设施',
      performance: { cpu: 41, memory: 58, network: 95 },
      status: 'active'
    }
  ]

  const aiFeatures = [
    { icon: '🧠', label: '智能分析', value: '99.8%' },
    { icon: '⚡', label: '实时处理', value: '<1ms' },
    { icon: '🔒', label: '安全保障', value: '100%' },
    { icon: '🚀', label: '高效部署', value: '24/7' }
  ]

  return (
    <div className="aidata-prototype">
      {/* Animated Grid Background */}
      <div className="grid-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="grid-line" style={{ animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="ai-hero">
        <div className="ai-badge">
          <span className="badge-pulse"></span>
          <span className="badge-text">AI POWERED</span>
        </div>
        <h1 className="ai-title">
          <span className="title-ai">智能驱动</span>
          <span className="title-data">数据赋能</span>
        </h1>
        <p className="ai-subtitle">
          基于人工智能的下一代软件开发平台
        </p>

        {/* Real-time Stats */}
        <div className="stats-dashboard">
          <div className="stat-box">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <div className="stat-value" data-target="500">{stats.projects}+</div>
              <div className="stat-label">项目交付</div>
            </div>
            <div className="stat-chart">
              <div className="chart-bar" style={{ height: '60%' }}></div>
              <div className="chart-bar" style={{ height: '80%' }}></div>
              <div className="chart-bar" style={{ height: '100%' }}></div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">👥</div>
            <div className="stat-content">
              <div className="stat-value">{stats.clients}+</div>
              <div className="stat-label">合作客户</div>
            </div>
            <div className="stat-chart">
              <div className="chart-bar" style={{ height: '70%' }}></div>
              <div className="chart-bar" style={{ height: '85%' }}></div>
              <div className="chart-bar" style={{ height: '95%' }}></div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-value">{stats.satisfaction}%</div>
              <div className="stat-label">客户满意度</div>
            </div>
            <div className="stat-chart">
              <div className="chart-bar" style={{ height: '90%' }}></div>
              <div className="chart-bar" style={{ height: '95%' }}></div>
              <div className="chart-bar" style={{ height: '98%' }}></div>
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <div className="stat-value">{stats.efficiency}%</div>
              <div className="stat-label">效率提升</div>
            </div>
            <div className="stat-chart">
              <div className="chart-bar" style={{ height: '85%' }}></div>
              <div className="chart-bar" style={{ height: '92%' }}></div>
              <div className="chart-bar" style={{ height: '99%' }}></div>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="ai-features">
          {aiFeatures.map((feature, index) => (
            <div key={index} className="ai-feature-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-label">{feature.label}</div>
              <div className="feature-value">{feature.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="ai-services">
        <h2 className="section-title-ai">
          <span className="title-icon">🎯</span>
          核心服务
          <span className="title-decorator"></span>
        </h2>
        <div className="services-ai-grid">
          {services.map((service, index) => (
            <div key={index} className="service-ai-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-ai-header">
                <div className="service-ai-icon">{service.icon}</div>
                <div className="service-status">
                  <span className="status-dot"></span>
                  <span className="status-text">在线</span>
                </div>
              </div>
              <h3 className="service-ai-title">{service.title}</h3>
              <p className="service-ai-description">{service.description}</p>

              {/* Performance Metrics */}
              <div className="service-metrics">
                <div className="metric-row">
                  <span className="metric-name">速度</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: service.stats.speed }}></div>
                  </div>
                  <span className="metric-value">{service.stats.speed}</span>
                </div>
                <div className="metric-row">
                  <span className="metric-name">质量</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: service.stats.quality }}></div>
                  </div>
                  <span className="metric-value">{service.stats.quality}</span>
                </div>
                <div className="metric-row">
                  <span className="metric-name">满意</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{ width: service.stats.satisfaction }}></div>
                  </div>
                  <span className="metric-value">{service.stats.satisfaction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section className="ai-cases">
        <h2 className="section-title-ai">
          <span className="title-icon">💼</span>
          成功案例
          <span className="title-decorator"></span>
        </h2>
        <div className="cases-ai-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-ai-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="case-ai-header">
                <div className="case-ai-image">{caseItem.image}</div>
                <div className="case-status-badge">
                  <span className="status-indicator"></span>
                  运行中
                </div>
              </div>
              <div className="case-ai-content">
                <div className="case-ai-category">{caseItem.category}</div>
                <h3 className="case-ai-title">{caseItem.title}</h3>
                <p className="case-ai-description">{caseItem.description}</p>

                {/* System Performance */}
                <div className="system-performance">
                  <div className="performance-header">系统性能</div>
                  <div className="performance-stats">
                    <div className="perf-item">
                      <div className="perf-label">CPU</div>
                      <div className="perf-circle">
                        <svg width="60" height="60">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#1a1a2e" strokeWidth="4" />
                          <circle
                            cx="30"
                            cy="30"
                            r="25"
                            fill="none"
                            stroke="#667eea"
                            strokeWidth="4"
                            strokeDasharray={`${caseItem.performance.cpu * 1.57} 157`}
                            strokeLinecap="round"
                            transform="rotate(-90 30 30)"
                          />
                        </svg>
                        <span className="perf-value">{caseItem.performance.cpu}%</span>
                      </div>
                    </div>
                    <div className="perf-item">
                      <div className="perf-label">内存</div>
                      <div className="perf-circle">
                        <svg width="60" height="60">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#1a1a2e" strokeWidth="4" />
                          <circle
                            cx="30"
                            cy="30"
                            r="25"
                            fill="none"
                            stroke="#764ba2"
                            strokeWidth="4"
                            strokeDasharray={`${caseItem.performance.memory * 1.57} 157`}
                            strokeLinecap="round"
                            transform="rotate(-90 30 30)"
                          />
                        </svg>
                        <span className="perf-value">{caseItem.performance.memory}%</span>
                      </div>
                    </div>
                    <div className="perf-item">
                      <div className="perf-label">网络</div>
                      <div className="perf-circle">
                        <svg width="60" height="60">
                          <circle cx="30" cy="30" r="25" fill="none" stroke="#1a1a2e" strokeWidth="4" />
                          <circle
                            cx="30"
                            cy="30"
                            r="25"
                            fill="none"
                            stroke="#f093fb"
                            strokeWidth="4"
                            strokeDasharray={`${caseItem.performance.network * 1.57} 157`}
                            strokeLinecap="round"
                            transform="rotate(-90 30 30)"
                          />
                        </svg>
                        <span className="perf-value">{caseItem.performance.network}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="cta-ai-container">
          <div className="cta-ai-content">
            <h2 className="cta-ai-title">开启智能开发之旅</h2>
            <p className="cta-ai-subtitle">让AI驱动您的项目，实现数据赋能</p>
            <button className="cta-ai-button">
              <span className="button-icon">🚀</span>
              <span className="button-text">立即开始</span>
              <span className="button-arrow">→</span>
            </button>
          </div>
          <div className="cta-visual">
            <div className="visual-circle circle-1"></div>
            <div className="visual-circle circle-2"></div>
            <div className="visual-circle circle-3"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIDataPrototype

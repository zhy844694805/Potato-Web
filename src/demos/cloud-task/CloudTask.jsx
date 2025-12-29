import { useState } from 'react'
import {
  translations,
  features,
  pricingPlans,
  testimonials,
  stats,
  dashboardData,
  companyInfo
} from './data/saas-data'
import './CloudTask.css'

function CloudTask() {
  const [language, setLanguage] = useState('zh')
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  const t = translations[language]

  return (
    <div className="cloudtask-app">
      {/* Header */}
      <header className="cloudtask-header">
        <div className="cloudtask-header-inner">
          <a href="#home" className="cloudtask-logo">
            <div className="cloudtask-logo-icon">CT</div>
            <span className="cloudtask-logo-text">CloudTask</span>
          </a>

          <nav className="cloudtask-nav">
            <a href="#features">{t.nav.features}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="#testimonials">{t.nav.testimonials}</a>
            <a href="#demo">{t.nav.demo}</a>
          </nav>

          <div className="cloudtask-header-actions">
            <div className="cloudtask-lang">
              {['it', 'en', 'zh'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={language === lang ? 'active' : ''}
                >
                  {lang === 'zh' ? '中' : lang.toUpperCase()}
                </button>
              ))}
            </div>
            <button className="cloudtask-header-cta">
              {t.hero.cta}
            </button>
          </div>

          <button className="cloudtask-menu-btn" aria-label="Menu">
            &#9776;
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="cloudtask-hero">
        <div className="cloudtask-hero-pattern" />
        <div className="cloudtask-hero-grid" />
        <div className="cloudtask-hero-content">
          <div className="cloudtask-hero-badge">
            <span>&#10003;</span>
            {language === 'zh' ? '被10,000+团队信赖' : language === 'en' ? 'Trusted by 10,000+ teams' : 'Scelto da 10.000+ team'}
          </div>
          <h1>{t.hero.tagline}</h1>
          <p>{t.hero.subtitle}</p>
          <div className="cloudtask-hero-buttons">
            <a href="#pricing" className="cloudtask-btn-primary">
              {t.hero.cta}
              <span>&#8594;</span>
            </a>
            <a href="#demo" className="cloudtask-btn-secondary">
              <span>&#9654;</span>
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cloudtask-stats">
        {stats.map((stat, index) => (
          <div key={index} className="cloudtask-stat">
            <span className="cloudtask-stat-value">{stat.value}</span>
            <span className="cloudtask-stat-label">{stat.label[language]}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section id="features" className="cloudtask-section cloudtask-features-section">
        <div className="cloudtask-container">
          <div className="cloudtask-section-header">
            <h2 className="cloudtask-section-title">{t.features.title}</h2>
            <p className="cloudtask-section-subtitle">{t.features.subtitle}</p>
          </div>

          <div className="cloudtask-features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="cloudtask-feature-card">
                <div className="cloudtask-feature-icon">{feature.icon}</div>
                <h3>{feature.name[language]}</h3>
                <p>{feature.desc[language]}</p>
                <div className="cloudtask-feature-highlights">
                  {feature.highlights[language].map((highlight, idx) => (
                    <span key={idx} className="cloudtask-feature-tag">{highlight}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="cloudtask-section cloudtask-pricing-section">
        <div className="cloudtask-container">
          <div className="cloudtask-section-header">
            <h2 className="cloudtask-section-title">{t.pricing.title}</h2>
            <p className="cloudtask-section-subtitle">{t.pricing.subtitle}</p>
          </div>

          <div className="cloudtask-pricing-toggle">
            <button
              className={billingPeriod === 'monthly' ? 'active' : ''}
              onClick={() => setBillingPeriod('monthly')}
            >
              {t.pricing.monthly}
            </button>
            <button
              className={billingPeriod === 'yearly' ? 'active' : ''}
              onClick={() => setBillingPeriod('yearly')}
            >
              {t.pricing.yearly} (-25%)
            </button>
          </div>

          <div className="cloudtask-pricing-grid">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`cloudtask-pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
              >
                {plan.highlighted && (
                  <div className="cloudtask-pricing-badge">{t.pricing.popular}</div>
                )}
                <div className="cloudtask-pricing-header">
                  <h3 className="cloudtask-pricing-name">{plan.name[language]}</h3>
                  <div className="cloudtask-pricing-price">
                    <span className="cloudtask-pricing-currency">&#8364;</span>
                    <span className="cloudtask-pricing-amount">
                      {plan.price[billingPeriod]}
                    </span>
                    <span className="cloudtask-pricing-period">
                      {t.pricing.perMonth}
                    </span>
                  </div>
                  {plan.price.monthly > 0 && (
                    <p className="cloudtask-pricing-desc">{t.pricing.perUser}</p>
                  )}
                </div>

                <ul className="cloudtask-pricing-features">
                  {plan.features[language].map((feature, idx) => (
                    <li key={idx}>
                      <span className="cloudtask-pricing-check">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`cloudtask-pricing-cta ${plan.highlighted ? 'primary' : 'secondary'}`}
                >
                  {plan.id === 'free'
                    ? t.pricing.startFree
                    : plan.id === 'pro'
                    ? t.pricing.startTrial
                    : t.pricing.contactSales}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="demo" className="cloudtask-section cloudtask-dashboard-section">
        <div className="cloudtask-container">
          <div className="cloudtask-section-header">
            <h2 className="cloudtask-section-title">{t.dashboard.title}</h2>
            <p className="cloudtask-section-subtitle">{t.dashboard.subtitle}</p>
          </div>

          <div className="cloudtask-dashboard-preview">
            <div className="cloudtask-dashboard-header">
              <div className="cloudtask-dashboard-dot" />
              <div className="cloudtask-dashboard-dot" />
              <div className="cloudtask-dashboard-dot" />
            </div>

            <div className="cloudtask-dashboard-content">
              <div className="cloudtask-dashboard-main">
                <div className="cloudtask-dashboard-card">
                  <h4>{language === 'zh' ? '项目进度' : language === 'en' ? 'Project Progress' : 'Avanzamento Progetti'}</h4>
                  {dashboardData.projects.map((project, idx) => (
                    <div key={idx} className="cloudtask-project-item">
                      <div className="cloudtask-project-info">
                        <div className="cloudtask-project-name">{project.name[language]}</div>
                        <div className="cloudtask-progress-bar">
                          <div
                            className="cloudtask-progress-fill"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="cloudtask-project-percent">{project.progress}%</span>
                    </div>
                  ))}
                </div>

                <div className="cloudtask-dashboard-card">
                  <h4>{language === 'zh' ? '任务概览' : language === 'en' ? 'Task Overview' : 'Panoramica Attivita'}</h4>
                  <div className="cloudtask-task-stats">
                    <div className="cloudtask-task-stat">
                      <span className="cloudtask-task-stat-value">{dashboardData.taskStats.total}</span>
                      <span className="cloudtask-task-stat-label">
                        {language === 'zh' ? '总任务' : language === 'en' ? 'Total' : 'Totale'}
                      </span>
                    </div>
                    <div className="cloudtask-task-stat completed">
                      <span className="cloudtask-task-stat-value">{dashboardData.taskStats.completed}</span>
                      <span className="cloudtask-task-stat-label">
                        {language === 'zh' ? '已完成' : language === 'en' ? 'Done' : 'Completate'}
                      </span>
                    </div>
                    <div className="cloudtask-task-stat in-progress">
                      <span className="cloudtask-task-stat-value">{dashboardData.taskStats.inProgress}</span>
                      <span className="cloudtask-task-stat-label">
                        {language === 'zh' ? '进行中' : language === 'en' ? 'In Progress' : 'In Corso'}
                      </span>
                    </div>
                    <div className="cloudtask-task-stat todo">
                      <span className="cloudtask-task-stat-value">{dashboardData.taskStats.todo}</span>
                      <span className="cloudtask-task-stat-label">
                        {language === 'zh' ? '待办' : language === 'en' ? 'To Do' : 'Da Fare'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cloudtask-dashboard-sidebar">
                <div className="cloudtask-dashboard-card">
                  <h4>{language === 'zh' ? '团队成员' : language === 'en' ? 'Team Members' : 'Membri Team'}</h4>
                  <div className="cloudtask-team-list">
                    {dashboardData.teamMembers.map((member, idx) => (
                      <div key={idx} className="cloudtask-team-member">
                        <div className="cloudtask-team-avatar">{member.avatar}</div>
                        <div className="cloudtask-team-details">
                          <div className="cloudtask-team-name">{member.name}</div>
                          <div className="cloudtask-team-tasks">
                            {member.tasks} {language === 'zh' ? '个任务' : language === 'en' ? 'tasks' : 'attivita'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="cloudtask-section cloudtask-testimonials-section">
        <div className="cloudtask-container">
          <div className="cloudtask-section-header">
            <h2 className="cloudtask-section-title">{t.testimonials.title}</h2>
            <p className="cloudtask-section-subtitle">{t.testimonials.subtitle}</p>
          </div>

          <div className="cloudtask-testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="cloudtask-testimonial-card">
                <div className="cloudtask-testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="cloudtask-testimonial-text">
                  &ldquo;{testimonial.text[language]}&rdquo;
                </p>
                <div className="cloudtask-testimonial-author">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="cloudtask-testimonial-avatar"
                  />
                  <div className="cloudtask-testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cloudtask-cta-section">
        <div className="cloudtask-cta-content">
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className="cloudtask-cta-button">
            {t.cta.button}
            <span>&#8594;</span>
          </button>
          <p className="cloudtask-cta-note">{t.cta.noCreditCard}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="cloudtask-footer">
        <div className="cloudtask-footer-inner">
          <div className="cloudtask-footer-grid">
            <div className="cloudtask-footer-brand">
              <div className="cloudtask-footer-logo">
                <div className="cloudtask-footer-logo-icon">CT</div>
                <span className="cloudtask-footer-logo-text">CloudTask</span>
              </div>
              <p className="cloudtask-footer-desc">
                {companyInfo.tagline[language]}
              </p>
            </div>

            <div className="cloudtask-footer-column">
              <h4>{t.footer.product}</h4>
              <ul className="cloudtask-footer-links">
                <li><a href="#features">{t.nav.features}</a></li>
                <li><a href="#pricing">{t.nav.pricing}</a></li>
                <li><a href="#demo">{t.nav.demo}</a></li>
              </ul>
            </div>

            <div className="cloudtask-footer-column">
              <h4>{t.footer.company}</h4>
              <ul className="cloudtask-footer-links">
                <li><a href="#about">{t.footer.about}</a></li>
                <li><a href="#blog">{t.footer.blog}</a></li>
                <li><a href="#careers">{t.footer.careers}</a></li>
              </ul>
            </div>

            <div className="cloudtask-footer-column">
              <h4>{t.footer.support}</h4>
              <ul className="cloudtask-footer-links">
                <li><a href="#help">{t.footer.help}</a></li>
                <li><a href="#docs">{t.footer.docs}</a></li>
                <li><a href="#status">{t.footer.status}</a></li>
              </ul>
            </div>
          </div>

          <div className="cloudtask-footer-bottom">
            <p>&copy; {t.footer.rights}</p>
            <a href="/portfolio/cloud-task" className="cloudtask-footer-back">
              <span>&#8592;</span>
              {language === 'zh' ? '返回案例' : language === 'it' ? 'Torna al portfolio' : 'Back to portfolio'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CloudTask

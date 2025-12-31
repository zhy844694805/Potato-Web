import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import { demos, demoCategories, getDemosByCategory } from '../../data/demos'
import { trackDemoView } from '../../utils/analytics'
import './Demos.css'

function Demos() {
  const { t, language } = useLanguageText()
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredDemos = getDemosByCategory(activeCategory)

  const seoData = {
    zh: {
      title: 'Demo展示',
      description: '浏览我们为各行业客户打造的网站Demo，包括餐饮、美容、专业服务、零售等',
      keywords: 'Demo展示,网站案例,餐饮网站,美容网站,企业网站'
    },
    en: {
      title: 'Demo Gallery',
      description: 'Browse our website demos created for various industries including restaurants, beauty, professional services, and retail',
      keywords: 'demo gallery,website examples,restaurant website,beauty website,business website'
    },
    it: {
      title: 'Galleria Demo',
      description: 'Sfoglia i nostri demo di siti web creati per vari settori tra cui ristoranti, bellezza, servizi professionali e vendita al dettaglio',
      keywords: 'galleria demo,esempi siti web,sito ristorante,sito bellezza,sito aziendale'
    }
  }

  const handleDemoClick = (demo) => {
    trackDemoView(demo.id, demo.name.en)
  }

  return (
    <div className="demos-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/demos"
      />

      <div className="container">
        <section className="demos-hero">
          <h1 className="page-title">
            {t('Demo展示', 'Demo Gallery', 'Galleria Demo')}
          </h1>
          <p className="page-subtitle">
            {t(
              '浏览我们为各行业客户打造的网站Demo，了解我们的设计风格和技术能力',
              'Browse website demos we created for various industries to see our design style and technical capabilities',
              'Sfoglia i demo dei siti web che abbiamo creato per vari settori per vedere il nostro stile di design e le capacità tecniche'
            )}
          </p>
          <div className="demos-stats">
            <div className="stat">
              <span className="stat-value">{demos.length}</span>
              <span className="stat-label">{t('Demo网站', 'Demo Sites', 'Siti Demo')}</span>
            </div>
            <div className="stat">
              <span className="stat-value">{demoCategories.length - 1}</span>
              <span className="stat-label">{t('行业类别', 'Industries', 'Settori')}</span>
            </div>
          </div>
        </section>

        <section className="demos-filter">
          <div className="filter-buttons">
            {demoCategories.map((cat) => (
              <button
                key={cat.value}
                className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label[language]}
              </button>
            ))}
          </div>
        </section>

        <section className="demos-grid">
          {filteredDemos.map((demo) => (
            <Link
              key={demo.id}
              to={`/demo/${demo.slug}`}
              className="demo-card"
              onClick={() => handleDemoClick(demo)}
              style={{ '--demo-color': demo.color }}
            >
              <div className="demo-thumbnail">
                <div
                  className="demo-placeholder"
                  style={{ background: `linear-gradient(135deg, ${demo.color}, ${demo.color}dd)` }}
                >
                  <span className="demo-initial">{demo.name.en.charAt(0)}</span>
                </div>
                <div className="demo-overlay">
                  <span className="demo-view-btn">
                    {t('查看Demo', 'View Demo', 'Vedi Demo')}
                  </span>
                </div>
              </div>
              <div className="demo-info">
                <h3 className="demo-name">{demo.name[language]}</h3>
                <p className="demo-description">{demo.description[language]}</p>
                <div className="demo-features">
                  {demo.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="demo-feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>

        {filteredDemos.length === 0 && (
          <div className="no-demos">
            <p>{t('该分类暂无Demo', 'No demos in this category', 'Nessun demo in questa categoria')}</p>
          </div>
        )}

        <section className="demos-cta">
          <h2>{t('想要类似的网站？', 'Want a Similar Website?', 'Vuoi un Sito Simile?')}</h2>
          <p>
            {t(
              '联系我们，讨论您的项目需求，获取定制方案',
              'Contact us to discuss your project requirements and get a custom solution',
              'Contattaci per discutere le tue esigenze di progetto e ottenere una soluzione personalizzata'
            )}
          </p>
          <Link to="/contact" className="cta-button">
            {t('联系我们', 'Contact Us', 'Contattaci')}
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Demos

import { useState, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguageText } from '../../hooks/useLanguageText'
import SEO from '../../components/SEO'
import ExportPDF from '../../components/business/ExportPDF'
import './Quote.css'

// Constants remain the same...
const projectTypes = {
  website: { base: 500, label: { zh: '企业网站', en: 'WEB', it: 'WEB' } },
  ecommerce: {
    base: 500,
    label: { zh: '电商网站', en: 'E-COMMERCE', it: 'E-COMMERCE' },
    includes: [
      { zh: '基础用户系统（注册/登录）', en: 'Basic auth (register/login)', it: 'Auth base (registra/login)' },
      { zh: '基础后台管理（订单/产品）', en: 'Basic admin (orders/products)', it: 'Admin base (ordini/prodotti)' },
      { zh: '产品展示（最多20个）', en: 'Product display (max 20)', it: 'Vetrina prodotti (max 20)' },
      { zh: '购物车功能', en: 'Shopping cart', it: 'Carrello' }
    ]
  },
  webapp: { base: 2000, label: { zh: '全栈应用', en: 'APP', it: 'APP' } },
  miniprogram: { base: 800, label: { zh: '小程序', en: 'MINI-PROG', it: 'MINI-PROG' } }
}

const pageOptions = [
  { value: '1-5', multiplier: 1, label: { zh: '1-5页', en: '1-5 PGS', it: '1-5 PAG' } },
  { value: '6-10', multiplier: 1.5, label: { zh: '6-10页', en: '6-10 PGS', it: '6-10 PAG' } },
  { value: '11-20', multiplier: 2, label: { zh: '11-20页', en: '11-20 PGS', it: '11-20 PAG' } },
  { value: '20+', multiplier: 2.5, label: { zh: '20页以上', en: '20+ PGS', it: '20+ PAG' } }
]

const features = [
  { id: 'seo', price: 100, label: { zh: 'SEO优化', en: 'SEO_OPT', it: 'SEO_OPT' } },
  { id: 'cms', price: 150, label: { zh: 'CMS内容管理', en: 'CMS_CORE', it: 'CMS_CORE' } },
  { id: 'multilang', price: 100, label: { zh: '多语言支持', en: 'MULTI_LANG', it: 'MULTI_LANG' } },
  { id: 'analytics', price: 50, label: { zh: '数据分析', en: 'ANALYTICS', it: 'ANALYTICS' } },
  { id: 'payment', price: 200, label: { zh: '支付集成', en: 'PAYMENT_GW', it: 'PAYMENT_GW' } },
  { id: 'auth', price: 150, label: { zh: '用户系统', en: 'USER_AUTH', it: 'USER_AUTH' } }
]

// E-commerce specific features (shown when ecommerce is selected)
const ecommerceFeatures = [
  { id: 'multi_payment', price: 200, label: { zh: '多支付方式', en: 'MULTI_PAY', it: 'MULTI_PAY' } },
  { id: 'multi_user', price: 150, label: { zh: '多用户权限', en: 'MULTI_USER', it: 'MULTI_USER' } },
  { id: 'inventory', price: 150, label: { zh: '库存管理', en: 'INVENTORY', it: 'INVENTARIO' } },
  { id: 'coupon', price: 100, label: { zh: '优惠券系统', en: 'COUPON_SYS', it: 'COUPON_SYS' } },
  { id: 'shipping', price: 120, label: { zh: '物流追踪', en: 'SHIPPING', it: 'SPEDIZIONE' } },
  { id: 'reviews', price: 80, label: { zh: '产品评价', en: 'REVIEWS', it: 'RECENSIONI' } },
  { id: 'multilang', price: 100, label: { zh: '多语言支持', en: 'MULTI_LANG', it: 'MULTI_LANG' } },
  { id: 'analytics', price: 50, label: { zh: '销售分析', en: 'SALES_DATA', it: 'DATI_VENDITE' } }
]

const timelines = [
  { value: 'normal', multiplier: 1, label: { zh: '正常', en: 'NORMAL', it: 'NORMAL' } },
  { value: 'urgent', multiplier: 1.3, label: { zh: '加急', en: 'URGENT', it: 'URGENT' } }
]

function Quote() {
  const { t, language } = useLanguageText()
  const [projectType, setProjectType] = useState('website')
  const [pages, setPages] = useState('1-5')
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [timeline, setTimeline] = useState('normal')
  const quoteRef = useRef(null)

  const seoData = {
    zh: { title: '在线报价', description: 'Web开发费用估算器' },
    en: { title: 'Quote', description: 'Web Development Cost Estimator' },
    it: { title: 'Preventivo', description: 'Calcolatore Costi Sviluppo Web' }
  }

  // Get current features based on project type
  const currentFeatures = projectType === 'ecommerce' ? ecommerceFeatures : features

  const handleProjectTypeChange = (type) => {
    setProjectType(type)
    setSelectedFeatures([]) // Clear selections when switching project type
  }

  const toggleFeature = (featureId) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    )
  }

  const calculation = useMemo(() => {
    const basePrice = projectTypes[projectType].base
    const pageMultiplier = pageOptions.find(p => p.value === pages)?.multiplier || 1
    const timelineMultiplier = timelines.find(t => t.value === timeline)?.multiplier || 1
    const activeFeatures = projectType === 'ecommerce' ? ecommerceFeatures : features
    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = activeFeatures.find(f => f.id === featureId)
      return sum + (feature?.price || 0)
    }, 0)
    const subtotal = (basePrice * pageMultiplier + featuresPrice) * timelineMultiplier
    return { subtotal: Math.round(subtotal) }
  }, [projectType, pages, selectedFeatures, timeline])

  return (
    <div className="quote-page">
      <SEO title={seoData[language].title} description={seoData[language].description} path="/quote" />
      
      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// SYSTEM_CONFIG</span>
            <span>COST_ESTIMATOR_V2</span>
          </div>
          <h1 className="page-title-giant">
            {t('在线报价', 'QUOTE', 'PREVENTIVO')}
          </h1>
          <div className="header-decoration-line"></div>
        </section>

        <div className="quote-interface">
          {/* Config Panel */}
          <div className="config-panel">
            
            {/* 1. Project Type */}
            <div className="config-group">
              <label className="group-label font-mono">[01] PROJECT_TYPE</label>
              <div className="option-row">
                {Object.entries(projectTypes).map(([key, value]) => (
                  <button
                    key={key}
                    className={`config-btn font-mono ${projectType === key ? 'active' : ''}`}
                    onClick={() => handleProjectTypeChange(key)}
                  >
                    {value.label[language]}
                  </button>
                ))}
              </div>
              {projectTypes[projectType].includes && (
                <div className="included-features font-mono">
                  <span className="included-label">{t('已包含基础功能', 'INCLUDED_BASIC', 'INCLUSO_BASE')}:</span>
                  <ul className="included-list">
                    {projectTypes[projectType].includes.map((item, index) => (
                      <li key={index}>+ {item[language]}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* 2. Scale */}
            <div className="config-group">
              <label className="group-label font-mono">[02] SCALE</label>
              <div className="option-row">
                {pageOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`config-btn font-mono ${pages === option.value ? 'active' : ''}`}
                    onClick={() => setPages(option.value)}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Modules */}
            <div className="config-group">
              <label className="group-label font-mono">
                [03] {projectType === 'ecommerce' ? t('电商模块', 'E-COM MODULES', 'MODULI E-COM') : 'MODULES'}
              </label>
              <div className="feature-matrix">
                {currentFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`matrix-cell font-mono ${selectedFeatures.includes(feature.id) ? 'active' : ''}`}
                    onClick={() => toggleFeature(feature.id)}
                  >
                    <span className="matrix-status">
                      {selectedFeatures.includes(feature.id) ? '[ONLINE]' : '[OFFLINE]'}
                    </span>
                    {feature.label[language]}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Priority */}
            <div className="config-group">
              <label className="group-label font-mono">[04] PRIORITY</label>
              <div className="option-row">
                {timelines.map((option) => (
                  <button
                    key={option.value}
                    className={`config-btn font-mono ${timeline === option.value ? 'active' : ''}`}
                    onClick={() => setTimeline(option.value)}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Terminal Output */}
          <div className="terminal-output" ref={quoteRef}>
            <div className="terminal-header font-mono">
              <span>OUTPUT_LOG</span>
              <span>:: READ_ONLY</span>
            </div>
            <div className="terminal-body font-mono">
              <div className="log-line">INITIALIZING QUOTE ENGINE...</div>
              <div className="log-line">CALCULATING RESOURCES...</div>
              <br />
              <div className="log-line text-green">{">>"} BASE_SYSTEM: {projectTypes[projectType].label['en']}</div>
              <div className="log-line text-green">{">>"} SCALE_FACTOR: {pages}</div>
              <div className="log-line text-green">{">>"} MODULES_LOADED: {selectedFeatures.length}</div>
              {projectTypes[projectType].includes && (
                <>
                  <br />
                  <div className="log-line">{">>"} INCLUDED_BASIC:</div>
                  {projectTypes[projectType].includes.map((item, index) => (
                    <div key={index} className="log-line text-dim">   + {item['en']}</div>
                  ))}
                </>
              )}
              <br />
              <div className="log-line">--------------------------------</div>
              <div className="log-line total-line">
                ESTIMATED_TOTAL: €{calculation.subtotal}
              </div>
              <div className="log-line">--------------------------------</div>
              <br />
              <div className="terminal-actions">
                <Link to="/contact" className="terminal-btn">
                  [ EXECUTE_ORDER ]
                </Link>
                <ExportPDF 
                  contentRef={quoteRef} 
                  filename="QUOTE_LOG.pdf" 
                  buttonText="[ EXPORT_LOG ]" 
                  variant="text"
                  className="terminal-btn secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote
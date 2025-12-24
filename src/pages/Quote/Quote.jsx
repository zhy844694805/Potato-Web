import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import Button from '../../components/ui/Button'
import './Quote.css'

// Pricing data - 华人市场友好价格
const projectTypes = {
  landing: { base: 200, label: { zh: '落地页', en: 'Landing Page', it: 'Landing Page' } },
  website: { base: 500, label: { zh: '企业网站', en: 'Business Website', it: 'Sito Aziendale' } },
  ecommerce: { base: 1000, label: { zh: '电商网站', en: 'E-commerce', it: 'E-commerce' } },
  webapp: { base: 2000, label: { zh: '全栈应用', en: 'Full-Stack App', it: 'App Full-Stack' } },
  miniprogram: { base: 800, label: { zh: '小程序', en: 'Mini Program', it: 'Mini Programma' } }
}

const pageOptions = [
  { value: '1-5', multiplier: 1, label: { zh: '1-5页', en: '1-5 pages', it: '1-5 pagine' } },
  { value: '6-10', multiplier: 1.5, label: { zh: '6-10页', en: '6-10 pages', it: '6-10 pagine' } },
  { value: '11-20', multiplier: 2, label: { zh: '11-20页', en: '11-20 pages', it: '11-20 pagine' } },
  { value: '20+', multiplier: 2.5, label: { zh: '20页以上', en: '20+ pages', it: '20+ pagine' } }
]

const features = [
  { id: 'responsive', price: 0, included: true, label: { zh: '响应式设计', en: 'Responsive Design', it: 'Design Responsivo' } },
  { id: 'seo', price: 100, label: { zh: 'SEO优化', en: 'SEO Optimization', it: 'Ottimizzazione SEO' } },
  { id: 'cms', price: 150, label: { zh: 'CMS内容管理', en: 'CMS Integration', it: 'Integrazione CMS' } },
  { id: 'multilang', price: 100, label: { zh: '多语言支持', en: 'Multi-language', it: 'Multilingua' } },
  { id: 'analytics', price: 50, label: { zh: '数据分析', en: 'Analytics', it: 'Analytics' } },
  { id: 'payment', price: 200, label: { zh: '支付集成', en: 'Payment Integration', it: 'Integrazione Pagamenti' } },
  { id: 'auth', price: 150, label: { zh: '用户系统', en: 'User Authentication', it: 'Autenticazione Utenti' } },
  { id: 'api', price: 150, label: { zh: 'API集成', en: 'API Integration', it: 'Integrazione API' } }
]

const timelines = [
  { value: 'relaxed', multiplier: 0.9, label: { zh: '不急（2-3个月）', en: 'Relaxed (2-3 months)', it: 'Rilassato (2-3 mesi)' } },
  { value: 'normal', multiplier: 1, label: { zh: '正常（1-2个月）', en: 'Normal (1-2 months)', it: 'Normale (1-2 mesi)' } },
  { value: 'urgent', multiplier: 1.3, label: { zh: '加急（2-4周）', en: 'Urgent (2-4 weeks)', it: 'Urgente (2-4 settimane)' } },
  { value: 'rush', multiplier: 1.5, label: { zh: '特急（1-2周）', en: 'Rush (1-2 weeks)', it: 'Super Urgente (1-2 settimane)' } }
]

const maintenanceOptions = [
  { value: 'none', price: 0, label: { zh: '不需要', en: 'Not needed', it: 'Non necessario' } },
  { value: 'basic', price: 30, label: { zh: '基础维护 (€30/月)', en: 'Basic (€30/mo)', it: 'Base (€30/mese)' } },
  { value: 'standard', price: 60, label: { zh: '标准维护 (€60/月)', en: 'Standard (€60/mo)', it: 'Standard (€60/mese)' } },
  { value: 'premium', price: 100, label: { zh: '高级维护 (€100/月)', en: 'Premium (€100/mo)', it: 'Premium (€100/mese)' } }
]

function Quote() {
  const { language } = useLanguage()
  const [projectType, setProjectType] = useState('website')
  const [pages, setPages] = useState('1-5')
  const [selectedFeatures, setSelectedFeatures] = useState(['responsive'])
  const [timeline, setTimeline] = useState('normal')
  const [maintenance, setMaintenance] = useState('none')

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  const seoData = {
    zh: {
      title: '项目报价',
      description: '在线计算您的Web开发项目费用，获取即时报价估算',
      keywords: '项目报价,网站开发费用,在线报价,开发成本'
    },
    en: {
      title: 'Project Quote',
      description: 'Calculate your web development project cost online, get instant quote estimates',
      keywords: 'project quote,website development cost,online quote,development pricing'
    },
    it: {
      title: 'Preventivo Progetto',
      description: 'Calcola online il costo del tuo progetto di sviluppo web, ottieni preventivi istantanei',
      keywords: 'preventivo progetto,costo sviluppo sito,preventivo online,prezzi sviluppo'
    }
  }

  const toggleFeature = (featureId) => {
    if (featureId === 'responsive') return // Always included
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(f => f !== featureId)
        : [...prev, featureId]
    )
  }

  // Calculate total price
  const calculation = useMemo(() => {
    const basePrice = projectTypes[projectType].base
    const pageMultiplier = pageOptions.find(p => p.value === pages)?.multiplier || 1
    const timelineMultiplier = timelines.find(t => t.value === timeline)?.multiplier || 1

    const featuresPrice = selectedFeatures.reduce((sum, featureId) => {
      const feature = features.find(f => f.id === featureId)
      return sum + (feature?.price || 0)
    }, 0)

    const subtotal = (basePrice * pageMultiplier + featuresPrice) * timelineMultiplier
    const monthlyMaintenance = maintenanceOptions.find(m => m.value === maintenance)?.price || 0

    return {
      basePrice,
      pageMultiplier,
      timelineMultiplier,
      featuresPrice,
      subtotal: Math.round(subtotal),
      monthlyMaintenance,
      minPrice: Math.round(subtotal * 0.85),
      maxPrice: Math.round(subtotal * 1.15)
    }
  }, [projectType, pages, selectedFeatures, timeline, maintenance])

  return (
    <div className="quote-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/quote"
      />

      <div className="container">
        <section className="quote-hero">
          <h1 className="page-title">
            {t('项目报价计算器', 'Project Quote Calculator', 'Calcolatore Preventivo')}
          </h1>
          <p className="page-subtitle">
            {t('根据您的需求，快速估算项目费用',
              'Quickly estimate your project cost based on your requirements',
              'Stima rapidamente il costo del tuo progetto in base alle tue esigenze')}
          </p>
        </section>

        <div className="quote-content">
          <div className="quote-form">
            {/* Project Type */}
            <div className="quote-section">
              <h3 className="section-label">
                <span className="step-number">1</span>
                {t('项目类型', 'Project Type', 'Tipo di Progetto')}
              </h3>
              <div className="option-grid">
                {Object.entries(projectTypes).map(([key, value]) => (
                  <button
                    key={key}
                    className={`option-btn ${projectType === key ? 'active' : ''}`}
                    onClick={() => setProjectType(key)}
                  >
                    <span className="option-label">{value.label[language]}</span>
                    <span className="option-price">€{value.base}+</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pages */}
            <div className="quote-section">
              <h3 className="section-label">
                <span className="step-number">2</span>
                {t('页面数量', 'Number of Pages', 'Numero di Pagine')}
              </h3>
              <div className="option-grid cols-4">
                {pageOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`option-btn ${pages === option.value ? 'active' : ''}`}
                    onClick={() => setPages(option.value)}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="quote-section">
              <h3 className="section-label">
                <span className="step-number">3</span>
                {t('功能选项', 'Features', 'Funzionalità')}
              </h3>
              <div className="feature-grid">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className={`feature-checkbox ${selectedFeatures.includes(feature.id) ? 'checked' : ''} ${feature.included ? 'included' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature.id)}
                      onChange={() => toggleFeature(feature.id)}
                      disabled={feature.included}
                    />
                    <span className="checkbox-mark">
                      {selectedFeatures.includes(feature.id) ? '✓' : ''}
                    </span>
                    <span className="feature-info">
                      <span className="feature-name">{feature.label[language]}</span>
                      <span className="feature-price">
                        {feature.included
                          ? t('已包含', 'Included', 'Incluso')
                          : `+€${feature.price}`}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="quote-section">
              <h3 className="section-label">
                <span className="step-number">4</span>
                {t('交付时间', 'Timeline', 'Tempistiche')}
              </h3>
              <div className="option-grid cols-4">
                {timelines.map((option) => (
                  <button
                    key={option.value}
                    className={`option-btn timeline-btn ${timeline === option.value ? 'active' : ''}`}
                    onClick={() => setTimeline(option.value)}
                  >
                    <span className="option-label">{option.label[language]}</span>
                    {option.multiplier !== 1 && (
                      <span className="option-multiplier">
                        {option.multiplier < 1 ? '-10%' : `+${Math.round((option.multiplier - 1) * 100)}%`}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div className="quote-section">
              <h3 className="section-label">
                <span className="step-number">5</span>
                {t('后期维护', 'Maintenance', 'Manutenzione')}
              </h3>
              <div className="option-grid cols-4">
                {maintenanceOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`option-btn ${maintenance === option.value ? 'active' : ''}`}
                    onClick={() => setMaintenance(option.value)}
                  >
                    {option.label[language]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="quote-summary">
            <div className="summary-card">
              <h3 className="summary-title">
                {t('预估报价', 'Estimated Quote', 'Preventivo Stimato')}
              </h3>

              <div className="price-breakdown">
                <div className="breakdown-item">
                  <span>{t('基础费用', 'Base Price', 'Prezzo Base')}</span>
                  <span>€{calculation.basePrice}</span>
                </div>
                <div className="breakdown-item">
                  <span>{t('页面系数', 'Page Multiplier', 'Moltiplicatore Pagine')}</span>
                  <span>×{calculation.pageMultiplier}</span>
                </div>
                <div className="breakdown-item">
                  <span>{t('功能费用', 'Features', 'Funzionalità')}</span>
                  <span>+€{calculation.featuresPrice}</span>
                </div>
                <div className="breakdown-item">
                  <span>{t('时间系数', 'Timeline', 'Tempistiche')}</span>
                  <span>×{calculation.timelineMultiplier}</span>
                </div>
              </div>

              <div className="price-total">
                <div className="price-range">
                  <span className="range-label">{t('预估范围', 'Estimate Range', 'Range Stimato')}</span>
                  <span className="range-value">
                    €{calculation.minPrice.toLocaleString()} - €{calculation.maxPrice.toLocaleString()}
                  </span>
                </div>
                <div className="price-main">
                  <span className="main-label">{t('参考价格', 'Reference Price', 'Prezzo di Riferimento')}</span>
                  <span className="main-value">€{calculation.subtotal.toLocaleString()}</span>
                </div>
                {calculation.monthlyMaintenance > 0 && (
                  <div className="price-maintenance">
                    <span>+ €{calculation.monthlyMaintenance}/{t('月', 'mo', 'mese')}</span>
                    <span className="maintenance-label">{t('维护费', 'maintenance', 'manutenzione')}</span>
                  </div>
                )}
              </div>

              <div className="summary-note">
                <p>
                  {t('* 此报价仅供参考，最终价格需根据具体需求确定',
                    '* This is an estimate only. Final price depends on specific requirements',
                    '* Questa è solo una stima. Il prezzo finale dipende dai requisiti specifici')}
                </p>
              </div>

              <div className="summary-actions">
                <Link to="/contact">
                  <Button variant="primary" className="full-width">
                    {t('获取正式报价', 'Get Official Quote', 'Richiedi Preventivo Ufficiale')}
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="secondary" className="full-width">
                    {t('查看案例作品', 'View Portfolio', 'Vedi Portfolio')}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="trust-badges">
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>{t('免费咨询', 'Free Consultation', 'Consulenza Gratuita')}</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>{t('无隐藏费用', 'No Hidden Fees', 'Nessun Costo Nascosto')}</span>
              </div>
              <div className="badge">
                <span className="badge-icon">✓</span>
                <span>{t('满意保障', 'Satisfaction Guaranteed', 'Soddisfazione Garantita')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote

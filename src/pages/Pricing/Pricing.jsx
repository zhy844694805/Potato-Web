import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { pricingSchema } from '../../utils/schemas'
import { packages, serviceTypes, addons, hostingFee } from '../../data/pricing'
import './Pricing.css'

function Pricing() {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedAddons, setSelectedAddons] = useState([])

  const content = {
    zh: {
      title: '套餐价格',
      subtitle: '透明定价 • 无隐藏费用',
      step1: '01 选择服务类型',
      step2: '02 选择套餐级别',
      step3: '03 添加增值服务',
      popular: '热门推荐',
      priceRange: '价格区间',
      includes: '包含内容',
      addonsTotal: '额外费用',
      hostingFee: '服务器费用',
      perYear: '/年',
      estimatedTotal: '预估总价',
      disclaimer: '// 最终价格取决于具体需求',
      ctaButton: '获取精准报价'
    },
    en: {
      title: 'PRICING',
      subtitle: 'TRANSPARENT • NO HIDDEN FEES',
      step1: '01 SELECT SERVICE TYPE',
      step2: '02 CHOOSE PACKAGE TIER',
      step3: '03 ADD-ON SERVICES',
      popular: 'POPULAR',
      priceRange: 'PRICE RANGE',
      includes: 'INCLUDES',
      addonsTotal: 'ADD-ONS TOTAL',
      hostingFee: 'HOSTING FEE',
      perYear: '/YR',
      estimatedTotal: 'ESTIMATED TOTAL',
      disclaimer: '// FINAL PRICE DEPENDS ON REQUIREMENTS',
      ctaButton: 'GET EXACT QUOTE'
    },
    it: {
      title: 'PREZZI',
      subtitle: 'TRASPARENTE • NESSUN COSTO NASCOSTO',
      step1: '01 SELEZIONA SERVIZIO',
      step2: '02 SCEGLI LIVELLO',
      step3: '03 SERVIZI EXTRA',
      popular: 'POPOLARE',
      priceRange: 'FASCIA PREZZO',
      includes: 'INCLUDE',
      addonsTotal: 'TOTALE EXTRA',
      hostingFee: 'COSTO HOSTING',
      perYear: '/ANNO',
      estimatedTotal: 'TOTALE STIMATO',
      disclaimer: '// IL PREZZO FINALE DIPENDE DAI REQUISITI',
      ctaButton: 'RICHIEDI PREVENTIVO'
    }
  }

  const t = content[language]

  const handleAddonToggle = (addonId) => {
    setSelectedAddons(prev =>
      prev.includes(addonId)
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  const calculateAddonsTotal = () => {
    return selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId)
      return total + (addon ? addon.price : 0)
    }, 0)
  }

  const formatPrice = (amount) => {
    return `€${amount.toLocaleString()}`
  }

  const getSelectedPackage = () => packages.find(p => p.id === selectedPackage)

  const seoData = {
    zh: {
      title: '套餐价格',
      description: '透明的网站开发价格，多种套餐满足不同需求'
    },
    en: {
      title: 'Pricing',
      description: 'Transparent web development pricing, packages for every need'
    },
    it: {
      title: 'Prezzi',
      description: 'Prezzi trasparenti per sviluppo web, pacchetti per ogni esigenza'
    }
  }

  return (
    <div className="pricing-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        path="/pricing"
      />
      <StructuredData data={pricingSchema(packages, language)} />

      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// PRICING_MATRIX</span>
            <span>DATA_VERSION: 2024.1</span>
          </div>
          <h1 className="page-title-giant">{t.title}</h1>
          <div className="header-decoration-line"></div>
        </section>

        <div className="pricing-grid-layout">
          {/* Step 1: Service Type */}
          <section className="pricing-section">
            <h2 className="section-title-mono">{t.step1}</h2>
            <div className="service-type-grid">
              {serviceTypes.map(service => (
                <button
                  key={service.id}
                  className={`service-type-btn ${selectedService === service.id ? 'active' : ''}`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-name font-mono">{service.name[language]}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Step 2: Package Selection */}
          {selectedService && (
            <section className="pricing-section">
              <h2 className="section-title-mono">{t.step2}</h2>
              <div className="packages-grid">
                {packages.map(pkg => (
                  <div
                    key={pkg.id}
                    className={`package-card ${selectedPackage === pkg.id ? 'active' : ''} ${pkg.popular ? 'popular' : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.popular && <div className="popular-tag font-mono">{t.popular}</div>}
                    <div className="package-header">
                      <h3 className="package-name">{pkg.name[language]}</h3>
                      <div className="package-price font-mono">
                        {formatPrice(pkg.price.min)} - {formatPrice(pkg.price.max)}
                      </div>
                    </div>
                    <ul className="package-features font-mono">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>:: {feature[language]}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Step 3: Add-ons */}
          {selectedPackage && (
            <section className="pricing-section">
              <h2 className="section-title-mono">{t.step3}</h2>
              <div className="addons-grid">
                {addons.map(addon => (
                  <div
                    key={addon.id}
                    className={`addon-item ${selectedAddons.includes(addon.id) ? 'active' : ''}`}
                    onClick={() => handleAddonToggle(addon.id)}
                  >
                    <div className="addon-checkbox">
                      {selectedAddons.includes(addon.id) ? '[x]' : '[ ]'}
                    </div>
                    <span className="addon-name">{addon.name[language]}</span>
                    <span className="addon-price font-mono">+{formatPrice(addon.price)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Total Calculation Bar */}
        {selectedPackage && (
          <div className="pricing-calculator-bar">
            <div className="calc-details font-mono">
              <div className="calc-row">
                <span>BASE_PRICE:</span>
                <span>{formatPrice(getSelectedPackage()?.price.min)}</span>
              </div>
              <div className="calc-row">
                <span>ADD_ONS:</span>
                <span>+{formatPrice(calculateAddonsTotal())}</span>
              </div>
              <div className="calc-row">
                <span>HOSTING:</span>
                <span>{formatPrice(hostingFee.price)}{t.perYear}</span>
              </div>
            </div>
            <div className="calc-total">
              <span className="total-label font-mono">{t.estimatedTotal}</span>
              <span className="total-amount">
                {formatPrice(getSelectedPackage()?.price.min + calculateAddonsTotal())}
              </span>
            </div>
            <Link to="/contact" className="calc-cta-btn">
              {t.ctaButton} →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Pricing
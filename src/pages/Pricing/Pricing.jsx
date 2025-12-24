import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData, { pricingSchema } from '../../components/StructuredData'
import Button from '../../components/ui/Button'
import { packages, serviceTypes, addons, hostingFee } from '../../data/pricing'
import './Pricing.css'

function Pricing() {
  const { language } = useLanguage()
  const [selectedService, setSelectedService] = useState('')
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedAddons, setSelectedAddons] = useState([])

  const content = {
    zh: {
      title: '报价计算器',
      subtitle: '选择您需要的服务，快速获取价格参考',
      step1: '第一步：选择服务类型',
      step2: '第二步：选择套餐',
      step3: '第三步：添加额外服务（可选）',
      popular: '热门推荐',
      priceRange: '价格区间',
      includes: '包含内容',
      addonsTotal: '额外服务总计',
      hostingFee: '空间使用费',
      perYear: '/年',
      estimatedTotal: '预估总价',
      disclaimer: '* 以上价格仅供参考，实际价格根据具体需求确定',
      ctaTitle: '准备开始？',
      ctaDesc: '联系我获取详细报价',
      ctaButton: '获取精准报价'
    },
    en: {
      title: 'Pricing Calculator',
      subtitle: 'Select your service needs and get a quick price reference',
      step1: 'Step 1: Select Service Type',
      step2: 'Step 2: Choose Package',
      step3: 'Step 3: Add Extra Services (Optional)',
      popular: 'Popular',
      priceRange: 'Price Range',
      includes: 'Includes',
      addonsTotal: 'Add-ons Total',
      hostingFee: 'Hosting Fee',
      perYear: '/year',
      estimatedTotal: 'Estimated Total',
      disclaimer: '* Prices are for reference only. Actual pricing depends on specific requirements.',
      ctaTitle: 'Ready to Start?',
      ctaDesc: 'Contact me for a detailed quote',
      ctaButton: 'Get Accurate Quote'
    },
    it: {
      title: 'Calcolatore Prezzi',
      subtitle: 'Seleziona i servizi di cui hai bisogno e ottieni un preventivo rapido',
      step1: 'Passo 1: Seleziona Tipo di Servizio',
      step2: 'Passo 2: Scegli il Pacchetto',
      step3: 'Passo 3: Aggiungi Servizi Extra (Opzionale)',
      popular: 'Popolare',
      priceRange: 'Fascia di Prezzo',
      includes: 'Include',
      addonsTotal: 'Totale Extra',
      hostingFee: 'Costo Hosting',
      perYear: '/anno',
      estimatedTotal: 'Totale Stimato',
      disclaimer: '* I prezzi sono solo indicativi. Il prezzo effettivo dipende dai requisiti specifici.',
      ctaTitle: 'Pronto per Iniziare?',
      ctaDesc: 'Contattami per un preventivo dettagliato',
      ctaButton: 'Richiedi Preventivo'
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
      title: '报价计算器',
      description: '使用我们的在线报价计算器，快速获取网站开发、全栈开发等服务的价格参考',
      keywords: '报价计算器,网站开发价格,全栈开发费用,价格估算'
    },
    en: {
      title: 'Pricing Calculator',
      description: 'Use our online pricing calculator to get quick price references for web development and full-stack services',
      keywords: 'pricing calculator,web development cost,full stack pricing,cost estimation'
    },
    it: {
      title: 'Calcolatore Prezzi',
      description: 'Usa il nostro calcolatore prezzi online per ottenere preventivi rapidi per lo sviluppo web e servizi full-stack',
      keywords: 'calcolatore prezzi,costo sviluppo web,prezzi full stack,stima costi'
    }
  }

  return (
    <div className="pricing-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/pricing"
      />
      <StructuredData data={pricingSchema(packages, language)} />

      <div className="container">
        <section className="pricing-hero">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </section>

        {/* Step 1: Service Type Selection */}
        <section className="pricing-step">
          <h2 className="step-title">{t.step1}</h2>
          <div className="service-type-grid">
            {serviceTypes.map(service => (
              <button
                key={service.id}
                className={`service-type-card ${selectedService === service.id ? 'active' : ''}`}
                onClick={() => setSelectedService(service.id)}
              >
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name[language]}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Step 2: Package Selection */}
        {selectedService && (
          <section className="pricing-step">
            <h2 className="step-title">{t.step2}</h2>
            <div className="packages-grid">
              {packages.map(pkg => (
                <div
                  key={pkg.id}
                  className={`package-card ${selectedPackage === pkg.id ? 'active' : ''} ${pkg.popular ? 'popular' : ''}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  {pkg.popular && <span className="popular-badge">{t.popular}</span>}
                  <h3 className="package-name">{pkg.name[language]}</h3>
                  <p className="package-desc">{pkg.description[language]}</p>
                  <div className="package-price">
                    <span className="price-label">{t.priceRange}</span>
                    <span className="price-value">
                      {formatPrice(pkg.price.min)} - {formatPrice(pkg.price.max)}
                    </span>
                  </div>
                  <div className="package-features">
                    <span className="features-label">{t.includes}</span>
                    <ul>
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature[language]}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Step 3: Add-ons */}
        {selectedPackage && (
          <section className="pricing-step">
            <h2 className="step-title">{t.step3}</h2>
            <div className="addons-grid">
              {addons.map(addon => (
                <label
                  key={addon.id}
                  className={`addon-card ${selectedAddons.includes(addon.id) ? 'active' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddons.includes(addon.id)}
                    onChange={() => handleAddonToggle(addon.id)}
                  />
                  <span className="addon-name">{addon.name[language]}</span>
                  <span className="addon-price">+{formatPrice(addon.price)}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        {/* Summary */}
        {selectedPackage && (
          <section className="pricing-summary">
            <div className="summary-card">
              <div className="summary-row">
                <span>{getSelectedPackage()?.name[language]}</span>
                <span>
                  {formatPrice(getSelectedPackage()?.price.min)} - {formatPrice(getSelectedPackage()?.price.max)}
                </span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="summary-row">
                  <span>{t.addonsTotal}</span>
                  <span>+{formatPrice(calculateAddonsTotal())}</span>
                </div>
              )}
              <div className="summary-row hosting-fee">
                <span>{t.hostingFee}</span>
                <span>{formatPrice(hostingFee.price)}{t.perYear}</span>
              </div>
              <div className="summary-total">
                <span>{t.estimatedTotal}</span>
                <span className="total-value">
                  {formatPrice(getSelectedPackage()?.price.min + calculateAddonsTotal())} - {formatPrice(getSelectedPackage()?.price.max + calculateAddonsTotal())}
                </span>
              </div>
              <p className="disclaimer">{t.disclaimer}</p>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="pricing-cta">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaDesc}</p>
          <Link to="/contact">
            <Button variant="primary">{t.ctaButton}</Button>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Pricing

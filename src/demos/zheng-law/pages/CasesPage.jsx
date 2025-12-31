import { useState } from 'react'

// 成功案例数据
const cases = [
  {
    id: 1,
    icon: '🏆',
    title: {
      it: 'Ricongiungimento Familiare Complesso',
      en: 'Complex Family Reunification',
      zh: '复杂家庭团聚案'
    },
    category: 'immigration',
    result: {
      it: 'Approvato dopo ricorso',
      en: 'Approved after appeal',
      zh: '上诉后获批'
    },
    description: {
      it: 'Cliente con richiesta inizialmente rifiutata per documentazione incompleta. Abbiamo presentato ricorso con nuova documentazione e testimonianze, ottenendo l\'approvazione in 6 mesi.',
      en: 'Client\'s initial request was rejected due to incomplete documentation. We filed an appeal with new documentation and testimonies, obtaining approval in 6 months.',
      zh: '客户初次申请因材料不完整被拒。我们提交上诉并补充新材料和证词，6个月内获得批准。'
    },
    duration: '6 mesi / 6 months / 6个月',
    year: 2024
  },
  {
    id: 2,
    icon: '📄',
    title: {
      it: 'Cittadinanza per Residenza',
      en: 'Citizenship by Residence',
      zh: '居住入籍申请'
    },
    category: 'citizenship',
    result: {
      it: 'Cittadinanza ottenuta',
      en: 'Citizenship obtained',
      zh: '成功入籍'
    },
    description: {
      it: 'Assistenza completa per un imprenditore cinese residente in Italia da 12 anni. Preparazione documentazione, traduzione certificati e accompagnamento durante tutto il processo.',
      en: 'Complete assistance for a Chinese entrepreneur resident in Italy for 12 years. Document preparation, certificate translation, and guidance throughout the entire process.',
      zh: '为在意大利居住12年的华人企业家提供全程服务。材料准备、证书翻译，全程陪同。'
    },
    duration: '18 mesi / 18 months / 18个月',
    year: 2023
  },
  {
    id: 3,
    icon: '🏢',
    title: {
      it: 'Costituzione Società Import-Export',
      en: 'Import-Export Company Formation',
      zh: '进出口公司设立'
    },
    category: 'corporate',
    result: {
      it: 'Società operativa',
      en: 'Company operational',
      zh: '公司正常运营'
    },
    description: {
      it: 'Costituzione di una SRL per commercio internazionale Italia-Cina. Preparazione statuto, registrazione camera di commercio, consulenza fiscale e contrattualistica.',
      en: 'Formation of an SRL for Italy-China international trade. Statute preparation, chamber of commerce registration, tax and contract consulting.',
      zh: '设立意中国际贸易有限责任公司。章程起草、商会注册、税务和合同咨询。'
    },
    duration: '2 mesi / 2 months / 2个月',
    year: 2024
  },
  {
    id: 4,
    icon: '⚖️',
    title: {
      it: 'Difesa Penale - Assoluzione',
      en: 'Criminal Defense - Acquittal',
      zh: '刑事辩护 - 无罪释放'
    },
    category: 'criminal',
    result: {
      it: 'Assolto con formula piena',
      en: 'Full acquittal',
      zh: '完全无罪释放'
    },
    description: {
      it: 'Difesa di un ristoratore accusato ingiustamente di violazioni sanitarie. Attraverso perizie tecniche e testimonianze, abbiamo dimostrato l\'infondatezza delle accuse.',
      en: 'Defense of a restaurateur unjustly accused of health violations. Through technical expert reports and testimonies, we proved the accusations were unfounded.',
      zh: '为被错误指控卫生违规的餐厅老板辩护。通过技术鉴定和证人证词，证明指控不成立。'
    },
    duration: '8 mesi / 8 months / 8个月',
    year: 2023
  },
  {
    id: 5,
    icon: '🏠',
    title: {
      it: 'Compravendita Immobiliare',
      en: 'Real Estate Transaction',
      zh: '房产交易'
    },
    category: 'realestate',
    result: {
      it: 'Transazione completata',
      en: 'Transaction completed',
      zh: '交易完成'
    },
    description: {
      it: 'Assistenza nell\'acquisto di un immobile commerciale a Milano. Due diligence, negoziazione contratto, verifica urbanistica e accompagnamento al rogito.',
      en: 'Assistance in purchasing a commercial property in Milan. Due diligence, contract negotiation, urban planning verification, and deed accompaniment.',
      zh: '协助购买米兰商业房产。尽职调查、合同谈判、城市规划审核、公证陪同。'
    },
    duration: '3 mesi / 3 months / 3个月',
    year: 2024
  },
  {
    id: 6,
    icon: '👨‍👩‍👧',
    title: {
      it: 'Permesso Soggiorno Famiglia',
      en: 'Family Residence Permit',
      zh: '家属居留许可'
    },
    category: 'immigration',
    result: {
      it: 'Permessi rilasciati',
      en: 'Permits issued',
      zh: '居留获批'
    },
    description: {
      it: 'Ottenimento permessi di soggiorno per moglie e due figli di un imprenditore. Coordinamento con consolato cinese, preparazione documenti e follow-up con questura.',
      en: 'Obtaining residence permits for entrepreneur\'s wife and two children. Coordination with Chinese consulate, document preparation, and police follow-up.',
      zh: '为企业家的妻子和两个孩子办理居留。与中国领事馆协调，材料准备，警察局跟进。'
    },
    duration: '4 mesi / 4 months / 4个月',
    year: 2024
  }
]

const categories = [
  { id: 'all', label: { it: 'Tutti', en: 'All', zh: '全部' } },
  { id: 'immigration', label: { it: 'Immigrazione', en: 'Immigration', zh: '移民' } },
  { id: 'citizenship', label: { it: 'Cittadinanza', en: 'Citizenship', zh: '入籍' } },
  { id: 'corporate', label: { it: 'Societario', en: 'Corporate', zh: '公司法' } },
  { id: 'criminal', label: { it: 'Penale', en: 'Criminal', zh: '刑事' } },
  { id: 'realestate', label: { it: 'Immobiliare', en: 'Real Estate', zh: '房产' } }
]

const translations = {
  it: {
    title: 'Casi di Successo',
    subtitle: 'Scopri come abbiamo aiutato i nostri clienti',
    result: 'Risultato',
    duration: 'Durata',
    year: 'Anno',
    cta: 'Hai un caso simile?',
    ctaButton: 'Contattaci Ora'
  },
  en: {
    title: 'Success Stories',
    subtitle: 'Discover how we helped our clients',
    result: 'Result',
    duration: 'Duration',
    year: 'Year',
    cta: 'Have a similar case?',
    ctaButton: 'Contact Us Now'
  },
  zh: {
    title: '成功案例',
    subtitle: '了解我们如何帮助客户',
    result: '结果',
    duration: '时长',
    year: '年份',
    cta: '有类似的案件？',
    ctaButton: '立即联系我们'
  }
}

function CasesPage({ language, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const t = translations[language]

  const filteredCases = selectedCategory === 'all'
    ? cases
    : cases.filter(c => c.category === selectedCategory)

  return (
    <section className="zheng-section zheng-cases-page">
      <div className="zheng-container">
        <div className="zheng-section-header">
          <h2 className="zheng-section-title">{t.title}</h2>
          <p className="zheng-section-subtitle">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="zheng-cases-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`zheng-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label[language]}
            </button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="zheng-cases-grid">
          {filteredCases.map(caseItem => (
            <article key={caseItem.id} className="zheng-case-card">
              <div className="zheng-case-header">
                <span className="zheng-case-icon">{caseItem.icon}</span>
                <span className="zheng-case-result">{caseItem.result[language]}</span>
              </div>
              <h3 className="zheng-case-title">{caseItem.title[language]}</h3>
              <p className="zheng-case-desc">{caseItem.description[language]}</p>
              <div className="zheng-case-meta">
                <span><strong>{t.duration}:</strong> {caseItem.duration.split(' / ')[language === 'it' ? 0 : language === 'en' ? 1 : 2]}</span>
                <span><strong>{t.year}:</strong> {caseItem.year}</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="zheng-cases-cta">
          <h3>{t.cta}</h3>
          <button
            className="zheng-hero-cta"
            onClick={() => onNavigate('contact')}
          >
            {t.ctaButton}
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CasesPage

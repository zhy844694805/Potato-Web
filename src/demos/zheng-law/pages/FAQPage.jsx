import { useState } from 'react'

const faqs = [
  {
    id: 1,
    category: 'immigration',
    question: {
      it: 'Quanto tempo ci vuole per ottenere il permesso di soggiorno?',
      en: 'How long does it take to get a residence permit?',
      zh: '办理居留许可需要多长时间？'
    },
    answer: {
      it: 'I tempi variano in base al tipo di permesso e alla questura competente. In media, per un primo rilascio servono 60-90 giorni dalla presentazione della domanda. Per i rinnovi, i tempi possono essere più brevi (30-60 giorni). In caso di urgenza, possiamo richiedere procedure accelerate.',
      en: 'Processing times vary depending on the permit type and the competent police headquarters. On average, a first issuance takes 60-90 days from application submission. Renewals may be faster (30-60 days). In urgent cases, we can request expedited procedures.',
      zh: '时间因居留类型和所属警察局而异。首次申请平均需要60-90天。续签可能更快（30-60天）。紧急情况下，我们可以申请加急程序。'
    }
  },
  {
    id: 2,
    category: 'immigration',
    question: {
      it: 'Posso lavorare mentre aspetto il rinnovo del permesso?',
      en: 'Can I work while waiting for my permit renewal?',
      zh: '等待居留续签期间可以工作吗？'
    },
    answer: {
      it: 'Sì, se hai presentato la domanda di rinnovo nei tempi previsti e possiedi la ricevuta della richiesta, puoi continuare a lavorare regolarmente. La ricevuta (cedolino) ha valore legale e ti protegge durante l\'attesa.',
      en: 'Yes, if you submitted your renewal application on time and have the request receipt, you can continue working legally. The receipt (cedolino) has legal value and protects you during the waiting period.',
      zh: '是的，如果您按时提交了续签申请并持有申请收据，您可以继续合法工作。收据具有法律效力，在等待期间保护您。'
    }
  },
  {
    id: 3,
    category: 'citizenship',
    question: {
      it: 'Quali sono i requisiti per la cittadinanza italiana?',
      en: 'What are the requirements for Italian citizenship?',
      zh: '意大利入籍有哪些要求？'
    },
    answer: {
      it: 'Per la cittadinanza per residenza: 10 anni di residenza legale in Italia (4 anni per cittadini UE), reddito sufficiente, nessun precedente penale grave, conoscenza della lingua italiana (B1). Per matrimonio: 2 anni di residenza o 3 anni di matrimonio se residenti all\'estero.',
      en: 'For citizenship by residence: 10 years of legal residence in Italy (4 years for EU citizens), sufficient income, no serious criminal record, Italian language proficiency (B1). By marriage: 2 years of residence or 3 years of marriage if residing abroad.',
      zh: '居住入籍：在意大利合法居住10年（欧盟公民4年），收入充足，无重大犯罪记录，意大利语水平（B1）。婚姻入籍：居住2年或境外居住结婚3年。'
    }
  },
  {
    id: 4,
    category: 'corporate',
    question: {
      it: 'Che tipo di società mi conviene aprire?',
      en: 'What type of company should I open?',
      zh: '我应该开设什么类型的公司？'
    },
    answer: {
      it: 'Dipende dalle tue esigenze: SRL (responsabilità limitata, minimo €1 di capitale), SRL semplificata (per under 35, costi ridotti), Ditta individuale (semplice ma responsabilità illimitata), SAS/SNC (società di persone). Offriamo consulenza personalizzata per scegliere la forma più adatta.',
      en: 'It depends on your needs: SRL (limited liability, minimum €1 capital), Simplified SRL (for under 35, reduced costs), Sole proprietorship (simple but unlimited liability), SAS/SNC (partnerships). We offer personalized consulting to choose the most suitable form.',
      zh: '取决于您的需求：SRL（有限责任，最低€1资本）、简化SRL（35岁以下，成本较低）、个体经营（简单但无限责任）、SAS/SNC（合伙企业）。我们提供个性化咨询，帮您选择最合适的形式。'
    }
  },
  {
    id: 5,
    category: 'corporate',
    question: {
      it: 'Quanto costa aprire una SRL?',
      en: 'How much does it cost to open an SRL?',
      zh: '开设SRL公司需要多少钱？'
    },
    answer: {
      it: 'I costi includono: notaio (€1.500-2.500), tassa di registrazione (€200), diritti camerali (€120/anno), capitale sociale (minimo €1, consigliati €10.000). Il nostro studio offre assistenza completa con preventivo trasparente.',
      en: 'Costs include: notary (€1,500-2,500), registration fee (€200), chamber of commerce fees (€120/year), share capital (minimum €1, recommended €10,000). Our firm offers complete assistance with transparent pricing.',
      zh: '费用包括：公证费（€1,500-2,500）、注册费（€200）、商会年费（€120/年）、注册资本（最低€1，建议€10,000）。我们提供全程服务，价格透明。'
    }
  },
  {
    id: 6,
    category: 'criminal',
    question: {
      it: 'Cosa devo fare se ricevo una denuncia?',
      en: 'What should I do if I receive a complaint?',
      zh: '收到刑事投诉该怎么办？'
    },
    answer: {
      it: 'Contatta immediatamente un avvocato. Non rilasciare dichiarazioni senza assistenza legale. Il nostro studio offre consulenza urgente 24/7 per emergenze. È fondamentale agire tempestivamente per proteggere i tuoi diritti.',
      en: 'Contact a lawyer immediately. Do not make any statements without legal assistance. Our firm offers 24/7 emergency consultation. It is crucial to act promptly to protect your rights.',
      zh: '立即联系律师。没有法律协助不要做任何陈述。我们提供24/7紧急咨询。及时行动保护您的权利至关重要。'
    }
  },
  {
    id: 7,
    category: 'general',
    question: {
      it: 'La prima consulenza è gratuita?',
      en: 'Is the first consultation free?',
      zh: '首次咨询免费吗？'
    },
    answer: {
      it: 'Sì, offriamo una prima consulenza gratuita di 30 minuti per valutare il tuo caso. Questo ci permette di capire le tue esigenze e fornirti un preventivo dettagliato senza impegno.',
      en: 'Yes, we offer a free 30-minute initial consultation to evaluate your case. This allows us to understand your needs and provide you with a detailed quote with no obligation.',
      zh: '是的，我们提供30分钟免费初次咨询，评估您的案件。这让我们了解您的需求，并提供详细的报价，无需承诺。'
    }
  },
  {
    id: 8,
    category: 'general',
    question: {
      it: 'In quali lingue offrite assistenza?',
      en: 'In which languages do you offer assistance?',
      zh: '你们提供哪些语言的服务？'
    },
    answer: {
      it: 'Il nostro team è fluente in italiano, inglese e cinese (mandarino). Tutti i documenti possono essere spiegati nella tua lingua preferita, e offriamo traduzione certificata quando necessario.',
      en: 'Our team is fluent in Italian, English, and Chinese (Mandarin). All documents can be explained in your preferred language, and we offer certified translation when needed.',
      zh: '我们的团队精通意大利语、英语和中文（普通话）。所有文件都可以用您喜欢的语言解释，需要时我们提供认证翻译。'
    }
  }
]

const categories = [
  { id: 'all', label: { it: 'Tutte', en: 'All', zh: '全部' } },
  { id: 'immigration', label: { it: 'Immigrazione', en: 'Immigration', zh: '移民' } },
  { id: 'citizenship', label: { it: 'Cittadinanza', en: 'Citizenship', zh: '入籍' } },
  { id: 'corporate', label: { it: 'Societario', en: 'Corporate', zh: '公司' } },
  { id: 'criminal', label: { it: 'Penale', en: 'Criminal', zh: '刑事' } },
  { id: 'general', label: { it: 'Generale', en: 'General', zh: '一般' } }
]

const translations = {
  it: {
    title: 'Domande Frequenti',
    subtitle: 'Risposte alle domande più comuni',
    noResults: 'Nessun risultato trovato',
    stillQuestions: 'Hai altre domande?',
    contactUs: 'Contattaci'
  },
  en: {
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to common questions',
    noResults: 'No results found',
    stillQuestions: 'Still have questions?',
    contactUs: 'Contact Us'
  },
  zh: {
    title: '常见问题',
    subtitle: '常见问题解答',
    noResults: '未找到结果',
    stillQuestions: '还有其他问题？',
    contactUs: '联系我们'
  }
}

function FAQPage({ language, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openId, setOpenId] = useState(null)
  const t = translations[language]

  const filteredFaqs = selectedCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory)

  return (
    <section className="zheng-section zheng-faq-page">
      <div className="zheng-container">
        <div className="zheng-section-header">
          <h2 className="zheng-section-title">{t.title}</h2>
          <p className="zheng-section-subtitle">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="zheng-faq-filter">
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

        {/* FAQ Accordion */}
        <div className="zheng-faq-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div
                key={faq.id}
                className={`zheng-faq-item ${openId === faq.id ? 'open' : ''}`}
              >
                <button
                  className="zheng-faq-question"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span>{faq.question[language]}</span>
                  <span className="zheng-faq-icon">
                    {openId === faq.id ? '−' : '+'}
                  </span>
                </button>
                <div className="zheng-faq-answer">
                  <p>{faq.answer[language]}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="zheng-no-results">{t.noResults}</p>
          )}
        </div>

        {/* CTA */}
        <div className="zheng-faq-cta">
          <h3>{t.stillQuestions}</h3>
          <button
            className="zheng-hero-cta"
            onClick={() => onNavigate('contact')}
          >
            {t.contactUs}
            <span>&#8594;</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQPage

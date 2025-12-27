import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import StructuredData from '../../components/StructuredData'
import { faqPageSchema } from '../../utils/schemas'
import { faqCategories, getFaqsByCategory, faqs } from '../../data/faq'
import './FAQ.css'

function FAQItem({ faq, isOpen, onToggle }) {
  const { language } = useLanguage()
  const answerId = `faq-answer-${faq.id}`

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        id={`faq-question-${faq.id}`}
      >
        <span>{faq.question[language]}</span>
        <span className="faq-icon" aria-hidden="true">{isOpen ? '\u2212' : '+'}</span>
      </button>
      <div
        className="faq-answer"
        id={answerId}
        role="region"
        aria-labelledby={`faq-question-${faq.id}`}
      >
        <p>{faq.answer[language]}</p>
      </div>
    </div>
  )
}

function FAQ() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('process')
  const [openItems, setOpenItems] = useState({})

  const content = {
    zh: {
      title: '常见问题',
      subtitle: '解答您最关心的问题'
    },
    en: {
      title: 'FAQ',
      subtitle: 'Answers to your most common questions'
    },
    it: {
      title: 'FAQ',
      subtitle: 'Risposte alle tue domande più comuni'
    }
  }

  const t = content[language]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const seoData = {
    zh: {
      title: '常见问题',
      description: '了解我们的服务流程、技术方案、付款方式等常见问题解答',
      keywords: '常见问题,FAQ,服务流程,技术问题,付款方式'
    },
    en: {
      title: 'FAQ',
      description: 'Learn about our service process, technical solutions, payment methods, and more',
      keywords: 'FAQ,frequently asked questions,service process,technical questions,payment'
    },
    it: {
      title: 'FAQ',
      description: 'Scopri il nostro processo di servizio, soluzioni tecniche, metodi di pagamento e altro',
      keywords: 'FAQ,domande frequenti,processo di servizio,domande tecniche,pagamento'
    }
  }

  return (
    <div className="faq-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/faq"
      />
      <StructuredData data={faqPageSchema(faqs, language)} />

      <div className="container">
        <section className="faq-hero">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
        </section>

        {/* Category Tabs */}
        <section className="faq-categories">
          {faqCategories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name[language]}</span>
            </button>
          ))}
        </section>

        {/* FAQ List */}
        <section className="faq-list">
          {getFaqsByCategory(activeCategory).map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems[faq.id]}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default FAQ

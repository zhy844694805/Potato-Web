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
    <div className={`faq-item-brutalist ${isOpen ? 'open' : ''}`}>
      <button
        className="faq-question-brutalist"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="faq-id font-mono">Q_{faq.id.toString().padStart(3, '0')}</span>
        <span className="faq-text">{faq.question[language]}</span>
        <span className="faq-status font-mono">
          {isOpen ? '[-]' : '[+]'}
        </span>
      </button>
      <div
        className="faq-answer-brutalist"
        id={answerId}
        role="region"
      >
        <div className="answer-content font-mono">
          <span className="answer-arrow">{">>"} </span>
          {faq.answer[language]}
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('process')
  const [openItems, setOpenItems] = useState({})

  const t = {
    zh: { title: '常见问题', subtitle: 'KNOWLEDGE_BASE_V1.0' },
    en: { title: 'FAQ', subtitle: 'KNOWLEDGE_BASE_V1.0' },
    it: { title: 'FAQ', subtitle: 'BASE_DI_CONOSCENZA_V1.0' }
  }[language]

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const seoData = {
    zh: { title: '常见问题', description: '服务流程与技术解答' },
    en: { title: 'FAQ', description: 'Service Process & Tech Q&A' },
    it: { title: 'FAQ', description: 'Processo di Servizio & Q&A' }
  }

  return (
    <div className="faq-page">
      <SEO title={seoData[language].title} description={seoData[language].description} path="/faq" />
      <StructuredData data={faqPageSchema(faqs, language)} />

      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// SUPPORT</span>
            <span>INDEX_SEARCH</span>
          </div>
          <h1 className="page-title-giant">{t.title}</h1>
          <div className="header-decoration-line"></div>
        </section>

        <div className="faq-layout">
          {/* Sidebar */}
          <aside className="faq-sidebar">
            <div className="sidebar-title font-mono">[CATEGORIES]</div>
            <nav className="faq-nav">
              {faqCategories.map(category => (
                <button
                  key={category.id}
                  className={`faq-nav-btn font-mono ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {activeCategory === category.id ? '> ' : ''}
                  {category.name[language].toUpperCase()}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <section className="faq-content">
            <div className="faq-list-brutalist">
              {getFaqsByCategory(activeCategory).map(faq => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openItems[faq.id]}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default FAQ
import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { siteConfig } from '../../config/site'
import { showToast } from './Toast'
import BookingWidget from './BookingWidget'
import './ChatWidget.css'

// Counter for generating unique message IDs
let messageIdCounter = 0
const getNextMessageId = () => {
  messageIdCounter += 1
  return messageIdCounter
}

// FAQ data in trilingual format
const faqData = [
  {
    id: 1,
    question: {
      zh: '你们提供什么服务？',
      en: 'What services do you offer?',
      it: 'Quali servizi offrite?'
    },
    answer: {
      zh: '我们提供网站开发、移动应用开发、微信小程序开发、UI/UX设计、SEO优化和数字营销服务。我们专注于为意大利华人企业提供定制化的数字解决方案。',
      en: 'We offer website development, mobile app development, WeChat mini-program development, UI/UX design, SEO optimization, and digital marketing services. We specialize in providing customized digital solutions for Italian Chinese businesses.',
      it: 'Offriamo sviluppo siti web, sviluppo app mobile, sviluppo mini-programmi WeChat, design UI/UX, ottimizzazione SEO e servizi di marketing digitale. Siamo specializzati in soluzioni digitali personalizzate per le imprese italo-cinesi.'
    }
  },
  {
    id: 2,
    question: {
      zh: '网站开发多少钱？',
      en: 'How much does a website cost?',
      it: 'Quanto costa un sito web?'
    },
    answer: {
      zh: '网站开发价格根据项目复杂度而定。基础展示网站从800欧元起，电商网站从2000欧元起，定制功能网站需要根据需求评估。我们提供免费咨询和报价服务。',
      en: 'Website development pricing depends on project complexity. Basic showcase websites start from 800 EUR, e-commerce websites from 2000 EUR, and custom functionality websites require a needs assessment. We offer free consultation and quotation services.',
      it: 'Il prezzo dello sviluppo del sito web dipende dalla complessità del progetto. I siti vetrina partono da 800 EUR, i siti e-commerce da 2000 EUR, e i siti con funzionalità personalizzate richiedono una valutazione. Offriamo consulenza e preventivi gratuiti.'
    }
  },
  {
    id: 3,
    question: {
      zh: '需要多长时间？',
      en: 'How long does it take?',
      it: 'Quanto tempo ci vuole?'
    },
    answer: {
      zh: '项目时间取决于复杂程度。简单网站约2-3周，中型项目4-6周，大型定制项目可能需要2-3个月。我们会在项目开始前提供详细的时间表。',
      en: 'Project timeline depends on complexity. Simple websites take about 2-3 weeks, medium projects 4-6 weeks, and large custom projects may take 2-3 months. We provide a detailed timeline before the project starts.',
      it: 'I tempi del progetto dipendono dalla complessità. I siti semplici richiedono circa 2-3 settimane, i progetti medi 4-6 settimane, e i grandi progetti personalizzati possono richiedere 2-3 mesi. Forniamo una tempistica dettagliata prima dell\'inizio del progetto.'
    }
  },
  {
    id: 4,
    question: {
      zh: '提供维护服务吗？',
      en: 'Do you provide maintenance?',
      it: 'Fornite manutenzione?'
    },
    answer: {
      zh: '是的，我们提供全面的网站维护服务，包括安全更新、内容更新、性能优化和技术支持。我们有月度和年度维护套餐可选，确保您的网站始终安全稳定运行。',
      en: 'Yes, we provide comprehensive website maintenance services, including security updates, content updates, performance optimization, and technical support. We have monthly and annual maintenance packages available to ensure your website runs safely and stably.',
      it: 'Si, forniamo servizi completi di manutenzione del sito web, inclusi aggiornamenti di sicurezza, aggiornamenti dei contenuti, ottimizzazione delle prestazioni e supporto tecnico. Abbiamo pacchetti di manutenzione mensili e annuali disponibili per garantire che il vostro sito funzioni in modo sicuro e stabile.'
    }
  },
  {
    id: 5,
    question: {
      zh: '如何联系你们？',
      en: 'How to contact you?',
      it: 'Come contattarvi?'
    },
    answer: {
      zh: `您可以通过以下方式联系我们：\n- 邮箱：${siteConfig.contact.email}\n- 电话：${siteConfig.contact.phone}\n- 微信：${siteConfig.social.wechat}\n我们通常在24小时内回复您的咨询。`,
      en: `You can contact us through:\n- Email: ${siteConfig.contact.email}\n- Phone: ${siteConfig.contact.phone}\n- WeChat: ${siteConfig.social.wechat}\nWe typically respond to inquiries within 24 hours.`,
      it: `Potete contattarci tramite:\n- Email: ${siteConfig.contact.email}\n- Telefono: ${siteConfig.contact.phone}\n- WeChat: ${siteConfig.social.wechat}\nRispondiamo solitamente entro 24 ore.`
    }
  }
]

// Static translations
const translations = {
  chatTitle: {
    zh: 'AI 助手',
    en: 'AI Assistant',
    it: 'Assistente AI'
  },
  welcomeMessage: {
    zh: '您好！我是AI助手。请选择以下常见问题，或切换到联系方式标签获取更多帮助。',
    en: 'Hello! I\'m the AI assistant. Please select a common question below, or switch to the Contact tab for more help.',
    it: 'Ciao! Sono l\'assistente AI. Seleziona una domanda comune qui sotto, o passa alla scheda Contatto per ulteriore assistenza.'
  },
  faqTitle: {
    zh: '常见问题',
    en: 'FAQ',
    it: 'FAQ'
  },
  contactTitle: {
    zh: '联系方式',
    en: 'Contact',
    it: 'Contatto'
  },
  contactPrompt: {
    zh: '没有找到您想要的答案？',
    en: 'Didn\'t find what you\'re looking for?',
    it: 'Non hai trovato quello che cerchi?'
  },
  emailUs: {
    zh: '发送邮件',
    en: 'Email Us',
    it: 'Scrivici'
  },
  addWeChat: {
    zh: '复制微信号',
    en: 'Copy WeChat ID',
    it: 'Copia ID WeChat'
  },
  wechatCopied: {
    zh: '微信号已复制！请打开微信搜索添加好友',
    en: 'WeChat ID copied! Please open WeChat and search to add friend',
    it: 'ID WeChat copiato! Apri WeChat e cerca per aggiungere'
  },
  callUs: {
    zh: '电话咨询',
    en: 'Call Us',
    it: 'Chiamaci'
  },
  bookConsultation: {
    zh: '预约咨询',
    en: 'Book Consultation',
    it: 'Prenota'
  },
  wechatSection: {
    zh: '微信联系',
    en: 'WeChat',
    it: 'WeChat'
  },
  phoneSection: {
    zh: '电话',
    en: 'Phone',
    it: 'Telefono'
  },
  emailSection: {
    zh: '邮箱',
    en: 'Email',
    it: 'Email'
  },
  bookingSection: {
    zh: '预约',
    en: 'Booking',
    it: 'Prenotazione'
  },
  wechatId: {
    zh: '微信号',
    en: 'WeChat ID',
    it: 'ID WeChat'
  },
  responseTime: {
    zh: '通常24小时内回复',
    en: 'Usually reply within 24h',
    it: 'Risposta entro 24 ore'
  },
  close: {
    zh: '关闭',
    en: 'Close',
    it: 'Chiudi'
  },
  openChat: {
    zh: '联系我们',
    en: 'Contact Us',
    it: 'Contattaci'
  }
}

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('faq') // 'faq' or 'contact'
  const [messages, setMessages] = useState([])
  const [showContactOptions, setShowContactOptions] = useState(false)
  const [faqCollapsed, setFaqCollapsed] = useState(false)
  const hasShownWelcome = useRef(false)
  const messagesEndRef = useRef(null)
  const { language } = useLanguage()

  const t = useCallback((key) => translations[key]?.[language] || translations[key]?.en || key, [language])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Handle ESC key to close chat widget
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isOpen])

  const handleQuestionClick = useCallback((faq) => {
    // Add user question
    const userMessage = {
      id: `user-${getNextMessageId()}`,
      type: 'user',
      content: faq.question[language] || faq.question.en
    }

    // Add bot answer
    const botMessage = {
      id: `bot-${getNextMessageId()}`,
      type: 'bot',
      content: faq.answer[language] || faq.answer.en
    }

    setMessages(prev => [...prev, userMessage, botMessage])
    setShowContactOptions(true)
    // Collapse FAQ list to show more messages
    setFaqCollapsed(true)
  }, [language])

  const toggleChat = useCallback(() => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)

    // Add welcome message when opening for the first time
    if (newIsOpen && !hasShownWelcome.current) {
      hasShownWelcome.current = true
      setMessages([
        {
          id: 'welcome',
          type: 'bot',
          content: translations.welcomeMessage[language] || translations.welcomeMessage.en
        }
      ])
    }
  }, [isOpen, language])

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="chat-widget-container">
      {/* Floating Chat Button */}
      <button
        className={`chat-widget ${isOpen ? 'chat-widget--open' : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? t('close') : t('openChat')}
      >
        <span className="chat-widget__icon">
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </span>
      </button>

      {/* Chat Panel */}
      <div className={`chat-panel ${isOpen ? 'chat-panel--open' : ''}`}>
        {/* Header */}
        <div className="chat-panel__header">
          <div className="chat-panel__header-info">
            <div className="chat-panel__avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <div>
              <h3 className="chat-panel__title">{t('chatTitle')}</h3>
              <span className="chat-panel__status">Online</span>
            </div>
          </div>
          <button
            className="chat-panel__close"
            onClick={handleClose}
            aria-label={t('close')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="chat-panel__tabs">
          <button
            className={`chat-panel__tab ${activeTab === 'faq' ? 'chat-panel__tab--active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            {t('faqTitle')}
          </button>
          <button
            className={`chat-panel__tab ${activeTab === 'contact' ? 'chat-panel__tab--active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {t('contactTitle')}
          </button>
        </div>

        {/* Tab Content */}
        <div className="chat-panel__content">
          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <>
              {/* Messages Area */}
              <div className="chat-panel__messages">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`chat-message chat-message--${message.type}`}
                  >
                    <div className="chat-message__content">
                      {message.content.split('\n').map((line, i) => {
                        // Check if line is a list item (starts with -)
                        const isListItem = line.trim().startsWith('-')

                        if (isListItem) {
                          return (
                            <div key={i} className="chat-message__list-item">
                              <span className="chat-message__bullet">•</span>
                              <span>{line.trim().substring(1).trim()}</span>
                            </div>
                          )
                        }

                        return (
                          <span key={i} className="chat-message__line">
                            {line}
                            {i < message.content.split('\n').length - 1 && <br />}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* FAQ Questions */}
              <div className={`chat-panel__faq ${faqCollapsed ? 'chat-panel__faq--collapsed' : ''}`}>
                <div
                  className="chat-panel__faq-title"
                  onClick={() => setFaqCollapsed(!faqCollapsed)}
                >
                  {t('faqTitle')}
                </div>
                <div className="chat-panel__faq-list">
                  {faqData.map(faq => (
                    <button
                      key={faq.id}
                      className="chat-panel__faq-button"
                      onClick={() => handleQuestionClick(faq)}
                    >
                      {faq.question[language] || faq.question.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Options */}
              {showContactOptions && (
                <div className="chat-panel__contact">
                  <p className="chat-panel__contact-prompt">{t('contactPrompt')}</p>
                  <div className="chat-panel__contact-buttons">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="chat-panel__contact-btn chat-panel__contact-btn--email"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      {t('emailUs')}
                    </a>
                    <button
                      className="chat-panel__contact-btn chat-panel__contact-btn--wechat"
                      onClick={() => {
                        navigator.clipboard?.writeText(siteConfig.social.wechat)
                        showToast(t('wechatCopied'), 'success')
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 4.5c0 2.5-2.5 4.5-5.5 4.5-.7 0-1.4-.1-2-.3l-2 1-.5-1.5c-1.5-1-2.5-2.5-2.5-4.2 0-2.5 2.5-4.5 5.5-4.5h1c.3-2.8 3.2-5 6.5-5 .8 0 1.5.1 2.2.3l1.8-.8-.3 1.4c1.3.9 2.3 2.3 2.3 4 0 2.6-2.5 4.6-5.5 4.6h-.5z"/>
                      </svg>
                      {t('addWeChat')}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="chat-panel__contact-info">
              {/* WeChat Section */}
              <div className="contact-section">
                <div className="contact-section__header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5.5 4.5c0 2.5-2.5 4.5-5.5 4.5-.7 0-1.4-.1-2-.3l-2 1-.5-1.5c-1.5-1-2.5-2.5-2.5-4.2 0-2.5 2.5-4.5 5.5-4.5h1c.3-2.8 3.2-5 6.5-5 .8 0 1.5.1 2.2.3l1.8-.8-.3 1.4c1.3.9 2.3 2.3 2.3 4 0 2.6-2.5 4.6-5.5 4.6h-.5z"/>
                  </svg>
                  <h4>{t('wechatSection')}</h4>
                </div>
                <div className="contact-section__content">
                  <div className="wechat-qr">
                    <img
                      src="/wechat-qr.png"
                      alt="WeChat QR Code"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div className="wechat-qr-fallback" style={{ display: 'none' }}>
                      <span>📱</span>
                    </div>
                  </div>
                  <p className="wechat-id">
                    {t('wechatId')}: <strong>{siteConfig.social.wechat}</strong>
                  </p>
                  <button
                    className="contact-btn contact-btn--wechat"
                    onClick={() => {
                      navigator.clipboard?.writeText(siteConfig.social.wechat)
                      showToast(t('wechatCopied'), 'success')
                    }}
                  >
                    {t('addWeChat')}
                  </button>
                </div>
              </div>

              {/* Phone Section */}
              <div className="contact-section">
                <div className="contact-section__header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <h4>{t('phoneSection')}</h4>
                </div>
                <div className="contact-section__content">
                  <a href={`tel:${siteConfig.contact.phone}`} className="contact-btn contact-btn--phone">
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email Section */}
              <div className="contact-section">
                <div className="contact-section__header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <h4>{t('emailSection')}</h4>
                </div>
                <div className="contact-section__content">
                  <a href={`mailto:${siteConfig.contact.email}`} className="contact-btn contact-btn--email">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Booking Section */}
              <div className="contact-section">
                <div className="contact-section__header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <h4>{t('bookingSection')}</h4>
                </div>
                <div className="contact-section__content">
                  <BookingWidget
                    mode="modal"
                    buttonVariant="secondary"
                    buttonText={t('bookConsultation')}
                  />
                </div>
              </div>

              {/* Response Time */}
              <div className="contact-footer">
                <span className="response-badge">
                  ⚡ {t('responseTime')}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChatWidget

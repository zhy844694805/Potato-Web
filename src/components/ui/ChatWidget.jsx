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
      zh: '我们提供网站开发、移动应用开发、微信小程序开发、UI/UX设计、SEO优化和数字营销服务。',
      en: 'We offer website development, mobile app development, WeChat mini-program development, UI/UX design, SEO optimization, and digital marketing services.',
      it: 'Offriamo sviluppo siti web, sviluppo app mobile, sviluppo mini-programmi WeChat, design UI/UX, ottimizzazione SEO e servizi di marketing digitale.'
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
      zh: '网站开发价格根据项目复杂度而定。基础展示网站从800欧元起，电商网站从2000欧元起。请联系我们获取详细报价。',
      en: 'Website development pricing depends on complexity. Basic showcase websites start from 800 EUR, e-commerce websites from 2000 EUR. Contact us for a detailed quote.',
      it: 'Il prezzo dipende dalla complessità. Siti vetrina da 800 EUR, e-commerce da 2000 EUR. Contattaci per un preventivo dettagliato.'
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
      zh: '简单网站约2-3周，中型项目4-6周，大型定制项目可能需要2-3个月。',
      en: 'Simple websites take about 2-3 weeks, medium projects 4-6 weeks, and large custom projects may take 2-3 months.',
      it: 'Siti semplici circa 2-3 settimane, progetti medi 4-6 settimane, progetti grandi 2-3 mesi.'
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
      zh: `您可以通过以下方式联系我们：\n- 邮箱：${siteConfig.contact.email}\n- 电话：${siteConfig.contact.phone}\n- 微信：${siteConfig.social.wechat}`,
      en: `You can contact us through:\n- Email: ${siteConfig.contact.email}\n- Phone: ${siteConfig.contact.phone}\n- WeChat: ${siteConfig.social.wechat}`,
      it: `Potete contattarci tramite:\n- Email: ${siteConfig.contact.email}\n- Telefono: ${siteConfig.contact.phone}\n- WeChat: ${siteConfig.social.wechat}`
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
    zh: '系统就绪。请选择指令或切换标签。',
    en: 'SYSTEM READY. SELECT COMMAND OR SWITCH TAB.',
    it: 'SISTEMA PRONTO. SELEZIONA COMANDO O CAMBIA SCHEDA.'
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
    zh: '需要人工帮助？',
    en: 'NEED HUMAN ASSISTANCE?',
    it: 'SERVE AIUTO UMANO?'
  },
  emailUs: {
    zh: '发送邮件',
    en: 'Email Us',
    it: 'Email'
  },
  addWeChat: {
    zh: '复制微信号',
    en: 'Copy ID',
    it: 'Copia ID'
  },
  wechatCopied: {
    zh: '已复制到剪贴板',
    en: 'COPIED TO CLIPBOARD',
    it: 'COPIATO NEGLI APPUNTI'
  },
  bookConsultation: {
    zh: '预约咨询',
    en: 'Book Consultation',
    it: 'Prenota'
  },
  wechatSection: {
    zh: '微信',
    en: 'WeChat',
    it: 'WeChat'
  },
  phoneSection: {
    zh: '电话',
    en: 'Phone',
    it: 'Tel'
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
  responseTime: {
    zh: '响应时间: <24h',
    en: 'LATENCY: <24h',
    it: 'LATENZA: <24h'
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
  },
  online: {
    zh: '在线',
    en: 'ONLINE',
    it: 'ONLINE'
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
            <span className="chat-panel__status">[{t('online')}]</span>
            <h3 className="chat-panel__title">{t('chatTitle')} v1.0</h3>
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
            {t('faqTitle')}
          </button>
          <button
            className={`chat-panel__tab ${activeTab === 'contact' ? 'chat-panel__tab--active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
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
                              <span className="chat-message__bullet">>
                              </span>
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

              {/* Contact Options in Chat */}
              {showContactOptions && (
                <div className="chat-panel__contact">
                  <p className="chat-panel__contact-prompt">{t('contactPrompt')}</p>
                  <div className="chat-panel__contact-buttons">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="chat-panel__contact-btn chat-panel__contact-btn--email"
                    >
                      {t('emailUs')}
                    </a>
                    <button
                      className="chat-panel__contact-btn chat-panel__contact-btn--wechat"
                      onClick={() => {
                        navigator.clipboard?.writeText(siteConfig.social.wechat)
                        showToast(t('wechatCopied'), 'success')
                      }}
                    >
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
              {/* WeChat Block */}
              <div className="contact-block contact-block--wechat">
                <div className="contact-block__header">{t('wechatSection')}</div>
                <div className="contact-block__content">
                  <div className="wechat-qr-small">
                    <img src="/wechat-qr.png" alt="QR" />
                  </div>
                  <div className="contact-details">
                    <div className="contact-value">{siteConfig.social.wechat}</div>
                    <button
                      className="contact-action-btn"
                      onClick={() => {
                        navigator.clipboard?.writeText(siteConfig.social.wechat)
                        showToast(t('wechatCopied'), 'success')
                      }}
                    >
                      {t('addWeChat')}
                    </button>
                  </div>
                </div>
              </div>

              {/* Contact Grid */}
              <div className="contact-grid-small">
                {/* Phone */}
                <div className="contact-block">
                  <div className="contact-block__header">{t('phoneSection')}</div>
                  <div className="contact-block__content-simple">
                    <a href={`tel:${siteConfig.contact.phone}`} className="contact-link">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-block">
                  <div className="contact-block__header">{t('emailSection')}</div>
                  <div className="contact-block__content-simple">
                    <a href={`mailto:${siteConfig.contact.email}`} className="contact-link">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Booking Block */}
              <div className="contact-block contact-block--booking">
                <div className="contact-block__header">{t('bookingSection')}</div>
                <div className="contact-block__content-simple">
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
                  {t('responseTime')}
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
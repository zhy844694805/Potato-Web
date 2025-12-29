import { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import './BookingWidget.css'

// Default Calendly URL - can be overridden via props or environment variable
const DEFAULT_CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-username'

// Trilingual text content
const translations = {
  zh: {
    bookConsultation: '预约咨询',
    scheduleCall: '预约电话',
    closeModal: '关闭',
    loading: '加载中...'
  },
  en: {
    bookConsultation: 'Book a Consultation',
    scheduleCall: 'Schedule a Call',
    closeModal: 'Close',
    loading: 'Loading...'
  },
  it: {
    bookConsultation: 'Prenota una Consulenza',
    scheduleCall: 'Prenota una Chiamata',
    closeModal: 'Chiudi',
    loading: 'Caricamento...'
  }
}

function BookingWidget({
  calendlyUrl = DEFAULT_CALENDLY_URL,
  mode = 'button', // 'button' | 'inline' | 'modal'
  buttonText,
  buttonVariant = 'primary',
  title,
  height = 630,
  className = ''
}) {
  const { language } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const t = translations[language] || translations.en

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const openModal = () => {
    setIsLoading(true)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Build Calendly embed URL with language parameter
  const getEmbedUrl = () => {
    const url = new URL(calendlyUrl)
    // Map language codes to Calendly's supported locales
    const localeMap = { zh: 'zh-CN', en: 'en', it: 'it' }
    url.searchParams.set('hide_landing_page_details', 'true')
    url.searchParams.set('hide_gdpr_banner', 'true')
    url.searchParams.set('locale', localeMap[language] || 'en')
    return url.toString()
  }

  // Inline mode - render iframe directly
  if (mode === 'inline') {
    return (
      <div className={`booking-widget booking-widget--inline ${className}`}>
        {title && <h3 className="booking-widget__title">{title || t.bookConsultation}</h3>}
        <div className="booking-widget__iframe-container" style={{ height: `${height}px` }}>
          {isLoading && (
            <div className="booking-widget__loading">
              <span className="booking-widget__spinner"></span>
              <span>{t.loading}</span>
            </div>
          )}
          <iframe
            src={getEmbedUrl()}
            className="booking-widget__iframe"
            title={t.bookConsultation}
            onLoad={handleIframeLoad}
          />
        </div>
      </div>
    )
  }

  // Button mode (default) - just render a button that could trigger modal or link
  // Modal mode - render button + modal overlay
  return (
    <div className={`booking-widget ${className}`}>
      <button
        className={`booking-widget__button btn btn-${buttonVariant}`}
        onClick={mode === 'modal' ? openModal : undefined}
        {...(mode === 'button' ? { as: 'a', href: calendlyUrl, target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {buttonText || t.scheduleCall}
      </button>

      {/* Modal overlay */}
      {mode === 'modal' && isModalOpen && (
        <div className="booking-widget__overlay" onClick={closeModal}>
          <div className="booking-widget__modal" onClick={(e) => e.stopPropagation()}>
            <div className="booking-widget__modal-header">
              <h3 className="booking-widget__modal-title">{title || t.bookConsultation}</h3>
              <button
                className="booking-widget__close"
                onClick={closeModal}
                aria-label={t.closeModal}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="booking-widget__modal-content">
              {isLoading && (
                <div className="booking-widget__loading">
                  <span className="booking-widget__spinner"></span>
                  <span>{t.loading}</span>
                </div>
              )}
              <iframe
                src={getEmbedUrl()}
                className="booking-widget__iframe"
                title={t.bookConsultation}
                onLoad={handleIframeLoad}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingWidget

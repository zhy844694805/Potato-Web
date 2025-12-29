import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { siteConfig } from '../../config/site'
import BookingWidget from './BookingWidget'
import './ContactDrawer.css'

function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const t = (zh, en, it) => language === 'zh' ? zh : language === 'it' ? it : en

  return (
    <>
      {/* Floating Button */}
      <button
        className="contact-fab"
        onClick={() => setIsOpen(true)}
        aria-label={t('联系我们', 'Contact Us', 'Contattaci')}
      >
        <span className="fab-icon">💬</span>
        <span className="fab-text">{t('联系', 'Contact', 'Contatto')}</span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div className={`contact-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>{t('联系我们', 'Contact Us', 'Contattaci')}</h3>
          <button
            className="drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label={t('关闭', 'Close', 'Chiudi')}
          >
            ✕
          </button>
        </div>

        <div className="drawer-content">
          {/* WeChat Section */}
          <div className="drawer-section">
            <div className="section-title">
              <span className="section-icon">💬</span>
              <span>{t('微信联系', 'WeChat', 'WeChat')}</span>
            </div>
            <div className="qrcode-container">
              <div className="qrcode-placeholder">
                {/* Replace with actual QR code image */}
                <img
                  src="/wechat-qr.png"
                  alt={t('微信二维码', 'WeChat QR Code', 'Codice QR WeChat')}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="qrcode-fallback" style={{ display: 'none' }}>
                  <span className="qr-icon">📱</span>
                  <span>{t('扫码添加微信', 'Scan to add WeChat', 'Scansiona per aggiungere')}</span>
                </div>
              </div>
              <p className="wechat-id">
                {t('微信号', 'WeChat ID', 'ID WeChat')}: <strong>{siteConfig.social.wechat}</strong>
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="drawer-section">
            <div className="section-title">
              <span className="section-icon">📞</span>
              <span>{t('电话咨询', 'Phone', 'Telefono')}</span>
            </div>
            <a href={`tel:${siteConfig.contact.phone}`} className="phone-link">
              {siteConfig.contact.phone}
            </a>
            <p className="phone-hint">
              {t('点击直接拨打', 'Tap to call', 'Tocca per chiamare')}
            </p>
          </div>

          {/* Email Section */}
          <div className="drawer-section">
            <div className="section-title">
              <span className="section-icon">📧</span>
              <span>{t('邮件联系', 'Email', 'Email')}</span>
            </div>
            <a href={`mailto:${siteConfig.contact.email}`} className="email-link">
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Booking Section */}
          <div className="drawer-section">
            <div className="section-title">
              <span className="section-icon">📅</span>
              <span>{t('预约咨询', 'Book a Call', 'Prenota')}</span>
            </div>
            <BookingWidget
              mode="modal"
              buttonVariant="secondary"
              buttonText={t('预约免费咨询', 'Book Free Consultation', 'Prenota Consulenza')}
            />
          </div>

          {/* Response Time */}
          <div className="drawer-footer">
            <span className="response-badge">
              ⚡ {t('通常24小时内回复', 'Usually reply within 24h', 'Risposta entro 24 ore')}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactDrawer

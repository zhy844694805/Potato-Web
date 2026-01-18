import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import GoldParticles from '../components/GoldParticles'
import { siteInfo, contactInfo } from '../data/siteData'

function ContactPage() {
  const { language, t } = useDCLanguage()
  const basePath = '/demo/dragon-court'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="dc-contact-page">
      <Helmet>
        <title>{language === 'zh' ? '联系我们' : 'Contact'} | {t(siteInfo.name)}</title>
      </Helmet>

      <GoldParticles />

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">訊</span>
          <h1>{language === 'zh' ? '联系我们' : 'Contact Us'}</h1>
          <p>{language === 'zh' ? '期待为您服务' : 'We look forward to serving you'}</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="dc-section dc-contact-cards">
        <div className="dc-container">
          <div className="dc-contact-grid">
            <div className="dc-contact-card">
              <span className="dc-contact-icon">📍</span>
              <h3>{language === 'zh' ? '地址' : 'Address'}</h3>
              <p>{contactInfo.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="dc-contact-link"
              >
                {language === 'zh' ? '查看地图' : 'View on Map'} →
              </a>
            </div>
            <div className="dc-contact-card">
              <span className="dc-contact-icon">📞</span>
              <h3>{language === 'zh' ? '电话' : 'Phone'}</h3>
              <p>{contactInfo.phone}</p>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="dc-contact-link">
                {language === 'zh' ? '立即拨打' : 'Call Now'} →
              </a>
            </div>
            <div className="dc-contact-card">
              <span className="dc-contact-icon">✉️</span>
              <h3>{language === 'zh' ? '邮箱' : 'Email'}</h3>
              <p>{contactInfo.email}</p>
              <a href={`mailto:${contactInfo.email}`} className="dc-contact-link">
                {language === 'zh' ? '发送邮件' : 'Send Email'} →
              </a>
            </div>
            <div className="dc-contact-card highlight">
              <span className="dc-contact-icon">🗓️</span>
              <h3>{language === 'zh' ? '在线预约' : 'Reservations'}</h3>
              <p>{language === 'zh' ? '便捷预订您的用餐体验' : 'Book your dining experience'}</p>
              <Link to={`${basePath}/reservation`} className="dc-contact-link">
                {language === 'zh' ? '立即预约' : 'Reserve Now'} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Map */}
      <section className="dc-section dc-hours-map light">
        <div className="dc-container">
          <div className="dc-hours-map-grid">
            {/* Business Hours */}
            <div className="dc-hours-content">
              <div className="dc-section-header left">
                <span className="dc-section-icon">時</span>
                <h2>{language === 'zh' ? '营业时间' : 'Opening Hours'}</h2>
              </div>
              <div className="dc-hours-list">
                {contactInfo.hours.map((item, i) => (
                  <div key={i} className={`dc-hours-item ${item.closed ? 'closed' : ''}`}>
                    <span className="dc-hours-day">{t(item.day)}</span>
                    <span className="dc-hours-time">
                      {item.closed
                        ? (language === 'zh' ? '休息' : 'Closed')
                        : item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="dc-hours-note">
                <p>
                  {language === 'zh'
                    ? '* 厨房最后点餐时间为打烊前30分钟'
                    : '* Last orders 30 minutes before closing'}
                </p>
                <p>
                  {language === 'zh'
                    ? '* 节假日营业时间可能有所调整'
                    : '* Hours may vary on holidays'}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="dc-map-content">
              <div className="dc-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2543!2d9.1879!3d45.4642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzUxLjEiTiA5wrAxMScxNi40IkU!5e0!3m2!1sen!2sit!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dragon Court Location"
                />
              </div>
              <div className="dc-map-directions">
                <h4>{language === 'zh' ? '如何到达' : 'How to Find Us'}</h4>
                <ul>
                  <li>
                    <strong>{language === 'zh' ? '地铁' : 'Metro'}:</strong>
                    {language === 'zh' ? ' Duomo站步行5分钟' : ' 5 min walk from Duomo'}
                  </li>
                  <li>
                    <strong>{language === 'zh' ? '停车' : 'Parking'}:</strong>
                    {language === 'zh' ? ' 附近有公共停车场' : ' Public parking nearby'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="dc-section dc-contact-form-section">
        <div className="dc-container">
          <div className="dc-section-header">
            <span className="dc-section-icon">書</span>
            <h2>{language === 'zh' ? '留言咨询' : 'Send a Message'}</h2>
            <p>{language === 'zh' ? '如有任何问题，欢迎与我们联系' : 'We\'d love to hear from you'}</p>
          </div>

          {submitted ? (
            <div className="dc-form-success">
              <span className="dc-success-icon">✓</span>
              <h3>{language === 'zh' ? '感谢您的留言！' : 'Thank you for your message!'}</h3>
              <p>
                {language === 'zh'
                  ? '我们会尽快回复您。'
                  : 'We will get back to you shortly.'}
              </p>
              <button className="dc-btn-outline" onClick={() => setSubmitted(false)}>
                {language === 'zh' ? '发送新留言' : 'Send Another Message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dc-contact-form">
              <div className="dc-form-row">
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '姓名' : 'Name'} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'zh' ? '您的姓名' : 'Your name'}
                  />
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '邮箱' : 'Email'} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={language === 'zh' ? '您的邮箱' : 'Your email'}
                  />
                </div>
              </div>
              <div className="dc-form-group">
                <label>{language === 'zh' ? '主题' : 'Subject'}</label>
                <select name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="">{language === 'zh' ? '请选择主题' : 'Select a subject'}</option>
                  <option value="reservation">{language === 'zh' ? '预约咨询' : 'Reservation Inquiry'}</option>
                  <option value="private">{language === 'zh' ? '私人订制/包场' : 'Private Events'}</option>
                  <option value="catering">{language === 'zh' ? '外烩服务' : 'Catering'}</option>
                  <option value="feedback">{language === 'zh' ? '意见反馈' : 'Feedback'}</option>
                  <option value="other">{language === 'zh' ? '其他' : 'Other'}</option>
                </select>
              </div>
              <div className="dc-form-group">
                <label>{language === 'zh' ? '留言内容' : 'Message'} *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder={language === 'zh' ? '请输入您的留言...' : 'Your message...'}
                />
              </div>
              <button type="submit" className="dc-btn-gold">
                <span>{language === 'zh' ? '发送留言' : 'Send Message'}</span>
                <span className="dc-btn-arrow">→</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Private Events */}
      <section className="dc-section dc-private-events light">
        <div className="dc-container">
          <div className="dc-events-content">
            <div className="dc-events-image">
              <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&w=800" alt="Private Events" />
            </div>
            <div className="dc-events-info">
              <span className="dc-events-icon">宴</span>
              <h2>{language === 'zh' ? '私人订制活动' : 'Private Events'}</h2>
              <p>
                {language === 'zh'
                  ? '龙庭为您提供私人订制活动服务。无论是商务宴请、家庭聚会、生日庆典还是婚礼晚宴，我们都能为您打造难忘的用餐体验。'
                  : 'Dragon Court offers private event services. Whether it\'s a business dinner, family gathering, birthday celebration, or wedding reception, we can create an unforgettable dining experience.'}
              </p>
              <ul className="dc-events-features">
                <li>
                  <span>✓</span>
                  {language === 'zh' ? '私密包厢可容纳6-20人' : 'Private rooms for 6-20 guests'}
                </li>
                <li>
                  <span>✓</span>
                  {language === 'zh' ? '定制菜单服务' : 'Customized menu service'}
                </li>
                <li>
                  <span>✓</span>
                  {language === 'zh' ? '专属服务团队' : 'Dedicated service team'}
                </li>
                <li>
                  <span>✓</span>
                  {language === 'zh' ? '全场包场服务' : 'Full venue buyout available'}
                </li>
              </ul>
              <a href={`mailto:${contactInfo.email}?subject=Private Event Inquiry`} className="dc-btn-gold">
                {language === 'zh' ? '咨询私人活动' : 'Inquire About Events'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="dc-section dc-social">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '关注我们' : 'Follow Us'}</h2>
          </div>
          <div className="dc-social-links">
            {contactInfo.social.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dc-social-link"
              >
                <span className="dc-social-icon">{item.icon}</span>
                <span className="dc-social-name">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

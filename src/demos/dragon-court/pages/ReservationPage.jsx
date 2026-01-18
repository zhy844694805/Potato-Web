import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import GoldParticles from '../components/GoldParticles'
import { siteInfo, setMenus } from '../data/siteData'

function ReservationPage() {
  const { language, t } = useDCLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    seating: 'main',
    menu: '',
    requests: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ]

  const occasions = [
    { value: '', label: { zh: '请选择', en: 'Select occasion' } },
    { value: 'birthday', label: { zh: '生日庆祝', en: 'Birthday' } },
    { value: 'anniversary', label: { zh: '周年纪念', en: 'Anniversary' } },
    { value: 'business', label: { zh: '商务宴请', en: 'Business Dinner' } },
    { value: 'date', label: { zh: '浪漫约会', en: 'Romantic Date' } },
    { value: 'family', label: { zh: '家庭聚餐', en: 'Family Gathering' } },
    { value: 'other', label: { zh: '其他', en: 'Other' } }
  ]

  const seatingOptions = [
    { value: 'main', label: { zh: '主厅', en: 'Main Hall' }, desc: { zh: '典雅开放空间', en: 'Elegant open space' } },
    { value: 'private', label: { zh: '贵宾包厢', en: 'Private Room' }, desc: { zh: '私密尊享体验', en: 'Exclusive privacy' } },
    { value: 'window', label: { zh: '临窗雅座', en: 'Window Seat' }, desc: { zh: '城市景观', en: 'City view' } },
    { value: 'terrace', label: { zh: '露台', en: 'Terrace' }, desc: { zh: '户外用餐（季节性）', en: 'Outdoor dining (seasonal)' } }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="dc-reservation-page">
        <Helmet>
          <title>{language === 'zh' ? '预约确认' : 'Reservation Confirmed'} | {t(siteInfo.name)}</title>
        </Helmet>
        <GoldParticles />
        <section className="dc-confirmation">
          <div className="dc-confirmation-content">
            <span className="dc-confirmation-icon">✓</span>
            <h1>{language === 'zh' ? '预约成功' : 'Reservation Confirmed'}</h1>
            <p>
              {language === 'zh'
                ? `感谢您选择龙庭，${formData.name}先生/女士。`
                : `Thank you for choosing Dragon Court, ${formData.name}.`}
            </p>
            <div className="dc-confirmation-details">
              <div className="dc-confirmation-item">
                <span className="dc-confirmation-label">{language === 'zh' ? '日期' : 'Date'}</span>
                <span className="dc-confirmation-value">{formData.date}</span>
              </div>
              <div className="dc-confirmation-item">
                <span className="dc-confirmation-label">{language === 'zh' ? '时间' : 'Time'}</span>
                <span className="dc-confirmation-value">{formData.time}</span>
              </div>
              <div className="dc-confirmation-item">
                <span className="dc-confirmation-label">{language === 'zh' ? '人数' : 'Guests'}</span>
                <span className="dc-confirmation-value">{formData.guests}</span>
              </div>
            </div>
            <p className="dc-confirmation-note">
              {language === 'zh'
                ? '确认邮件已发送至您的邮箱。如需更改预约，请致电我们。'
                : 'A confirmation email has been sent. Please contact us for any changes.'}
            </p>
            <button className="dc-btn-gold" onClick={() => setSubmitted(false)}>
              {language === 'zh' ? '新预约' : 'New Reservation'}
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="dc-reservation-page">
      <Helmet>
        <title>{language === 'zh' ? '在线预约' : 'Reservations'} | {t(siteInfo.name)}</title>
      </Helmet>

      <GoldParticles />

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">預</span>
          <h1>{language === 'zh' ? '在线预约' : 'Make a Reservation'}</h1>
          <p>{language === 'zh' ? '尊享皇家御膳体验' : 'Reserve your imperial dining experience'}</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="dc-section dc-reservation-form">
        <div className="dc-container">
          <form onSubmit={handleSubmit} className="dc-form">
            {/* Guest Information */}
            <div className="dc-form-section">
              <h3 className="dc-form-section-title">
                <span className="dc-form-icon">客</span>
                {language === 'zh' ? '宾客信息' : 'Guest Information'}
              </h3>
              <div className="dc-form-grid">
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '姓名' : 'Full Name'} *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                  />
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '电子邮箱' : 'Email'} *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={language === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                  />
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '联系电话' : 'Phone'} *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={language === 'zh' ? '请输入您的电话' : 'Enter your phone'}
                  />
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="dc-form-section">
              <h3 className="dc-form-section-title">
                <span className="dc-form-icon">訂</span>
                {language === 'zh' ? '预约详情' : 'Reservation Details'}
              </h3>
              <div className="dc-form-grid">
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '日期' : 'Date'} *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '时间' : 'Time'} *</label>
                  <select name="time" value={formData.time} onChange={handleChange} required>
                    <option value="">{language === 'zh' ? '选择时间' : 'Select time'}</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '人数' : 'Number of Guests'} *</label>
                  <select name="guests" value={formData.guests} onChange={handleChange} required>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n}>
                        {n} {language === 'zh' ? '位' : n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value="10+">{language === 'zh' ? '10位以上' : '10+ Guests'}</option>
                  </select>
                </div>
                <div className="dc-form-group">
                  <label>{language === 'zh' ? '特殊场合' : 'Special Occasion'}</label>
                  <select name="occasion" value={formData.occasion} onChange={handleChange}>
                    {occasions.map(occ => (
                      <option key={occ.value} value={occ.value}>{t(occ.label)}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Seating Preference */}
            <div className="dc-form-section">
              <h3 className="dc-form-section-title">
                <span className="dc-form-icon">座</span>
                {language === 'zh' ? '座位偏好' : 'Seating Preference'}
              </h3>
              <div className="dc-seating-options">
                {seatingOptions.map(option => (
                  <label key={option.value} className={`dc-seating-option ${formData.seating === option.value ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="seating"
                      value={option.value}
                      checked={formData.seating === option.value}
                      onChange={handleChange}
                    />
                    <div className="dc-seating-content">
                      <span className="dc-seating-name">{t(option.label)}</span>
                      <span className="dc-seating-desc">{t(option.desc)}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Pre-order Menu */}
            <div className="dc-form-section">
              <h3 className="dc-form-section-title">
                <span className="dc-form-icon">膳</span>
                {language === 'zh' ? '预定套餐（可选）' : 'Pre-order Set Menu (Optional)'}
              </h3>
              <div className="dc-menu-options">
                <label className={`dc-menu-option ${formData.menu === '' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="menu"
                    value=""
                    checked={formData.menu === ''}
                    onChange={handleChange}
                  />
                  <div className="dc-menu-content">
                    <span className="dc-menu-name">{language === 'zh' ? '到店点餐' : 'Order at Restaurant'}</span>
                    <span className="dc-menu-desc">{language === 'zh' ? '到店后再选择' : 'Decide when you arrive'}</span>
                  </div>
                </label>
                {setMenus.map(menu => (
                  <label key={menu.id} className={`dc-menu-option ${formData.menu === menu.id ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="menu"
                      value={menu.id}
                      checked={formData.menu === menu.id}
                      onChange={handleChange}
                    />
                    <div className="dc-menu-content">
                      <span className="dc-menu-name">{t(menu.name)}</span>
                      <span className="dc-menu-price">€{menu.price}/人</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div className="dc-form-section">
              <h3 className="dc-form-section-title">
                <span className="dc-form-icon">備</span>
                {language === 'zh' ? '特殊要求' : 'Special Requests'}
              </h3>
              <div className="dc-form-group full-width">
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows="4"
                  placeholder={language === 'zh'
                    ? '如有食物过敏、饮食禁忌或其他特殊要求，请在此说明...'
                    : 'Please let us know about any allergies, dietary restrictions, or special requests...'}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="dc-form-submit">
              <button type="submit" className="dc-btn-gold large">
                <span>{language === 'zh' ? '确认预约' : 'Confirm Reservation'}</span>
                <span className="dc-btn-arrow">→</span>
              </button>
              <p className="dc-form-note">
                {language === 'zh'
                  ? '* 预约将在24小时内确认。如需取消或更改，请提前24小时联系我们。'
                  : '* Reservations will be confirmed within 24 hours. For cancellations or changes, please contact us at least 24 hours in advance.'}
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Policies */}
      <section className="dc-section dc-policies light">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '预约须知' : 'Reservation Policies'}</h2>
          </div>
          <div className="dc-policies-grid">
            <div className="dc-policy-card">
              <span className="dc-policy-icon">⏰</span>
              <h4>{language === 'zh' ? '营业时间' : 'Hours'}</h4>
              <p>{language === 'zh' ? '午餐: 12:00 - 14:30' : 'Lunch: 12:00 - 14:30'}</p>
              <p>{language === 'zh' ? '晚餐: 18:00 - 22:00' : 'Dinner: 18:00 - 22:00'}</p>
              <p>{language === 'zh' ? '周一休息' : 'Closed Mondays'}</p>
            </div>
            <div className="dc-policy-card">
              <span className="dc-policy-icon">👔</span>
              <h4>{language === 'zh' ? '着装要求' : 'Dress Code'}</h4>
              <p>{language === 'zh' ? '智能休闲装' : 'Smart Casual'}</p>
              <p>{language === 'zh' ? '请勿穿着运动服或拖鞋' : 'No sportswear or flip-flops'}</p>
            </div>
            <div className="dc-policy-card">
              <span className="dc-policy-icon">📋</span>
              <h4>{language === 'zh' ? '取消政策' : 'Cancellation'}</h4>
              <p>{language === 'zh' ? '请提前24小时通知取消' : 'Please notify 24 hours in advance'}</p>
              <p>{language === 'zh' ? '未通知取消可能收取费用' : 'No-shows may incur charges'}</p>
            </div>
            <div className="dc-policy-card">
              <span className="dc-policy-icon">👶</span>
              <h4>{language === 'zh' ? '儿童政策' : 'Children'}</h4>
              <p>{language === 'zh' ? '欢迎携带儿童用餐' : 'Children welcome'}</p>
              <p>{language === 'zh' ? '提供儿童座椅' : 'High chairs available'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReservationPage

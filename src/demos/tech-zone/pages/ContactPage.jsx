import { useState } from 'react';
import { useTZLanguage } from '../context/TZLanguageContext';
import { siteConfig, translations } from '../data/siteData';

export default function ContactPage() {
  const { t } = useTZLanguage();
  const contact = translations.contact;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo: just show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const faqs = [
    {
      question: { zh: '如何追踪我的订单？', en: 'How do I track my order?', it: 'Come posso tracciare il mio ordine?' },
      answer: {
        zh: '下单后，您会收到一封包含追踪链接的确认邮件。您也可以登录账户在"订单历史"中查看。',
        en: 'After placing your order, you\'ll receive a confirmation email with a tracking link. You can also check "Order History" in your account.',
        it: 'Dopo aver effettuato l\'ordine, riceverai un\'email di conferma con un link di tracciamento. Puoi anche controllare la "Cronologia Ordini" nel tuo account.'
      }
    },
    {
      question: { zh: '退货政策是什么？', en: 'What is your return policy?', it: 'Qual è la vostra politica di reso?' },
      answer: {
        zh: '我们提供30天无忧退换服务。商品需保持原包装且未使用。部分特殊商品可能有不同的退换政策。',
        en: 'We offer a 30-day hassle-free return policy. Items must be in original packaging and unused. Some special items may have different return policies.',
        it: 'Offriamo una politica di reso senza problemi di 30 giorni. Gli articoli devono essere nella confezione originale e non utilizzati. Alcuni articoli speciali potrebbero avere politiche di reso diverse.'
      }
    },
    {
      question: { zh: '接受哪些支付方式？', en: 'What payment methods do you accept?', it: 'Quali metodi di pagamento accettate?' },
      answer: {
        zh: '我们接受信用卡（Visa、Mastercard）、PayPal、银行转账和Apple Pay。',
        en: 'We accept credit cards (Visa, Mastercard), PayPal, bank transfer, and Apple Pay.',
        it: 'Accettiamo carte di credito (Visa, Mastercard), PayPal, bonifico bancario e Apple Pay.'
      }
    },
    {
      question: { zh: '配送需要多长时间？', en: 'How long does shipping take?', it: 'Quanto tempo richiede la spedizione?' },
      answer: {
        zh: '标准配送3-5个工作日，快速配送1-2个工作日。订单满€99免运费。',
        en: 'Standard shipping takes 3-5 business days, express shipping 1-2 business days. Free shipping on orders over €99.',
        it: 'La spedizione standard richiede 3-5 giorni lavorativi, la spedizione express 1-2 giorni lavorativi. Spedizione gratuita per ordini superiori a €99.'
      }
    }
  ];

  return (
    <div className="tz-contact-page">
      {/* Hero */}
      <section className="tz-contact-hero">
        <div className="tz-container">
          <h1>{t(contact.title)}</h1>
          <p>{t(contact.getInTouch)}</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="tz-contact-main">
        <div className="tz-container">
          <div className="tz-contact-grid">
            {/* Contact Info */}
            <div className="tz-contact-info">
              <h2>{t({ zh: '联系方式', en: 'Contact Information', it: 'Informazioni di Contatto' })}</h2>

              <div className="tz-contact-item">
                <div className="tz-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3>{t({ zh: '地址', en: 'Address', it: 'Indirizzo' })}</h3>
                  <p>{t(siteConfig.contact.address)}</p>
                </div>
              </div>

              <div className="tz-contact-item">
                <div className="tz-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3>{t({ zh: '邮箱', en: 'Email', it: 'Email' })}</h3>
                  <p><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
                </div>
              </div>

              <div className="tz-contact-item">
                <div className="tz-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3>{t({ zh: '电话', en: 'Phone', it: 'Telefono' })}</h3>
                  <p><a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a></p>
                </div>
              </div>

              <div className="tz-contact-item">
                <div className="tz-contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3>{t({ zh: '营业时间', en: 'Business Hours', it: 'Orari di Apertura' })}</h3>
                  <p>
                    {t({ zh: '周一 - 周五: 9:00 - 18:00', en: 'Mon - Fri: 9:00 AM - 6:00 PM', it: 'Lun - Ven: 9:00 - 18:00' })}<br />
                    {t({ zh: '周六: 10:00 - 14:00', en: 'Sat: 10:00 AM - 2:00 PM', it: 'Sab: 10:00 - 14:00' })}<br />
                    {t({ zh: '周日休息', en: 'Sun: Closed', it: 'Dom: Chiuso' })}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="tz-contact-social">
                <h3>{t({ zh: '关注我们', en: 'Follow Us', it: 'Seguici' })}</h3>
                <div className="tz-social-links">
                  <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="tz-contact-form-section">
              <h2>{t(contact.sendMessage)}</h2>

              {submitted && (
                <div className="tz-form-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {t(contact.messageSent)}
                </div>
              )}

              <form onSubmit={handleSubmit} className="tz-contact-form">
                <div className="tz-form-group">
                  <label htmlFor="name">{t(contact.name)} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="tz-form-group">
                  <label htmlFor="email">{t(translations.checkout.email)} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="tz-form-group">
                  <label htmlFor="subject">{t({ zh: '主题', en: 'Subject', it: 'Oggetto' })} *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="tz-form-group">
                  <label htmlFor="message">{t(contact.message)} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>

                <button type="submit" className="tz-btn tz-btn-primary tz-btn-lg">
                  {t(contact.sendMessage)}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tz-contact-faq">
        <div className="tz-container">
          <h2>{t(translations.footer.faq)}</h2>
          <div className="tz-faq-list">
            {faqs.map((faq, index) => (
              <details key={index} className="tz-faq-item">
                <summary>{t(faq.question)}</summary>
                <p>{t(faq.answer)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="tz-contact-map">
        <div className="tz-map-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <p>Map would display here</p>
          <p className="tz-map-address">{t(siteConfig.contact.address)}</p>
        </div>
      </section>
    </div>
  );
}

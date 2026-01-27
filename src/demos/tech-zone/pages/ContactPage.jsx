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
      question: { zh: '如何追踪数据包（订单）？', en: 'How to trace data packet (order)?', it: 'Come tracciare pacchetto dati (ordine)?' },
      answer: {
        zh: '指令确认后，您将收到加密的追踪密钥。可在"系统日志"中查询实时状态。',
        en: 'Upon command confirmation, you will receive an encrypted tracking key. Query real-time status in "System Logs".',
        it: 'Dopo la conferma del comando, riceverai una chiave di tracciamento crittografata. Interroga lo stato in tempo reale nei "Log di Sistema".'
      }
    },
    {
      question: { zh: '协议回滚（退货）政策？', en: 'Protocol Rollback (Return) Policy?', it: 'Politica di Rollback (Reso) Protocollo?' },
      answer: {
        zh: '支持30个系统周期内的无损回滚。硬件需保持出厂状态。',
        en: 'Lossless rollback supported within 30 system cycles. Hardware must remain in factory state.',
        it: 'Rollback senza perdite supportato entro 30 cicli di sistema. L\'hardware deve rimanere allo stato di fabbrica.'
      }
    }
  ];

  return (
    <div className="tz-contact-page">
      {/* Cyber Hero */}
      <section className="tz-contact-hero-cyber">
        <div className="tz-container">
          <div className="tz-hero-header">
            <span className="tz-sys-msg">{'>> SYSTEM_READY'}</span>
            <h1>{t(contact.title)}</h1>
            <p className="tz-mono-text blink">{t(contact.getInTouch)}</p>
          </div>
        </div>
      </section>

      <section className="tz-contact-interface">
        <div className="tz-container">
          <div className="tz-interface-grid">
            
            {/* Left Panel: Input Terminal */}
            <div className="tz-panel tz-input-panel">
              <div className="tz-panel-header">
                <span className="tz-panel-title">INPUT_TERMINAL</span>
                <div className="tz-panel-controls">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              
              <div className="tz-panel-body">
                {submitted ? (
                  <div className="tz-success-message">
                    <div className="tz-icon-large">✓</div>
                    <h3>TRANSMISSION_COMPLETE</h3>
                    <p>{t(contact.messageSent)}</p>
                    <button 
                      className="tz-btn tz-btn-sm tz-btn-outline"
                      onClick={() => setSubmitted(false)}
                    >
                      NEW_TRANSMISSION
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="tz-cyber-form">
                    <div className="tz-form-row">
                      <div className="tz-input-group">
                        <label htmlFor="name">{t(contact.name)}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="USR_ID"
                          required
                          className="tz-cyber-input"
                        />
                      </div>
                      <div className="tz-input-group">
                        <label htmlFor="email">{t(translations.checkout.email)}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="MAIL_NODE"
                          required
                          className="tz-cyber-input"
                        />
                      </div>
                    </div>

                    <div className="tz-input-group">
                      <label htmlFor="subject">{t({ zh: '指令头', en: 'Header / Subject', it: 'Intestazione / Oggetto' })}</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="CMD_TYPE"
                        required
                        className="tz-cyber-input"
                      />
                    </div>

                    <div className="tz-input-group">
                      <label htmlFor="message">{t(contact.message)}</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="ENTER_PAYLOAD..."
                        required
                        className="tz-cyber-input"
                      />
                    </div>

                    <button type="submit" className="tz-btn tz-btn-primary tz-btn-block tz-glitch-btn">
                      <span className="text">{t(contact.sendMessage)}</span>
                      <span className="decoration">_&gt;</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Panel: Data Uplink */}
            <div className="tz-panel tz-info-panel">
              <div className="tz-panel-header">
                <span className="tz-panel-title">CONNECTION_INFO</span>
              </div>
              
              <div className="tz-panel-body">
                <div className="tz-info-list">
                  <div className="tz-info-item">
                    <span className="tz-info-label">PHYSICAL_NODE</span>
                    <p className="tz-info-value">{t(siteConfig.contact.address)}</p>
                  </div>
                  
                  <div className="tz-info-item">
                    <span className="tz-info-label">VOICE_UPLINK</span>
                    <p className="tz-info-value">
                      <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                    </p>
                  </div>

                  <div className="tz-info-item">
                    <span className="tz-info-label">MAIL_DROP</span>
                    <p className="tz-info-value">
                      <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                    </p>
                  </div>

                  <div className="tz-info-item">
                    <span className="tz-info-label">ACTIVE_HOURS</span>
                    <div className="tz-info-value tz-hours-grid">
                      <span>MON-FRI</span>
                      <span>0900 - 1800</span>
                      <span>SAT</span>
                      <span>1000 - 1400</span>
                      <span>SUN</span>
                      <span className="text-red">OFFLINE</span>
                    </div>
                  </div>
                </div>

                <div className="tz-ascii-map">
                  <pre>
{`
    +-----------------+
    |  MILAN_SERVER   |
    |  [ACTIVE]       |
    |                 |
    |   (o)           |
    |   /|\\           |
    |   / \\           |
    +-----------------+
`}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="tz-section tz-faq-section-cyber">
        <div className="tz-container">
          <div className="tz-section-header-cyber">
             <span className="tz-section-idx">HELP</span>
             <h2>KNOWLEDGE_BASE</h2>
          </div>
          <div className="tz-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="tz-faq-card">
                 <div className="tz-faq-q">
                   <span className="prefix">Q:</span> {t(faq.question)}
                 </div>
                 <div className="tz-faq-a">
                   <span className="prefix">A:</span> {t(faq.answer)}
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
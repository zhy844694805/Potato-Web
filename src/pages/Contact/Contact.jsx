import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import Button from '../../components/ui/Button'
import { siteConfig } from '../../config/site'
import { trackButtonClick } from '../../utils/analytics'
import './Contact.css'

const createSchema = (language) => yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})

function Contact() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(createSchema(language))
  })

  const t = {
    zh: { title: '联系我们', subtitle: '建立连接' },
    en: { title: 'Contact', subtitle: 'ESTABLISH CONNECTION' },
    it: { title: 'Contatti', subtitle: 'STABILIRE CONNESSIONE' }
  }[language]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    // Simulate submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      reset()
    }, 1000)
  }

  return (
    <div className="contact-page">
      <SEO title={t.title} description="Contact Page" path="/contact" />
      
      <div className="brutalist-container">
        <section className="page-header-brutalist">
          <div className="header-meta font-mono">
            <span>// SIGNAL</span>
            <span>OPEN_CHANNEL</span>
          </div>
          <h1 className="page-title-giant">{t.title}</h1>
          <div className="header-decoration-line"></div>
        </section>

        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-sidebar">
            <div className="info-block">
              <h3 className="info-label font-mono">[EMAIL]</h3>
              <a href={`mailto:${siteConfig.contact.email}`} className="info-val">
                {siteConfig.contact.email}
              </a>
            </div>
            
            <div className="info-block">
              <h3 className="info-label font-mono">[PHONE]</h3>
              <a href={`tel:${siteConfig.contact.phone}`} className="info-val">
                {siteConfig.contact.phone}
              </a>
            </div>

            <div className="info-block">
              <h3 className="info-label font-mono">[STATUS]</h3>
              <div className="status-indicator-box">
                <span className="blink-dot">●</span>
                ACCEPTING_NEW_PROJECTS
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-container">
            <form onSubmit={handleSubmit(onSubmit)} className="brutalist-form">
              <div className="form-line">
                <label className="font-mono">USER_NAME:</label>
                <input type="text" {...register('name')} className="terminal-input" placeholder="_" />
              </div>
              
              <div className="form-line">
                <label className="font-mono">EMAIL_ADDR:</label>
                <input type="email" {...register('email')} className="terminal-input" placeholder="_" />
              </div>

              <div className="form-line">
                <label className="font-mono">DATA_PACKET:</label>
                <textarea {...register('message')} className="terminal-input" rows="6" placeholder="_"></textarea>
              </div>

              <button type="submit" className="btn-brutalist big form-btn" disabled={isSubmitting}>
                {isSubmitting ? 'TRANSMITTING...' : 'SEND_TRANSMISSION'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-msg font-mono">
                  >> TRANSMISSION_RECEIVED. ACKNOWLEDGED.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
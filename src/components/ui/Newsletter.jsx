import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLanguage } from '../../context/LanguageContext'
import { siteConfig } from '../../config/site'
import './Newsletter.css'

// Email validation schema
const createSchema = (language) => yup.object({
  email: yup.string()
    .required(
      language === 'zh' ? '请输入邮箱地址' :
      language === 'it' ? 'Inserisci la tua email' :
      'Please enter your email'
    )
    .email(
      language === 'zh' ? '请输入有效的邮箱地址' :
      language === 'it' ? 'Inserisci un indirizzo email valido' :
      'Please enter a valid email'
    )
})

function Newsletter() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(createSchema(language))
  })

  const content = {
    zh: {
      title: '订阅我们的资讯',
      description: '获取最新的技术资讯、项目案例和行业动态',
      placeholder: '输入您的邮箱',
      submit: '订阅',
      submitting: '订阅中...',
      success: '订阅成功！感谢您的关注。',
      error: '订阅失败，请稍后重试。'
    },
    en: {
      title: 'Subscribe to our Newsletter',
      description: 'Get the latest tech insights, project showcases, and industry updates',
      placeholder: 'Enter your email',
      submit: 'Subscribe',
      submitting: 'Subscribing...',
      success: 'Successfully subscribed! Thank you for joining.',
      error: 'Subscription failed. Please try again later.'
    },
    it: {
      title: 'Iscriviti alla Newsletter',
      description: 'Ricevi le ultime novita tecnologiche, showcase di progetti e aggiornamenti del settore',
      placeholder: 'Inserisci la tua email',
      submit: 'Iscriviti',
      submitting: 'Iscrizione...',
      success: 'Iscrizione completata! Grazie per esserti iscritto.',
      error: 'Iscrizione fallita. Riprova piu tardi.'
    }
  }

  const t = content[language] || content.en

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          type: 'newsletter_subscription'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-header">
        <h4 className="newsletter-title">{t.title}</h4>
        <p className="newsletter-description">{t.description}</p>
      </div>

      {submitStatus === 'success' ? (
        <div className="newsletter-success">
          <span className="newsletter-success-icon">&#10003;</span>
          <p>{t.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
          <div className="newsletter-input-group">
            <input
              type="email"
              placeholder={t.placeholder}
              className={`newsletter-input ${errors.email ? 'error' : ''}`}
              aria-label={t.placeholder}
              aria-describedby={errors.email ? 'newsletter-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
              {...register('email')}
            />
            <button
              type="submit"
              className="newsletter-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>
          {errors.email && (
            <span id="newsletter-error" className="newsletter-error-message" role="alert">
              {errors.email.message}
            </span>
          )}
          {submitStatus === 'error' && (
            <span className="newsletter-error-message" role="alert">
              {t.error}
            </span>
          )}
        </form>
      )}
    </div>
  )
}

export default Newsletter

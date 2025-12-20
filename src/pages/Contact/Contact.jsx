import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import Button from '../../components/ui/Button'
import { siteConfig } from '../../config/site'
import { trackButtonClick } from '../../components/Analytics'
import './Contact.css'

// 表单验证规则
const createSchema = (language) => yup.object({
  name: yup.string()
    .required(language === 'zh' ? '请输入您的姓名' : 'Please enter your name')
    .min(2, language === 'zh' ? '姓名至少2个字符' : 'Name must be at least 2 characters'),
  email: yup.string()
    .required(language === 'zh' ? '请输入邮箱地址' : 'Please enter your email')
    .email(language === 'zh' ? '请输入有效的邮箱地址' : 'Please enter a valid email'),
  phone: yup.string()
    .optional(),
  projectType: yup.string()
    .required(language === 'zh' ? '请选择项目类型' : 'Please select a project type'),
  budget: yup.string()
    .optional(),
  message: yup.string()
    .required(language === 'zh' ? '请描述您的项目需求' : 'Please describe your project')
    .min(10, language === 'zh' ? '描述至少10个字符' : 'Description must be at least 10 characters')
})

function Contact() {
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
      title: '联系我',
      subtitle: '有想法需要实现？让我们聊聊',
      description: '无论是新项目咨询、技术问题探讨，还是简单的交流，我都很乐意收到您的消息。请填写以下表单，我会在24小时内回复。',
      form: {
        name: '您的姓名',
        namePlaceholder: '请输入姓名',
        email: '邮箱地址',
        emailPlaceholder: '请输入邮箱',
        phone: '联系电话（可选）',
        phonePlaceholder: '请输入电话号码',
        projectType: '项目类型',
        projectTypePlaceholder: '请选择项目类型',
        budget: '预算范围（可选）',
        budgetPlaceholder: '请选择预算范围',
        message: '项目描述',
        messagePlaceholder: '请描述您的项目需求、目标和期望...',
        submit: '发送消息',
        submitting: '发送中...'
      },
      projectTypes: [
        { value: 'website', label: '网站开发' },
        { value: 'webapp', label: '全栈应用' },
        { value: 'landing', label: '落地页设计' },
        { value: 'maintenance', label: '网站维护' },
        { value: 'consultation', label: '技术咨询' },
        { value: 'other', label: '其他' }
      ],
      budgetRanges: [
        { value: 'under5k', label: '5,000元以下' },
        { value: '5k-10k', label: '5,000 - 10,000元' },
        { value: '10k-30k', label: '10,000 - 30,000元' },
        { value: '30k-50k', label: '30,000 - 50,000元' },
        { value: 'above50k', label: '50,000元以上' },
        { value: 'discuss', label: '面议' }
      ],
      success: {
        title: '消息已发送！',
        message: '感谢您的咨询，我会尽快回复您。'
      },
      error: {
        title: '发送失败',
        message: '请稍后重试，或直接发送邮件至：'
      },
      contact: {
        title: '其他联系方式',
        email: '邮箱',
        response: '响应时间',
        responseTime: '通常24小时内回复'
      }
    },
    en: {
      title: 'Contact Me',
      subtitle: 'Have an idea to realize? Let\'s talk',
      description: 'Whether it\'s a new project consultation, technical discussion, or just a simple chat, I\'d love to hear from you. Please fill out the form below, and I\'ll respond within 24 hours.',
      form: {
        name: 'Your Name',
        namePlaceholder: 'Enter your name',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email',
        phone: 'Phone Number (Optional)',
        phonePlaceholder: 'Enter phone number',
        projectType: 'Project Type',
        projectTypePlaceholder: 'Select project type',
        budget: 'Budget Range (Optional)',
        budgetPlaceholder: 'Select budget range',
        message: 'Project Description',
        messagePlaceholder: 'Describe your project requirements, goals, and expectations...',
        submit: 'Send Message',
        submitting: 'Sending...'
      },
      projectTypes: [
        { value: 'website', label: 'Website Development' },
        { value: 'webapp', label: 'Full-Stack Application' },
        { value: 'landing', label: 'Landing Page Design' },
        { value: 'maintenance', label: 'Website Maintenance' },
        { value: 'consultation', label: 'Technical Consultation' },
        { value: 'other', label: 'Other' }
      ],
      budgetRanges: [
        { value: 'under1k', label: 'Under $1,000' },
        { value: '1k-3k', label: '$1,000 - $3,000' },
        { value: '3k-5k', label: '$3,000 - $5,000' },
        { value: '5k-10k', label: '$5,000 - $10,000' },
        { value: 'above10k', label: 'Above $10,000' },
        { value: 'discuss', label: 'Let\'s Discuss' }
      ],
      success: {
        title: 'Message Sent!',
        message: 'Thank you for reaching out. I\'ll get back to you soon.'
      },
      error: {
        title: 'Failed to Send',
        message: 'Please try again later, or email me directly at:'
      },
      contact: {
        title: 'Other Ways to Reach Me',
        email: 'Email',
        response: 'Response Time',
        responseTime: 'Usually within 24 hours'
      }
    }
  }

  const t = content[language]

  const seoData = {
    zh: {
      title: '联系我',
      description: '联系独立开发者，咨询Web开发、全栈应用、技术咨询等服务。24小时内快速响应。',
      keywords: '联系我们,项目咨询,网站开发咨询,技术合作'
    },
    en: {
      title: 'Contact Me',
      description: 'Contact independent developer for web development, full-stack applications, and technical consultation. Quick response within 24 hours.',
      keywords: 'contact us,project consultation,web development inquiry,technical cooperation'
    }
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)
    trackButtonClick('contact_form_submit', 'contact_page')

    try {
      // 模拟表单提交 - 实际项目中替换为真实的API调用
      // 例如: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      console.log('Form data:', data)

      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1500))

      // 这里可以集成实际的表单处理服务，如：
      // - Formspree
      // - Netlify Forms
      // - 自建后端API
      // - 发送邮件服务

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/contact"
      />

      <div className="container">
        <section className="contact-hero">
          <h1 className="page-title">{t.title}</h1>
          <p className="page-subtitle">{t.subtitle}</p>
          <p className="page-description">{t.description}</p>
        </section>

        <div className="contact-content">
          <section className="contact-form-section">
            {submitStatus === 'success' ? (
              <div className="submit-success">
                <div className="success-icon">✓</div>
                <h3>{t.success.title}</h3>
                <p>{t.success.message}</p>
                <Button
                  variant="secondary"
                  onClick={() => setSubmitStatus(null)}
                >
                  {language === 'zh' ? '发送新消息' : 'Send Another Message'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t.form.name} *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder={t.form.namePlaceholder}
                      className={errors.name ? 'error' : ''}
                      {...register('name')}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t.form.email} *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder={t.form.emailPlaceholder}
                      className={errors.email ? 'error' : ''}
                      {...register('email')}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{t.form.phone}</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder={t.form.phonePlaceholder}
                      {...register('phone')}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">{t.form.projectType} *</label>
                    <select
                      id="projectType"
                      className={errors.projectType ? 'error' : ''}
                      {...register('projectType')}
                    >
                      <option value="">{t.form.projectTypePlaceholder}</option>
                      {t.projectTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                    {errors.projectType && <span className="error-message">{errors.projectType.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">{t.form.budget}</label>
                  <select id="budget" {...register('budget')}>
                    <option value="">{t.form.budgetPlaceholder}</option>
                    {t.budgetRanges.map(range => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.form.message} *</label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder={t.form.messagePlaceholder}
                    className={errors.message ? 'error' : ''}
                    {...register('message')}
                  />
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                {submitStatus === 'error' && (
                  <div className="submit-error">
                    <p>{t.error.title}</p>
                    <p>{t.error.message} <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </Button>
              </form>
            )}
          </section>

          <aside className="contact-info">
            <h3>{t.contact.title}</h3>

            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <span className="info-label">{t.contact.email}</span>
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⚡</div>
              <div className="info-content">
                <span className="info-label">{t.contact.response}</span>
                <span>{t.contact.responseTime}</span>
              </div>
            </div>

            {siteConfig.social.github && (
              <div className="info-item">
                <div className="info-icon">💻</div>
                <div className="info-content">
                  <span className="info-label">GitHub</span>
                  <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                    {siteConfig.social.github.replace('https://github.com/', '@')}
                  </a>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Contact

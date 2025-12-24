// 网站配置 - 从环境变量读取
export const siteConfig = {
  // 网站URL
  url: import.meta.env.VITE_SITE_URL || 'https://aimodel.it',

  // 网站名称
  name: {
    zh: import.meta.env.VITE_SITE_NAME || 'AI Model',
    en: 'AI Model',
    it: 'AI Model'
  },

  // 联系方式
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'info@aimodel.it',
    phone: import.meta.env.VITE_CONTACT_PHONE || ''
  },

  // 社交媒体
  social: {
    github: import.meta.env.VITE_SOCIAL_GITHUB || '',
    wechat: import.meta.env.VITE_SOCIAL_WECHAT || ''
  },

  // Formspree 表单 ID
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || 'xeejgvrn',

  // SEO 默认图片
  defaultImage: 'https://aimodel.it/favicon.svg',

  // Logo 路径
  logo: '/favicon.svg'
}

// 获取完整 URL
export const getFullUrl = (path = '') => {
  return `${siteConfig.url}${path}`
}

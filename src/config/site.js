// 网站配置 - 从环境变量读取
export const siteConfig = {
  // 网站URL
  url: import.meta.env.VITE_SITE_URL || 'https://aimodel.it',

  // 网站名称
  name: {
    zh: import.meta.env.VITE_SITE_NAME || '土豆建站',
    en: 'Potato Web',
    it: 'Potato Web'
  },

  // 联系方式
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'info@aimodel.it',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+39 324 284 7369'
  },

  // 社交媒体
  social: {
    github: import.meta.env.VITE_SOCIAL_GITHUB || '',
    wechat: import.meta.env.VITE_SOCIAL_WECHAT || 'A3242847369'
  },

  // Formspree 表单 ID
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || 'xeejgvrn',

  // SEO 默认 OG 图片 (1200x630 recommended for social sharing)
  defaultImage: 'https://aimodel.it/og-image.svg',

  // 备用 Logo 图片
  logoImage: 'https://aimodel.it/logo-512.png',

  // Logo 路径
  logo: '/logo.jpg'
}

// 获取完整 URL
export const getFullUrl = (path = '') => {
  return `${siteConfig.url}${path}`
}

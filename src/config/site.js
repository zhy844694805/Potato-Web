// 网站配置 - 从环境变量读取
export const siteConfig = {
  // 网站URL
  url: import.meta.env.VITE_SITE_URL || 'https://minimaltech.com',

  // 网站名称
  name: {
    zh: import.meta.env.VITE_SITE_NAME || '极简科技',
    en: 'Minimal Tech'
  },

  // 联系方式
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'contact@minimaltech.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || ''
  },

  // 社交媒体
  social: {
    github: import.meta.env.VITE_SOCIAL_GITHUB || '',
    wechat: import.meta.env.VITE_SOCIAL_WECHAT || ''
  },

  // SEO 默认图片
  defaultImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',

  // Logo 路径
  logo: '/logo.png'
}

// 获取完整 URL
export const getFullUrl = (path = '') => {
  return `${siteConfig.url}${path}`
}

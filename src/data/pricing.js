// Pricing packages with trilingual support (Euro currency for Italian market)
export const packages = [
  {
    id: 'basic',
    name: { zh: '基础版', en: 'Basic', it: 'Base' },
    description: { zh: '适合个人或小型项目', en: 'Suitable for personal or small projects', it: 'Ideale per progetti personali o piccoli' },
    features: [
      { zh: '单页响应式网站', en: 'Single-page responsive website', it: 'Sito one-page responsive' },
      { zh: '基础SEO优化', en: 'Basic SEO optimization', it: 'Ottimizzazione SEO base' },
      { zh: '联系表单', en: 'Contact form', it: 'Modulo di contatto' },
      { zh: '移动端适配', en: 'Mobile responsive', it: 'Responsive mobile' },
      { zh: '30天免费维护', en: '30-day free maintenance', it: '30 giorni di manutenzione gratuita' }
    ],
    price: { min: 200, max: 400 }
  },
  {
    id: 'standard',
    name: { zh: '标准版', en: 'Standard', it: 'Standard' },
    description: { zh: '适合中小企业官网', en: 'Suitable for SMB corporate websites', it: 'Ideale per siti aziendali PMI' },
    popular: true,
    features: [
      { zh: '多页响应式网站（5-10页）', en: 'Multi-page responsive website (5-10 pages)', it: 'Sito multi-pagina responsive (5-10 pagine)' },
      { zh: '高级SEO优化', en: 'Advanced SEO optimization', it: 'Ottimizzazione SEO avanzata' },
      { zh: '内容管理系统', en: 'Content Management System', it: 'Sistema di gestione contenuti' },
      { zh: '多语言支持', en: 'Multi-language support', it: 'Supporto multilingua' },
      { zh: '社交媒体集成', en: 'Social media integration', it: 'Integrazione social media' },
      { zh: '60天免费维护', en: '60-day free maintenance', it: '60 giorni di manutenzione gratuita' }
    ],
    price: { min: 500, max: 1000 }
  },
  {
    id: 'premium',
    name: { zh: '高级版', en: 'Premium', it: 'Premium' },
    description: { zh: '适合需要定制功能的项目', en: 'For projects requiring custom features', it: 'Per progetti che richiedono funzionalità personalizzate' },
    features: [
      { zh: '全栈定制开发', en: 'Full-stack custom development', it: 'Sviluppo full-stack personalizzato' },
      { zh: '用户认证系统', en: 'User authentication system', it: 'Sistema di autenticazione utenti' },
      { zh: '数据库设计与集成', en: 'Database design & integration', it: 'Design e integrazione database' },
      { zh: 'API开发', en: 'API development', it: 'Sviluppo API' },
      { zh: '管理后台', en: 'Admin dashboard', it: 'Pannello di amministrazione' },
      { zh: '性能优化', en: 'Performance optimization', it: 'Ottimizzazione prestazioni' },
      { zh: '90天免费维护', en: '90-day free maintenance', it: '90 giorni di manutenzione gratuita' }
    ],
    price: { min: 1500, max: 3000 }
  }
]

// Annual hosting fee
export const hostingFee = {
  price: 100,
  name: { zh: '空间使用费', en: 'Hosting Fee', it: 'Costo Hosting' },
  description: { zh: '每年', en: 'per year', it: 'all\'anno' }
}

// Service types for calculator
export const serviceTypes = [
  { id: 'website', name: { zh: '网站开发', en: 'Website Development', it: 'Sviluppo Siti Web' }, icon: '🌐' },
  { id: 'fullstack', name: { zh: '全栈开发', en: 'Full-Stack Development', it: 'Sviluppo Full-Stack' }, icon: '⚡' },
  { id: 'landing', name: { zh: '落地页设计', en: 'Landing Page Design', it: 'Design Landing Page' }, icon: '📄' },
  { id: 'ecommerce', name: { zh: '电商网站', en: 'E-commerce Website', it: 'Sito E-commerce' }, icon: '🛒' }
]

// Optional add-ons (Euro prices)
export const addons = [
  { id: 'logo', name: { zh: 'Logo设计', en: 'Logo Design', it: 'Design Logo' }, price: 300 },
  { id: 'copywriting', name: { zh: '文案撰写', en: 'Copywriting', it: 'Copywriting' }, price: 250 },
  { id: 'photography', name: { zh: '产品摄影协调', en: 'Product Photography', it: 'Fotografia Prodotti' }, price: 500 },
  { id: 'analytics', name: { zh: '数据分析集成', en: 'Analytics Integration', it: 'Integrazione Analytics' }, price: 150 },
  { id: 'training', name: { zh: '使用培训', en: 'Usage Training', it: 'Formazione' }, price: 80 }
]

// Helper functions
export const getPackageById = (id) => packages.find(p => p.id === id)

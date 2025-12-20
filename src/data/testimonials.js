// 用户评价数据
// User testimonials data

export const testimonials = [
  {
    id: 1,
    name: { zh: '张女士', en: 'Ms. Zhang' },
    role: { zh: '店主', en: 'Shop Owner' },
    company: { zh: '小张服饰', en: 'Zhang Fashion' },
    rating: 5,
    date: '2024-03',
    content: {
      zh: '沟通很顺畅，网站做得比我预期的好看，朋友都说不错。',
      en: 'Great communication. Website looks better than I expected. Friends all say it looks good.'
    },
    tags: [
      { zh: '网站开发', en: 'Web Development' },
      { zh: '电商', en: 'E-commerce' }
    ]
  },
  {
    id: 2,
    name: { zh: '李先生', en: 'Mr. Li' },
    role: { zh: '店长', en: 'Store Manager' },
    company: { zh: '鲜果小铺', en: 'Fresh Fruit Shop' },
    rating: 5,
    date: '2023-10',
    content: {
      zh: '价格公道，有问题都能及时回复，挺满意的。',
      en: 'Fair pricing. Questions answered promptly. Quite satisfied.'
    },
    tags: [
      { zh: 'APP开发', en: 'App Development' },
      { zh: '生鲜电商', en: 'Fresh Food' }
    ]
  },
  {
    id: 3,
    name: { zh: '王女士', en: 'Ms. Wang' },
    role: { zh: '项目负责人', en: 'Project Manager' },
    company: { zh: '云协科技', en: 'CloudCollab' },
    rating: 5,
    date: '2024-01',
    content: {
      zh: '按时交付，功能基本符合需求，后续有需要还会合作。',
      en: 'Delivered on time. Features met our needs. Will work together again if needed.'
    },
    tags: [
      { zh: 'SaaS开发', en: 'SaaS Development' },
      { zh: '项目管理', en: 'Project Management' }
    ]
  },
  {
    id: 4,
    name: { zh: '周女士', en: 'Ms. Zhou' },
    role: { zh: '老师', en: 'Teacher' },
    company: { zh: '启航培训', en: 'Qihang Training' },
    rating: 5,
    date: '2024-05',
    content: {
      zh: '技术人员很耐心，教了我怎么后台操作，学生反馈还行。',
      en: 'Tech team was patient. Taught me backend operations. Students gave positive feedback.'
    },
    tags: [
      { zh: '在线教育', en: 'Online Education' },
      { zh: '直播系统', en: 'Live Streaming' }
    ]
  },
  {
    id: 5,
    name: { zh: '赵先生', en: 'Mr. Zhao' },
    role: { zh: '负责人', en: 'Manager' },
    company: { zh: '便民服务站', en: 'Community Service' },
    rating: 5,
    date: '2024-02',
    content: {
      zh: '界面简洁，老人也能看懂操作，这点很重要。',
      en: 'Clean interface. Even elderly can understand it. This is important to us.'
    },
    tags: [
      { zh: '小程序', en: 'Mini Program' },
      { zh: '便民服务', en: 'Public Service' }
    ]
  },
  {
    id: 6,
    name: { zh: '陈先生', en: 'Mr. Chen' },
    role: { zh: '技术负责人', en: 'Tech Lead' },
    company: { zh: '小陈零售', en: 'Chen Retail' },
    rating: 5,
    date: '2023-08',
    content: {
      zh: '代码规范，交接文档写得清楚，后续维护方便。',
      en: 'Clean code. Clear documentation. Easy to maintain afterwards.'
    },
    tags: [
      { zh: '软件定制', en: 'Custom Software' },
      { zh: '零售系统', en: 'Retail System' }
    ]
  },
  {
    id: 7,
    name: { zh: '刘女士', en: 'Ms. Liu' },
    role: { zh: '创业者', en: 'Entrepreneur' },
    company: { zh: '悦读书屋', en: 'Yuedu Books' },
    rating: 5,
    date: '2023-12',
    content: {
      zh: '预算不多，但没有因此敷衍，做出来的东西能用。',
      en: 'Limited budget, but they did not cut corners. The result works well.'
    },
    tags: [
      { zh: '网站开发', en: 'Web Development' },
      { zh: '小程序', en: 'Mini Program' }
    ]
  },
  {
    id: 8,
    name: { zh: '杨先生', en: 'Mr. Yang' },
    role: { zh: '创业者', en: 'Entrepreneur' },
    company: { zh: '绿植小店', en: 'Green Plants' },
    rating: 5,
    date: '2024-04',
    content: {
      zh: '第一次做APP，解释得很清楚，没有乱收费。',
      en: 'First time making an app. They explained everything clearly. No hidden fees.'
    },
    tags: [
      { zh: 'APP开发', en: 'App Development' },
      { zh: '创业项目', en: 'Startup Project' }
    ]
  },
  {
    id: 9,
    name: { zh: '孙女士', en: 'Ms. Sun' },
    role: { zh: '行政主管', en: 'Admin Manager' },
    company: { zh: '和谐物业', en: 'Harmony Property' },
    rating: 5,
    date: '2023-06',
    content: {
      zh: '响应速度快，有bug当天就修复了，态度很好。',
      en: 'Quick response. Bugs fixed same day. Great attitude.'
    },
    tags: [
      { zh: '企业系统', en: 'Enterprise System' },
      { zh: '软件定制', en: 'Custom Software' }
    ]
  },
  {
    id: 10,
    name: { zh: '马先生', en: 'Mr. Ma' },
    role: { zh: '餐厅老板', en: 'Restaurant Owner' },
    company: { zh: '老马餐馆', en: 'Ma Restaurant' },
    rating: 5,
    date: '2023-11',
    content: {
      zh: '小程序做得挺实用，顾客扫码点餐方便多了。',
      en: 'Practical mini program. Customers find it convenient to scan and order.'
    },
    tags: [
      { zh: '小程序开发', en: 'Mini Program' },
      { zh: '餐饮系统', en: 'Restaurant System' }
    ]
  }
]

// 获取推荐评价（评分5星的）
export const getFeaturedTestimonials = (limit = 6) => {
  return testimonials.filter(t => t.rating === 5).slice(0, limit)
}

// 按服务类型筛选评价
export const getTestimonialsByTag = (tag) => {
  return testimonials.filter(t =>
    t.tags.some(tagObj => tagObj.zh === tag || tagObj.en === tag)
  )
}

// 获取最新评价
export const getLatestTestimonials = (limit = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit)
}

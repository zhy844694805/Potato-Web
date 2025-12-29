// 团队成员数据
// Team member data

export const teamMembers = [
  {
    id: 1,
    name: {
      zh: '张明',
      en: 'Ming Zhang',
      it: 'Ming Zhang'
    },
    role: {
      zh: '创始人 & 全栈开发者',
      en: 'Founder & Full-Stack Developer',
      it: 'Fondatore & Sviluppatore Full-Stack'
    },
    bio: {
      zh: '拥有8年Web开发经验，专注于React生态和Node.js后端开发。曾在多家科技公司担任技术负责人，现专注于为意大利华人企业提供数字化解决方案。',
      en: '8 years of web development experience, specializing in the React ecosystem and Node.js backend development. Former tech lead at several companies, now focused on providing digital solutions for Italian Chinese businesses.',
      it: '8 anni di esperienza nello sviluppo web, specializzato nell\'ecosistema React e nello sviluppo backend Node.js. Ex responsabile tecnico in diverse aziende, ora focalizzato su soluzioni digitali per le imprese cinesi in Italia.'
    },
    avatar: '/images/team/developer.jpg',
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'AWS', level: 75 }
    ],
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: '',
      wechat: 'aimodel_it'
    },
    email: 'ming@aimodel.it',
    featured: true
  },
  {
    id: 2,
    name: {
      zh: '李婷',
      en: 'Ting Li',
      it: 'Ting Li'
    },
    role: {
      zh: 'UI/UX 设计师',
      en: 'UI/UX Designer',
      it: 'Designer UI/UX'
    },
    bio: {
      zh: '5年设计经验，擅长品牌视觉设计和用户体验优化。熟悉中西方设计美学，能够为跨文化项目提供独特的设计视角。',
      en: '5 years of design experience, specializing in brand visual design and user experience optimization. Familiar with both Chinese and Western design aesthetics, providing unique perspectives for cross-cultural projects.',
      it: '5 anni di esperienza nel design, specializzata in design visivo del brand e ottimizzazione dell\'esperienza utente. Familiarità con l\'estetica del design cinese e occidentale.'
    },
    avatar: '/images/team/designer.jpg',
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Photoshop', level: 85 },
      { name: 'Illustrator', level: 85 },
      { name: 'Motion Design', level: 70 }
    ],
    social: {
      github: '',
      linkedin: 'https://linkedin.com',
      twitter: '',
      wechat: ''
    },
    email: 'ting@aimodel.it',
    featured: true
  },
  {
    id: 3,
    name: {
      zh: 'Marco Rossi',
      en: 'Marco Rossi',
      it: 'Marco Rossi'
    },
    role: {
      zh: '本地化顾问',
      en: 'Localization Consultant',
      it: 'Consulente Localizzazione'
    },
    bio: {
      zh: '意大利本地市场专家，精通意大利语和中文。帮助华人企业理解意大利市场需求，提供文化适配和内容本地化服务。',
      en: 'Italian market expert, fluent in Italian and Chinese. Helps Chinese businesses understand Italian market needs, providing cultural adaptation and content localization services.',
      it: 'Esperto del mercato italiano, fluente in italiano e cinese. Aiuta le imprese cinesi a comprendere le esigenze del mercato italiano, fornendo servizi di adattamento culturale e localizzazione dei contenuti.'
    },
    avatar: '/images/team/consultant.jpg',
    skills: [
      { name: 'Italian', level: 100 },
      { name: 'Chinese', level: 90 },
      { name: 'Marketing', level: 85 },
      { name: 'SEO', level: 80 },
      { name: 'Content', level: 85 }
    ],
    social: {
      github: '',
      linkedin: 'https://linkedin.com',
      twitter: '',
      wechat: ''
    },
    email: 'marco@aimodel.it',
    featured: false
  }
]

// 获取所有团队成员
export const getAllMembers = () => teamMembers

// 获取精选成员
export const getFeaturedMembers = () => teamMembers.filter(m => m.featured)

// 根据ID获取成员
export const getMemberById = (id) => teamMembers.find(m => m.id === id)

// 团队统计数据
export const teamStats = {
  totalYearsExperience: {
    value: '15+',
    label: {
      zh: '年总经验',
      en: 'Years Combined Experience',
      it: 'Anni di Esperienza Totale'
    }
  },
  projectsCompleted: {
    value: '50+',
    label: {
      zh: '完成项目',
      en: 'Projects Completed',
      it: 'Progetti Completati'
    }
  },
  happyClients: {
    value: '30+',
    label: {
      zh: '满意客户',
      en: 'Happy Clients',
      it: 'Clienti Soddisfatti'
    }
  },
  languages: {
    value: '3',
    label: {
      zh: '服务语言',
      en: 'Languages Served',
      it: 'Lingue Servite'
    }
  }
}

import { siteConfig, getFullUrl } from '../config/site'

// 组织信息结构化数据
export const organizationSchema = (language) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': getFullUrl('/#organization'),
  name: siteConfig.name[language] || siteConfig.name.zh,
  alternateName: language === 'zh' ? 'Potato Web' : '土豆建站',
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: getFullUrl('/logo-512.png'),
    width: 512,
    height: 512
  },
  image: getFullUrl('/logo-512.png'),
  description: language === 'zh'
    ? '专业网站建设服务，为意大利华人企业提供网站开发、小程序开发、移动应用和数字化解决方案'
    : language === 'it'
    ? 'Servizi professionali di sviluppo web per imprese italo-cinesi'
    : 'Professional website development services for Italian-Chinese businesses',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Milano',
    addressRegion: 'Lombardia',
    addressCountry: 'IT'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    contactType: 'customer service',
    availableLanguage: ['Chinese', 'English', 'Italian']
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italy'
  },
  knowsLanguage: ['zh-CN', 'en', 'it'],
  sameAs: [siteConfig.social.github].filter(Boolean)
})

// 面包屑导航结构化数据
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: getFullUrl(item.url)
  }))
})

// 作品集项目结构化数据
export const portfolioSchema = (portfolio, language) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: portfolio.title[language],
  description: portfolio.description[language],
  image: portfolio.thumbnail,
  author: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  datePublished: portfolio.year,
  keywords: portfolio.technologies.join(', ')
})

// 文章结构化数据
export const articleSchema = (post, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title[language],
  description: post.excerpt[language],
  image: post.thumbnail,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Person',
    name: post.author[language]
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh,
    logo: {
      '@type': 'ImageObject',
      url: getFullUrl(siteConfig.logo)
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': getFullUrl(`/blog/${post.slug}`)
  },
  keywords: post.tags.map(t => t[language]).join(', ')
})

// FAQ 页面结构化数据
export const faqPageSchema = (faqs, language) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question[language],
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer[language]
    }
  }))
})

// 价格/产品结构化数据
export const pricingSchema = (packages, language) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: packages.map((pkg, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: pkg.name[language],
      description: pkg.description[language],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: pkg.price.min,
        highPrice: pkg.price.max,
        offerCount: 1
      }
    }
  }))
})

// 作者/人员结构化数据
export const personSchema = (person, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name[language] || person.name.en,
  jobTitle: person.role[language] || person.role.en,
  description: person.bio[language] || person.bio.en,
  email: person.email,
  worksFor: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  sameAs: [
    person.social?.github,
    person.social?.linkedin
  ].filter(Boolean)
})

// 博客文章增强版结构化数据
export const blogPostingSchema = (post, language) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title[language],
  description: post.excerpt[language],
  image: post.thumbnail,
  datePublished: post.date,
  dateModified: post.date,
  author: {
    '@type': 'Person',
    name: post.author[language]
  },
  publisher: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh,
    logo: {
      '@type': 'ImageObject',
      url: getFullUrl(siteConfig.logo)
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': getFullUrl(`/blog/${post.slug}`)
  },
  keywords: post.tags.map(t => t[language]).join(', '),
  articleSection: post.category[language],
  wordCount: post.content[language]?.length || 0,
  inLanguage: language === 'zh' ? 'zh-CN' : language === 'it' ? 'it-IT' : 'en-US'
})

// 服务结构化数据 (通用服务目录)
export const serviceSchema = (language) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: language === 'zh' ? 'Web开发与全栈解决方案' : language === 'it' ? 'Sviluppo Web e Soluzioni Full-Stack' : 'Web Development & Full-Stack Solutions',
  provider: {
    '@type': 'Organization',
    '@id': getFullUrl('/#organization'),
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  areaServed: {
    '@type': 'Country',
    name: 'Italy'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: language === 'zh' ? '服务目录' : 'Service Catalog',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: language === 'zh' ? '网站开发' : 'Web Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: language === 'zh' ? 'APP开发' : 'App Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: language === 'zh' ? '小程序开发' : 'Mini Program Development'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: language === 'zh' ? '软件定制' : 'Custom Software'
        }
      }
    ]
  }
})

// 单个服务结构化数据
export const individualServiceSchema = (service, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': getFullUrl(`/services/${service.id}`),
  name: service.title[language] || service.title.en,
  description: service.description[language] || service.description.en,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh,
    url: siteConfig.url
  },
  areaServed: {
    '@type': 'Country',
    name: language === 'zh' ? '意大利' : 'Italy'
  },
  serviceType: service.category?.[language] || service.category?.en,
  ...(service.price && {
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      ...(service.price.min && service.price.max ? {
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: service.price.min,
          maxPrice: service.price.max,
          priceCurrency: 'EUR'
        }
      } : {
        price: service.price.amount || service.price
      })
    }
  }),
  ...(service.features && {
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'zh' ? '服务特点' : 'Service Features',
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: feature[language] || feature.en || feature
        }
      }))
    }
  })
})

// 本地商家结构化数据
export const localBusinessSchema = (language, options = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': getFullUrl('/#localbusiness'),
  name: siteConfig.name[language] || siteConfig.name.zh,
  description: language === 'zh'
    ? '专注于意大利华人企业的数字化解决方案，提供网站开发、APP开发、小程序开发等服务'
    : 'Digital solutions for Italian Chinese businesses, providing web development, app development, and mini program services',
  url: siteConfig.url,
  logo: getFullUrl(siteConfig.logo),
  image: options.image || getFullUrl(siteConfig.logo),
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: options.city || 'Milano',
    addressRegion: options.region || 'Lombardia',
    addressCountry: 'IT',
    ...(options.streetAddress && { streetAddress: options.streetAddress }),
    ...(options.postalCode && { postalCode: options.postalCode })
  },
  geo: options.geo ? {
    '@type': 'GeoCoordinates',
    latitude: options.geo.latitude,
    longitude: options.geo.longitude
  } : undefined,
  priceRange: options.priceRange || '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: language === 'zh' ? '银行转账, PayPal, 微信支付' : 'Bank Transfer, PayPal, WeChat Pay',
  openingHoursSpecification: options.openingHours || [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.wechat ? `https://weixin.qq.com/r/${siteConfig.social.wechat}` : null
  ].filter(Boolean),
  areaServed: {
    '@type': 'Country',
    name: 'Italy'
  },
  knowsLanguage: ['zh-CN', 'en', 'it'],
  slogan: language === 'zh'
    ? '连接华人企业与意大利市场'
    : 'Connecting Chinese businesses with the Italian market'
})

// 网站结构化数据 (含搜索功能)
export const webSiteSchema = (language) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': getFullUrl('/#website'),
  name: siteConfig.name[language] || siteConfig.name.zh,
  url: siteConfig.url,
  description: language === 'zh'
    ? '为意大利华人企业提供专业的数字化解决方案'
    : 'Professional digital solutions for Italian Chinese businesses',
  inLanguage: language === 'zh' ? 'zh-CN' : language === 'it' ? 'it-IT' : 'en',
  publisher: {
    '@type': 'Organization',
    '@id': getFullUrl('/#organization'),
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
})

// 团队成员结构化数据 (增强版)
export const teamMemberSchema = (member, language) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': getFullUrl(`/team/${member.id || member.slug || ''}`),
  name: member.name[language] || member.name.en,
  givenName: member.givenName?.[language] || member.givenName?.en,
  familyName: member.familyName?.[language] || member.familyName?.en,
  jobTitle: member.role[language] || member.role.en,
  description: member.bio[language] || member.bio.en,
  image: member.avatar || member.image,
  email: member.email,
  telephone: member.phone,
  url: member.website || getFullUrl(`/team/${member.id || member.slug || ''}`),
  worksFor: {
    '@type': 'Organization',
    '@id': getFullUrl('/#organization'),
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  knowsLanguage: member.languages || ['zh-CN', 'en', 'it'],
  ...(member.skills && {
    knowsAbout: member.skills.map(skill => skill[language] || skill.en || skill)
  }),
  sameAs: [
    member.social?.github,
    member.social?.linkedin,
    member.social?.twitter,
    member.social?.wechat ? `https://weixin.qq.com/r/${member.social.wechat}` : null
  ].filter(Boolean)
})

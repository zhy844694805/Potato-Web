import { Helmet } from 'react-helmet-async'
import { siteConfig, getFullUrl } from '../config/site'

function StructuredData({ data }) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}

// 组织信息结构化数据
export const organizationSchema = (language) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name[language] || siteConfig.name.zh,
  url: siteConfig.url,
  logo: getFullUrl(siteConfig.logo),
  description: language === 'zh'
    ? '独立开发者，专注于Web开发和全栈解决方案'
    : 'Independent developer focused on web development and full-stack solutions',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN'
  },
  contactPoint: siteConfig.contact.email ? {
    '@type': 'ContactPoint',
    email: siteConfig.contact.email,
    contactType: 'customer service'
  } : undefined,
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

// 服务结构化数据
export const serviceSchema = (language) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: language === 'zh' ? 'Web开发与全栈解决方案' : 'Web Development & Full-Stack Solutions',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name[language] || siteConfig.name.zh
  },
  areaServed: 'CN',
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

export default StructuredData

import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig, getFullUrl } from '../config/site'

function SEO({
  title,
  description,
  keywords,
  image = siteConfig.defaultImage,
  type = 'website',
  path = ''
}) {
  const { language } = useLanguage()
  const url = getFullUrl(path)

  // 站点信息
  const siteInfo = {
    zh: {
      siteName: '土豆建站',
      siteDescription: '专业网站建设服务，为意大利华人企业提供网站开发、小程序开发、移动应用和数字化解决方案',
      author: '土豆建站团队'
    },
    en: {
      siteName: 'Potato Web',
      siteDescription: 'Professional website development services for Italian-Chinese businesses, providing web development, mini-programs, mobile apps, and digital solutions',
      author: 'Potato Web Team'
    },
    it: {
      siteName: 'Potato Web',
      siteDescription: 'Servizi professionali di sviluppo web per imprese italo-cinesi, offrendo sviluppo siti web, mini-programmi, app mobile e soluzioni digitali',
      author: 'Team Potato Web'
    }
  }

  const site = siteInfo[language]
  const fullTitle = title ? `${title} | ${site.siteName}` : site.siteName
  const metaDescription = description || site.siteDescription

  return (
    <Helmet>
      {/* 基础标签 */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={site.author} />

      {/* Open Graph 标签 */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={site.siteName} />
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : language === 'it' ? 'it_IT' : 'en_US'} />

      {/* Twitter Card 标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* 额外的 SEO 标签 */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <link rel="canonical" content={url} />

      {/* 地理位置信息 */}
      <meta name="geo.region" content="IT" />
      <meta name="geo.placename" content="Milano" />

      {/* 移动端优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#667eea" />

      {/* 备用语言链接 - 支持三语 */}
      <link rel="alternate" hrefLang="zh" href={`${url}?lang=zh`} />
      <link rel="alternate" hrefLang="en" href={`${url}?lang=en`} />
      <link rel="alternate" hrefLang="it" href={`${url}?lang=it`} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </Helmet>
  )
}

export default SEO

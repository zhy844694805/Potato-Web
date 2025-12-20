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
      siteName: '极简科技',
      siteDescription: '专注于数字产品设计与开发的创新公司，提供网站开发、APP开发、小程序开发和软件定制服务',
      author: '极简科技团队'
    },
    en: {
      siteName: 'Minimal Tech',
      siteDescription: 'Innovative company focused on digital product design and development, providing web development, app development, mini-program development, and custom software services',
      author: 'Minimal Tech Team'
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
      <meta property="og:locale" content={language === 'zh' ? 'zh_CN' : 'en_US'} />

      {/* Twitter Card 标签 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* 额外的 SEO 标签 */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" content={url} />

      {/* 移动端优化 */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1a1a1a" />

      {/* 备用语言链接 */}
      <link rel="alternate" hrefLang={language === 'zh' ? 'en' : 'zh'} href={`${url}?lang=${language === 'zh' ? 'en' : 'zh'}`} />
    </Helmet>
  )
}

export default SEO

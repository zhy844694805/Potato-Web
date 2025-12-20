import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import SEO from '../../components/SEO'
import Button from '../../components/ui/Button'
import './NotFound.css'

function NotFound() {
  const { language } = useLanguage()

  const seoData = {
    zh: {
      title: '页面未找到',
      description: '抱歉，您访问的页面不存在',
      keywords: '404,页面未找到'
    },
    en: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist',
      keywords: '404,page not found'
    }
  }

  return (
    <div className="notfound-page">
      <SEO
        title={seoData[language].title}
        description={seoData[language].description}
        keywords={seoData[language].keywords}
        path="/404"
      />
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          {language === 'zh' ? '页面未找到' : 'Page Not Found'}
        </p>
        <p className="notfound-description">
          {language === 'zh'
            ? '抱歉，您访问的页面不存在'
            : 'Sorry, the page you are looking for does not exist'}
        </p>
        <Link to="/">
          <Button variant="primary">
            {language === 'zh' ? '返回首页' : 'Back to Home'}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound

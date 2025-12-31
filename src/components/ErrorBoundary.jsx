import { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // Log errors only in development mode
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    // TODO: Send to error tracking service in production (e.g., Sentry)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      const { language = 'zh' } = this.props

      const content = {
        zh: {
          title: '出错了',
          subtitle: '页面遇到了一些问题',
          description: '很抱歉，页面加载时出现了错误。请尝试刷新页面或返回首页。',
          refresh: '刷新页面',
          home: '返回首页'
        },
        en: {
          title: 'Something went wrong',
          subtitle: 'The page encountered an issue',
          description: 'Sorry, an error occurred while loading this page. Please try refreshing or go back to the homepage.',
          refresh: 'Refresh Page',
          home: 'Go to Homepage'
        }
      }

      const t = content[language] || content.zh

      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <div className="error-icon">⚠️</div>
            <h1>{t.title}</h1>
            <p className="error-subtitle">{t.subtitle}</p>
            <p className="error-description">{t.description}</p>
            <div className="error-actions">
              <Button variant="primary" onClick={() => window.location.reload()}>
                {t.refresh}
              </Button>
              <Link to="/" onClick={this.handleReset}>
                <Button variant="secondary">{t.home}</Button>
              </Link>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <details className="error-details">
                <summary>错误详情 (仅开发环境可见)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

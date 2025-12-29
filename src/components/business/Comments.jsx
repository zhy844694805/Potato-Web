import { useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useLanguage } from '../../context/LanguageContext'
import './Comments.css'

function Comments({ slug }) {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const { language } = useLanguage()

  // Map language codes to Giscus supported languages
  const getGiscusLang = (lang) => {
    const langMap = {
      zh: 'zh-CN',
      en: 'en',
      it: 'it'
    }
    return langMap[lang] || 'en'
  }

  // Map theme to Giscus theme
  const getGiscusTheme = (currentTheme) => {
    return currentTheme === 'dark' ? 'dark' : 'light'
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Remove existing Giscus iframe if present
    const existingScript = container.querySelector('script.giscus')
    const existingFrame = container.querySelector('.giscus-frame')
    if (existingScript) existingScript.remove()
    if (existingFrame) existingFrame.remove()

    // Create and append Giscus script
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.className = 'giscus'
    script.async = true
    script.crossOrigin = 'anonymous'

    // Giscus configuration - uses GitHub Discussions
    // To set up: Go to https://giscus.app and configure for your repo
    script.setAttribute('data-repo', 'zhy844694805/tech-agency-portfolio')
    script.setAttribute('data-repo-id', 'R_kgDONe7gKg')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDONe7gKs4Cl4Vy')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', getGiscusTheme(theme))
    script.setAttribute('data-lang', getGiscusLang(language))
    script.setAttribute('data-loading', 'lazy')

    container.appendChild(script)

    return () => {
      // Cleanup on unmount
      const scriptToRemove = container.querySelector('script.giscus')
      const frameToRemove = container.querySelector('.giscus-frame')
      if (scriptToRemove) scriptToRemove.remove()
      if (frameToRemove) frameToRemove.remove()
    }
  }, [slug, theme, language])

  // Update Giscus theme when theme changes without full reload
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (iframe) {
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              theme: getGiscusTheme(theme)
            }
          }
        },
        'https://giscus.app'
      )
    }
  }, [theme])

  // Update Giscus language when language changes
  useEffect(() => {
    const iframe = document.querySelector('iframe.giscus-frame')
    if (iframe) {
      iframe.contentWindow?.postMessage(
        {
          giscus: {
            setConfig: {
              lang: getGiscusLang(language)
            }
          }
        },
        'https://giscus.app'
      )
    }
  }, [language])

  const getTitle = () => {
    const titles = {
      zh: '评论',
      en: 'Comments',
      it: 'Commenti'
    }
    return titles[language] || titles.en
  }

  return (
    <section className="comments-section">
      <h2 className="comments-title">{getTitle()}</h2>
      <div className="comments-container" ref={containerRef}>
        <div className="comments-loading">
          <div className="comments-loading-spinner"></div>
          <span className="comments-loading-text">
            {language === 'zh' ? '加载评论中...' : language === 'it' ? 'Caricamento commenti...' : 'Loading comments...'}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Comments

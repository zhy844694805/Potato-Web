import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Google Analytics 4 Measurement ID
// 从环境变量读取，在 .env 文件中配置 VITE_GA_MEASUREMENT_ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

// Enable/disable analytics (set to false in development)
const ENABLE_ANALYTICS = import.meta.env.PROD

function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // Only load GA in production and if measurement ID is configured
    if (!ENABLE_ANALYTICS || !GA_MEASUREMENT_ID) {
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false // We'll send page views manually
    })

    return () => {
      // Cleanup script on unmount (optional)
      if (script1.parentNode) {
        script1.parentNode.removeChild(script1)
      }
    }
  }, [])

  // Track page views on route change
  useEffect(() => {
    if (!ENABLE_ANALYTICS || !window.gtag) return

    // Send pageview event
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search,
      page_location: window.location.href,
      page_title: document.title
    })
  }, [location])

  return null // This component doesn't render anything
}

// Helper function to track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (!ENABLE_ANALYTICS || !window.gtag) {
    return
  }

  window.gtag('event', eventName, eventParams)
}

// Common event tracking functions
export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation
  })
}

export const trackPortfolioView = (portfolioId, portfolioTitle) => {
  trackEvent('portfolio_view', {
    portfolio_id: portfolioId,
    portfolio_title: portfolioTitle
  })
}

export const trackServiceView = (serviceId, serviceTitle) => {
  trackEvent('service_view', {
    service_id: serviceId,
    service_title: serviceTitle
  })
}

export const trackLanguageSwitch = (fromLanguage, toLanguage) => {
  trackEvent('language_switch', {
    from_language: fromLanguage,
    to_language: toLanguage
  })
}

export const trackOutboundLink = (url, linkText) => {
  trackEvent('outbound_link_click', {
    link_url: url,
    link_text: linkText
  })
}

export default Analytics

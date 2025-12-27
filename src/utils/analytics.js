// Google Analytics 4 Measurement ID
// 从环境变量读取，在 .env 文件中配置 VITE_GA_MEASUREMENT_ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

// Enable/disable analytics (set to false in development)
const ENABLE_ANALYTICS = import.meta.env.PROD

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

export { GA_MEASUREMENT_ID, ENABLE_ANALYTICS }

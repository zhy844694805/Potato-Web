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

// Blog related tracking
export const trackBlogView = (postSlug, postTitle, category) => {
  trackEvent('blog_view', {
    post_slug: postSlug,
    post_title: postTitle,
    category: category
  })
}

export const trackBlogSearch = (query, resultsCount) => {
  trackEvent('blog_search', {
    search_query: query,
    results_count: resultsCount
  })
}

// Contact form tracking
export const trackContactFormSubmit = (formType, serviceType) => {
  trackEvent('contact_form_submit', {
    form_type: formType,
    service_type: serviceType
  })
}

// Quote calculator tracking
export const trackQuoteCalculation = (projectType, totalPrice, features) => {
  trackEvent('quote_calculation', {
    project_type: projectType,
    total_price: totalPrice,
    features: features.join(',')
  })
}

// Newsletter subscription tracking
export const trackNewsletterSubscribe = (source) => {
  trackEvent('newsletter_subscribe', {
    source: source
  })
}

// Demo site view tracking
export const trackDemoView = (demoId, demoName) => {
  trackEvent('demo_view', {
    demo_id: demoId,
    demo_name: demoName
  })
}

// PDF export tracking
export const trackPDFExport = (documentType, documentId) => {
  trackEvent('pdf_export', {
    document_type: documentType,
    document_id: documentId
  })
}

// Share button tracking
export const trackShare = (platform, contentType, contentId) => {
  trackEvent('share', {
    platform: platform,
    content_type: contentType,
    content_id: contentId
  })
}

// Theme toggle tracking
export const trackThemeToggle = (newTheme) => {
  trackEvent('theme_toggle', {
    new_theme: newTheme
  })
}

// Booking/consultation tracking
export const trackBookingClick = (source) => {
  trackEvent('booking_click', {
    source: source
  })
}

export { GA_MEASUREMENT_ID, ENABLE_ANALYTICS }

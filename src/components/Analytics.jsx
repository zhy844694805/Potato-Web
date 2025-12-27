import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GA_MEASUREMENT_ID, ENABLE_ANALYTICS } from '../utils/analytics'

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

export default Analytics

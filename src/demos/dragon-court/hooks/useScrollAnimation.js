import { useEffect } from 'react'

/**
 * Scroll-triggered animation hook
 * Adds 'dc-visible' class when elements enter viewport
 */
function useScrollAnimation(threshold = 0.1) {
  useEffect(() => {
    // Initial check for elements already in view
    const checkVisibility = () => {
      const elements = document.querySelectorAll('.dc-animate-on-scroll')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight * (1 - threshold)
        if (isVisible) {
          el.classList.add('dc-visible')
        }
      })
    }

    // Initial check
    checkVisibility()

    // Throttled scroll handler
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])
}

export default useScrollAnimation

import { useEffect, useRef, useState, useCallback } from 'react'

// Shared IntersectionObserver instances cache
const observerCache = new Map()

/**
 * Get or create a shared IntersectionObserver instance
 * @param {Object} options - Observer options
 * @returns {IntersectionObserver} - Shared observer instance
 */
const getSharedObserver = (options) => {
  const key = JSON.stringify(options)

  if (!observerCache.has(key)) {
    const callbacks = new Map()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const callback = callbacks.get(entry.target)
        if (callback) {
          callback(entry)
        }
      })
    }, options)

    observerCache.set(key, { observer, callbacks })
  }

  return observerCache.get(key)
}

/**
 * Custom hook for scroll-triggered animations (optimized with shared observers)
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Percentage of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root (e.g., '0px 0px -100px 0px')
 * @param {boolean} options.triggerOnce - Whether animation should only trigger once
 * @returns {Object} - { ref, inView } - Ref to attach to element and inView state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  const handleIntersection = useCallback((entry) => {
    if (entry.isIntersecting) {
      setInView(true)

      // If triggerOnce is true, stop observing after first trigger
      if (triggerOnce && ref.current) {
        const { observer, callbacks } = getSharedObserver({ threshold, rootMargin })
        observer.unobserve(ref.current)
        callbacks.delete(ref.current)
      }
    } else if (!triggerOnce) {
      setInView(false)
    }
  }, [triggerOnce, threshold, rootMargin])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const { observer, callbacks } = getSharedObserver({ threshold, rootMargin })

    callbacks.set(element, handleIntersection)
    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
        callbacks.delete(element)
      }
    }
  }, [threshold, rootMargin, handleIntersection])

  return { ref, inView }
}

/**
 * Hook for staggered animations (multiple elements with delay)
 * @param {number} count - Number of elements
 * @param {number} delay - Delay between each element (ms)
 * @returns {Object} - { refs, inView } - Array of refs and inView state
 */
export const useStaggeredAnimation = (count, delay = 100) => {
  const [inView, setInView] = useState(false)
  const refs = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)

          // Trigger staggered animations
          refs.current.forEach((ref, index) => {
            if (ref) {
              setTimeout(() => {
                ref.classList.add('animate-in')
              }, index * delay)
            }
          })

          observer.unobserve(container)
        }
      },
      {
        threshold: 0.1
      }
    )

    observer.observe(container)

    return () => {
      if (container) {
        observer.unobserve(container)
      }
    }
  }, [count, delay])

  return { containerRef, refs, inView }
}

export default useScrollAnimation

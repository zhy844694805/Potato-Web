import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations
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

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)

          // If triggerOnce is true, stop observing after first trigger
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setInView(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

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

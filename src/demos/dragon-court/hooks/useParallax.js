import { useEffect, useRef } from 'react'

/**
 * Parallax effect hook
 * Creates parallax movement based on scroll or mouse position
 */
function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY
          element.style.transform = `translateY(${scrolled * speed}px)`
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}

/**
 * Mouse parallax hook for hero sections
 * Creates subtle movement based on mouse position
 */
function useMouseParallax(intensity = 20) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xOffset = (clientX - innerWidth / 2) / innerWidth
      const yOffset = (clientY - innerHeight / 2) / innerHeight

      element.style.transform = `translate(${xOffset * intensity}px, ${yOffset * intensity}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [intensity])

  return ref
}

export { useParallax, useMouseParallax }

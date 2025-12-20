import { useState, useEffect, useRef } from 'react'
import './LazyImage.css'

function LazyImage({ src, alt, className = '', placeholder = '', ...props }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            // Once image is in view, we can stop observing
            if (imgRef.current) {
              observer.unobserve(imgRef.current)
            }
          }
        })
      },
      {
        // Load image when it's 50px away from viewport
        rootMargin: '50px',
        threshold: 0.01
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  return (
    <div
      ref={imgRef}
      className={`lazy-image-wrapper ${className} ${isLoaded ? 'loaded' : 'loading'}`}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          {placeholder || (
            <div className="lazy-image-spinner">
              <div className="spinner"></div>
            </div>
          )}
        </div>
      )}

      {/* Actual image - only load when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'fade-in' : ''}`}
          onLoad={handleLoad}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  )
}

export default LazyImage

import { useState, useEffect, useRef } from 'react'
import './LazyImage.css'

// Helper to generate WebP path from original image path
const getWebPPath = (src) => {
  if (!src || src.startsWith('data:') || src.endsWith('.svg')) return null
  const lastDot = src.lastIndexOf('.')
  if (lastDot === -1) return null
  return src.substring(0, lastDot) + '.webp'
}

function LazyImage({
  src,
  alt,
  className = '',
  placeholder = '',
  webpSrc = null,
  sizes = '',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef(null)

  // Auto-generate WebP path if not provided
  const webpPath = webpSrc || getWebPPath(src)

  useEffect(() => {
    const currentRef = imgRef.current

    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            // Once image is in view, we can stop observing
            if (currentRef) {
              observer.unobserve(currentRef)
            }
          }
        })
      },
      {
        // Load image when it's 100px away from viewport
        rootMargin: '100px',
        threshold: 0.01
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div
      ref={imgRef}
      className={`lazy-image-wrapper ${className} ${isLoaded ? 'loaded' : 'loading'}`}
    >
      {/* Placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="lazy-image-placeholder">
          {placeholder || (
            <div className="lazy-image-skeleton">
              <div className="skeleton-shimmer"></div>
            </div>
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="lazy-image-error">
          <span className="error-icon">🖼️</span>
        </div>
      )}

      {/* Actual image with WebP support - only load when in view */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source for modern browsers */}
          {webpPath && (
            <source
              srcSet={webpPath}
              type="image/webp"
              sizes={sizes || undefined}
            />
          )}
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'fade-in' : ''}`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
            sizes={sizes || undefined}
            {...props}
          />
        </picture>
      )}
    </div>
  )
}

export default LazyImage

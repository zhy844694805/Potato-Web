import { useState } from 'react'
import './LazyImage.css'

/**
 * LazyImage component with WebP support and fallback
 *
 * @param {string} src - Original image source (jpg/png)
 * @param {string} webpSrc - Optional WebP source (auto-generated if not provided)
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {string} placeholderColor - Background color while loading
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback when image fails to load
 */
function LazyImage({
  src,
  webpSrc,
  alt,
  className = '',
  placeholderColor = 'var(--color-bg-secondary)',
  onLoad,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Auto-generate WebP source if not provided
  const getWebPSource = (originalSrc) => {
    if (!originalSrc) return null
    // Replace extension with .webp
    const webp = originalSrc.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp')
    // Only return if different from original (has valid extension)
    return webp !== originalSrc ? webp : null
  }

  const webpSource = webpSrc || getWebPSource(src)

  const handleLoad = (e) => {
    setIsLoaded(true)
    onLoad?.(e)
  }

  const handleError = (e) => {
    setHasError(true)
    onError?.(e)
  }

  // If there's an error, just show the fallback with the original img
  if (hasError) {
    return (
      <div
        className="lazy-image-wrapper lazy-image-error"
        style={{ backgroundColor: placeholderColor }}
      >
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${className}`}
          loading="lazy"
          {...props}
        />
      </div>
    )
  }

  return (
    <div
      className={`lazy-image-wrapper ${isLoaded ? 'loaded' : 'loading'}`}
      style={{ backgroundColor: isLoaded ? 'transparent' : placeholderColor }}
    >
      <picture>
        {/* WebP source for modern browsers */}
        {webpSource && (
          <source
            srcSet={webpSource}
            type="image/webp"
          />
        )}
        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${className}`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      </picture>
    </div>
  )
}

export default LazyImage

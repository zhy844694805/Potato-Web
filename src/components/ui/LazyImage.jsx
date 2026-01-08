import { useState, memo } from 'react'
import './LazyImage.css'

/**
 * LazyImage component with WebP support, responsive images, and fallback
 *
 * @param {string} src - Original image source (jpg/png)
 * @param {string} webpSrc - Optional WebP source (auto-generated if not provided)
 * @param {string} srcSet - Optional srcSet for responsive images
 * @param {string} sizes - Optional sizes attribute for responsive images
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {string} placeholderColor - Background color while loading
 * @param {function} onLoad - Callback when image loads
 * @param {function} onError - Callback when image fails to load
 * @param {boolean} responsive - Enable auto-generated responsive srcSet (default: false)
 */
const LazyImage = memo(function LazyImage({
  src,
  webpSrc,
  srcSet,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  alt,
  className = '',
  placeholderColor = 'var(--color-bg-secondary)',
  onLoad,
  onError,
  responsive = false,
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

  // Auto-generate responsive srcSet if enabled
  const getResponsiveSrcSet = (originalSrc, isWebP = false) => {
    if (!originalSrc || !responsive) return null

    const sizes = [400, 800, 1200, 1600]
    const ext = isWebP ? '.webp' : ''
    const baseSrc = isWebP
      ? originalSrc.replace(/\.(jpg|jpeg|png|gif)$/i, '')
      : originalSrc.replace(/\.(jpg|jpeg|png|gif)$/i, '')

    return sizes
      .map(size => `${baseSrc}-${size}w${ext || originalSrc.match(/\.(jpg|jpeg|png|gif)$/i)?.[0]} ${size}w`)
      .join(', ')
  }

  const webpSource = webpSrc || getWebPSource(src)
  const responsiveWebpSrcSet = responsive && webpSource ? getResponsiveSrcSet(src, true) : null
  const responsiveSrcSet = responsive ? getResponsiveSrcSet(src, false) : srcSet

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
        {/* Responsive WebP source for modern browsers */}
        {webpSource && (
          <source
            srcSet={responsiveWebpSrcSet || webpSource}
            sizes={responsive ? sizes : undefined}
            type="image/webp"
          />
        )}
        {/* Fallback to original format with responsive support */}
        <img
          src={src}
          srcSet={responsiveSrcSet}
          sizes={responsive ? sizes : undefined}
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
})

export default LazyImage

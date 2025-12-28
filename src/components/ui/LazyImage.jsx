import './LazyImage.css'

function LazyImage({
  src,
  alt,
  className = '',
  ...props
}) {
  return (
    <div className="lazy-image-wrapper">
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

export default LazyImage

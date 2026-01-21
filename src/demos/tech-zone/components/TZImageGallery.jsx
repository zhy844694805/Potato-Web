import { useState } from 'react';

export default function TZImageGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePrevious = () => {
    setSelectedIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setIsZoomed(false);
  };

  return (
    <div className="tz-image-gallery" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Main Image */}
      <div className="tz-gallery-main">
        <img
          src={images[selectedIndex]}
          alt={`${productName} - Image ${selectedIndex + 1}`}
          onClick={() => setIsZoomed(true)}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button className="tz-gallery-nav tz-gallery-prev" onClick={handlePrevious}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className="tz-gallery-nav tz-gallery-next" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="tz-gallery-counter">
          {selectedIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="tz-gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`tz-gallery-thumb ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img src={image} alt={`${productName} - Thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="tz-gallery-zoom" onClick={() => setIsZoomed(false)}>
          <div className="tz-zoom-container" onClick={(e) => e.stopPropagation()}>
            <img src={images[selectedIndex]} alt={productName} />
            <button className="tz-zoom-close" onClick={() => setIsZoomed(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            {images.length > 1 && (
              <>
                <button className="tz-zoom-nav tz-zoom-prev" onClick={handlePrevious}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <button className="tz-zoom-nav tz-zoom-next" onClick={handleNext}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

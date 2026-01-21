export default function TZRatingStars({ rating, maxRating = 5, size = 'small', showValue = false }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  const sizeClass = `tz-stars-${size}`;

  return (
    <div className={`tz-rating-stars ${sizeClass}`}>
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="tz-star tz-star-full">★</span>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <span className="tz-star tz-star-half">
          <span className="tz-star-bg">★</span>
          <span className="tz-star-fill">★</span>
        </span>
      )}

      {/* Empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="tz-star tz-star-empty">★</span>
      ))}

      {/* Rating value */}
      {showValue && (
        <span className="tz-rating-value">{rating.toFixed(1)}</span>
      )}
    </div>
  );
}

// Interactive version for reviews
export function TZRatingInput({ value, onChange, size = 'medium' }) {
  const handleClick = (rating) => {
    onChange?.(rating);
  };

  const sizeClass = `tz-stars-${size}`;

  return (
    <div className={`tz-rating-input ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type="button"
          className={`tz-star-btn ${star <= value ? 'active' : ''}`}
          onClick={() => handleClick(star)}
          aria-label={`Rate ${star} stars`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

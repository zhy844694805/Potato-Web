import { useState } from 'react';
import { useTZLanguage } from '../context/TZLanguageContext';
import TZRatingStars from './TZRatingStars';

export default function TZReviewCard({ review }) {
  const { t } = useTZLanguage();
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [hasVoted, setHasVoted] = useState(false);

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpfulCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="tz-review-card">
      <div className="tz-review-header">
        <div className="tz-review-author">
          <div className="tz-review-avatar">
            {review.userName.charAt(0).toUpperCase()}
          </div>
          <div className="tz-review-author-info">
            <span className="tz-review-name">{review.userName}</span>
            {review.verified && (
              <span className="tz-verified-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Verified Purchase
              </span>
            )}
          </div>
        </div>
        <span className="tz-review-date">{formatDate(review.date)}</span>
      </div>

      <div className="tz-review-rating">
        <TZRatingStars rating={review.rating} size="small" />
      </div>

      <h4 className="tz-review-title">{t(review.title)}</h4>

      <p className="tz-review-content">{t(review.content)}</p>

      <div className="tz-review-footer">
        <button
          className={`tz-helpful-btn ${hasVoted ? 'voted' : ''}`}
          onClick={handleHelpful}
          disabled={hasVoted}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
          </svg>
          Helpful ({helpfulCount})
        </button>
      </div>
    </div>
  );
}

// Review Form Component
export function TZReviewForm({ productId, onSubmit }) {
  useTZLanguage();
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !content.trim()) return;

    const review = {
      id: `review-${Date.now()}`,
      productId,
      userId: 'guest',
      userName: 'Guest User',
      rating,
      title: { en: title, zh: title, it: title },
      content: { en: content, zh: content, it: content },
      date: new Date().toISOString().split('T')[0],
      helpful: 0,
      verified: false
    };

    onSubmit?.(review);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="tz-review-success">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <p>Thank you for your review!</p>
      </div>
    );
  }

  return (
    <form className="tz-review-form" onSubmit={handleSubmit}>
      <div className="tz-form-group">
        <label>Your Rating</label>
        <div className="tz-rating-input">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              type="button"
              className={`tz-star-btn ${star <= rating ? 'active' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="tz-form-group">
        <label htmlFor="review-title">Review Title (Optional)</label>
        <input
          id="review-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Summarize your review"
        />
      </div>

      <div className="tz-form-group">
        <label htmlFor="review-content">Your Review</label>
        <textarea
          id="review-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell us what you think about this product"
          rows={4}
          required
        />
      </div>

      <button type="submit" className="tz-btn tz-btn-primary" disabled={rating === 0}>
        Submit Review
      </button>
    </form>
  );
}

import { useRef } from 'react';
import { useSLLanguage } from '../context/SLLanguageContext';
import { specialDishes } from '../data/siteData';

export default function SLDishCarousel() {
  const { t } = useSLLanguage();
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const scrollAmount = 344; // card width + gap
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="sl-carousel">
      <button
        className="sl-carousel-btn sl-carousel-btn--prev"
        onClick={() => scroll('prev')}
        aria-label="Previous"
      >
        ‹
      </button>
      <div className="sl-carousel-track" ref={trackRef}>
        {specialDishes.map((dish) => (
          <div key={dish.id} className="sl-carousel-card">
            <img
              className="sl-carousel-card-img"
              src={dish.image}
              alt={dish.name}
              loading="lazy"
            />
            <div className="sl-carousel-card-body">
              <h4>{dish.name}</h4>
              <p>{t(dish.description)}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="sl-carousel-btn sl-carousel-btn--next"
        onClick={() => scroll('next')}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

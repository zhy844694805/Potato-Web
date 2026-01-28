import { useState, useEffect } from 'react';

export default function SLLoadingSpinner() {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 300);
    const hideTimer = setTimeout(() => setHidden(true), 700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`sl-loading${fading ? ' sl-loading--fade' : ''}`}>
      <svg className="sl-loading-spinner" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" />
      </svg>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useTZLanguage } from '../context/TZLanguageContext';
import { translations } from '../data/siteData';

export default function TZCountdownTimer({ endDate, onExpired }) {
  const { t } = useTZLanguage();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(endDate) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
        onExpired?.();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate, onExpired]);

  if (!timeLeft) {
    return null;
  }

  const labels = {
    days: { zh: '天', en: 'Days', it: 'Giorni' },
    hours: { zh: '时', en: 'Hrs', it: 'Ore' },
    minutes: { zh: '分', en: 'Min', it: 'Min' },
    seconds: { zh: '秒', en: 'Sec', it: 'Sec' }
  };

  return (
    <div className="tz-countdown">
      <span className="tz-countdown-label">{t(translations.product.saleEndsIn)}:</span>
      <div className="tz-countdown-timer">
        <div className="tz-countdown-unit">
          <span className="tz-countdown-value">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="tz-countdown-text">{t(labels.days)}</span>
        </div>
        <span className="tz-countdown-separator">:</span>
        <div className="tz-countdown-unit">
          <span className="tz-countdown-value">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="tz-countdown-text">{t(labels.hours)}</span>
        </div>
        <span className="tz-countdown-separator">:</span>
        <div className="tz-countdown-unit">
          <span className="tz-countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="tz-countdown-text">{t(labels.minutes)}</span>
        </div>
        <span className="tz-countdown-separator">:</span>
        <div className="tz-countdown-unit">
          <span className="tz-countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="tz-countdown-text">{t(labels.seconds)}</span>
        </div>
      </div>
    </div>
  );
}

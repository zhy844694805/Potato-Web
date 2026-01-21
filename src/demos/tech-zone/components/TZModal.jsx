import { useEffect, useRef } from 'react';

export default function TZModal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true
}) {
  const modalRef = useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      };

      document.addEventListener('keydown', handleTab);
      firstElement?.focus();

      return () => document.removeEventListener('keydown', handleTab);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClass = {
    small: 'tz-modal-small',
    medium: 'tz-modal-medium',
    large: 'tz-modal-large',
    fullscreen: 'tz-modal-fullscreen'
  }[size] || 'tz-modal-medium';

  return (
    <div className="tz-modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className={`tz-modal ${sizeClass}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="tz-modal-header">
            {title && <h2 id="modal-title" className="tz-modal-title">{title}</h2>}
            {showCloseButton && (
              <button className="tz-modal-close" onClick={onClose} aria-label="Close modal">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="tz-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// Confirmation Modal
export function TZConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger'
}) {
  return (
    <TZModal isOpen={isOpen} onClose={onClose} title={title} size="small">
      <p className="tz-confirm-message">{message}</p>
      <div className="tz-confirm-actions">
        <button className="tz-btn tz-btn-secondary" onClick={onClose}>
          {cancelText}
        </button>
        <button
          className={`tz-btn ${variant === 'danger' ? 'tz-btn-danger' : 'tz-btn-primary'}`}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmText}
        </button>
      </div>
    </TZModal>
  );
}

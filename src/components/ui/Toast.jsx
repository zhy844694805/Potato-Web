import { useState, useCallback, createContext, useContext } from 'react'
import './Toast.css'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])

    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, duration)
    }

    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="toast-container" aria-live="polite" aria-atomic="true">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`toast toast--${toast.type}`}
            role="alert"
          >
            <span className="toast__message">{toast.message}</span>
            <button
              className="toast__close"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

// Simple standalone toast function for use without context
let toastContainer = null
let toastId = 0

// eslint-disable-next-line react-refresh/only-export-components
export function showToast(message, type = 'info', duration = 3000) {
  // Create container if it doesn't exist
  if (!toastContainer) {
    toastContainer = document.createElement('div')
    toastContainer.className = 'toast-container'
    toastContainer.setAttribute('aria-live', 'polite')
    toastContainer.setAttribute('aria-atomic', 'true')
    document.body.appendChild(toastContainer)
  }

  const id = toastId++
  const toast = document.createElement('div')
  toast.className = `toast toast--${type}`
  toast.setAttribute('role', 'alert')
  toast.innerHTML = `
    <span class="toast__message">${message}</span>
    <button class="toast__close" aria-label="Close notification">&times;</button>
  `

  const closeBtn = toast.querySelector('.toast__close')
  closeBtn.addEventListener('click', () => {
    toast.classList.add('toast--closing')
    setTimeout(() => toast.remove(), 200)
  })

  toastContainer.appendChild(toast)

  // Auto remove after duration
  if (duration > 0) {
    setTimeout(() => {
      if (toast.parentNode) {
        toast.classList.add('toast--closing')
        setTimeout(() => toast.remove(), 200)
      }
    }, duration)
  }

  return id
}

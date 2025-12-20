import { useTheme } from '../../context/ThemeContext'
import './ThemeToggle.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${isDark ? 'dark' : 'light'}`}>
          {/* Sun Icon */}
          <svg
            className="theme-icon sun-icon"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="4" fill="currentColor" />
            <path
              d="M10 2V4M10 16V18M18 10H16M4 10H2M15.66 4.34L14.24 5.76M5.76 14.24L4.34 15.66M15.66 15.66L14.24 14.24M5.76 5.76L4.34 4.34"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Moon Icon */}
          <svg
            className="theme-icon moon-icon"
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10.5C16.6 14.4 13.4 17.5 9.5 17.5C5.4 17.5 2 14.1 2 10C2 6.1 5.1 2.9 9 2.5C8.2 3.6 7.8 5 7.8 6.5C7.8 10.1 10.7 13 14.3 13C15.4 13 16.4 12.7 17.2 12.2C17.1 12 17 12.2 17 10.5Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle

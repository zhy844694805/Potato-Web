import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../../context/ThemeContext'

// Test component that uses the context
function TestComponent() {
  const { theme, toggleTheme, setTheme } = useTheme()

  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('light')}>Set Light</button>
      <button onClick={() => setTheme('dark')}>Set Dark</button>
    </div>
  )
}

describe('ThemeContext', () => {
  beforeEach(() => {
    // Reset document attribute
    document.documentElement.removeAttribute('data-theme')
  })

  it('provides default theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const theme = screen.getByTestId('current-theme')
    expect(['light', 'dark']).toContain(theme.textContent)
  })

  it('toggles theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    // Set to light first
    fireEvent.click(screen.getByText('Set Light'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('light')

    // Toggle to dark
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
  })

  it('toggles theme from dark to light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    // Set to dark first
    fireEvent.click(screen.getByText('Set Dark'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')

    // Toggle to light
    fireEvent.click(screen.getByText('Toggle'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('light')
  })

  it('sets theme to light explicitly', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText('Set Light'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('light')
  })

  it('sets theme to dark explicitly', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText('Set Dark'))
    expect(screen.getByTestId('current-theme')).toHaveTextContent('dark')
  })

  it('updates document data-theme attribute', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText('Set Dark'))
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

    fireEvent.click(screen.getByText('Set Light'))
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('throws error when useTheme is used outside provider', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(<TestComponent />)
    }).toThrow()

    consoleSpy.mockRestore()
  })
})

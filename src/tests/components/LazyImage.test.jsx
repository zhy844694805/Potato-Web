import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import LazyImage from '../../components/ui/LazyImage'

describe('LazyImage Component', () => {
  beforeEach(() => {
    // Reset IntersectionObserver mock
    window.IntersectionObserver = vi.fn().mockImplementation((callback) => ({
      observe: vi.fn(() => {
        // Simulate immediate intersection
        callback([{ isIntersecting: true }])
      }),
      unobserve: vi.fn(),
      disconnect: vi.fn()
    }))
  })

  it('renders image with src', () => {
    render(<LazyImage src="/test.jpg" alt="Test image" />)
    const img = screen.getByAltText('Test image')
    expect(img).toBeInTheDocument()
  })

  it('applies alt text correctly', () => {
    render(<LazyImage src="/test.jpg" alt="Alt text" />)
    expect(screen.getByAltText('Alt text')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<LazyImage src="/test.jpg" alt="Test" className="custom-image" />)
    const container = screen.getByAltText('Test').closest('.lazy-image')
    expect(container).toHaveClass('custom-image')
  })

  it('handles width and height props', () => {
    render(<LazyImage src="/test.jpg" alt="Sized" width={300} height={200} />)
    const img = screen.getByAltText('Sized')
    expect(img).toHaveAttribute('width', '300')
    expect(img).toHaveAttribute('height', '200')
  })
})

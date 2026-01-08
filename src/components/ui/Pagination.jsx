import { memo } from 'react'
import './Pagination.css'

/**
 * Pagination component
 * @param {number} currentPage - Current page number (1-indexed)
 * @param {number} totalPages - Total number of pages
 * @param {function} onPageChange - Callback when page changes
 * @param {number} siblingCount - Number of sibling pages to show
 */
const Pagination = memo(function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1
}) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3 // siblings + current + first + last
    const totalBlocks = totalNumbers + 2 // + 2 for ellipsis

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

    const showLeftEllipsis = leftSiblingIndex > 2
    const showRightEllipsis = rightSiblingIndex < totalPages - 1

    if (!showLeftEllipsis && showRightEllipsis) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
      return [...leftRange, '...', totalPages]
    }

    if (showLeftEllipsis && !showRightEllipsis) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - rightItemCount + i + 1
      )
      return [1, '...', ...rightRange]
    }

    const middleRange = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    )
    return [1, '...', ...middleRange, '...', totalPages]
  }

  const pages = getPageNumbers()

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page)
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      <button
        className="pagination__button pagination__button--prev"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="pagination__pages">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="pagination__ellipsis">
                ...
              </span>
            )
          }

          return (
            <button
              key={page}
              className={`pagination__page ${currentPage === page ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        })}
      </div>

      <button
        className="pagination__button pagination__button--next"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
})

export default Pagination

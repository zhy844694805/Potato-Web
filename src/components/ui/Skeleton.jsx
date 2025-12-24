import './Skeleton.css'

// Base skeleton element
export function Skeleton({ width, height, borderRadius, className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width: width || '100%',
        height: height || '1rem',
        borderRadius: borderRadius || '4px'
      }}
    />
  )
}

// Text line skeleton
export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`skeleton-text ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height="1rem"
          width={i === lines - 1 ? '70%' : '100%'}
          className="skeleton-line"
        />
      ))}
    </div>
  )
}

// Card skeleton
export function SkeletonCard({ className = '' }) {
  return (
    <div className={`skeleton-card ${className}`}>
      <Skeleton height="180px" borderRadius="8px" className="skeleton-image" />
      <div className="skeleton-card-content">
        <Skeleton height="1.5rem" width="80%" />
        <SkeletonText lines={2} />
        <div className="skeleton-card-footer">
          <Skeleton height="0.875rem" width="30%" />
          <Skeleton height="0.875rem" width="20%" />
        </div>
      </div>
    </div>
  )
}

// Hero section skeleton
export function SkeletonHero({ className = '' }) {
  return (
    <div className={`skeleton-hero ${className}`}>
      <Skeleton height="2.5rem" width="60%" className="skeleton-title" />
      <Skeleton height="1.25rem" width="80%" className="skeleton-subtitle" />
      <SkeletonText lines={2} />
      <div className="skeleton-buttons">
        <Skeleton height="48px" width="140px" borderRadius="8px" />
        <Skeleton height="48px" width="140px" borderRadius="8px" />
      </div>
    </div>
  )
}

// Grid skeleton for cards
export function SkeletonGrid({ count = 4, columns = 2, className = '' }) {
  return (
    <div
      className={`skeleton-grid ${className}`}
      style={{ '--columns': columns }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

// Page skeleton templates
export function HomePageSkeleton() {
  return (
    <div className="page-skeleton home-skeleton">
      <SkeletonHero />
      <div className="skeleton-section">
        <Skeleton height="2rem" width="200px" className="section-title-skeleton" />
        <SkeletonGrid count={4} columns={4} />
      </div>
      <div className="skeleton-section">
        <Skeleton height="2rem" width="200px" className="section-title-skeleton" />
        <SkeletonGrid count={4} columns={4} />
      </div>
    </div>
  )
}

export function ListPageSkeleton() {
  return (
    <div className="page-skeleton list-skeleton">
      <div className="skeleton-page-header">
        <Skeleton height="2.5rem" width="300px" />
        <Skeleton height="1rem" width="500px" />
      </div>
      <div className="skeleton-filter">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} height="36px" width="80px" borderRadius="20px" />
        ))}
      </div>
      <SkeletonGrid count={6} columns={3} />
    </div>
  )
}

export function DetailPageSkeleton() {
  return (
    <div className="page-skeleton detail-skeleton">
      <div className="skeleton-detail-header">
        <Skeleton height="0.875rem" width="100px" />
        <Skeleton height="2.5rem" width="80%" />
        <Skeleton height="1rem" width="200px" />
      </div>
      <Skeleton height="400px" borderRadius="12px" className="skeleton-featured-image" />
      <div className="skeleton-detail-content">
        <SkeletonText lines={4} />
        <SkeletonText lines={3} />
        <SkeletonText lines={5} />
      </div>
    </div>
  )
}

export default Skeleton

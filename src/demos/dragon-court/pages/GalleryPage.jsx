import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import { siteInfo, galleryData } from '../data/siteData'

function GalleryPage() {
  const { language, t } = useDCLanguage()
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = activeCategory === 'all'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === activeCategory)

  const handlePrev = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(filteredImages[nextIndex])
  }

  return (
    <div className="dc-gallery-page">
      <Helmet>
        <title>{language === 'zh' ? '臻品画廊' : 'Gallery'} | {t(siteInfo.name)}</title>
      </Helmet>

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">藝</span>
          <h1>{language === 'zh' ? '臻品画廊' : 'Gallery'}</h1>
          <p>{language === 'zh' ? '光影之间，尽显风华' : 'Capturing moments of culinary artistry'}</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="dc-section dc-gallery-main">
        <div className="dc-container">
          {/* Category Filter */}
          <div className="dc-gallery-filters">
            <button
              className={`dc-filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              {language === 'zh' ? '全部' : 'All'}
            </button>
            {galleryData.categories.map(cat => (
              <button
                key={cat.id}
                className={`dc-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {t(cat.name)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="dc-gallery-grid">
            {filteredImages.map((img, i) => (
              <div
                key={img.id}
                className={`dc-gallery-item ${i === 0 || i === 5 ? 'large' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img.url} alt={t(img.title)} loading="lazy" />
                <div className="dc-gallery-overlay">
                  <span className="dc-gallery-icon">+</span>
                  <h4>{t(img.title)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="dc-section dc-virtual-tour light">
        <div className="dc-container">
          <div className="dc-section-header">
            <span className="dc-section-icon">遊</span>
            <h2>{language === 'zh' ? '虚拟导览' : 'Virtual Tour'}</h2>
            <p>{language === 'zh' ? '足不出户，领略龙庭风采' : 'Experience Dragon Court from anywhere'}</p>
          </div>
          <div className="dc-tour-content">
            <div className="dc-tour-video">
              <img src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&w=1200" alt="Virtual Tour" />
              <div className="dc-tour-play">
                <span>▶</span>
              </div>
            </div>
            <div className="dc-tour-info">
              <h3>{language === 'zh' ? '360° 沉浸式体验' : '360° Immersive Experience'}</h3>
              <p>
                {language === 'zh'
                  ? '通过我们的虚拟导览，您可以提前欣赏龙庭的每一个精心设计的角落。从典雅的主厅到私密的包厢，感受皇家气派与现代奢华的完美融合。'
                  : 'Through our virtual tour, you can preview every meticulously designed corner of Dragon Court. From the elegant main hall to private dining rooms, experience the perfect blend of imperial grandeur and modern luxury.'}
              </p>
              <button className="dc-btn-gold">
                {language === 'zh' ? '开始导览' : 'Start Tour'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="dc-section dc-instagram">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '关注我们' : 'Follow Us'}</h2>
            <p className="dc-instagram-handle">@dragoncourt_milano</p>
          </div>
          <div className="dc-instagram-grid">
            {galleryData.images.slice(0, 6).map((img, i) => (
              <div key={i} className="dc-instagram-item">
                <img src={img.url} alt="" loading="lazy" />
                <div className="dc-instagram-overlay">
                  <span>♥ {Math.floor(Math.random() * 500 + 100)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="dc-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="dc-lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="dc-lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <button className="dc-lightbox-prev" onClick={handlePrev}>‹</button>
            <img src={selectedImage.url} alt={t(selectedImage.title)} />
            <button className="dc-lightbox-next" onClick={handleNext}>›</button>
            <div className="dc-lightbox-info">
              <h4>{t(selectedImage.title)}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage

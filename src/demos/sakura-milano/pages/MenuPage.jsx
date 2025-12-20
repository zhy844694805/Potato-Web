import { useState } from 'react'
import { useRestaurantLanguage } from '../SakuraMilano'
import { translations, menuItems, getMenuCategories } from '../data/restaurant-data'

function MenuPage() {
  const { language } = useRestaurantLanguage()
  const t = translations[language]
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = getMenuCategories()

  const filteredItems =
    activeCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  const getTagClass = (tag) => {
    const tagClasses = {
      signature: 'sushi-tag-signature',
      vegetarian: 'sushi-tag-vegetarian',
      spicy: 'sushi-tag-spicy',
      glutenFree: 'sushi-tag-glutenFree'
    }
    return tagClasses[tag] || ''
  }

  return (
    <div className="sushi-page-content">
      {/* Page Header */}
      <section className="sushi-page-header">
        <div className="sushi-container">
          <h1 className="sushi-heading-1">{t.menu.title}</h1>
          <div className="sushi-divider" />
          <p className="sushi-text-gray">{t.menu.subtitle}</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sushi-section" style={{ paddingTop: 'var(--sushi-space-lg)' }}>
        <div className="sushi-container">
          <div className="sushi-menu-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`sushi-category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {t.menu.categories[category]}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="sushi-menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="sushi-menu-item">
                <img
                  src={item.image}
                  alt={item.name[language]}
                  className="sushi-menu-item-image"
                />
                <div className="sushi-menu-item-content">
                  <div className="sushi-menu-item-header">
                    <h3 className="sushi-menu-item-name">{item.name[language]}</h3>
                    <span className="sushi-menu-item-price">€{item.price}</span>
                  </div>
                  <p className="sushi-menu-item-desc">{item.description[language]}</p>
                  {item.tags.length > 0 && (
                    <div className="sushi-menu-item-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className={`sushi-tag ${getTagClass(tag)}`}>
                          {t.menu.tags[tag]}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: 'var(--sushi-space-2xl)',
              padding: 'var(--sushi-space-md)',
              background: 'var(--sushi-bg-card)',
              borderRadius: 'var(--sushi-radius-md)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--sushi-space-md)',
              justifyContent: 'center'
            }}
          >
            <span className="sushi-tag sushi-tag-signature">{t.menu.tags.signature}</span>
            <span className="sushi-tag sushi-tag-vegetarian">{t.menu.tags.vegetarian}</span>
            <span className="sushi-tag sushi-tag-glutenFree">{t.menu.tags.glutenFree}</span>
            <span className="sushi-tag sushi-tag-spicy">{t.menu.tags.spicy}</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MenuPage

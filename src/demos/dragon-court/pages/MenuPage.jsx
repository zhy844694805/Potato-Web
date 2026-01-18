import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useDCLanguage } from '../DragonCourt'
import { siteInfo, menuCategories, menuItems, setMenus } from '../data/siteData'

function MenuPage() {
  const { language, t } = useDCLanguage()
  const [activeCategory, setActiveCategory] = useState('signature')
  const [selectedDish, setSelectedDish] = useState(null)

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className="dc-menu-page">
      <Helmet>
        <title>{language === 'zh' ? '御膳菜单' : 'Menu'} | {t(siteInfo.name)}</title>
      </Helmet>

      {/* Page Hero */}
      <section className="dc-page-hero">
        <div className="dc-page-hero-bg">
          <img src="https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&w=1920" alt="" />
          <div className="dc-page-hero-overlay"></div>
        </div>
        <div className="dc-page-hero-content">
          <span className="dc-page-icon">膳</span>
          <h1>{language === 'zh' ? '御膳菜单' : 'Imperial Menu'}</h1>
          <p>{language === 'zh' ? '精选御膳，匠心呈现' : 'Exquisite imperial cuisine, crafted with mastery'}</p>
        </div>
      </section>

      {/* Set Menus */}
      <section className="dc-section dc-set-menus light">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '精选套餐' : 'Set Menus'}</h2>
            <p>{language === 'zh' ? '为您精心搭配的御膳体验' : 'Curated imperial dining experiences'}</p>
          </div>
          <div className="dc-sets-grid">
            {setMenus.map((menu, i) => (
              <div key={i} className={`dc-set-card ${menu.featured ? 'featured' : ''}`}>
                {menu.featured && (
                  <span className="dc-set-badge">{language === 'zh' ? '推荐' : 'Recommended'}</span>
                )}
                <div className="dc-set-price">€{menu.price}</div>
                <h3>{t(menu.name)}</h3>
                <p className="dc-set-desc">{t(menu.desc)}</p>
                <ul className="dc-set-items">
                  {menu.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
                <button className="dc-set-btn">
                  {language === 'zh' ? '预约此套餐' : 'Reserve This Set'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A La Carte Menu */}
      <section className="dc-section dc-alacarte">
        <div className="dc-container">
          <div className="dc-section-header">
            <h2>{language === 'zh' ? '单点菜单' : 'À La Carte'}</h2>
          </div>

          {/* Category Tabs */}
          <div className="dc-menu-tabs">
            {menuCategories.map(cat => (
              <button
                key={cat.id}
                className={`dc-menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {t(cat.name)}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="dc-menu-grid">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="dc-menu-item"
                onClick={() => setSelectedDish(item)}
              >
                <div className="dc-menu-item-image">
                  <img src={item.image} alt={t(item.name)} loading="lazy" />
                  {item.featured && <span className="dc-featured-badge">★</span>}
                </div>
                <div className="dc-menu-item-info">
                  <h4>{t(item.name)}</h4>
                  <p>{t(item.desc)}</p>
                  <span className="dc-menu-item-price">€{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="dc-section dc-menu-notes light">
        <div className="dc-container">
          <div className="dc-notes-content">
            <h3>{language === 'zh' ? '温馨提示' : 'Please Note'}</h3>
            <ul>
              <li>{language === 'zh' ? '部分菜品需提前预订' : 'Some dishes require advance reservation'}</li>
              <li>{language === 'zh' ? '如有食物过敏，请提前告知服务人员' : 'Please inform staff of any allergies'}</li>
              <li>{language === 'zh' ? '价格不含服务费' : 'Prices exclude service charge'}</li>
              <li>{language === 'zh' ? '菜品可能因季节食材而有所调整' : 'Menu may vary based on seasonal ingredients'}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Dish Modal */}
      {selectedDish && (
        <div className="dc-modal" onClick={() => setSelectedDish(null)}>
          <div className="dc-modal-content" onClick={e => e.stopPropagation()}>
            <button className="dc-modal-close" onClick={() => setSelectedDish(null)}>×</button>
            <img src={selectedDish.image} alt={t(selectedDish.name)} />
            <div className="dc-modal-info">
              <h3>{t(selectedDish.name)}</h3>
              <p>{t(selectedDish.desc)}</p>
              <span className="dc-modal-price">€{selectedDish.price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuPage

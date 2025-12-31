import { describe, it, expect } from 'vitest'
import {
  portfolioData,
  getPortfolioById,
  getPortfolioByCategory,
  categories
} from '../../data/portfolio'

describe('Portfolio Data', () => {
  describe('portfolioData', () => {
    it('should be an array with items', () => {
      expect(Array.isArray(portfolioData)).toBe(true)
      expect(portfolioData.length).toBeGreaterThan(0)
    })

    it('each item should have required fields', () => {
      portfolioData.forEach(item => {
        expect(item).toHaveProperty('id')
        expect(item).toHaveProperty('title')
        expect(item).toHaveProperty('category')
      })
    })

    it('each item should have trilingual title', () => {
      portfolioData.forEach(item => {
        expect(item.title).toHaveProperty('zh')
        expect(item.title).toHaveProperty('en')
      })
    })
  })

  describe('getPortfolioById', () => {
    it('should return portfolio item by id', () => {
      const firstItem = portfolioData[0]
      const result = getPortfolioById(firstItem.id)

      expect(result).toBeDefined()
      expect(result.id).toBe(firstItem.id)
    })

    it('should return undefined for non-existent id', () => {
      const result = getPortfolioById('non-existent-id')
      expect(result).toBeUndefined()
    })
  })

  describe('getPortfolioByCategory', () => {
    it('should return items matching category', () => {
      const testCategories = ['restaurant', 'fashion', 'professional']

      testCategories.forEach(category => {
        const items = getPortfolioByCategory(category)
        items.forEach(item => {
          expect(item.category).toBe(category)
        })
      })
    })

    it('should return empty array for non-existent category', () => {
      const result = getPortfolioByCategory('non-existent-category')
      expect(result).toEqual([])
    })
  })

  describe('categories', () => {
    it('should be an array with categories', () => {
      expect(Array.isArray(categories)).toBe(true)
      expect(categories.length).toBeGreaterThan(0)
    })

    it('each category should have value and label', () => {
      categories.forEach(category => {
        expect(category).toHaveProperty('value')
        expect(category).toHaveProperty('label')
      })
    })

    it('each category label should have trilingual text', () => {
      categories.forEach(category => {
        expect(category.label).toHaveProperty('zh')
        expect(category.label).toHaveProperty('en')
      })
    })
  })
})

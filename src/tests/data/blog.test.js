import { describe, it, expect } from 'vitest'
import {
  blogPosts,
  getLatestPosts,
  getBlogBySlug,
  getPostsByCategory,
  searchPosts
} from '../../data/blog'

describe('Blog Data', () => {
  describe('blogPosts', () => {
    it('should be an array with posts', () => {
      expect(Array.isArray(blogPosts)).toBe(true)
      expect(blogPosts.length).toBeGreaterThan(0)
    })

    it('each post should have required fields', () => {
      blogPosts.forEach(post => {
        expect(post).toHaveProperty('id')
        expect(post).toHaveProperty('slug')
        expect(post).toHaveProperty('title')
        expect(post).toHaveProperty('category')
        expect(post).toHaveProperty('date')
      })
    })

    it('each post should have trilingual title', () => {
      blogPosts.forEach(post => {
        expect(post.title).toHaveProperty('zh')
        expect(post.title).toHaveProperty('en')
      })
    })
  })

  describe('getLatestPosts', () => {
    it('should return specified number of posts', () => {
      const posts = getLatestPosts(3)
      expect(posts.length).toBeLessThanOrEqual(3)
    })

    it('should return all posts when limit exceeds total', () => {
      const posts = getLatestPosts(1000)
      expect(posts.length).toBe(blogPosts.length)
    })

    it('should return posts sorted by date (newest first)', () => {
      const posts = getLatestPosts(5)
      for (let i = 0; i < posts.length - 1; i++) {
        const current = new Date(posts[i].date)
        const next = new Date(posts[i + 1].date)
        expect(current.getTime()).toBeGreaterThanOrEqual(next.getTime())
      }
    })
  })

  describe('getBlogBySlug', () => {
    it('should return post by slug', () => {
      const firstPost = blogPosts[0]
      const result = getBlogBySlug(firstPost.slug)

      expect(result).toBeDefined()
      expect(result.slug).toBe(firstPost.slug)
    })

    it('should return undefined for non-existent slug', () => {
      const result = getBlogBySlug('non-existent-slug')
      expect(result).toBeUndefined()
    })
  })

  describe('getPostsByCategory', () => {
    it('should return posts matching category', () => {
      const testCategories = ['tech', 'business', 'tutorial']

      testCategories.forEach(category => {
        const posts = getPostsByCategory(category)
        posts.forEach(post => {
          expect(post.category).toBe(category)
        })
      })
    })

    it('should return empty array for non-existent category', () => {
      const result = getPostsByCategory('non-existent-category')
      expect(result).toEqual([])
    })
  })

  describe('searchPosts', () => {
    it('should return array for search', () => {
      const results = searchPosts('web')
      expect(Array.isArray(results)).toBe(true)
    })

    it('should handle empty search query', () => {
      const results = searchPosts('')
      expect(Array.isArray(results)).toBe(true)
    })
  })
})

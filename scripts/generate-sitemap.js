/* global process */
// Sitemap Generator for Minimal Craft
// Run with: node scripts/generate-sitemap.js
// Or: node scripts/generate-sitemap.js --dist (for postbuild, writes to dist folder)
// Automatically runs after build via postbuild script

import { writeFileSync, readFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Check if --dist flag is passed (for postbuild usage)
const isDistMode = process.argv.includes('--dist')

// Read .env file to get VITE_SITE_URL
function getEnvVariable(key, defaultValue) {
  try {
    const envPath = join(__dirname, '..', '.env')
    if (existsSync(envPath)) {
      const envContent = readFileSync(envPath, 'utf-8')
      const match = envContent.match(new RegExp(`${key}=(.+)`))
      if (match && match[1]) {
        return match[1].trim()
      }
    }
  } catch (error) {
    // Ignore error, use default
  }
  return defaultValue
}

// Website base URL - 从.env文件读取或使用默认值
const BASE_URL = getEnvVariable('VITE_SITE_URL', 'https://aimodel.it')

// 读取数据文件获取动态页面
function getDataFromFile(relativePath) {
  try {
    const filePath = join(__dirname, '..', relativePath)
    const content = readFileSync(filePath, 'utf-8')

    // 简单提取 slug 值
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g)
    if (slugMatches) {
      return slugMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1])
    }
    return []
  } catch (error) {
    console.warn(`⚠️ Could not read ${relativePath}:`, error.message)
    return []
  }
}

// 获取 portfolio slugs
const portfolioSlugs = getDataFromFile('src/data/portfolio.js')
console.log(`Found ${portfolioSlugs.length} portfolio items`)

// 获取 blog slugs
const blogSlugs = getDataFromFile('src/data/blog.js')
console.log(`Found ${blogSlugs.length} blog posts`)

const today = new Date().toISOString().split('T')[0]

// 静态页面
const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/services', changefreq: 'monthly', priority: '0.9' },
  { url: '/portfolio', changefreq: 'weekly', priority: '0.9' },
  { url: '/blog', changefreq: 'weekly', priority: '0.9' },
  { url: '/testimonials', changefreq: 'monthly', priority: '0.8' },
  { url: '/about', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', changefreq: 'monthly', priority: '0.8' }
]

// Portfolio 详情页
const portfolioPages = portfolioSlugs.map(slug => ({
  url: `/portfolio/${slug}`,
  changefreq: 'monthly',
  priority: '0.7'
}))

// Blog 详情页
const blogPages = blogSlugs.map(slug => ({
  url: `/blog/${slug}`,
  changefreq: 'monthly',
  priority: '0.6'
}))

// 合并所有页面
const allPages = [...staticPages, ...portfolioPages, ...blogPages]

// 生成 XML sitemap
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPages
  .map(
    page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="zh" href="${BASE_URL}${page.url}?lang=zh" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${page.url}?lang=en" />
  </url>`
  )
  .join('\n')}
</urlset>`

  return sitemap
}

// 生成 robots.txt
function generateRobots() {
  return `# Robots.txt for ${BASE_URL}
User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin/private paths (if any)
Disallow: /api/
Disallow: /_/
`
}

// 写入文件
try {
  // Determine output directory based on mode
  const outputDir = isDistMode ? 'dist' : 'public'
  const outputPath = join(__dirname, '..', outputDir)

  // Check if output directory exists (especially important for dist mode)
  if (!existsSync(outputPath)) {
    console.error(`Error: ${outputDir} directory does not exist.`)
    if (isDistMode) {
      console.error('Make sure to run the build first before generating sitemap in dist mode.')
    }
    process.exit(1)
  }

  // 生成 sitemap.xml
  const sitemap = generateSitemap()
  writeFileSync(join(outputPath, 'sitemap.xml'), sitemap, 'utf-8')

  // 生成 robots.txt
  const robots = generateRobots()
  writeFileSync(join(outputPath, 'robots.txt'), robots, 'utf-8')

  console.log('')
  console.log('Sitemap and robots.txt generated successfully!')
  console.log(`Output directory: ${outputDir}/`)
  console.log(`Base URL: ${BASE_URL}`)
  console.log('')
  console.log('Total URLs:', allPages.length)
  console.log(`   - Static pages: ${staticPages.length}`)
  console.log(`   - Portfolio pages: ${portfolioPages.length}`)
  console.log(`   - Blog pages: ${blogPages.length}`)
  console.log('')
} catch (error) {
  console.error('Error generating sitemap:', error)
  process.exit(1)
}

#!/usr/bin/env node
/* global process */
/**
 * Image Optimization Script
 *
 * Converts images to WebP format and optimizes them for web.
 *
 * Usage:
 *   node scripts/optimize-images.js [options]
 *
 * Options:
 *   --input, -i    Input directory (default: public/images)
 *   --output, -o   Output directory (default: public/images)
 *   --quality, -q  WebP quality 0-100 (default: 80)
 *   --dry-run      Show what would be done without making changes
 *
 * Requirements:
 *   npm install sharp --save-dev
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, '..')

// Parse command line arguments
const args = process.argv.slice(2)
const options = {
  input: 'public/images',
  output: 'public/images',
  quality: 80,
  dryRun: false
}

for (let i = 0; i < args.length; i++) {
  switch (args[i]) {
    case '--input':
    case '-i':
      options.input = args[++i]
      break
    case '--output':
    case '-o':
      options.output = args[++i]
      break
    case '--quality':
    case '-q':
      options.quality = parseInt(args[++i])
      break
    case '--dry-run':
      options.dryRun = true
      break
  }
}

const inputDir = path.join(rootDir, options.input)
const outputDir = path.join(rootDir, options.output)

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff']

// Statistics
const stats = {
  processed: 0,
  skipped: 0,
  errors: 0,
  totalSavedBytes: 0
}

/**
 * Get all image files recursively
 */
function getImageFiles(dir, files = []) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Directory not found: ${dir}`)
    process.exit(1)
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      getImageFiles(fullPath, files)
    } else {
      const ext = path.extname(item).toLowerCase()
      if (supportedFormats.includes(ext)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

/**
 * Format bytes to human readable
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Process a single image
 */
async function processImage(inputPath, sharp) {
  const relativePath = path.relative(inputDir, inputPath)
  const parsedPath = path.parse(relativePath)
  const webpPath = path.join(outputDir, parsedPath.dir, `${parsedPath.name}.webp`)

  // Skip if WebP already exists and is newer than source
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(inputPath)
    const webpStat = fs.statSync(webpPath)
    if (webpStat.mtime > srcStat.mtime) {
      stats.skipped++
      return
    }
  }

  if (options.dryRun) {
    console.log(`  Would convert: ${relativePath} → ${parsedPath.name}.webp`)
    stats.processed++
    return
  }

  try {
    // Ensure output directory exists
    const outDir = path.dirname(webpPath)
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true })
    }

    // Get original file size
    const originalSize = fs.statSync(inputPath).size

    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: options.quality })
      .toFile(webpPath)

    // Get new file size
    const newSize = fs.statSync(webpPath).size
    const saved = originalSize - newSize
    const savedPercent = ((saved / originalSize) * 100).toFixed(1)

    stats.totalSavedBytes += saved
    stats.processed++

    console.log(`  ✓ ${relativePath} → ${parsedPath.name}.webp (${formatBytes(saved)} saved, ${savedPercent}%)`)
  } catch (error) {
    stats.errors++
    console.error(`  ✗ ${relativePath}: ${error.message}`)
  }
}

/**
 * Generate responsive image sizes
 * @param {string} inputPath - Path to input image
 * @param {Function} sharp - Sharp instance
 * @param {number[]} sizes - Array of widths to generate
 */
// eslint-disable-next-line no-unused-vars
async function generateResponsiveSizes(inputPath, sharp, sizes = [320, 640, 1024, 1920]) {
  const relativePath = path.relative(inputDir, inputPath)
  const parsedPath = path.parse(relativePath)

  for (const width of sizes) {
    const outputName = `${parsedPath.name}-${width}w.webp`
    const outputPath = path.join(outputDir, parsedPath.dir, outputName)

    if (options.dryRun) {
      console.log(`    Would generate: ${outputName}`)
      continue
    }

    try {
      const metadata = await sharp(inputPath).metadata()

      // Skip if image is smaller than target width
      if (metadata.width < width) continue

      await sharp(inputPath)
        .resize(width)
        .webp({ quality: options.quality })
        .toFile(outputPath)
    } catch (error) {
      console.error(`    ✗ ${outputName}: ${error.message}`)
    }
  }
}

/**
 * Main function
 */
async function main() {
  console.log('\n🖼️  Image Optimization Script\n')
  console.log(`Input:   ${inputDir}`)
  console.log(`Output:  ${outputDir}`)
  console.log(`Quality: ${options.quality}`)
  console.log(`Mode:    ${options.dryRun ? 'Dry Run' : 'Live'}\n`)

  // Check if sharp is installed
  let sharp
  try {
    sharp = (await import('sharp')).default
  } catch {
    console.log('⚠️  Sharp library not found. Install it with:\n')
    console.log('   npm install sharp --save-dev\n')
    console.log('Generating placeholder script instead...\n')

    // Generate a simpler script without sharp
    generatePlaceholderScript()
    return
  }

  const images = getImageFiles(inputDir)

  if (images.length === 0) {
    console.log('No images found to process.\n')
    return
  }

  console.log(`Found ${images.length} images to process:\n`)

  for (const imagePath of images) {
    await processImage(imagePath, sharp)
  }

  console.log('\n📊 Summary:')
  console.log(`   Processed: ${stats.processed}`)
  console.log(`   Skipped:   ${stats.skipped}`)
  console.log(`   Errors:    ${stats.errors}`)
  if (!options.dryRun) {
    console.log(`   Saved:     ${formatBytes(stats.totalSavedBytes)}`)
  }
  console.log('')
}

/**
 * Generate a placeholder script that uses online tools
 */
function generatePlaceholderScript() {
  const instructions = `
📖 Image Optimization Guide (Without Sharp)

Since the Sharp library is not installed, here are alternative methods:

1. Online Tools (Free):
   - Squoosh: https://squoosh.app/
   - TinyPNG: https://tinypng.com/
   - Cloudinary: https://cloudinary.com/

2. Install Sharp (Recommended):
   npm install sharp --save-dev

   Then run this script again.

3. Using ImageMagick (if installed):
   convert input.jpg -quality 80 output.webp

4. Using cwebp (Google's WebP tool):
   cwebp -q 80 input.jpg -o output.webp

Current images in public directory:
`

  console.log(instructions)

  // List current images
  if (fs.existsSync(inputDir)) {
    const images = getImageFiles(inputDir)
    if (images.length > 0) {
      images.forEach(img => {
        const size = fs.statSync(img).size
        console.log(`   ${path.relative(inputDir, img)} (${formatBytes(size)})`)
      })
    } else {
      console.log('   No images found.')
    }
  }

  console.log('')
}

// Run
main().catch(console.error)

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build (includes image optimization + sitemap)
npm run lint         # ESLint checks
npm run preview      # Preview production build

# Testing
npm run test         # Run tests in watch mode (Vitest)
npm run test:run     # Run tests once
npm run test:coverage  # Run tests with coverage
npx vitest run src/tests/components/Button.test.jsx  # Single test file

# Utilities
npm run optimize-images    # Convert images to WebP format
npm run generate-sitemap   # Generate sitemap manually
```

## Architecture Overview

React 19 + Vite 7 portfolio website for Italian Chinese businesses, with trilingual support (zh/en/it) and SEO optimization. No TypeScript - pure JavaScript with JSX.

### Core Patterns

**Trilingual Content:** Main site data uses `{ zh: "...", en: "..." }`. Demo sites use `{ it: "...", en: "...", zh: "..." }`. Access via `useLanguage()` hook from `src/context/LanguageContext.jsx`. The `useLanguageText()` hook provides a `t(zh, en, it)` helper for inline translations.

**Theme System:** `ThemeContext` manages light/dark mode, persisted in localStorage, applied via `[data-theme='dark']` CSS attribute selector.

**Static Data:** Content in `/src/data/` with helper functions like `getPortfolioById(id)`, `getLatestPosts(limit)`, `searchPosts(query)`, `getBlogBySlug(slug)`.

**Demo Sites:** 32 self-contained demos in `/src/demos/`. Each has isolated CSS with unique prefix (e.g., `.dc-`, `.tz-`). Demos render without main site Header/Footer (controlled in `App.jsx` via `isDemo` check on pathname).

### Directory Structure

```
src/
├── components/
│   ├── business/    # ServiceCard, PortfolioCard, BlogCard, Comments, ShareButtons, ExportPDF
│   ├── ui/          # Button, LazyImage, ThemeToggle, BookingWidget, ChatWidget
│   └── layout/      # Header, Footer
├── context/         # ThemeContext, LanguageContext
├── data/            # Static content (services, portfolio, blog, testimonials, team)
├── demos/           # 32 client demo sites (self-contained)
├── hooks/           # Custom hooks (useScrollAnimation, useLanguageText)
├── locales/         # i18n translations (zh/en/it JSON files)
├── pages/           # Route components
└── utils/           # schemas.js (SEO structured data), analytics.js
```

### Routing

Dynamic routes: `/services/:id`, `/portfolio/:id`, `/blog/:id`, `/demo/{slug}`

**CRITICAL:** Multi-page demos MUST use wildcard routing in `App.jsx`:
```jsx
// Correct - supports nested routes like /demo/tech-zone/admin/products
<Route path="/demo/tech-zone/*" element={<TechZone />} />

// Wrong - nested routes will 404
<Route path="/demo/tech-zone" element={<TechZone />} />
```

Currently using wildcards: `sakura-milano`, `dragon-court`, `tech-zone`

### Demo Site Structure

Each demo in `/src/demos/{name}/`:
- `{Name}.jsx` - Main component with its own context providers and internal routing
- `{Name}.css` - Isolated styles with unique prefix (e.g., `.tz-` for TechZone)
- `components/` - Demo-specific components
- `pages/` - Demo page components
- `data/siteData.js` - Demo content and translations
- `context/` - Demo-specific contexts (cart, auth, etc.)

Notable demos:
- **dragon-court**: Multi-page restaurant with nested routing
- **tech-zone**: E-commerce with admin panel (`/demo/tech-zone/admin`, login: admin/admin123)
- **boba-tea**: Advanced UI effects (3D cards, parallax, animated counters)

### SEO

- `SEO.jsx` - Meta tags, Open Graph, Twitter cards via react-helmet-async
- `StructuredData.jsx` - JSON-LD schema markup component
- `schemas.js` - Structured data helpers: `organizationSchema`, `articleSchema`, `blogPostingSchema`, `localBusinessSchema`, `faqPageSchema`, `breadcrumbSchema`, etc.

Use `<StructuredData data={schema} />` or `<StructuredData data={[schema1, schema2]} />` for multiple schemas.

### Integrations

- **Forms:** Formspree (`VITE_FORMSPREE_ID`)
- **Booking:** Calendly (`VITE_CALENDLY_URL`)
- **Comments:** Giscus (GitHub Discussions)
- **PDF Export:** html2pdf.js via ExportPDF component

## Environment Variables

Copy `.env.example` to `.env`. Key variables:
- `VITE_SITE_URL` - Production site URL
- `VITE_FORMSPREE_ID` - Contact form backend
- `VITE_CALENDLY_URL` - Booking widget
- `VITE_GA_MEASUREMENT_ID` - Google Analytics 4

## Production Deployment

```bash
npm run build                     # Build production assets
pm2 restart tech-agency-portfolio # Restart PM2 service
pm2 logs tech-agency-portfolio    # View logs
```

PM2 config in `ecosystem.config.cjs`. Runs on port 5173.

## Troubleshooting

**Demo 404 on nested routes:** Add `/*` wildcard to the route path in `App.jsx`

**CSS conflicts between demos:** Each demo needs unique CSS prefix (check existing: `.dc-`, `.tz-`, `.bt-`, etc.)

**Language issues:** Data objects must have `{ zh, en, it }` structure for trilingual content

## Key Dependencies

React 19, Vite 7, React Router 7, i18next, react-helmet-async, react-hook-form + yup, html2pdf.js (dynamic import), vite-plugin-pwa, Lenis (smooth scroll).

## Image Alt Tags

All `<img>` tags must have descriptive `alt` attributes for SEO. For dynamic content, use language-aware alt text:
```jsx
alt={language === 'zh' ? '中文描述' : 'English description'}
```

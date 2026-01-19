# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build (auto-generates sitemap)
npm run lint         # ESLint checks
npm run preview      # Preview production build
npm run generate-sitemap  # Generate sitemap.xml manually (for dev)

# Testing
npm run test         # Run tests in watch mode (Vitest)
npm run test:run     # Run tests once
npm run test:coverage  # Run tests with coverage report
```

## Architecture Overview

This is a React 19 + Vite 7 portfolio/agency website targeting Italian Chinese businesses, with trilingual support (Italian/English/Chinese) and SEO optimization.

### Core Patterns

**Trilingual Content:** Main site content uses `{ zh: "...", en: "..." }` structure. Demo sites use `{ it: "...", en: "...", zh: "..." }` for Italian market. Pages use `useLanguage()` hook from `LanguageContext`.

**Theme System:** `ThemeContext` manages light/dark mode. Theme is persisted in localStorage and applied via `[data-theme='dark']` CSS attribute selector.

**Static Data Management:** All content lives in `/src/data/` files (services, portfolio, blog, testimonials, team). Each file exports both raw data arrays and helper functions like `getLatestPosts(limit)`, `getPortfolioById(id)`, `searchPosts(query)`.

**Demo Sites:** Self-contained client demos in `/src/demos/` (28 demos covering restaurants, professional services, retail, beauty, SaaS, education, healthcare). Each demo has isolated CSS with unique prefixes (e.g., `.sushi-`, `.zheng-`, `.dc-`) to prevent style conflicts. Demos render without main site layout (no Header/Footer).

**IMPORTANT: Multi-page demos** (like dragon-court) require wildcard routing: `/demo/dragon-court/*` in `App.jsx` to enable nested routes. Missing `/*` will break sub-page navigation.

### Directory Structure

```
src/
├── components/
│   ├── business/    # Domain: ServiceCard, PortfolioCard, BlogCard, Comments, ShareButtons, ExportPDF
│   ├── ui/          # Generic: Button, LazyImage, ThemeToggle, Newsletter, BookingWidget, ChatWidget, SearchInput
│   └── layout/      # Header, Footer
├── context/         # ThemeContext, LanguageContext
├── data/            # Static content (services, portfolio, blog, testimonials, stats, team)
├── demos/           # Client demo sites (self-contained with own CSS/data)
├── hooks/           # useScrollAnimation
├── locales/         # i18n translations (zh/en/it common.json)
├── pages/           # Route components (Home, Services, Portfolio, Blog, About, Contact, etc.)
├── utils/           # schemas.js (SEO structured data), analytics.js
└── assets/styles/   # CSS design system (variables.css, animations.css)
```

### Key Components

**LazyImage:** Image component with WebP support, loading states, and error handling. Uses `<picture>` element for format fallback.

**BookingWidget:** Calendly integration with 3 modes (button, inline, modal). Configure via `VITE_CALENDLY_URL`.

**Comments:** Giscus-based commenting system using GitHub Discussions. Theme syncs with site dark/light mode.

**ExportPDF:** Client-side PDF export using html2pdf.js. Pass a `contentRef` to export any content.

**ShareButtons:** Social sharing for Twitter, LinkedIn, Facebook, WeChat with copy-to-clipboard support.

### SEO & Structured Data

- `SEO.jsx` - Meta tags, Open Graph, Twitter Cards via react-helmet-async
- `StructuredData.jsx` - Supports single schema or array of schemas
- `schemas.js` exports:
  - `organizationSchema(language)`
  - `breadcrumbSchema(items)`
  - `portfolioSchema(portfolio, language)`
  - `articleSchema(post, language)`
  - `serviceSchema(language)`
  - `faqPageSchema(faqs, language)`
  - `localBusinessSchema(language, options)`
  - `individualServiceSchema(service, language)`
  - `webSiteSchema(language)`
  - `teamMemberSchema(member, language)`

### Routing

React Router 7 with dynamic routes:
- `/services/:id` - Service detail pages
- `/portfolio/:id` - Portfolio detail pages (includes PDF export, ShareButtons)
- `/blog/:id` - Blog post pages (includes Comments, ShareButtons)
- `/demo/{slug}` - Client demo sites (rendered without main layout)

**CRITICAL:** Multi-page demos MUST use wildcard routing pattern: `/demo/{slug}/*` in `App.jsx`. Without `/*`, nested routes (e.g., `/demo/dragon-court/about`) will 404. All demo routes in `App.jsx` should include `/*` to enable proper nested routing.

### Demo Site Structure

Each demo in `/src/demos/{name}/` typically contains:
- `{Name}.jsx` - Main component with context providers
- `{Name}.css` - Isolated styles with unique prefix (e.g., `.dc-` for dragon-court)
- `components/` - Demo-specific components (Header, Footer, etc.)
- `pages/` - Demo page components (for multi-page demos)
- `data/siteData.js` - Demo content and configuration
- `hooks/` - Demo-specific hooks (optional, for animations/effects)

Multi-page demos (e.g., dragon-court) use React Router nested routes and their own language context.

**Animation Hooks Available:**
- `useScrollAnimation(threshold)` - Triggers `.dc-visible` class when elements enter viewport
- `useParallax(speed)` - Scroll-based parallax movement
- `useMouseParallax(intensity)` - Mouse-follow parallax effect

**Advanced UI Patterns in Demos:**
- **3D Flip Cards**: Use perspective and backface-visibility for card flip animations
- **Scroll-triggered Counters**: IntersectionObserver + requestAnimationFrame for number animations
- **Particle Backgrounds**: Fixed positioned elements with keyframe animations
- **Floating Action Menus**: Fixed positioning with transform animations for expand/collapse
- **Timeline Components**: Alternating left/right layout with center line and connecting arrows

### Data File Helpers

```javascript
// portfolio.js - categories: restaurant, fashion, trade, beauty, professional, app, miniprogram, saas, education, healthcare
getPortfolioById(id)
getPortfolioByCategory(category)

// blog.js
getLatestPosts(limit)
getPostsByCategory(category)
getPostBySlug(slug)
searchPosts(query)  // searches title, excerpt, tags, category
```

### Site Configuration

`/src/config/site.js` contains site-wide settings. Override via environment variables:
- `VITE_SITE_URL` - Site URL for SEO
- `VITE_CONTACT_EMAIL`, `VITE_CONTACT_PHONE`
- `VITE_SOCIAL_GITHUB`, `VITE_SOCIAL_WECHAT`
- `VITE_FORMSPREE_ID` - Contact form endpoint
- `VITE_CALENDLY_URL` - Booking widget URL
- `VITE_GA_MEASUREMENT_ID` - Google Analytics

### Forms & Integrations

- **Contact Form:** Submits to Formspree (`/src/pages/Contact/Contact.jsx`)
- **Newsletter:** Formspree integration in Footer
- **Booking:** Calendly iframe embed
- **Comments:** Giscus with GitHub repo `zhy844694805/tech-agency-portfolio`

### Code Splitting

Pages and demos are lazy-loaded using `React.lazy()` in `App.jsx`. Build chunks:
- `vendor` - React, React DOM, React Router
- `i18n` - i18next libraries
- `forms` - react-hook-form, yup
- `html2pdf` - PDF export (dynamically imported)

### Build Output

Sitemap is auto-generated in `postbuild` script. Output includes:
- Static pages, portfolio pages, blog pages
- `robots.txt` with sitemap reference
- PWA service worker via vite-plugin-pwa

## Production Deployment

This site uses PM2 for production process management:

```bash
pm2 list                          # View running processes
pm2 restart tech-agency-portfolio # Restart after code changes
pm2 logs tech-agency-portfolio    # View logs
pm2 logs tech-agency-portfolio --lines 100  # View last 100 lines
```

**Typical deployment workflow:**
```bash
npm run build                     # Build production assets
pm2 restart tech-agency-portfolio # Restart PM2 service
```

PM2 configuration is in `ecosystem.config.cjs`. The site runs on port 5173 via `npm run preview`. Logs are written to `/home/claude/.pm2/logs/`.

## Troubleshooting Common Issues

**Demo sub-pages returning 404:**
- Check `/demo/{slug}/*` route in `App.jsx` includes the `/*` wildcard
- Verify demo component uses `<Routes>` with nested `<Route>` paths without leading slash

**Language switcher not working:**
- Verify `LanguageProvider` wraps `App`
- Check `useDCLanguage()` hook is used within demo's context provider
- Data objects must have `{ zh: '...', en: '...', it: '...' }` structure

**CSS conflicts between demos:**
- Ensure each demo uses unique CSS prefix (e.g., `.dc-`, `.sushi-`, `.zheng-`)
- Check for global styles bleeding into demo components
- Demo routes should be `isDemo` check which excludes main layout

**Build failures:**
- Large PDF export bundle (1MB+) is expected - dynamically imported
- Run `npm run optimize-images` if image issues occur
- Check Vite bundle analyzer at `dist/stats.html` after build

**Animation hooks not working:**
- Ensure `useScrollAnimation()` is called in component
- Verify elements have `.dc-animate-on-scroll` class
- Check threshold value (0.1-0.2 works best)

## Key Dependencies

- React 19, Vite 7, React Router 7
- i18next + react-i18next for translations
- react-helmet-async for SEO
- react-hook-form + yup for forms
- html2pdf.js for PDF export
- vite-plugin-pwa for offline support
- No TypeScript, no CSS framework (pure CSS with design tokens)

## Demo Site Examples

The repository contains 28 fully functional demo sites. Notable examples:

**dragon-court (龙庭)**: Multi-page Chinese restaurant with nested routing, visual enhancement system, image galleries, and reservation system.

**boba-tea**: Bubble tea shop with advanced UI effects including:
- 3D flip product cards with front/back content
- Animated particle background (floating bubbles)
- Scroll-triggered achievement counters
- Interactive lucky wheel with prize system
- Brand story timeline with alternating layout
- Floating action menu
- Mouse parallax effects on hero section

**bubble-vibe**: Modern bubble tea cafe with minimalist design, season specials, and interactive ordering.

All demos follow the same pattern: self-contained components, isolated CSS with unique prefixes, trilingual support, and responsive design.

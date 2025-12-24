# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build
npm run lint         # ESLint checks
npm run preview      # Preview production build
npm run generate-sitemap  # Generate sitemap.xml for SEO (run after adding portfolio/blog items)
```

## Architecture Overview

This is a React 19 + Vite 7 portfolio/agency website targeting Italian Chinese businesses, with trilingual support (Italian/English/Chinese) and SEO optimization.

### Core Patterns

**Trilingual Content:** Main site content uses `{ zh: "...", en: "..." }` structure. Demo sites use `{ it: "...", en: "...", zh: "..." }` for Italian market. Pages use `useLanguage()` hook from `LanguageContext`.

**Theme System:** `ThemeContext` manages light/dark mode. Theme is persisted in localStorage and applied via `[data-theme='dark']` CSS attribute selector.

**Static Data Management:** All content lives in `/src/data/` files (services, portfolio, blog, testimonials). Each file exports both raw data arrays and helper functions like `getLatestPosts(limit)`, `getPortfolioById(id)`.

**Demo Sites:** Self-contained client demos in `/src/demos/`. Each demo has isolated CSS (prefixed classes like `.sushi-`, `.prato-`, `.hungry-`) to prevent style conflicts with main site. Demos render without main site layout (no Header/Footer).

### Directory Structure

```
src/
├── components/
│   ├── business/    # Domain-specific: ServiceCard, PortfolioCard, BlogCard, TestimonialCard
│   ├── ui/          # Generic: Button, LazyImage, ThemeToggle, ScrollToTop
│   └── layout/      # Header, Footer
├── context/         # ThemeContext, LanguageContext
├── data/            # Static content (services, portfolio, blog, testimonials, stats)
├── demos/           # Client demo sites (self-contained with own CSS/data)
│   ├── sakura-milano/   # Multi-page restaurant demo
│   ├── prato-fashion/   # Single-page fashion brand
│   ├── hungry-dragon/   # Interactive food delivery app
│   └── ...              # Each has: Component.jsx, Component.css, data/
├── hooks/           # useScrollAnimation
├── locales/         # i18n translations (zh/en common.json)
├── pages/           # Route components (Home, Services, Portfolio, Blog, About, etc.)
└── assets/styles/   # CSS design system (variables.css, animations.css)
```

### Demo Architecture

Demos are accessed via `/demo/{slug}` routes and bypass main site layout:
- **Interactive Web Apps:** Mobile-first designs with full functionality (cart, forms, navigation)
- **Showcase Pages:** Device frame mockups displaying app screenshots
- Each demo manages its own language state independently
- Portfolio entries link to demos via `demoUrl` field

### SEO Components

- `SEO.jsx` - Meta tags, Open Graph, Twitter Cards via react-helmet-async
- `StructuredData.jsx` - JSON-LD schemas (Organization, Service, Breadcrumb)
- `Analytics.jsx` - GA4 integration, production-only

### Routing

React Router 7 with dynamic routes:
- `/services/:id` - Service detail pages
- `/portfolio/:id` - Portfolio detail pages
- `/blog/:id` - Blog post pages
- `/demo/{slug}` - Client demo sites (rendered without main layout)
- Catch-all redirects to 404

### Data File Helpers

```javascript
// services.js
getServiceById(id)

// portfolio.js - categories: restaurant, fashion, trade, beauty, app, miniprogram
getPortfolioById(id)
getPortfolioByCategory(category)

// blog.js
getLatestPosts(limit)
getPostsByCategory(category)
getPostBySlug(slug)
```

### Site Configuration

`/src/config/site.js` contains site-wide settings (URL, contact email, social links). Values can be overridden via environment variables (`VITE_SITE_URL`, `VITE_CONTACT_EMAIL`, etc.).

### Contact Form

Contact form submits to Formspree (`/src/pages/Contact/Contact.jsx`). Update the Formspree endpoint URL when changing the form destination.

### Code Splitting

Pages and demos are lazy-loaded using `React.lazy()` in `App.jsx`. Build output is split into chunks:
- `vendor` - React, React DOM, React Router
- `i18n` - i18next libraries
- `forms` - react-hook-form, yup

### PWA Support

Site is configured as a Progressive Web App via `vite-plugin-pwa`:
- Offline access with service worker caching
- Installable on mobile/desktop
- Manifest at `/manifest.webmanifest`

## Key Dependencies

- React 19, Vite 7, React Router 7
- i18next + react-i18next for translations
- react-helmet-async for SEO
- react-hook-form + yup for forms
- vite-plugin-pwa for offline support
- No TypeScript, no CSS framework (pure CSS with design tokens)

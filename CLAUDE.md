# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start Vite dev server with HMR
npm run build        # Production build (auto-generates sitemap)
npm run lint         # ESLint checks
npm run preview      # Preview production build
npm run generate-sitemap  # Generate sitemap.xml manually (for dev)
```

## Architecture Overview

This is a React 19 + Vite 7 portfolio/agency website targeting Italian Chinese businesses, with trilingual support (Italian/English/Chinese) and SEO optimization.

### Core Patterns

**Trilingual Content:** Main site content uses `{ zh: "...", en: "..." }` structure. Demo sites use `{ it: "...", en: "...", zh: "..." }` for Italian market. Pages use `useLanguage()` hook from `LanguageContext`.

**Theme System:** `ThemeContext` manages light/dark mode. Theme is persisted in localStorage and applied via `[data-theme='dark']` CSS attribute selector.

**Static Data Management:** All content lives in `/src/data/` files (services, portfolio, blog, testimonials, team). Each file exports both raw data arrays and helper functions like `getLatestPosts(limit)`, `getPortfolioById(id)`, `searchPosts(query)`.

**Demo Sites:** Self-contained client demos in `/src/demos/` (25 demos covering restaurants, professional services, retail, beauty, SaaS, education, healthcare). Each demo has isolated CSS with unique prefixes (e.g., `.sushi-`, `.zheng-`, `.cloudtask-`) to prevent style conflicts. Demos render without main site layout (no Header/Footer).

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

## Key Dependencies

- React 19, Vite 7, React Router 7
- i18next + react-i18next for translations
- react-helmet-async for SEO
- react-hook-form + yup for forms
- html2pdf.js for PDF export
- vite-plugin-pwa for offline support
- No TypeScript, no CSS framework (pure CSS with design tokens)

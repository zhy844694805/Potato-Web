# GEMINI.md - Context & Instructions

This file documents the `tech-agency-portfolio` project for AI agents. Use this context to understand the architecture, conventions, and operational procedures.

## Project Overview

**Potato Web (土豆建站)** is a modern React portfolio website for a tech agency targeting Italian Chinese businesses. It features trilingual support (Italian/English/Chinese), a showcase of 25+ demo sites, and comprehensive SEO optimization.

**Key Characteristics:**
*   **Framework:** React 19 + Vite 7 + React Router 7.
*   **Styling:** Pure CSS with a "Tech-Brutalism" aesthetic. No CSS frameworks (Tailwind/Bootstrap).
*   **Localization:** Fully trilingual (zh/en/it) using `i18next`.
*   **Architecture:** A main agency site hosting multiple self-contained "Demo Sites" under `/demo/{slug}`.
*   **Performance:** PWA support, Gzip/Brotli compression, manual chunk splitting.

## Architecture

### Directory Structure
```
src/
├── components/      # Main site components
│   ├── business/    # Domain-specific (ServiceCard, BlogCard)
│   ├── ui/          # Generic UI (Button, Toast, ThemeToggle)
│   └── layout/      # Header, Footer
├── context/         # React Contexts (Language, Theme)
├── data/            # Static content (services, blog, portfolio)
├── demos/           # 25+ SELF-CONTAINED Demo Sites
│   ├── {demo-name}/ # Each demo has its own components, CSS, and context
│   │   ├── components/
│   │   ├── pages/
│   │   ├── {DemoName}.jsx  # Entry point
│   │   └── {DemoName}.css  # Isolated styles with unique prefix
├── hooks/           # Custom hooks (useScrollAnimation, useLanguageText)
├── locales/         # i18n resources
├── pages/           # Main site pages (Home, Contact, etc.)
└── utils/           # Helpers (analytics, schemas)
```

### The "Demo Site" Pattern
This project uses a unique pattern where "Demo Sites" (showcase projects) are embedded directly within the repo but function as mini-apps.
*   **Location:** `src/demos/{demo-name}/`
*   **Routing:** Main `App.jsx` handles routing. **Crucial:** Nested routes in demos must use wildcard paths in `App.jsx` (e.g., `<Route path="/demo/tech-zone/*" element={<TechZone />} />`).
*   **Isolation:** Demos do *not* use the main site's Header/Footer.
*   **Styles:** Each demo must use a unique CSS class prefix (e.g., `.dc-` for Dragon Court, `.tz-` for Tech Zone) to prevent style leakage.

## Development & Operations

### Key Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server (HMR enabled). |
| `npm run build` | Full production build (includes image opt & sitemap). |
| `npm run preview` | Preview the production build locally. |
| `npm run test` | Run Vitest suite. |
| `npm run optimize-images` | Manually run image optimization script. |

### Environment Variables
See `.env.example`. Key variables include:
*   `VITE_SITE_URL`: Production URL (e.g., `https://aimodel.it`)
*   `VITE_FORMSPREE_ID`: Contact form backend.
*   `VITE_CALENDLY_URL`: Booking widget integration.

## Coding Conventions

### Styling (Tech-Brutalism)
*   **Variables:** Use CSS variables defined in `src/assets/styles/variables.css`.
*   **Aesthetic:** Sharp edges (`border-radius: 0`), high contrast (Black/White/Acid Green), terminal-style fonts (`var(--font-mono)`).
*   **No Frameworks:** Do not install Tailwind or Bootstrap. Write semantic CSS.

### Localization (i18n)
*   **Structure:** Content objects usually follow `{ zh: "...", en: "...", it: "..." }`.
*   **Usage:** Use the `useLanguage()` hook to get the current language and helper functions.

### Routing
*   **Router:** React Router 7.
*   **Navigation:** Use standard `<Link>` components.
*   **Scroll Restoration:** Handled globally to reset scroll on route change.

## Deployment
*   **Server:** Node.js/PM2.
*   **Process:** `npm run build` -> `pm2 restart tech-agency-portfolio`.
*   **Config:** `ecosystem.config.cjs`.

## Known Issues / Gotchas
*   **Demo 404s:** If a demo page returns 404 on refresh, ensure the wildcard `/*` is present in the main route definition.
*   **Style Conflicts:** Always verify that demo site styles are strictly scoped with their unique prefix.

# Tech Agency Portfolio

A modern React portfolio website for a tech agency targeting Italian Chinese businesses, featuring trilingual support (Italian/English/Chinese), 25 demo sites, and comprehensive SEO optimization.

## Features

- **Trilingual Support**: Full i18n support for Chinese, English, and Italian
- **25+ Demo Sites**: Showcase websites for various industries (restaurants, beauty, professional services, retail, SaaS, etc.)
- **SEO Optimized**: Structured data, meta tags, sitemap generation, and more
- **PWA Ready**: Offline support with service worker
- **Modern Stack**: React 19, Vite 7, React Router 7
- **Dark Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with CSS custom properties

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## Project Structure

```
src/
├── components/
│   ├── business/    # Domain: ServiceCard, PortfolioCard, BlogCard, etc.
│   ├── ui/          # Generic: Button, LazyImage, Toast, etc.
│   └── layout/      # Header, Footer
├── context/         # ThemeContext, LanguageContext
├── data/            # Static content (services, portfolio, blog, team, demos)
├── demos/           # 25 client demo sites (self-contained)
├── hooks/           # Custom hooks (useScrollAnimation, useLanguageText)
├── locales/         # i18n translations (zh/en/it)
├── pages/           # Route components
└── utils/           # Utilities (schemas.js, analytics.js)
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Description |
|----------|-------------|
| `VITE_SITE_URL` | Production site URL |
| `VITE_CONTACT_EMAIL` | Contact email address |
| `VITE_CONTACT_PHONE` | Contact phone number |
| `VITE_FORMSPREE_ID` | Formspree form ID for contact form |
| `VITE_CALENDLY_URL` | Calendly URL for booking widget |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |
| `VITE_SOCIAL_WECHAT` | WeChat ID |

See `.env.example` for full list.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (includes image optimization and sitemap) |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests with Vitest |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run optimize-images` | Convert images to WebP format |

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/services` | Services listing |
| `/portfolio` | Portfolio/capabilities showcase |
| `/blog` | Blog with search and filtering |
| `/demos` | Demo sites gallery |
| `/team` | Team members page |
| `/quote` | Project quote calculator |
| `/contact` | Contact form |

## Demo Sites

25 demo sites are available at `/demo/{slug}`:

- **Restaurants**: sakura-milano, sushi-moto, koku-sushi, golden-koi, mama-chen, etc.
- **Beauty**: jade-spa, beauty-book, milan-hair
- **Professional**: zheng-law, euro-tax, dragon-design
- **Retail**: prato-fashion, dragon-trade, china-mart
- **SaaS**: cloud-task
- **Education**: milan-drive, lingo-bridge
- **Healthcare**: vita-care, yikang-tcm
- **Travel**: dragon-travel

## Tech Stack

- **Frontend**: React 19, Vite 7
- **Routing**: React Router 7
- **i18n**: i18next, react-i18next
- **Forms**: react-hook-form, yup
- **SEO**: react-helmet-async, structured data
- **Testing**: Vitest, @testing-library/react
- **PWA**: vite-plugin-pwa
- **PDF Export**: html2pdf.js (dynamically imported)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment and third-party integration instructions.

## License

MIT

# Deployment & Integration Guide

This guide covers all third-party integrations and environment configuration needed for deployment.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# ===========================================
# SITE CONFIGURATION
# ===========================================

# Site URL (used for SEO, sitemap, and canonical URLs)
VITE_SITE_URL=https://your-domain.com

# Site Name (optional, defaults to "AI Model")
VITE_SITE_NAME=Your Company Name

# ===========================================
# CONTACT INFORMATION
# ===========================================

# Primary contact email
VITE_CONTACT_EMAIL=info@your-domain.com

# Contact phone number
VITE_CONTACT_PHONE=+39 123 456 7890

# ===========================================
# SOCIAL MEDIA
# ===========================================

# GitHub profile URL (optional)
VITE_SOCIAL_GITHUB=https://github.com/your-username

# WeChat ID for contact
VITE_SOCIAL_WECHAT=YourWeChatID

# ===========================================
# THIRD-PARTY INTEGRATIONS
# ===========================================

# Formspree - Contact Form
# Get your ID at: https://formspree.io/
VITE_FORMSPREE_ID=your-formspree-id

# Calendly - Booking Widget
# Get your URL at: https://calendly.com/
VITE_CALENDLY_URL=https://calendly.com/your-username

# Google Analytics 4
# Get your ID at: https://analytics.google.com/
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Integration Setup Instructions

### 1. Formspree (Contact Form)

**Purpose:** Handles contact form submissions without a backend server.

**Setup Steps:**
1. Go to [formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy the form ID (e.g., `xeejgvrn`)
5. Add to `.env`: `VITE_FORMSPREE_ID=your-form-id`

**Features:**
- Email notifications for new submissions
- Spam protection
- File attachments (paid plans)
- Integration with Slack, Notion, etc.

**File:** `src/pages/Contact/Contact.jsx`

---

### 2. Calendly (Booking Widget)

**Purpose:** Allows clients to book consultations directly.

**Setup Steps:**
1. Go to [calendly.com](https://calendly.com/)
2. Sign up and create an event type (e.g., "30-min consultation")
3. Copy your scheduling link
4. Add to `.env`: `VITE_CALENDLY_URL=https://calendly.com/your-username/30min`

**Features:**
- Calendar sync (Google, Outlook, iCal)
- Timezone detection
- Automatic reminders
- Team scheduling (paid plans)

**File:** `src/components/ui/BookingWidget/BookingWidget.jsx`

**Modes:**
- `button` - Opens Calendly in a popup
- `inline` - Embeds calendar inline
- `modal` - Opens Calendly in a modal

---

### 3. Google Analytics 4 (GA4)

**Purpose:** Track website traffic and user behavior.

**Setup Steps:**
1. Go to [analytics.google.com](https://analytics.google.com/)
2. Create a new GA4 property
3. Get the Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env`: `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
5. Add the GA4 script to `index.html`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Available Tracking Functions:**
```javascript
import {
  trackEvent,
  trackButtonClick,
  trackPortfolioView,
  trackServiceView,
  trackLanguageSwitch,
  trackOutboundLink
} from '@/utils/analytics'

// Custom event
trackEvent('form_submit', { form_name: 'contact' })

// Button click
trackButtonClick('CTA Button', 'Hero Section')

// Portfolio view
trackPortfolioView('sakura-milano', 'Sakura Milano Restaurant')

// Language switch
trackLanguageSwitch('zh', 'en')
```

**File:** `src/utils/analytics.js`

---

### 4. Giscus (Comments System)

**Purpose:** GitHub-based comments using GitHub Discussions.

**Setup Steps:**
1. Enable GitHub Discussions on your repository
2. Go to [giscus.app](https://giscus.app/)
3. Enter your repository name
4. Choose category mapping
5. Copy the configuration

**Current Configuration:**
```javascript
// src/components/business/Comments/Comments.jsx
repo: 'zhy844694805/tech-agency-portfolio'
repoId: 'R_kgDOOwxn9A'
category: 'General'
categoryId: 'DIC_kwDOOwxn9M4Cmc7h'
```

**To update:**
1. Replace `repo` with your GitHub repository
2. Get new `repoId` and `categoryId` from giscus.app
3. Update `src/components/business/Comments/Comments.jsx`

**Features:**
- GitHub authentication
- Markdown support
- Reactions
- Dark/light theme sync

---

### 5. PWA (Progressive Web App)

**Purpose:** Enables offline access and app-like experience.

**Configuration:** Already configured in `vite.config.js`

**Features:**
- Service Worker caching
- Offline support
- Install prompt on mobile
- Google Fonts caching (1 year)
- Image caching (30 days)

**To customize:**
- Update `vite.config.js` PWA configuration
- Modify `manifest.json` for app icons and name

---

## Deployment Checklist

### Before Deployment

- [ ] Create `.env` file with all required variables
- [ ] Configure Formspree form ID
- [ ] Set up Calendly scheduling link
- [ ] Create GA4 property and add Measurement ID
- [ ] Update Giscus configuration with your repository
- [ ] Add GA4 script to `index.html`
- [ ] Replace placeholder images with real project screenshots
- [ ] Update `robots.txt` with production URL
- [ ] Verify sitemap generation works

### Build & Deploy

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

### Post-Deployment

- [ ] Verify contact form submissions work
- [ ] Test Calendly booking integration
- [ ] Confirm GA4 is receiving data
- [ ] Check comments system is functional
- [ ] Test PWA installation on mobile
- [ ] Verify sitemap.xml is accessible
- [ ] Submit sitemap to Google Search Console

---

## Hosting Recommendations

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
- Automatic HTTPS
- Automatic deploys from Git
- Edge network CDN
- Free tier available

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```
- Form handling (alternative to Formspree)
- Automatic HTTPS
- Free tier available

### GitHub Pages
```bash
npm run build
# Deploy dist folder
```
- Free hosting
- Custom domain support
- Requires manual deployment

---

## Troubleshooting

### Formspree not receiving submissions
- Check form ID in `.env`
- Verify email in Formspree dashboard
- Check spam folder

### Calendly widget not loading
- Verify URL format is correct
- Check for CORS issues
- Try different embed mode

### GA4 not tracking
- Verify Measurement ID
- Check if gtag script is in index.html
- Disable ad blockers for testing
- Check browser console for errors

### Comments not loading
- Verify GitHub Discussions is enabled
- Check repository is public
- Update giscus configuration

### PWA not installing
- Check HTTPS is enabled
- Verify manifest.json is valid
- Check service worker registration

---

## Environment-Specific Configuration

### Development
```bash
VITE_SITE_URL=http://localhost:5173
```
Analytics is automatically disabled in development.

### Staging
```bash
VITE_SITE_URL=https://staging.your-domain.com
VITE_GA_MEASUREMENT_ID=G-STAGING-ID
```

### Production
```bash
VITE_SITE_URL=https://your-domain.com
VITE_GA_MEASUREMENT_ID=G-PRODUCTION-ID
```

---

## Security Notes

- Never commit `.env` files to version control
- Add `.env` to `.gitignore`
- Use environment variables in CI/CD
- Rotate API keys periodically
- Monitor Formspree for spam

# Google Analytics 4 Setup Guide

## Overview

Google Analytics 4 (GA4) has been integrated into the website to track user behavior, page views, and custom events. This guide explains how to set up and use the analytics system.

## Setup Instructions

### 1. Get Your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property (or use an existing one)
3. Navigate to **Admin** → **Data Streams**
4. Select your web data stream
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure the Measurement ID

Open `/src/components/Analytics.jsx` and replace the placeholder with your actual Measurement ID:

```javascript
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-ABC123XYZ' // Example
```

### 3. Environment-Based Tracking

Analytics is **automatically disabled** in development mode and **enabled** in production builds.

- **Development** (`npm run dev`): Analytics disabled, events logged to console
- **Production** (`npm run build`): Analytics enabled with real tracking

You can verify this behavior in the code:

```javascript
const ENABLE_ANALYTICS = import.meta.env.PROD
```

## Features

### Automatic Page View Tracking

The Analytics component automatically tracks page views whenever the route changes:

- Page path
- Page location (full URL)
- Page title

No additional code is needed - it works out of the box!

### Custom Event Tracking

Several helper functions are available for tracking custom events:

#### 1. Track Button Clicks

```javascript
import { trackButtonClick } from './components/Analytics'

<Button onClick={() => trackButtonClick('Start Project', 'Hero Section')}>
  Start Project
</Button>
```

#### 2. Track Portfolio Views

```javascript
import { trackPortfolioView } from './components/Analytics'

// In PortfolioDetail.jsx
useEffect(() => {
  if (portfolio) {
    trackPortfolioView(portfolio.id, portfolio.title.en)
  }
}, [portfolio])
```

#### 3. Track Service Views

```javascript
import { trackServiceView } from './components/Analytics'

trackServiceView('web-development', 'Web Development')
```

#### 4. Track Language Switches

```javascript
import { trackLanguageSwitch } from './components/Analytics'

const toggleLanguage = () => {
  const newLang = language === 'zh' ? 'en' : 'zh'
  trackLanguageSwitch(language, newLang)
  // ... rest of language switch logic
}
```

#### 5. Track Outbound Links

```javascript
import { trackOutboundLink } from './components/Analytics'

<a
  href="https://github.com/minimaltech"
  onClick={() => trackOutboundLink('https://github.com/minimaltech', 'GitHub Profile')}
>
  Visit GitHub
</a>
```

#### 6. Track Custom Events

```javascript
import { trackEvent } from './components/Analytics'

trackEvent('custom_event_name', {
  custom_param_1: 'value1',
  custom_param_2: 'value2',
  // ... more parameters
})
```

## Usage Examples

### Example 1: Track CTA Button Clicks

```javascript
// In Home.jsx or any component
import { trackButtonClick } from '../components/Analytics'

<Button
  variant="primary"
  onClick={() => trackButtonClick('View Portfolio', 'Home Hero')}
>
  {t('button.viewCase')}
</Button>
```

### Example 2: Track Portfolio Detail Views

```javascript
// In PortfolioDetail.jsx
import { useEffect } from 'react'
import { trackPortfolioView } from '../../components/Analytics'

function PortfolioDetail() {
  const { id } = useParams()
  const portfolio = getPortfolioById(id)

  useEffect(() => {
    if (portfolio) {
      trackPortfolioView(
        portfolio.id,
        portfolio.title[language]
      )
    }
  }, [portfolio, language])

  // ... rest of component
}
```

### Example 3: Enhanced Language Switcher

```javascript
// In LanguageContext.jsx or LanguageSwitcher component
import { trackLanguageSwitch } from '../components/Analytics'

const toggleLanguage = () => {
  const oldLang = language
  const newLang = language === 'zh' ? 'en' : 'zh'

  trackLanguageSwitch(oldLang, newLang)

  i18n.changeLanguage(newLang)
  setLanguage(newLang)
  localStorage.setItem('language', newLang)
}
```

## Event Tracking Best Practices

### 1. Event Naming Convention

Use lowercase with underscores:
- ✅ Good: `button_click`, `portfolio_view`, `form_submit`
- ❌ Bad: `ButtonClick`, `portfolio-view`, `Form Submit`

### 2. Event Parameters

Keep parameters descriptive and consistent:

```javascript
trackEvent('cta_click', {
  button_text: 'Start Project',
  button_location: 'services_page_bottom',
  user_language: language
})
```

### 3. Meaningful Event Categories

Group related events for easier analysis:

- **Engagement Events**: `button_click`, `scroll_depth`, `time_on_page`
- **Navigation Events**: `page_view`, `external_link_click`, `menu_click`
- **Conversion Events**: `form_submit`, `contact_request`, `quote_request`
- **Content Events**: `portfolio_view`, `service_view`, `case_study_download`

## Viewing Your Analytics Data

### Google Analytics Dashboard

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to **Reports** to view data:
   - **Realtime**: See current active users
   - **Acquisition**: How users find your site
   - **Engagement**: Page views, events, user behavior
   - **Demographics**: User location, language, device

### Useful Reports

- **Pages and screens**: See most visited pages
- **Events**: View all tracked events
- **Conversions**: Track goal completions
- **User attributes**: Analyze by language, device, location

## Debugging Analytics

### Check if Analytics is Working

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Filter by `google-analytics` or `gtag`
4. Navigate between pages
5. Look for requests to `https://www.google-analytics.com/g/collect`

### Development Mode

In development, events are logged to the console instead of being sent to GA:

```
Console output:
Analytics event: button_click { button_name: 'View Portfolio', button_location: 'Hero' }
```

### GA4 DebugView

Enable debug mode for detailed event tracking:

1. Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger) Chrome extension
2. Enable the extension
3. Reload your site
4. View events in GA4 → **Configure** → **DebugView**

## Privacy and Compliance

### GDPR Compliance

If your site targets EU users, consider:

1. **Cookie Consent**: Add a cookie banner before loading GA
2. **Anonymize IP**: GA4 anonymizes IPs by default
3. **Data Retention**: Configure in GA4 Admin settings
4. **Privacy Policy**: Update your privacy policy to mention analytics

### Optional: Cookie Consent Integration

```javascript
// Example with a hypothetical cookie consent library
import { getCookieConsent } from './utils/cookieConsent'

const ENABLE_ANALYTICS = import.meta.env.PROD && getCookieConsent('analytics')
```

## Performance Impact

- **Script Size**: ~50KB (loaded asynchronously)
- **Loading**: Non-blocking, doesn't affect page load time
- **Network**: Minimal bandwidth usage
- **User Experience**: Zero impact on site performance

## Troubleshooting

### Analytics Not Loading

**Check:**
1. Measurement ID is correct in `Analytics.jsx`
2. Running in production build (`npm run build` + `npm run preview`)
3. No ad blockers preventing GA scripts
4. Browser console for errors

### Events Not Appearing

**Check:**
1. Wait 24-48 hours for data to appear in reports
2. Use **Realtime** report for immediate feedback
3. Verify event names follow GA4 conventions
4. Check DebugView for event validation

### Double Counting

**Possible causes:**
- Analytics component mounted twice (check React.StrictMode)
- Multiple instances of gtag script loading
- Page refreshes triggering duplicate events

## Next Steps

1. ✅ Replace placeholder Measurement ID with your actual ID
2. ✅ Deploy to production
3. ✅ Verify tracking in GA4 Realtime reports
4. ✅ Set up conversion events in GA4
5. ✅ Create custom reports and dashboards
6. ✅ Add event tracking to key user interactions
7. ✅ Monitor analytics weekly/monthly
8. ✅ Optimize based on user behavior insights

## Resources

- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [Analytics Academy](https://analytics.google.com/analytics/academy/)
- [GA4 Migration Guide](https://support.google.com/analytics/answer/9744165)

## Summary

✅ GA4 component created (`/src/components/Analytics.jsx`)
✅ Integrated into App.jsx
✅ Auto page view tracking enabled
✅ Custom event helpers available
✅ Development/production environment handling
✅ Ready to use after adding Measurement ID

The analytics system is fully set up and ready to track user behavior once you add your GA4 Measurement ID!

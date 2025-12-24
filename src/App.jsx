import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import ScrollToTop from './components/ui/ScrollToTop'
import ContactDrawer from './components/ui/ContactDrawer'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home/Home'))
const Services = lazy(() => import('./pages/Services/Services'))
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'))
const PortfolioDetail = lazy(() => import('./pages/Portfolio/PortfolioDetail'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const BlogDetail = lazy(() => import('./pages/Blog/BlogDetail'))
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const FAQ = lazy(() => import('./pages/FAQ/FAQ'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

// Lazy load demo sites
const SakuraMilano = lazy(() => import('./demos/sakura-milano/SakuraMilano'))
const PratoFashion = lazy(() => import('./demos/prato-fashion/PratoFashion'))
const DragonTrade = lazy(() => import('./demos/dragon-trade/DragonTrade'))
const JadeSpa = lazy(() => import('./demos/jade-spa/JadeSpa'))
const HungryDragon = lazy(() => import('./demos/hungry-dragon/HungryDragon'))
const BeautyBook = lazy(() => import('./demos/beauty-book/BeautyBook'))
const ChinaMart = lazy(() => import('./demos/china-mart/ChinaMart'))
const DragonShip = lazy(() => import('./demos/dragon-ship/DragonShip'))

// Loading fallback component
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-spinner"></div>
    </div>
  )
}

function AppContent() {
  const { language } = useLanguage()
  const location = useLocation()

  // Check if we're on a demo page (render without main site layout)
  const isDemo = location.pathname.startsWith('/demo/')

  if (isDemo) {
    return (
      <ErrorBoundary language={language}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/demo/sakura-milano/*" element={<SakuraMilano />} />
            <Route path="/demo/prato-fashion" element={<PratoFashion />} />
            <Route path="/demo/dragon-trade" element={<DragonTrade />} />
            <Route path="/demo/jade-spa" element={<JadeSpa />} />
            <Route path="/demo/hungry-dragon" element={<HungryDragon />} />
            <Route path="/demo/beauty-book" element={<BeautyBook />} />
            <Route path="/demo/china-mart" element={<ChinaMart />} />
            <Route path="/demo/dragon-ship" element={<DragonShip />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary language={language}>
      <Analytics />
      <ScrollToTop />
      <div className="app">
        <Header />
        <main id="main-content" className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<PortfolioDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <ContactDrawer />
      </div>
    </ErrorBoundary>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

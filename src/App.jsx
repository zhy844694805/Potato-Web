import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import ScrollToTop from './components/ui/ScrollToTop'
import ChatWidget from './components/ui/ChatWidget'
import CustomCursor from './components/ui/CustomCursor'
import SmoothScroll from './components/ui/SmoothScroll'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './App.css'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home/Home'))
const Services = lazy(() => import('./pages/Services/Services'))
const ServiceDetail = lazy(() => import('./pages/Services/ServiceDetail'))
const Blog = lazy(() => import('./pages/Blog/Blog'))
const BlogDetail = lazy(() => import('./pages/Blog/BlogDetail'))
const Testimonials = lazy(() => import('./pages/Testimonials/Testimonials'))
const About = lazy(() => import('./pages/About/About'))
const Contact = lazy(() => import('./pages/Contact/Contact'))
const FAQ = lazy(() => import('./pages/FAQ/FAQ'))
const Quote = lazy(() => import('./pages/Quote/Quote'))
const Demos = lazy(() => import('./pages/Demos/Demos'))
const Team = lazy(() => import('./pages/Team/Team'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

// Lazy load demo sites - PREMIUM SELECTION
const TechZone = lazy(() => import('./demos/tech-zone/TechZone'))
const SakuraMilano = lazy(() => import('./demos/sakura-milano/SakuraMilano'))
const PratoFashion = lazy(() => import('./demos/prato-fashion/PratoFashion'))
const DragonTrade = lazy(() => import('./demos/dragon-trade/DragonTrade'))
const JadeSpa = lazy(() => import('./demos/jade-spa/JadeSpa'))
const HungryDragon = lazy(() => import('./demos/hungry-dragon/HungryDragon'))
const BeautyBook = lazy(() => import('./demos/beauty-book/BeautyBook'))
const ChinaMart = lazy(() => import('./demos/china-mart/ChinaMart'))
const SushiMoto = lazy(() => import('./demos/sushi-moto/SushiMoto'))
const CasaMilano = lazy(() => import('./demos/casa-milano/CasaMilano'))
const ZhengLaw = lazy(() => import('./demos/zheng-law/ZhengLaw'))
const CloudTask = lazy(() => import('./demos/cloud-task/CloudTask'))
const SushiLand = lazy(() => import('./demos/sushi-land/SushiLand'))

// Loading fallback component with skeleton
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="skeleton-loader">
        <div className="skeleton-header">
          <div className="skeleton-line skeleton-title"></div>
          <div className="skeleton-line skeleton-subtitle"></div>
        </div>
        <div className="skeleton-content">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line skeleton-short"></div>
        </div>
      </div>
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
            <Route path="/demo/tech-zone/*" element={<TechZone />} />
            <Route path="/demo/sakura-milano/*" element={<SakuraMilano />} />
            <Route path="/demo/prato-fashion" element={<PratoFashion />} />
            <Route path="/demo/dragon-trade" element={<DragonTrade />} />
            <Route path="/demo/jade-spa" element={<JadeSpa />} />
            <Route path="/demo/hungry-dragon" element={<HungryDragon />} />
            <Route path="/demo/beauty-book" element={<BeautyBook />} />
            <Route path="/demo/china-mart" element={<ChinaMart />} />
            <Route path="/demo/sushi-moto" element={<SushiMoto />} />
            <Route path="/demo/casa-milano" element={<CasaMilano />} />
            <Route path="/demo/zheng-law" element={<ZhengLaw />} />
            <Route path="/demo/cloud-task" element={<CloudTask />} />
            <Route path="/demo/sushi-land/*" element={<SushiLand />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary language={language}>
      <Analytics />
      <ScrollToTop />
      <CustomCursor />
      <SmoothScroll>
        <div className="app">
          <Header />
          <main id="main-content" className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                                <Route path="/faq" element={<FAQ />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="/demos" element={<Demos />} />
                <Route path="/team" element={<Team />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </SmoothScroll>
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
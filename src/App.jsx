import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import ScrollToTop from './components/ui/ScrollToTop'
import ChatWidget from './components/ui/ChatWidget'
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
const Quote = lazy(() => import('./pages/Quote/Quote'))
const Demos = lazy(() => import('./pages/Demos/Demos'))
const Team = lazy(() => import('./pages/Team/Team'))
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
const SushiMoto = lazy(() => import('./demos/sushi-moto/SushiMoto'))
const KokuSushi = lazy(() => import('./demos/koku-sushi/KokuSushi'))
const YumeSushi = lazy(() => import('./demos/yume-sushi/YumeSushi'))
const GoldenKoi = lazy(() => import('./demos/golden-koi/GoldenKoi'))
const MilanDrive = lazy(() => import('./demos/milan-drive/MilanDrive'))
const EuroTax = lazy(() => import('./demos/euro-tax/EuroTax'))
const DragonDesign = lazy(() => import('./demos/dragon-design/DragonDesign'))
const CasaMilano = lazy(() => import('./demos/casa-milano/CasaMilano'))
const BobaTea = lazy(() => import('./demos/boba-tea/BobaTea'))
const MamaChen = lazy(() => import('./demos/mama-chen/MamaChen'))
const ZhengLaw = lazy(() => import('./demos/zheng-law/ZhengLaw'))
const DragonTravel = lazy(() => import('./demos/dragon-travel/DragonTravel'))
const MilanHair = lazy(() => import('./demos/milan-hair/MilanHair'))
const YikangTCM = lazy(() => import('./demos/yikang-tcm/YikangTCM'))
const CloudTask = lazy(() => import('./demos/cloud-task/CloudTask'))
const LingoBridge = lazy(() => import('./demos/lingo-bridge/LingoBridge'))
const VitaCare = lazy(() => import('./demos/vita-care/VitaCare'))
const OceanBloom = lazy(() => import('./demos/ocean-bloom/OceanBloom'))
const OmakaseZen = lazy(() => import('./demos/omakase-zen/OmakaseZen'))

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
            <Route path="/demo/sakura-milano/*" element={<SakuraMilano />} />
            <Route path="/demo/prato-fashion" element={<PratoFashion />} />
            <Route path="/demo/dragon-trade" element={<DragonTrade />} />
            <Route path="/demo/jade-spa" element={<JadeSpa />} />
            <Route path="/demo/hungry-dragon" element={<HungryDragon />} />
            <Route path="/demo/beauty-book" element={<BeautyBook />} />
            <Route path="/demo/china-mart" element={<ChinaMart />} />
            <Route path="/demo/dragon-ship" element={<DragonShip />} />
            <Route path="/demo/sushi-moto" element={<SushiMoto />} />
            <Route path="/demo/koku-sushi" element={<KokuSushi />} />
            <Route path="/demo/yume-sushi" element={<YumeSushi />} />
            <Route path="/demo/golden-koi" element={<GoldenKoi />} />
            <Route path="/demo/milan-drive" element={<MilanDrive />} />
            <Route path="/demo/euro-tax" element={<EuroTax />} />
            <Route path="/demo/dragon-design" element={<DragonDesign />} />
            <Route path="/demo/casa-milano" element={<CasaMilano />} />
            <Route path="/demo/boba-tea" element={<BobaTea />} />
            <Route path="/demo/mama-chen" element={<MamaChen />} />
            <Route path="/demo/zheng-law" element={<ZhengLaw />} />
            <Route path="/demo/dragon-travel" element={<DragonTravel />} />
            <Route path="/demo/milan-hair" element={<MilanHair />} />
            <Route path="/demo/yikang-tcm" element={<YikangTCM />} />
            <Route path="/demo/cloud-task" element={<CloudTask />} />
            <Route path="/demo/lingo-bridge" element={<LingoBridge />} />
            <Route path="/demo/vita-care" element={<VitaCare />} />
            <Route path="/demo/ocean-bloom" element={<OceanBloom />} />
            <Route path="/demo/omakase-zen" element={<OmakaseZen />} />
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

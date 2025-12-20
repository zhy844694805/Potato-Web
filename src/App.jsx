import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Analytics from './components/Analytics'
import ScrollToTop from './components/ui/ScrollToTop'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import Portfolio from './pages/Portfolio/Portfolio'
import PortfolioDetail from './pages/Portfolio/PortfolioDetail'
import Blog from './pages/Blog/Blog'
import BlogDetail from './pages/Blog/BlogDetail'
import Testimonials from './pages/Testimonials/Testimonials'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import SakuraMilano from './demos/sakura-milano/SakuraMilano'
import PratoFashion from './demos/prato-fashion/PratoFashion'
import DragonTrade from './demos/dragon-trade/DragonTrade'
import JadeSpa from './demos/jade-spa/JadeSpa'
import HungryDragon from './demos/hungry-dragon/HungryDragon'
import BeautyBook from './demos/beauty-book/BeautyBook'
import ChinaMart from './demos/china-mart/ChinaMart'
import DragonShip from './demos/dragon-ship/DragonShip'
import './App.css'

function AppContent() {
  const { language } = useLanguage()
  const location = useLocation()

  // Check if we're on a demo page (render without main site layout)
  const isDemo = location.pathname.startsWith('/demo/')

  if (isDemo) {
    return (
      <ErrorBoundary language={language}>
        <ScrollToTop />
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
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary language={language}>
      <Analytics />
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
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

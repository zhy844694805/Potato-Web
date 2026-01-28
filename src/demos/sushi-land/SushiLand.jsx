import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import { SLLanguageProvider } from './context/SLLanguageContext';
import { SLLocationProvider } from './context/SLLocationContext';
import SLHeader from './components/SLHeader';
import SLFooter from './components/SLFooter';
import SLLoadingSpinner from './components/SLLoadingSpinner';
import MainPage from './pages/MainPage';
import LocationHomePage from './pages/LocationHomePage';
import FilosofiaPage from './pages/FilosofiaPage';
import MenuPage from './pages/MenuPage';
import TakeAwayPage from './pages/TakeAwayPage';
import AppPage from './pages/AppPage';
import ContactPage from './pages/ContactPage';
import './SushiLand.css';

function MainLayout() {
  return (
    <div className="sl-app">
      <SLLoadingSpinner />
      <SLHeader minimal />
      <main>
        <MainPage />
      </main>
      <SLFooter />
    </div>
  );
}

function LocationLayout() {
  const { locationSlug } = useParams();

  return (
    <SLLocationProvider>
      <div className="sl-app">
        <SLHeader locationSlug={locationSlug} />
        <main>
          <Outlet />
        </main>
        <SLFooter />
      </div>
    </SLLocationProvider>
  );
}

export default function SushiLand() {
  return (
    <SLLanguageProvider>
      <Routes>
        <Route index element={<MainLayout />} />
        <Route path=":locationSlug" element={<LocationLayout />}>
          <Route index element={<LocationHomePage />} />
          <Route path="filosofia" element={<FilosofiaPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="take-away" element={<TakeAwayPage />} />
          <Route path="app" element={<AppPage />} />
          <Route path="contatti" element={<ContactPage />} />
        </Route>
      </Routes>
    </SLLanguageProvider>
  );
}

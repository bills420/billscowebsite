import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useScrollTop } from './hooks/useScrollTop';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import CallButton from './components/common/CallButton';
import BackToTop from './components/navigation/BackToTop';
import SignupPopup from './components/common/SignupPopup';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
import RollingBanner from './components/common/RollingBanner';
import CookieConsent from './components/common/CookieConsent';
import WidgetCarousel from './components/widgets/WidgetCarousel';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import WebDevelopment from './pages/WebDevelopment';
import Labour from './pages/Labour';
import Beautification from './pages/Beautification';
import Music from './pages/Music';

// Career Pages
import Careers from './pages/Careers';
import WebDevelopmentCareers from './pages/careers/WebDevelopmentCareers';
import LabourCareers from './pages/careers/LabourCareers';
import BeautificationCareers from './pages/careers/BeautificationCareers';
import MusicCareers from './pages/careers/MusicCareers';

const App = () => {
  useScrollTop();

  return (
    <div className="min-h-screen bg-deep-black flex flex-col">
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <RollingBanner />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/webdevelopment" element={<WebDevelopment />} />
                  <Route path="/labour" element={<Labour />} />
                  <Route path="/beautification" element={<Beautification />} />
                  <Route path="/music" element={<Music />} />
                  
                  {/* Career Routes */}
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/careers/web-development" element={<WebDevelopmentCareers />} />
                  <Route path="/careers/labour" element={<LabourCareers />} />
                  <Route path="/careers/beautification" element={<BeautificationCareers />} />
                  <Route path="/careers/music" element={<MusicCareers />} />
                </Routes>
              </main>
              <SignupPopup />
              <CallButton />
              <WhatsAppButton />
              <BackToTop />
              <WidgetCarousel />
              <CookieConsent />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
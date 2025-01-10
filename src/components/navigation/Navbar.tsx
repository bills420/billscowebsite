import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import LanguageSwitch from '../common/LanguageSwitch';
import HoverMenu from './HoverMenu';
import MobileMenu from './MobileMenu';
import { useLanguage } from '../../context/LanguageContext';

// ... rest of the imports

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed w-full bg-deep-black/90 backdrop-blur-sm z-50 theme-transition">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">BILLS CO.</span>
            <span className="text-off-white text-sm ml-2">Physical & Digital Services</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-pure-white hover:text-off-white transition-colors">
              {t('nav.home')}
            </Link>
            
            {/* ... other navigation items */}
            
            <Link to="/about" className="text-pure-white hover:text-off-white transition-colors">
              {t('nav.about')}
            </Link>
            
            <Link to="/contact" className="text-pure-white hover:text-off-white transition-colors">
              {t('nav.contact')}
            </Link>
            
            <LanguageSwitch />
            <ThemeToggle />
            
            <Link 
              to="/contact" 
              className="button-gradient px-6 py-2 rounded-lg text-pure-white hover:opacity-90 transition-opacity"
            >
              {t('cta.start')}
            </Link>
          </div>

          <button 
            className="md:hidden text-pure-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
};

export default Navbar;
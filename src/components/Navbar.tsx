import React, { useState } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLinks from './navigation/NavLinks';
import MobileMenu from './navigation/MobileMenu';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-matte-black text-pure-white py-4 px-6 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Bills Co.</Link>
        
        <NavLinks className="hidden md:flex space-x-6" />

        <div className="flex items-center space-x-4">
          <Link to="/auth" className="hover:text-off-white">
            <User className="h-6 w-6" />
          </Link>
          <Link to="/cart" className="hover:text-off-white">
            <ShoppingCart className="h-6 w-6" />
          </Link>
          <button 
            className="md:hidden"
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
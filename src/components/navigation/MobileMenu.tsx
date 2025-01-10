import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/webdevelopment', label: 'Web Development' },
  { path: '/labour', label: 'Labour Services' },
  { path: '/beautification', label: 'Beautification' },
  { path: '/music', label: 'Music Production' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-deep-black/95 backdrop-blur-sm z-50">
      <div className="flex justify-end p-6">
        <button onClick={onClose} className="text-pure-white">
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex flex-col items-center space-y-6 p-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className="text-pure-white hover:text-off-white transition-colors text-xl"
          >
            {item.label}
          </Link>
        ))}
        
        <Link 
          to="/contact"
          onClick={onClose}
          className="button-gradient px-8 py-3 rounded-lg text-pure-white text-lg hover:opacity-90 transition-opacity mt-6"
        >
          Start Project
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
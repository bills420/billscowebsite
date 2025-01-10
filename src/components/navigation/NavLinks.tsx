import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
  onClose?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className, onClose }) => {
  const links = [
    { to: '/about', text: 'About' },
    { to: '/portfolio', text: 'Portfolio' },
    { to: '/investors', text: 'Investors' },
    { to: '/labour', text: 'Labour' },
    { to: '/beautification', text: 'Beautification' },
    { to: '/webdevelopment', text: 'Web Development' },
    { to: '/music', text: 'Music' },
    { to: '/contact', text: 'Contact' }
  ];

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className={className}>
      {links.map(link => (
        <Link 
          key={link.to} 
          to={link.to} 
          className="hover:text-off-white transition-colors"
          onClick={handleClick}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
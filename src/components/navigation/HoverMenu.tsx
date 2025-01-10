import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
  title: string;
  path: string;
  description?: string;
}

interface HoverMenuProps {
  trigger: string;
  items: MenuItem[];
}

const HoverMenu: React.FC<HoverMenuProps> = ({ trigger, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center text-pure-white hover:text-off-white transition-colors">
        {trigger} <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-64 bg-matte-black border border-gray-800 rounded-lg shadow-xl overflow-hidden"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block p-4 hover:bg-deep-black transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="text-pure-white font-medium group-hover:translate-x-1 transition-transform">
                {item.title}
              </div>
              {item.description && (
                <p className="text-sm text-off-white mt-1 group-hover:translate-x-1 transition-transform">
                  {item.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverMenu;
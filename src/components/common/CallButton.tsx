import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const CallButton = () => {
  return (
    <a
      href={`tel:${COMPANY_INFO.phone}`}
      className="fixed bottom-24 right-6 z-50 group"
      aria-label="Call us"
    >
      <div className="relative">
        {/* Ripple animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50" />
        
        {/* Button */}
        <button className="relative bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2 group-hover:gap-3 duration-300">
          <Phone className="h-5 w-5" />
          <span className="hidden group-hover:inline whitespace-nowrap overflow-hidden transition-all duration-300">
            {COMPANY_INFO.phone}
          </span>
        </button>
      </div>
    </a>
  );
};

export default CallButton;
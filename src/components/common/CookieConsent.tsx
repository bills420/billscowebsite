import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-matte-black/95 backdrop-blur-sm border-t border-gray-800 p-4 z-[100]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-pure-white text-sm flex-grow">
            <p>
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <a href="/privacy-policy" className="underline hover:text-off-white">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="button-gradient px-6 py-2 rounded text-pure-white hover:opacity-90 transition-opacity"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-off-white hover:text-pure-white transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
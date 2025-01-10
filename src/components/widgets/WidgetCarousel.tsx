import React, { useState, useEffect } from 'react';
import ClockWeather from './ClockWeather';
import CryptoMarket from './CryptoMarket';
import LatestProducts from './LatestProducts';
import CryptoTweets from './CryptoTweets';

const widgets = [
  { id: 'clock', component: ClockWeather },
  { id: 'crypto', component: CryptoMarket },
  { id: 'products', component: LatestProducts },
  { id: 'tweets', component: CryptoTweets }
];

const WidgetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % widgets.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const CurrentWidget = widgets[currentIndex]?.component || widgets[0].component;

  return (
    <div className="fixed right-6 top-24 z-50 w-64">
      <div
        className={`transition-all duration-500 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        <CurrentWidget />
      </div>
    </div>
  );
};

export default WidgetCarousel;
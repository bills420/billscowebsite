import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const ClockWeather = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nzTime = time.toLocaleTimeString('en-NZ', {
    timeZone: 'Pacific/Auckland',
    hour12: false
  });

  const nzDate = time.toLocaleDateString('en-NZ', {
    timeZone: 'Pacific/Auckland',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-matte-black/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-800">
      <div className="flex items-center gap-3 mb-3 text-pure-white">
        <Clock className="h-5 w-5" />
        <div>
          <div className="text-xl font-bold">{nzTime}</div>
          <div className="text-sm text-off-white">Auckland, NZ</div>
        </div>
      </div>
      <div className="text-sm text-off-white">{nzDate}</div>
    </div>
  );
};

export default ClockWeather;
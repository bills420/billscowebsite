import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const defaultPrices = [
  { symbol: 'BTC', price: 65000, change24h: 2.5 },
  { symbol: 'ETH', price: 3500, change24h: 1.8 },
  { symbol: 'BNB', price: 450, change24h: -0.5 }
];

const CryptoMarket = () => {
  const [prices, setPrices] = useState(defaultPrices);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","BNBUSDT"]');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const updatedPrices = data.map((item: any) => ({
            symbol: item.symbol.replace('USDT', ''),
            price: parseFloat(item.lastPrice),
            change24h: parseFloat(item.priceChangePercent)
          }));
          setPrices(updatedPrices);
        }
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-matte-black/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-800">
      <h3 className="text-lg font-bold mb-3 text-pure-white">Crypto Market</h3>
      <div className="space-y-2">
        {prices.map((crypto) => (
          <div key={crypto.symbol} className="flex items-center justify-between">
            <span className="text-pure-white">{crypto.symbol}</span>
            <div className="text-right">
              <div className="text-pure-white">${crypto.price.toLocaleString()}</div>
              <div className={`flex items-center text-sm ${
                crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {crypto.change24h >= 0 ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {Math.abs(crypto.change24h).toFixed(2)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoMarket;
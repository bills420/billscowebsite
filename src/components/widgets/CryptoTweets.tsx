import React from 'react';
import { Twitter } from 'lucide-react';

const tweets = [
  {
    author: "CryptoNews",
    handle: "@crypto_news",
    content: "Bitcoin showing strong momentum as institutional adoption continues to grow",
    time: "2h ago"
  },
  {
    author: "ETH Updates",
    handle: "@eth_updates",
    content: "Ethereum network upgrade scheduled for next month - what you need to know",
    time: "4h ago"
  },
  {
    author: "Crypto Analysis",
    handle: "@crypto_analysis",
    content: "Market analysis: Key resistance levels to watch this week",
    time: "5h ago"
  }
];

const CryptoTweets = () => {
  return (
    <div className="bg-matte-black/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <Twitter className="h-5 w-5 text-pure-white" />
        <h3 className="text-lg font-bold text-pure-white">Crypto Updates</h3>
      </div>
      <div className="space-y-3">
        {tweets.map((tweet, index) => (
          <div key={index} className="border-b border-gray-800 last:border-0 pb-3 last:pb-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm font-medium text-pure-white">{tweet.author}</span>
              <span className="text-xs text-off-white">{tweet.handle}</span>
            </div>
            <p className="text-sm text-off-white mb-1">{tweet.content}</p>
            <span className="text-xs text-gray-500">{tweet.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTweets;
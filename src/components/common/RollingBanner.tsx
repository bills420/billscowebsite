import React from 'react';
import { ArrowRight } from 'lucide-react';

const messages = [
  "Professional Web Development in Auckland",
  "Expert Construction & Labour Solutions",
  "Transform Your Space with Our Beauty Services",
  "Professional Music Production Studio",
  "Get a Free Quote Today - Call +64220755223",
  "24/7 Support Available in Auckland",
  "Quality Guaranteed on All Services"
];

const RollingBanner = () => {
  return (
    <div className="bg-matte-black py-4 border-t border-b border-gray-800">
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...messages, ...messages].map((message, index) => (
            <div
              key={index}
              className="flex items-center mx-8"
            >
              <span className="text-pure-white">{message}</span>
              <ArrowRight className="h-4 w-4 text-pure-white ml-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollingBanner;
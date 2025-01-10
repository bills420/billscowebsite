import React from 'react';
import { Music2, Mic, Radio, HeadphonesIcon, Check } from 'lucide-react';

const services = [
  {
    icon: <Music2 className="h-8 w-8" />,
    title: "Beat Production",
    description: "Custom beat creation and production"
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Recording",
    description: "Professional recording services"
  },
  {
    icon: <Radio className="h-8 w-8" />,
    title: "Mixing & Mastering",
    description: "Industry-standard audio processing"
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "Sound Design",
    description: "Custom sound effects and atmospheres"
  }
];

const pricingTiers = [
  {
    name: "Beat Lease",
    price: 99,
    description: "Basic licensing package",
    features: [
      "MP3 File",
      "2,500 Unit Sales",
      "Non-Exclusive Rights",
      "Online Distribution",
      "Credit Required"
    ]
  },
  {
    name: "Premium Package",
    price: 299,
    description: "Professional production package",
    features: [
      "WAV + MP3 Files",
      "10,000 Unit Sales",
      "Track Stems",
      "Commercial Use",
      "Radio Play",
      "Credit Required"
    ],
    popular: true
  },
  {
    name: "Unlimited",
    price: 999,
    description: "Full rights package",
    features: [
      "Exclusive Rights",
      "Unlimited Sales",
      "All File Formats",
      "Full Track Stems",
      "Unlimited Usage",
      "No Credit Required",
      "Contract Included"
    ]
  }
];

const Music = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Music Production Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Music studio"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Professional Music Production</h2>
            <p className="text-off-white">
              From beat making to full production, our state-of-the-art studio 
              and experienced producers help bring your musical vision to life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-matte-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-pure-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-off-white">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Production Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-matte-black rounded-lg p-8 relative ${
                  tier.popular ? 'border-2 border-pure-white transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-pure-white text-deep-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-off-white mb-4">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-off-white">/track</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-pure-white flex-shrink-0" />
                      <span className="text-off-white">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pure-white text-deep-black py-3 rounded-lg hover:bg-off-white transition-colors">
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
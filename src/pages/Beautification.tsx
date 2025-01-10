import React from 'react';
import { Scissors, Home, Paintbrush, Sparkles, Check } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Beauty Services",
    description: "Professional hair styling and beauty treatments"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Home Makeover",
    description: "Complete home renovation and decoration"
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Interior Design",
    description: "Custom interior design solutions"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Spa Services",
    description: "Relaxing spa treatments and therapies"
  }
];

const pricingTiers = [
  {
    name: "Essential Beauty",
    price: 89,
    period: "per session",
    description: "Basic beauty services",
    features: [
      "Hair Styling",
      "Basic Makeup",
      "Manicure",
      "Basic Facial",
      "30-min Consultation"
    ]
  },
  {
    name: "Premium Package",
    price: 199,
    period: "per session",
    description: "Complete beauty transformation",
    features: [
      "Advanced Hair Treatment",
      "Professional Makeup",
      "Manicure & Pedicure",
      "Premium Facial",
      "Spa Treatment",
      "1-hour Consultation"
    ],
    popular: true
  },
  {
    name: "Luxury Experience",
    price: 499,
    period: "per day",
    description: "Full-day luxury treatment",
    features: [
      "Full Hair Makeover",
      "Professional Photoshoot",
      "Complete Spa Package",
      "Luxury Facial Treatment",
      "Personal Styling",
      "Champagne Service",
      "Take-home Products"
    ]
  }
];

const Beautification = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Beautification Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Salon interior"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Transform Your Space & Style</h2>
            <p className="text-off-white">
              From personal beauty services to complete home makeovers, our expert team 
              delivers premium beautification services tailored to your needs.
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
          <h2 className="text-3xl font-bold text-center mb-12">Beauty Packages</h2>
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
                  <span className="text-off-white">{tier.period}</span>
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
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beautification;
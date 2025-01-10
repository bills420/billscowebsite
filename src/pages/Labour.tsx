import React from 'react';
import { Hammer, Truck, Home, HardHat, Check } from 'lucide-react';

const services = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Demolition",
    description: "Professional demolition services"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Site Clearing",
    description: "Complete site preparation and waste removal"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Construction",
    description: "Building and renovation services"
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: "General Labour",
    description: "Skilled workforce for various construction needs"
  }
];

const pricingTiers = [
  {
    name: "Basic Labour",
    price: 45,
    period: "per hour",
    description: "General labour services",
    features: [
      "General Construction Work",
      "Basic Equipment Operation",
      "Material Handling",
      "Site Cleanup",
      "Safety Equipment Provided"
    ]
  },
  {
    name: "Skilled Labour",
    price: 65,
    period: "per hour",
    description: "Specialized construction services",
    features: [
      "Specialized Construction",
      "Heavy Equipment Operation",
      "Project Supervision",
      "Quality Control",
      "Safety Management",
      "Technical Consultation"
    ],
    popular: true
  },
  {
    name: "Project Based",
    price: null,
    period: "custom quote",
    description: "Complete project management",
    features: [
      "Full Project Management",
      "Multiple Work Crews",
      "Equipment Provision",
      "Site Safety Planning",
      "Progress Reporting",
      "Quality Assurance",
      "Compliance Management"
    ]
  }
];

const Labour = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Construction & Labour Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Construction site"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Professional Construction Solutions</h2>
            <p className="text-off-white">
              Our experienced team provides comprehensive construction and labour services, 
              from demolition to building completion. We prioritize safety, efficiency, and 
              quality in every project.
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
          <h2 className="text-3xl font-bold text-center mb-12">Service Rates</h2>
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
                  {tier.price ? (
                    <>
                      <span className="text-4xl font-bold">${tier.price}</span>
                      <span className="text-off-white">/{tier.period}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold">Custom Quote</span>
                  )}
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
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labour;
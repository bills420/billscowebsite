import React from 'react';
import { Code, Globe, Smartphone, Database, Check } from 'lucide-react';
import ContractDownload from '../components/common/ContractDownload';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites built with modern technologies"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Applications",
    description: "Scalable and responsive web applications"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description: "Online store development and maintenance"
  }
];

const pricingTiers = [
  {
    name: "Basic Website",
    price: 2499,
    description: "Perfect for small businesses",
    features: [
      "5 Pages Website",
      "Mobile Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "3 Months Support"
    ]
  },
  {
    name: "Professional",
    price: 4999,
    description: "For growing businesses",
    features: [
      "10 Pages Website",
      "Advanced SEO Package",
      "Content Management System",
      "E-commerce Integration",
      "6 Months Support",
      "Social Media Integration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 9999,
    description: "Custom solutions for large organizations",
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Advanced Security Features",
      "API Integration",
      "Database Development",
      "1 Year Support",
      "Priority Response"
    ]
  }
];

const WebDevelopment = () => {
  return (
    <div className="bg-deep-black text-pure-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-start mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Web Development Services</h1>
          <ContractDownload buttonText="Download Service Agreement" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Web development"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-semibold">Digital Solutions</h2>
            <p className="text-off-white text-lg leading-relaxed">
              We create cutting-edge web solutions using the latest technologies. 
              Our team specializes in building responsive, secure, and scalable 
              applications for businesses of all sizes.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className="bg-matte-black p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-pure-white mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-off-white">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
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
                  <span className="text-off-white">/project</span>
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
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
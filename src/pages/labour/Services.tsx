import React from 'react';
import { Hammer, Truck, Home, HardHat, Check, Phone } from 'lucide-react';
import VideoBackground from '../../components/common/VideoBackground';
import { COMPANY_INFO } from '../../utils/constants';

const services = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Demolition",
    description: "Professional demolition services for residential and commercial properties",
    features: [
      "Structural demolition",
      "Interior demolition",
      "Site clearing",
      "Waste management"
    ]
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Site Clearing",
    description: "Complete site preparation and waste removal services",
    features: [
      "Land clearing",
      "Debris removal",
      "Site preparation",
      "Environmental protection"
    ]
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Construction",
    description: "Professional construction and renovation services",
    features: [
      "Commercial construction",
      "Residential building",
      "Renovations",
      "Project management"
    ]
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: "General Labour",
    description: "Skilled workforce for various construction needs",
    features: [
      "Skilled labour",
      "Equipment operation",
      "Material handling",
      "Site maintenance"
    ]
  }
];

const LabourServices = () => {
  return (
    <div className="bg-deep-black text-pure-white">
      {/* Hero Section */}
      <div className="h-screen relative">
        <VideoBackground 
          videoUrl="https://player.vimeo.com/external/371577441.hd.mp4?s=237b2667e07bdb09b23d3276eab4e54825ecd7e0&profile_id=174"
          overlayOpacity={0.7}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Professional Labour Services
              </h1>
              <p className="text-xl text-off-white mb-8 leading-relaxed">
                Expert construction and labour solutions for projects of all sizes.
                Quality, safety, and efficiency guaranteed.
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="button-gradient text-pure-white px-8 py-4 rounded-lg inline-flex items-center text-lg font-medium hover:opacity-90 transition-all duration-300 animate-pulse"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </VideoBackground>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-off-white text-lg leading-relaxed">
              From demolition to construction, our experienced team provides comprehensive 
              labour services tailored to your project needs. We prioritize safety, 
              efficiency, and quality in every job we undertake.
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Construction site"
            className="rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-matte-black p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-pure-white mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-off-white mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-pure-white flex-shrink-0" />
                    <span className="text-off-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabourServices;
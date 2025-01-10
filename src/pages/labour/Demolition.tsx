import React from 'react';
import { Hammer, Shield, Truck, ClipboardCheck, HardHat } from 'lucide-react';
import VideoBackground from '../../components/common/VideoBackground';
import ContractDownload from '../../components/common/ContractDownload';
import { COMPANY_INFO } from '../../utils/constants';

const services = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Structural Demolition",
    description: "Complete demolition of buildings and structures with precision and safety"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Safe Asbestos Removal",
    description: "Licensed and certified asbestos removal and disposal services"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Waste Management",
    description: "Efficient debris removal and environmentally conscious disposal"
  },
  {
    icon: <ClipboardCheck className="h-8 w-8" />,
    title: "Compliance Management",
    description: "Full compliance with local regulations and safety standards"
  }
];

const features = [
  "Licensed demolition contractors",
  "Comprehensive safety protocols",
  "Environmental protection measures",
  "Modern equipment and techniques",
  "Efficient project management",
  "Strict compliance with regulations"
];

const Demolition = () => {
  return (
    <div className="bg-deep-black text-pure-white">
      {/* Hero Section with Video Background */}
      <div className="h-screen relative">
        <VideoBackground 
          videoUrl="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4"
          overlayOpacity={0.7}
        >
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Professional Demolition Services
              </h1>
              <p className="text-xl text-off-white mb-8 leading-relaxed">
                Expert demolition services with a focus on safety, efficiency, and environmental responsibility.
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

      {/* Rest of the content */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <img 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Demolition Service"
            className="rounded-lg shadow-xl"
          />
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Bills Co. Demolition</h2>
            <p className="text-off-white text-lg leading-relaxed">
              With years of experience in the demolition industry, Bills Co. provides professional 
              demolition services for projects of all sizes. Our team of experts ensures safe, 
              efficient, and environmentally responsible demolition work.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <HardHat className="h-5 w-5 text-pure-white" />
                  <span className="text-off-white">{feature}</span>
                </li>
              ))}
            </ul>
            <ContractDownload buttonText="Download Service Agreement" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-matte-black p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-pure-white mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-off-white">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-matte-black rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Demolition Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Site Assessment</h3>
              <p className="text-off-white">Thorough evaluation and planning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Safety Setup</h3>
              <p className="text-off-white">Implementation of safety measures</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Demolition</h3>
              <p className="text-off-white">Controlled demolition execution</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Site Clearing</h3>
              <p className="text-off-white">Complete cleanup and disposal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demolition;
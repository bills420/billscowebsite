import React from 'react';
import { Code, Music, Paintbrush, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    link: '/webdevelopment'
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: 'Music Production',
    description: 'Professional music production and recording services.',
    link: '/music'
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: 'Beautification',
    description: 'Transform spaces with our expert beautification services.',
    link: '/beautification'
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Labour',
    description: 'Professional labour services for all your needs.',
    link: '/labour'
  }
];

const Services = () => {
  return (
    <div className="bg-matte-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-pure-white mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-deep-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 border border-gray-800">
              <div className="text-pure-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-pure-white mb-2">{service.title}</h3>
              <p className="text-off-white mb-4">{service.description}</p>
              <a href={service.link} className="text-pure-white hover:text-off-white">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
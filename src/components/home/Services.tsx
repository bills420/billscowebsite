import React from 'react';
import { Link } from 'react-router-dom';
import ServiceBanners from './ServiceBanners';

const services = [
  {
    title: 'LABOUR',
    description: 'Professional labour services',
    link: '/labour'
  },
  {
    title: 'BEAUTIFICATION',
    description: 'Transform spaces beautifully',
    link: '/beautification',
    gradient: true
  },
  {
    title: 'WEB',
    description: 'Custom web development',
    link: '/webdevelopment'
  },
  {
    title: 'MUSIC',
    description: 'Professional music production',
    link: '/music',
    gradient: true
  }
];

const Services = () => {
  return (
    <div className="bg-deep-black py-32">
      <ServiceBanners />
      
      <div className="container mx-auto px-6 mt-24">
        {services.map((service, index) => (
          <Link key={index} to={service.link}>
            <div className="mb-24 hover:opacity-80 transition-opacity">
              <h2 className={`service-title text-4xl md:text-5xl font-bold mb-4 ${
                service.gradient ? 'gradient-text' : 'text-pure-white'
              }`}>
                {service.title}
              </h2>
              <p className="text-xl text-off-white ml-2">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
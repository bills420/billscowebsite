import React from 'react';
import { Link } from 'react-router-dom';

const serviceBanners = [
  {
    title: 'LABOUR',
    description: 'Professional construction and labour services',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=728&h=90&q=80',
    link: '/labour',
    position: 'center'
  },
  {
    title: 'BEAUTIFICATION',
    description: 'Transform spaces with expert beauty services',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=728&h=90&q=80',
    link: '/beautification',
    position: 'center'
  },
  {
    title: 'WEB DEVELOPMENT',
    description: 'Custom websites and web applications',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=728&h=90&q=80',
    link: '/webdevelopment',
    position: 'center'
  },
  {
    title: 'MUSIC',
    description: 'Professional music production services',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=728&h=90&q=80',
    link: 'https://beatbybillsofficial.beatstars.com',
    externalLink: true,
    position: 'center'
  }
];

const ServiceBanners = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid gap-6">
        {serviceBanners.map((service, index) => (
          service.externalLink ? (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-[90px] w-full overflow-hidden rounded-lg group"
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover object-${service.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 to-transparent group-hover:from-deep-black/60 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-2xl font-bold text-pure-white group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-off-white text-sm mt-1 group-hover:translate-x-2 transition-transform duration-300">
                  {service.description}
                </p>
              </div>
            </a>
          ) : (
            <Link
              key={index}
              to={service.link}
              className="relative h-[90px] w-full overflow-hidden rounded-lg group"
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover object-${service.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 to-transparent group-hover:from-deep-black/60 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-center px-8">
                <h3 className="text-2xl font-bold text-pure-white group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-off-white text-sm mt-1 group-hover:translate-x-2 transition-transform duration-300">
                  {service.description}
                </p>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default ServiceBanners;
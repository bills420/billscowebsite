import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-deep-black text-pure-white">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Vision Into Reality
            </h1>
            <p className="text-xl mb-8 text-off-white">
              Professional web development, music production, and beautification services
              tailored to your needs.
            </p>
            <button className="bg-matte-black hover:bg-deep-black text-pure-white px-8 py-3 rounded-lg flex items-center border border-pure-white">
              Get Started <ArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&sat=-100"
              alt="Bills Co. Services"
              className="rounded-lg shadow-2xl grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
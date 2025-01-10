import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="container mx-auto px-6 h-screen flex items-center">
      <div className="max-w-4xl animate-slide-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight stagger-children">
          <span className="text-pure-white block">Professional</span>
          <span className="text-pure-white block">Services in</span>
          <span className="gradient-text block">Auckland</span>
        </h1>
        <p className="text-lg md:text-xl mb-12 text-off-white max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Expert web development, construction, beautification, and music production services. 
          Quality guaranteed with 24/7 support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <Link 
            to="/contact" 
            className="button-gradient text-pure-white px-8 py-4 rounded-lg inline-flex items-center justify-center text-lg font-medium hover-lift"
          >
            Get Free Quote <ArrowRight className="ml-2" />
          </Link>
          <Link 
            to="/portfolio" 
            className="bg-transparent border-2 border-pure-white text-pure-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center font-medium hover-lift"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, HardHat, Scissors, Music } from 'lucide-react';

const careerCategories = [
  {
    title: 'Web Development',
    path: '/careers/web-development',
    icon: <Code className="h-8 w-8" />,
    description: 'Join our web development team'
  },
  {
    title: 'Labour & Construction',
    path: '/careers/labour',
    icon: <HardHat className="h-8 w-8" />,
    description: 'Build your future with us'
  },
  {
    title: 'Beauty & Salon',
    path: '/careers/beautification',
    icon: <Scissors className="h-8 w-8" />,
    description: 'Create beauty with passion'
  },
  {
    title: 'Music Production',
    path: '/careers/music',
    icon: <Music className="h-8 w-8" />,
    description: 'Make music with us'
  }
];

const Careers = () => {
  return (
    <div className="bg-deep-black text-pure-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-off-white text-lg max-w-2xl mx-auto">
            Explore career opportunities across our diverse range of services. 
            We're always looking for talented individuals to join our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerCategories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="bg-matte-black p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-pure-white mb-6">{category.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
              <p className="text-off-white">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
import React, { useState } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import { projects } from '../config/portfolio';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="bg-deep-black text-pure-white py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Portfolio</h1>
          <p className="text-off-white text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our diverse range of projects across web development, music production, 
            beautification, and construction services.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-pure-white text-deep-black'
                  : 'bg-matte-black text-pure-white hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
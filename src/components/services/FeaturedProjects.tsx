import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types/portfolio';
import ProjectCard from '../portfolio/ProjectCard';

interface FeaturedProjectsProps {
  category: string;
  projects: Project[];
  portfolioLink: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ category, projects, portfolioLink }) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link 
          to={portfolioLink}
          className="flex items-center text-pure-white hover:text-off-white transition-colors"
        >
          View All <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
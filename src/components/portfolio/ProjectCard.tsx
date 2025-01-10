import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-matte-black rounded-lg overflow-hidden hover-scale animate-fade-in">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent opacity-60" />
      </div>
      
      <div className="absolute bottom-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-pure-white mb-1">{project.title}</h3>
            <span className="inline-block px-3 py-1 text-sm text-pure-white bg-deep-black/50 rounded-full">
              {project.category}
            </span>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-deep-black/50 rounded-full text-pure-white hover:bg-pure-white hover:text-deep-black transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-deep-black/50 rounded-full text-pure-white hover:bg-pure-white hover:text-deep-black transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-off-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
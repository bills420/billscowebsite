import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-matte-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
      <div className="text-pure-white mb-4">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-pure-white">{title}</h3>
      <p className="text-off-white">{description}</p>
    </div>
  );
};

export default ServiceCard;
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="bg-matte-black py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-off-white text-lg max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
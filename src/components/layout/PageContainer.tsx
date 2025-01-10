import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-deep-black text-pure-white py-16 ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
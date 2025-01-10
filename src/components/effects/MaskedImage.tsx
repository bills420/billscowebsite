import React from 'react';

interface MaskedImageProps {
  src: string;
  alt: string;
  mask?: 'circle' | 'diamond' | 'custom';
  className?: string;
}

const MaskedImage: React.FC<MaskedImageProps> = ({ src, alt, mask = 'circle', className = '' }) => {
  const maskStyles = {
    circle: 'rounded-full',
    diamond: 'rotate-45',
    custom: 'clip-path-custom'
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className={`relative w-full h-full ${maskStyles[mask]}`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default MaskedImage;
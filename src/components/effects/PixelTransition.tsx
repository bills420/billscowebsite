import React, { useEffect, useRef } from 'react';

interface PixelTransitionProps {
  children: React.ReactNode;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pixel-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pixel-transition">
      {children}
    </div>
  );
};

export default PixelTransition;
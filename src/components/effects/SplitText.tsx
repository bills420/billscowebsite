import React, { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
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
    <div ref={containerRef} className={`split-text ${className}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className="inline-block opacity-0 transform translate-y-full"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface Timeline3DProps {
  items: TimelineItem[];
}

const Timeline3D: React.FC<Timeline3DProps> = ({ items }) => {
  return (
    <div className="relative perspective-1000">
      <div className="timeline-container">
        {items.map((item, index) => (
          <div 
            key={index}
            className="timeline-item transform-style-3d hover:rotate-y-10 transition-transform duration-500"
          >
            <div className="timeline-content bg-matte-black p-6 rounded-lg">
              <span className="text-2xl font-bold gradient-text">{item.year}</span>
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-off-white mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline3D;
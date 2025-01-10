import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import ApplicationModal from '../../components/careers/ApplicationModal';

// ... existing interfaces ...

const CareerLayout: React.FC<CareerLayoutProps> = ({
  title,
  description,
  positions,
  benefits,
  image
}) => {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  return (
    <div className="bg-deep-black text-pure-white py-32">
      {/* ... existing JSX until the Apply Now button ... */}

      {positions.map((position, index) => (
        <div key={index} className="bg-matte-black p-8 rounded-lg">
          {/* ... existing position details ... */}

          <button
            onClick={() => setSelectedPosition(position.title)}
            className="inline-flex items-center text-pure-white hover:text-off-white transition-colors"
          >
            Apply Now <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      ))}

      {selectedPosition && (
        <ApplicationModal
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}
    </div>
  );
};

export default CareerLayout;
import React from 'react';
import { X } from 'lucide-react';
import JobApplicationForm from './JobApplicationForm';

interface ApplicationModalProps {
  position: string;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ position, onClose }) => {
  return (
    <div className="fixed inset-0 bg-deep-black/80 flex items-center justify-center p-6 z-50">
      <div className="bg-matte-black rounded-lg p-8 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-off-white hover:text-pure-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Apply for {position}</h2>
        
        <JobApplicationForm
          position={position}
          onSuccess={onClose}
          onCancel={onClose}
        />
      </div>
    </div>
  );
};

export default ApplicationModal;
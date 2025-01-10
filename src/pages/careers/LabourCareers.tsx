import React from 'react';
import { HardHat, Shield, Clock, DollarSign } from 'lucide-react';
import CareerLayout from './CareerLayout';

const positions = [
  {
    title: "Construction Manager",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$80K - $100K",
    requirements: [
      "5+ years construction experience",
      "Project management skills",
      "Health and safety knowledge",
      "Team leadership experience"
    ]
  },
  {
    title: "Skilled Labourer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$55K - $70K",
    requirements: [
      "2+ years construction experience",
      "Physical fitness and stamina",
      "Valid work certifications",
      "Reliable transportation"
    ]
  }
];

const benefits = [
  {
    icon: <HardHat className="h-6 w-6" />,
    title: "Safety First",
    description: "Comprehensive safety training"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Full Equipment",
    description: "All PPE provided"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Flexible Hours",
    description: "Work-life balance"
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive Pay",
    description: "Above industry standard"
  }
];

const LabourCareers = () => {
  return (
    <CareerLayout
      title="Labour & Construction Careers"
      description="Build your career with our construction team. We offer competitive pay and great benefits."
      positions={positions}
      benefits={benefits}
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    />
  );
};

export default LabourCareers;
import React from 'react';
import { Scissors, Heart, Star, Sparkles } from 'lucide-react';
import CareerLayout from './CareerLayout';

const positions = [
  {
    title: "Beauty Specialist",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$60K - $80K",
    requirements: [
      "3+ years beauty industry experience",
      "Certified beautician",
      "Customer service skills",
      "Portfolio of work"
    ]
  },
  {
    title: "Salon Manager",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$70K - $90K",
    requirements: [
      "5+ years salon experience",
      "Management experience",
      "Business acumen",
      "Team leadership skills"
    ]
  }
];

const benefits = [
  {
    icon: <Scissors className="h-6 w-6" />,
    title: "Professional Tools",
    description: "Top quality equipment"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health Benefits",
    description: "Comprehensive coverage"
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Training",
    description: "Ongoing education"
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Commission",
    description: "Performance bonuses"
  }
];

const BeautificationCareers = () => {
  return (
    <CareerLayout
      title="Beauty & Salon Careers"
      description="Join our team of beauty professionals and help clients look and feel their best."
      positions={positions}
      benefits={benefits}
      image="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    />
  );
};

export default BeautificationCareers;
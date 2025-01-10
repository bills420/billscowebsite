import React from 'react';
import { Music, Headphones, Radio, Mic } from 'lucide-react';
import CareerLayout from './CareerLayout';

const positions = [
  {
    title: "Music Producer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$70K - $90K",
    requirements: [
      "5+ years music production experience",
      "Proficient in DAWs",
      "Portfolio of work",
      "Industry connections"
    ]
  },
  {
    title: "Sound Engineer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$60K - $80K",
    requirements: [
      "3+ years studio experience",
      "Technical expertise",
      "Equipment knowledge",
      "Good ear for music"
    ]
  }
];

const benefits = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "Studio Access",
    description: "Professional equipment"
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "Creative Freedom",
    description: "Express yourself"
  },
  {
    icon: <Radio className="h-6 w-6" />,
    title: "Industry Network",
    description: "Connect with artists"
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Project Variety",
    description: "Diverse work"
  }
];

const MusicCareers = () => {
  return (
    <CareerLayout
      title="Music Production Careers"
      description="Create amazing music with our team of producers and engineers."
      positions={positions}
      benefits={benefits}
      image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    />
  );
};

export default MusicCareers;
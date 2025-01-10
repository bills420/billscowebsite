import React from 'react';
import { Code, Brain, Users, Rocket } from 'lucide-react';
import CareerLayout from './CareerLayout';

const positions = [
  {
    title: "Senior Web Developer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$90K - $120K",
    requirements: [
      "5+ years of experience in web development",
      "Strong knowledge of React and TypeScript",
      "Experience with cloud services",
      "Excellent problem-solving skills"
    ]
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$70K - $90K",
    requirements: [
      "3+ years of frontend development",
      "Experience with modern frameworks",
      "Strong UI/UX skills",
      "Knowledge of responsive design"
    ]
  }
];

const benefits = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Latest Tech Stack",
    description: "Work with cutting-edge technologies"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Professional Growth",
    description: "Regular training and development"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Environment",
    description: "Work with talented developers"
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Career Advancement",
    description: "Clear path for progression"
  }
];

const WebDevelopmentCareers = () => {
  return (
    <CareerLayout
      title="Web Development Careers"
      description="Join our web development team and work on exciting projects using modern technologies."
      positions={positions}
      benefits={benefits}
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    />
  );
};

export default WebDevelopmentCareers;
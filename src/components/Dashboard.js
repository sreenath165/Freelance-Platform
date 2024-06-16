import React from 'react';
import ProjectCard from './ProjectCard';
import Footer from './Footer';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'AI-based Healthcare Platform',
    description: 'An AI-powered platform to monitor patient health and provide personalized treatment plans.',
  },
  {
    id: 2,
    title: 'Blockchain-based Voting System',
    description: 'A secure and transparent voting system leveraging blockchain technology.',
  },
  {
    id: 3,
    title: 'E-commerce Recommendation Engine',
    description: 'An AI-driven recommendation engine to enhance user shopping experience on e-commerce platforms.',
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

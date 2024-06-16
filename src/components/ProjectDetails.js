import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'AI-based Healthcare Platform',
    description: 'An AI-powered platform to monitor patient health and provide personalized treatment plans.',
    details: 'This project aims to integrate various health monitoring devices and use AI to analyze data, providing real-time insights and treatment recommendations to patients and doctors.',
  },
  {
    id: 2,
    title: 'Blockchain-based Voting System',
    description: 'A secure and transparent voting system leveraging blockchain technology.',
    details: 'This project focuses on creating a decentralized voting system that ensures security, transparency, and tamper-proof recording of votes using blockchain technology.',
  },
  {
    id: 3,
    title: 'E-commerce Recommendation Engine',
    description: 'An AI-driven recommendation engine to enhance user shopping experience on e-commerce platforms.',
    details: 'This project involves building an AI recommendation engine that analyzes user behavior and preferences to suggest products they are likely to be interested in, enhancing their shopping experience.',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <>
        <div className="container">
          <h2>Project Not Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p>{project.details}</p>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;

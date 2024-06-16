import React from 'react';
import './styles.css';

const SocialMedia = () => {
  const handleGetHelp = () => {
    alert('Please login to ask for help.');
  };

  return (
    <div className="container">
      <h1>Social Media</h1>
      <div className="social-media-categories">
        <h2>Categories</h2>
        <ul>
          <li>Job Roles</li>
          <li>Interests</li>
          <li>Skills</li>
        </ul>
      </div>
      <div className="get-help">
        <button className="btn" onClick={handleGetHelp}>Get Help</button>
      </div>
    </div>
  );
};

export default SocialMedia;

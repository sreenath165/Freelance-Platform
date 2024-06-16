import React from 'react';
import Footer from './Footer';

const NotFound = () => {
  return (
    <>
      <div className="container not-found">
        <h2>404 - Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

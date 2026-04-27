import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 Not Found Page
 * Displayed when user tries to access a non-existent route
 */
const NotFoundPage = () => {
  return (
    <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="not-found-container">
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p style={{ fontSize: '0.95rem', marginBottom: '2rem', color: '#999' }}>
          The page might have been removed or the URL might be incorrect.
        </p>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

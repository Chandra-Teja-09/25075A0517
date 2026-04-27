import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Home Page
 * Landing page showcasing the library system features
 */
const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="home-hero">
        <h1>📚 Welcome to LibraryHub</h1>
        <p>Your Digital Library Management System</p>
        {!isLoggedIn ? (
          <>
            <p>Manage your books, track issues and returns efficiently</p>
            <Link to="/register" className="cta-button">
              Get Started
            </Link>
          </>
        ) : (
          <>
            <p>Happy reading! Explore our collection of books</p>
            <Link to="/catalogue" className="cta-button">
              Browse Books
            </Link>
          </>
        )}
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-card">
          <h3>📖 Browse Books</h3>
          <p>Explore our extensive collection of books across various categories and genres.</p>
        </div>
        <div className="feature-card">
          <h3>🏷️ Issue Books</h3>
          <p>Easily issue books and keep track of your library card and borrowed items.</p>
        </div>
        <div className="feature-card">
          <h3>↩️ Return Books</h3>
          <p>Manage your returns with a clear record of due dates and book statuses.</p>
        </div>
        <div className="feature-card">
          <h3>🔍 Search & Filter</h3>
          <p>Find books quickly with our advanced search and filter functionality.</p>
        </div>
        <div className="feature-card">
          <h3>💾 Persistent Data</h3>
          <p>Your data is saved locally, so you never lose your reading history.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Responsive Design</h3>
          <p>Access your library from any device with our mobile-friendly interface.</p>
        </div>
      </div>

      {/* Information Section */}
      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#667eea', marginBottom: '1rem' }}>About Our System</h2>
        <p>
          LibraryHub is a modern library management system designed to help you organize and manage
          your book collection efficiently. Whether you're a student, book enthusiast, or researcher,
          our platform makes it easy to:
        </p>
        <ul style={{ marginLeft: '2rem', marginTop: '1rem', color: '#666' }}>
          <li>Browse and search for books</li>
          <li>Issue books and track due dates</li>
          <li>Return books and update availability</li>
          <li>Manage your reading profile</li>
          <li>Keep a record of all transactions</li>
        </ul>
        <p style={{ marginTop: '1rem', color: '#666' }}>
          Start exploring now! Create an account to access all features.
        </p>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Navbar Component
 * Displays navigation links and user information
 * Shows login/logout buttons based on authentication state
 */
const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand/Logo */}
        <Link to="/" className="navbar-brand">
          📚 LibraryHub
        </Link>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalogue">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          {/* Conditional Links based on login status */}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/issue-book">Issue Book</Link>
              </li>
              <li>
                <Link to="/return-book">Return Book</Link>
              </li>
            </>
          )}

          {/* User Info and Login/Logout */}
          {!isLoggedIn ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li className="nav-user-info">
              <span>👤 {user?.name}</span>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

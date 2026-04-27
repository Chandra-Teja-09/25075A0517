import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import BookCataloguePage from './pages/BookCataloguePage';
import IssueBookPage from './pages/IssueBookPage';
import ReturnBookPage from './pages/ReturnBookPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './styles/index.css';

/**
 * Main App Component
 * Sets up routing and layout for the entire application
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {/* Navigation Bar */}
          <Navbar />

          {/* Main Content */}
          <main className="main-content">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/catalogue" element={<BookCataloguePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Protected Routes - Only accessible to logged-in users */}
              <Route
                path="/issue-book"
                element={
                  <ProtectedRoute>
                    <IssueBookPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/return-book"
                element={
                  <ProtectedRoute>
                    <ReturnBookPage />
                  </ProtectedRoute>
                }
              />

              {/* 404 Not Found Route */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

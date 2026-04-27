import React from 'react';

/**
 * About Page
 * Provides information about the library system
 */
const AboutPage = () => {
  return (
    <div className="page">
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>ℹ️ About LibraryHub</h1>

      <div className="about-content">
        <h2>Welcome to LibraryHub</h2>
        <p>
          LibraryHub is a modern, user-friendly library management system designed to streamline
          the process of managing books, issuing, and returning them. Built with React and modern
          web technologies, our platform provides a seamless experience for all users.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make book lending and management simple, efficient, and accessible
          to everyone. We believe in the power of reading and strive to promote knowledge sharing
          through our comprehensive library system.
        </p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Browse Books:</strong> Explore our extensive collection of books across various categories.</li>
          <li><strong>Search & Filter:</strong> Easily find books using our advanced search functionality.</li>
          <li><strong>Issue Books:</strong> Borrow up to 5 books at a time with a 14-day lending period.</li>
          <li><strong>Return Books:</strong> Manage your returns with clear due dates and status tracking.</li>
          <li><strong>User Accounts:</strong> Create an account and maintain your reading history.</li>
          <li><strong>Persistent Data:</strong> All your information is saved locally for your convenience.</li>
        </ul>

        <h2>Technology Stack</h2>
        <p>
          LibraryHub is built using the following technologies:
        </p>
        <ul>
          <li><strong>Frontend:</strong> React with functional components and hooks</li>
          <li><strong>Routing:</strong> React Router DOM for seamless navigation</li>
          <li><strong>State Management:</strong> Context API with custom hooks</li>
          <li><strong>Styling:</strong> Modern CSS with responsive design</li>
          <li><strong>Storage:</strong> Browser localStorage for data persistence</li>
        </ul>

        <h2>How It Works</h2>
        <ol>
          <li><strong>Register:</strong> Create a new account with your email and password.</li>
          <li><strong>Login:</strong> Log in with your credentials to access all features.</li>
          <li><strong>Browse:</strong> Explore the book catalogue and search for titles you're interested in.</li>
          <li><strong>Issue:</strong> Select a book and issue it to start reading.</li>
          <li><strong>Return:</strong> Return the book when you're done. Keep track of due dates!</li>
        </ol>

        <h2>Library Guidelines</h2>
        <ul>
          <li>📚 Each user can issue a maximum of 5 books at a time</li>
          <li>📅 Books are issued for 14 days from the date of issue</li>
          <li>⚠️ Late returns may result in penalties (in a real system)</li>
          <li>📖 You can re-issue a book after returning it</li>
          <li>🔒 Your account information is private and secure</li>
        </ul>

        <h2>About the Developer</h2>
        <p>
          LibraryHub was created as a demonstration project showcasing modern React development
          practices, including component architecture, state management, routing, and responsive design.
          The system is fully functional and uses browser storage to maintain data across sessions.
        </p>

        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you! Please visit our
          <a href="/contact" style={{ color: '#667eea', marginLeft: '0.5rem' }}>contact page</a> or
          reach out to us directly.
        </p>

        <h2>Future Enhancements</h2>
        <p>
          We are constantly working to improve LibraryHub. Some planned features include:
        </p>
        <ul>
          <li>Backend integration for persistent data storage</li>
          <li>User notifications and reminders</li>
          <li>Book reviews and ratings</li>
          <li>Wishlist functionality</li>
          <li>Admin dashboard for library management</li>
          <li>Mobile application</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;

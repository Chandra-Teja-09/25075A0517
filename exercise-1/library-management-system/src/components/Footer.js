import React from 'react';

/**
 * Footer Component
 * Displays footer information and links
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 25075A0517 Library Management System. All rights reserved.</p>
        <p>📚 Built with React | Manage your books efficiently</p>
        <p>📧 Contact: info@libraryhub.com | 📞 +91 9999988888</p>
      </div>
    </footer>
  );
};

export default Footer;

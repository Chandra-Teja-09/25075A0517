import React, { useState } from 'react';

/**
 * Contact Page
 * Allows users to send messages to the library
 * Includes contact information and a contact form
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  /**
   * Validate form data
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  /**
   * Handle input changes
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // In a real app, this would send to a backend
    setSuccessMessage('✓ Thank you! Your message has been sent successfully. We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="page">
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>📞 Contact Us</h1>

      {successMessage && (
        <div className="alert alert-success" style={{ marginBottom: '2rem' }}>
          {successMessage}
        </div>
      )}

      <div className="catalogue-container">
        {/* Contact Information */}
        <div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📍 Location</h3>
              <p>B-Block<br />1st floor<br />VNR VJIET</p>
            </div>
            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>+91 9999988888<br />+91 9999977777</p>
            </div>
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>info@libraryhub.com<br />support@libraryhub.com</p>
            </div>
            <div className="contact-card">
              <h3>🕐 Hours</h3>
              <p>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat-Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="search-filter-container">
          <h3>Send us a Message</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
              />
              {errors.subject && <div className="error-message">{errors.subject}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
              />
              {errors.message && <div className="error-message">{errors.message}</div>}
            </div>

            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

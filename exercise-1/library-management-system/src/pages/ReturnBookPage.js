import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * Return Book Page
 * Allows users to return previously issued books
 * Shows list of currently issued books
 */
const ReturnBookPage = () => {
  const { issuedBooks, returnBook } = useAuth();
  const [successMessage, setSuccessMessage] = useState('');
  const [returnedBooks, setReturnedBooks] = useState([]);

  /**
   * Handle book return
   */
  const handleReturnBook = (bookId, bookTitle) => {
    returnBook(bookId);
    setReturnedBooks([...returnedBooks, bookId]);
    setSuccessMessage(`✓ "${bookTitle}" has been returned successfully!`);
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="page">
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>↩️ Return a Book</h1>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      {issuedBooks.length === 0 ? (
        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            📭 You haven't issued any books yet.
          </p>
          <p style={{ color: '#999' }}>
            Visit the "Issue Book" section to borrow books from the library.
          </p>
        </div>
      ) : (
        <div className="issued-books-container">
          <h2>📚 Your Issued Books ({issuedBooks.length})</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Click the "Return Book" button to return any book.
          </p>

          <div>
            {issuedBooks.map(book => (
              <div key={book.id} className="issued-book-card">
                <div className="issued-book-info">
                  <h4>{book.title}</h4>
                  <div className="issued-book-details">
                    <p>✍️ Author: {book.author}</p>
                    <p>📅 Issued: {book.issuedDate}</p>
                    <p>⏰ Due: {book.dueDate}</p>
                  </div>
                </div>
                <div className="book-actions">
                  <button
                    className="btn-small btn-secondary"
                    onClick={() => handleReturnBook(book.id, book.title)}
                  >
                    Return Book
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div style={{
            background: '#f0f7ff',
            padding: '1.5rem',
            borderRadius: '8px',
            marginTop: '2rem',
            borderLeft: '4px solid #667eea'
          }}>
            <h3 style={{ color: '#667eea', marginTop: 0 }}>📋 Return Information</h3>
            <ul style={{ color: '#666', marginLeft: '1.5rem' }}>
              <li>Return your books before the due date to avoid late fees</li>
              <li>Books can be returned at any time during library hours</li>
              <li>You can issue books again after returning them</li>
              <li>Keep your reading history for future reference</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnBookPage;

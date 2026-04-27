import React, { useState, useMemo } from 'react';
import { booksData } from '../data/books';
import { useAuth } from '../context/AuthContext';

/**
 * Issue Book Page
 * Allows logged-in users to issue (borrow) books from the library
 * Shows available books and tracks issued books
 */
const IssueBookPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { issueBook, issuedBooks } = useAuth();

  // Get list of book IDs that are already issued
  const issuedBookIds = useMemo(() => {
    return issuedBooks.map(book => book.id);
  }, [issuedBooks]);

  // Filter available books based on search and availability
  const availableBooks = useMemo(() => {
    return booksData.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const isAvailable = book.available && !issuedBookIds.includes(book.id);
      return matchesSearch && isAvailable;
    });
  }, [searchTerm, issuedBookIds]);

  /**
   * Handle book issuance
   */
  const handleIssueBook = (book) => {
    if (issuedBooks.length >= 5) {
      setErrorMessage('⚠️ You can issue a maximum of 5 books at a time.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    issueBook(book);
    setSuccessMessage(`✓ "${book.title}" has been issued successfully! Due date: 14 days from today.`);
    setErrorMessage('');
    setSearchTerm('');
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <div className="page">
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>📕 Issue a Book</h1>

      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      {errorMessage && (
        <div className="alert alert-error">{errorMessage}</div>
      )}

      <div className="catalogue-container">
        {/* Search Bar */}
        <div className="search-filter-container">
          <h3>Find a Book</h3>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div style={{ color: '#999', fontSize: '0.9rem', marginTop: '1rem' }}>
            <p>📌 You can issue up to 5 books at a time</p>
            <p>📅 Each book is issued for 14 days</p>
            <p>Books already issued: {issuedBooks.length}/5</p>
          </div>
        </div>

        {/* Available Books */}
        <div>
          <div style={{ marginBottom: '1.5rem', color: '#666', fontWeight: '500' }}>
            Available Books: {availableBooks.length}
          </div>

          <div className="books-grid">
            {availableBooks.length > 0 ? (
              availableBooks.map(book => (
                <div key={book.id} className="book-card">
                  <div className="book-image">{book.image}</div>
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p className="book-author">by {book.author}</p>
                    <div className="book-details">
                      <p>📂 Category: {book.category}</p>
                    </div>
                  </div>
                  <div className="book-actions">
                    <button
                      className="btn-small"
                      onClick={() => handleIssueBook(book)}
                      disabled={issuedBooks.length >= 5}
                    >
                      Issue Book
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-books-message">
                {booksData.length === 0 ? (
                  <>
                    <p>No books available in the library.</p>
                  </>
                ) : (
                  <>
                    <p>No available books match your search criteria.</p>
                    <p>Try searching for different books or check back later.</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Issued Books Summary */}
      {issuedBooks.length > 0 && (
        <div className="issued-books-container" style={{ marginTop: '3rem' }}>
          <h2>📚 Your Issued Books ({issuedBooks.length}/5)</h2>
          {issuedBooks.map(book => (
            <div key={book.id} className="issued-book-card">
              <div className="issued-book-info">
                <h4>{book.title}</h4>
                <div className="issued-book-details">
                  <p>by {book.author}</p>
                  <p>📅 Issued: {book.issuedDate}</p>
                  <p>⏰ Due: {book.dueDate}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default IssueBookPage;

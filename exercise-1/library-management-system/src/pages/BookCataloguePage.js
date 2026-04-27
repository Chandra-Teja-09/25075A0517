import React, { useState, useMemo } from 'react';
import { booksData } from '../data/books';

/**
 * Book Catalogue Page
 * Displays all books with search and filter functionality
 * Shows availability status for each book
 */
const BookCataloguePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Get unique categories from books data
  const categories = useMemo(() => {
    return [...new Set(booksData.map(book => book.category))].sort();
  }, []);

  // Filter and search books
  const filteredBooks = useMemo(() => {
    return booksData.filter(book => {
      // Search filter (by title or author)
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategories.length === 0 ||
                             selectedCategories.includes(book.category);

      // Availability filter
      const matchesAvailability = !showAvailableOnly || book.available;

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [searchTerm, selectedCategories, showAvailableOnly]);

  /**
   * Handle category checkbox change
   */
  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  /**
   * Reset all filters
   */
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setShowAvailableOnly(false);
  };

  return (
    <div className="page">
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>📖 Book Catalogue</h1>

      <div className="catalogue-container">
        {/* Left Sidebar - Search and Filters */}
        <div className="search-filter-container">
          <h3>Search & Filter</h3>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          {/* Category Filter */}
          <div className="filter-group">
            <label>Categories</label>
            <div className="filter-options">
              {categories.map(category => (
                <label key={category}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="filter-group">
            <label>
              <input
                type="checkbox"
                checked={showAvailableOnly}
                onChange={(e) => setShowAvailableOnly(e.target.checked)}
              />
              Show Available Books Only
            </label>
          </div>

          {/* Reset Button */}
          <button className="reset-filter-btn" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </div>

        {/* Right Side - Books List */}
        <div>
          <div style={{ marginBottom: '1.5rem', color: '#666', fontWeight: '500' }}>
            Showing {filteredBooks.length} of {booksData.length} books
          </div>

          <div className="books-grid">
            {filteredBooks.length > 0 ? (
              filteredBooks.map(book => (
                <div key={book.id} className="book-card">
                  <div className="book-image">{book.image}</div>
                  <div className="book-info">
                    <h4>{book.title}</h4>
                    <p className="book-author">by {book.author}</p>
                    <div className="book-details">
                      <p>📚 ISBN: {book.isbn}</p>
                      <p>📂 Category: {book.category}</p>
                    </div>
                    <span className={`book-availability ${book.available ? 'available' : 'unavailable'}`}>
                      {book.available ? '✓ Available' : '✗ Not Available'}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-books-message">
                <p>No books found matching your criteria.</p>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCataloguePage;

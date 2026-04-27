import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [issuedBooks, setIssuedBooks] = useState([]);

  // Initialize from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedIssuedBooks = localStorage.getItem('issuedBooks');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    if (storedIssuedBooks) {
      setIssuedBooks(JSON.parse(storedIssuedBooks));
    }
    
    setIsLoading(false);
  }, []);

  // Save to localStorage whenever user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Save issued books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('issuedBooks', JSON.stringify(issuedBooks));
  }, [issuedBooks]);

  // Login function
  const login = (email, password) => {
    const userData = {
      id: Math.random(),
      email,
      name: email.split('@')[0],
      loginTime: new Date().toLocaleString()
    };
    setUser(userData);
    return userData;
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setIssuedBooks([]);
    localStorage.removeItem('user');
    localStorage.removeItem('issuedBooks');
  };

  // Issue a book
  const issueBook = (book) => {
    const issuedBook = {
      ...book,
      issuedDate: new Date().toLocaleString(),
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toLocaleString()
    };
    setIssuedBooks([...issuedBooks, issuedBook]);
    return issuedBook;
  };

  // Return a book
  const returnBook = (bookId) => {
    setIssuedBooks(issuedBooks.filter(book => book.id !== bookId));
  };

  // Check if user is logged in
  const isLoggedIn = !!user;

  const value = {
    user,
    isLoading,
    isLoggedIn,
    issuedBooks,
    login,
    logout,
    issueBook,
    returnBook
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

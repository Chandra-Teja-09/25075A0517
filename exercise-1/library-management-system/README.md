# Library Management System

A complete React.js application for managing a library's books, user registrations, and book issuance/return operations.

## 🚀 Features

✅ **User Authentication**
- User registration with form validation
- User login with email/password
- Persistent user sessions using localStorage
- Protected routes for authenticated users

✅ **Book Management**
- Browse complete book catalogue
- Search books by title or author
- Filter books by category
- Check book availability status
- Issue books (up to 5 books per user)
- Return issued books
- View issued books with due dates

✅ **Additional Pages**
- Home page with feature overview
- About page with information
- Contact page with contact form
- Responsive 404 Not Found page

✅ **Modern UI/UX**
- Responsive design (works on mobile, tablet, desktop)
- Gradient navbar and footer
- Beautiful form designs
- Card-based layouts
- Smooth animations and transitions

✅ **Data Persistence**
- localStorage integration for user data
- Persistent issued books list
- Session persistence across page refreshes

## 📁 Project Structure

```
library-management-system/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.js             # Navigation bar component
│   │   ├── Footer.js             # Footer component
│   │   └── ProtectedRoute.js      # Route protection component
│   ├── context/
│   │   └── AuthContext.js         # Authentication context and provider
│   ├── data/
│   │   └── books.js              # Dummy book data
│   ├── pages/
│   │   ├── HomePage.js           # Home page
│   │   ├── RegisterPage.js        # Registration page
│   │   ├── LoginPage.js           # Login page
│   │   ├── BookCataloguePage.js   # Book catalogue with search/filter
│   │   ├── IssueBookPage.js       # Issue book page
│   │   ├── ReturnBookPage.js      # Return book page
│   │   ├── ContactPage.js         # Contact page
│   │   ├── AboutPage.js           # About page
│   │   └── NotFoundPage.js        # 404 page
│   ├── styles/
│   │   └── index.css              # Global styles
│   ├── App.js                     # Main app component with routing
│   ├── index.js                   # React entry point
│   └── package.json               # Dependencies and scripts
└── README.md                       # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd library-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📋 Usage Guide

### For New Users

1. **Register**: Click "Register" in the navbar and create a new account
   - Enter your name, email, and password
   - Password must be at least 6 characters
   - Email must be valid

2. **Login**: Click "Login" and enter your credentials
   - Use any email/password combination for testing

3. **Browse Books**: Visit the "Books" page to see the catalogue
   - Use search to find books by title or author
   - Filter by category or availability

4. **Issue a Book**: Click "Issue Book" (only available when logged in)
   - Select a book to borrow
   - You can issue up to 5 books at a time
   - Each book is issued for 14 days

5. **Return a Book**: Click "Return Book" (only available when logged in)
   - View all your issued books
   - Click "Return Book" button to return any book

### Navigation

- **Home**: Landing page with feature overview
- **Books**: Browse and search the book catalogue
- **Issue Book**: Borrow books (requires login)
- **Return Book**: Return borrowed books (requires login)
- **About**: Information about the system
- **Contact**: Send messages to library
- **Login/Register**: Authentication pages

## 🎨 Styling

The application uses modern CSS with:
- Gradient backgrounds (purple/blue theme)
- Responsive grid layouts
- Smooth transitions and hover effects
- Mobile-first design approach
- Color-coded statuses (available/unavailable books)

## 💾 Data Persistence

All user data is stored in browser localStorage:
- User login information
- List of issued books
- Book issuance dates and due dates

Data persists across browser sessions until manually cleared.

## 📚 Sample Books

The application includes 10 sample books:
1. To Kill a Mockingbird - Harper Lee
2. 1984 - George Orwell
3. Pride and Prejudice - Jane Austen
4. The Great Gatsby - F. Scott Fitzgerald
5. The Hobbit - J.R.R. Tolkien
6. Harry Potter and the Sorcerer's Stone - J.K. Rowling
7. The Catcher in the Rye - J.D. Salinger
8. Sapiens - Yuval Noah Harari
9. Atomic Habits - James Clear
10. Educated - Tara Westover

## 🔐 Authentication Details

- **Registration**: Any valid email can be used for testing
- **Login**: Use your registered email and password
- **Session**: Login persists using localStorage
- **Protected Routes**: Issue/Return pages require login

## 🚀 Advanced Features

### Context API for State Management
- `AuthContext` manages user authentication state
- Provides functions for login, logout, issue book, and return book
- Custom `useAuth` hook for easy access throughout the app

### Protected Routes
- Uses `ProtectedRoute` wrapper component
- Redirects unauthenticated users to login page
- Loading state handling during auth check

### Form Validation
- Email format validation
- Password strength checking
- Confirm password matching
- Required field validation
- Real-time error messages

### Search and Filter
- Full-text search by title or author
- Multi-select category filtering
- Availability filtering
- Filter reset functionality

## 🎯 Future Enhancements

Potential features for expansion:
- Backend API integration (Node.js/Express)
- Database for persistent storage (MongoDB)
- User profile management
- Book reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Fine management system
- Mobile app (React Native)

## 📝 Code Comments

All files include comprehensive comments explaining:
- Component purposes
- Function descriptions
- Variable meanings
- Complex logic explanations

## 🔄 Build for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📄 License

This project is open source and available for educational and personal use.

## 👨‍💻 Developer Notes

### Key Technologies Used
- **React 18**: Latest version with hooks
- **React Router DOM v6**: Modern routing
- **Context API**: State management
- **localStorage**: Client-side data persistence
- **CSS3**: Modern styling and responsive design

### Best Practices Implemented
- Functional components with hooks
- Component composition
- Separation of concerns
- Responsive design patterns
- Form validation
- Error handling
- Code documentation
- Consistent naming conventions

---

**Enjoy using LibraryHub! Happy Reading! 📚**

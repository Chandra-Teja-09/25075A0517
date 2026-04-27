# Quick Start Guide - Library Management System

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
Open your terminal/command prompt in the project folder and run:
```bash
npm install
```

This will install all required packages:
- react
- react-dom
- react-router-dom
- react-scripts

### Step 2: Start the Development Server
Run:
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 3: Start Using the Application

1. **Register**: Click "Register" and create a test account
   - Example Email: test@example.com
   - Password: password123 (minimum 6 characters)

2. **Login**: Use your registered credentials

3. **Explore**:
   - Browse books in the catalogue
   - Search for specific books
   - Filter by category or availability
   - Issue books (when logged in)
   - Return your books

---

## 📋 Available Scripts

In the project directory, you can run:

### `npm start`
- Runs the app in development mode
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser
- The page will reload when you make changes
- You will also see any lint errors in the console

### `npm build`
- Builds the app for production to the `build` folder
- It correctly bundles React in production mode
- The build is minified and the filenames include the hashes
- Your app is ready to be deployed!

### `npm test`
- Launches the test runner in interactive watch mode

---

## 🎮 Test Credentials

For testing purposes, you can use any email and password:
- **Email**: test@example.com
- **Password**: test123

Or create your own during registration!

---

## 💡 Features to Try

1. **Search & Filter**
   - Search for "Harry Potter" in the catalogue
   - Filter by "Fantasy" category
   - Show only available books

2. **Issue Books**
   - Log in first (required)
   - Go to "Issue Book"
   - Select books to borrow
   - Check the due date (14 days from today)

3. **Return Books**
   - Log in first (required)
   - Go to "Return Book"
   - Click "Return Book" button to return any book

4. **Data Persistence**
   - Issue a book and refresh the page
   - Your issued books will still be there!
   - Log out and log in again
   - Your data persists across sessions

5. **Contact Form**
   - Visit the Contact page
   - Fill and submit the form
   - Try submitting with invalid data to see validation

---

## 🔧 Troubleshooting

### Port 3000 already in use?
If you get an error that port 3000 is already in use, you can:
1. Use a different port: `PORT=3001 npm start`
2. Or kill the existing process on port 3000

### npm install fails?
Try these solutions:
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules folder and package-lock.json
3. Run `npm install` again

### Changes not showing?
1. Make sure you saved the file
2. Check if the development server is still running
3. Try refreshing the browser (Ctrl+R or Cmd+R)
4. Clear browser cache if needed

---

## 📚 File Structure Overview

```
src/
├── components/          # Reusable React components
├── context/            # Context API for state management
├── pages/              # Page components for each route
├── data/               # Static data (books)
├── styles/             # CSS stylesheets
├── App.js              # Main app component
└── index.js            # React entry point
```

---

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 💾 Data Storage

All user data is stored in browser's localStorage:
- User login information
- Issued books list
- Book details (title, author, issue date, due date)

Data is NOT sent to any server (local storage only).

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12 → Console tab)
2. Make sure Node.js is installed: `node --version`
3. Make sure npm is installed: `npm --version`
4. Try restarting the development server
5. Review the code comments for implementation details

---

## 🎓 Learning Resources

This project demonstrates:
- React functional components with hooks
- React Router for navigation
- Context API for state management
- Form handling and validation
- localStorage for data persistence
- CSS responsive design
- Component composition
- Conditional rendering

Great project to learn modern React development!

---

Enjoy building! 🎉

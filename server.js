// Import express
import express from 'express';
const app = express();
const PORT = 5000;

// Custom Middleware
const customMiddleware = (req, res, next) => {
  req.user = "Guest";
  next(); // Pass control to the next handler
};

// Route using the middleware
app.get('/welcome', customMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

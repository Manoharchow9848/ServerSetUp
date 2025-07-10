import express from 'express';

const router = express.Router();



router.get('/books', (req, res) => {
  res.send('Here is the list of books!');
});

router.post('/books', (req, res) => {
  res.send('Book has been added!');
});

export default router;
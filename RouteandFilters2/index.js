import express from 'express';
import bookRouter from './routes/book.route.js';


const app = express();
const port = 3000;


app.use('/api', bookRouter);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
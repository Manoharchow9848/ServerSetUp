import express from 'express';
import productRouter from './routes/product.route.js';
const app = express();

app.use('/api/products', productRouter);





app.listen(3000, () => {  
    console.log('Server is running on http://localhost:3000');
});
import express from 'express';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import cartRouter from './routes/cart.router.js';

const app = express();

app.use('/api/auth', userRouter); 
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
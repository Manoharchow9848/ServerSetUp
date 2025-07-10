import express from 'express'
import authRoutes from './routers/auth.route.js'
import productRoutes from './routers/product.route.js'
const app = express();

const port = 3000
app.use('/api/auth',authRoutes)
app.use('/api/list',productRoutes)

app.listen(port,()=>{
    console.log(`app running on port ${port}`); 
})
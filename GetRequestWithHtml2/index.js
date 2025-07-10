import express from 'express';
import  path from 'path';


const app = express();
app.use(express.static('public'));
 app.use(express.json()); 
app.get('/products',(req,res)=>{
   res.sendFile(path.join(process.cwd(),"views","form.html"));
})
app.post('/products',(req,res)=>{
   
    let productName = req.body;
    console.log('Product Name:', productName);
    res.json({ message: 'Product submitted successfully', productName });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
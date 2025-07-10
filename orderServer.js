import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Order Server!</h1>');
})

app.get('/orders', (req, res) => {
      res.send('<h1>Here is the list of all orders</h1>');  
})
app.post('/orders', (req, res) => {
      res.send('<h1>A new order has been created</h1>');  
})
app.get('/user', (req, res) => {
      res.send('<h1>Here is the list of all users</h1>');  
})
app.post('/user', (req, res) => {
      res.send('<h1>A new user has been added</h1>');  
})




app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
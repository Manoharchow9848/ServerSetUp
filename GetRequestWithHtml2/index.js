import express from 'express';
import  path from 'path';


const app = express();

app.get('/products',(req,res)=>{
    
   res.sendFile(path.join(process.cwd(),"views","form.html"));
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
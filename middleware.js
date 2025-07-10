import express from 'express';

const app = express();



app.use((req, res, next) => {
    console.log(`Authentication middleware caled`)
    next();
});

app.use("/libary-2",(req,res,next)=>{
    console.log("Book recomndation")
    next()
})

app.get("/libary-2",(req,res,next)=>{
    res.send("<h1>Libary entered</h1>")
})





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
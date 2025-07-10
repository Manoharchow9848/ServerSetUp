import express from 'express';
import studentRouter from './routes/student.route.js';
import courseRouter from './routes/course.route.js';


const app = express();
app.use('/api/students', studentRouter);
app.use('/api/courses', courseRouter);




app.listen(3000, () => 
    {  console.log('Server is running on port 3000');
});
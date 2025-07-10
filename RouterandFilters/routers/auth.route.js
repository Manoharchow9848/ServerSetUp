import express from 'express';

const router = express.Router();


router.post('/signin',(req,res)=>{
    res.send("Sign In Route")
})
router.post('/login',(req,res)=>{
    res.send("LogIn Route")
})
router.post('/logout',(req,res)=>{
    res.send("LogOut Route")
})

router.get('/profile',(req,res)=>{
    res.send("Profile Route")
})

export default router;
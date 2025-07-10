import express from 'express';
import { getAllUsers, addUser, getUserById } from '../controller/user.contoller.js';
const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addUser);

router.get('/users/:id', getUserById);



export default router;
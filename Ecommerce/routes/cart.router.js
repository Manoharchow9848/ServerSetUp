import express from 'express';
import { getCartItemWithUserId,addProductToCartWithUserId } from '../controller/cart.controller.js';
const router = express.Router();


router.get('/:userId', getCartItemWithUserId);
router.post('/:userId', addProductToCartWithUserId);



export default router;
import express from 'express';
import { getAllProducts,getProductById,addProduct } from '../controller/product.controller.js';
const router = express.Router();

router.get('/',getAllProducts);
router.post('/', addProduct);

router.get('/:id', getProductById);





export default router;
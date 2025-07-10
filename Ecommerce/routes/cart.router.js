import express from 'express';

const router = express.Router();


router.get('/:userId', (req, res) => {
    res.send(`Fetching cart for user with UserID: ${req.params.userId}`);
}
);
router.post('/:userId', (req, res) => {
    res.send(` Adding product to cart for user with UserID: ${req.params.userId}`);
}
);



export default router;
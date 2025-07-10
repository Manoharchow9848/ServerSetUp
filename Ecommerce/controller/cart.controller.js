export const getCartItemWithUserId = (req, res) => {
    res.send(`Fetching cart for user with UserID: ${req.params.userId}`);
}

export const addProductToCartWithUserId = (req, res) => {
    res.send(`Adding product to cart for user with UserID: ${req.params.userId}`);
}
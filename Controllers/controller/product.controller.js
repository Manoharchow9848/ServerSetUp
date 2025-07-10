
export const getAllProducts = (req, res) => {
  
  res.send('Fetching all products');
}

export const getProductById = (req, res) => {
  const productId = req.params.id;
  
  res.send(`Fetching product with ID: ${productId}`);
}

export const createProduct = (req, res) => {
  const newProduct = req.body;
  
  res.status(201).send(`Product created: ${JSON.stringify(newProduct)}`);
}
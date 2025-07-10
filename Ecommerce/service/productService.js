// services/productService.js

let products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

const addProduct = (productData) => {
  const newProduct = {
    id: products.length + 1,
    ...productData,
  };
  products.push(newProduct);
  return newProduct;
};

export default {
  getAllProducts,
    getProductById,
    addProduct
};

import productService from "../service/productService.js";
import path from "path";
export const getAllProducts = (req, res) => {
     res.sendFile(path.join(process.cwd(), "views", "products.html"));
}

export const addProduct = (req, res) => {
    const productData = req.body;
    const newProduct = productService.addProduct(productData);
    res.status(201).json(newProduct);
}

export const getProductById = (req, res) => {
    const productId = req.params.id;
    const product = productService.getProductById(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product not found" });
    }
}
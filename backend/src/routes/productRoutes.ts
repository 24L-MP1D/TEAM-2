import express from "express";
import {  createProduct, deleteProduct, getProducts, updateProduct, getProductsByCategory, getProduct} from "../controllers/productController";


const productRouter=express.Router();
    productRouter
        .get("/products", getProducts)
        .get("/product/:id", getProduct)
        .post("/product", createProduct)
        .get("/productdetails", getProduct)
        .put("/product/:id", updateProduct)
        .delete("/product/:id", deleteProduct)
        .get('/products/:id', getProductsByCategory);


        export {productRouter};

import express from "express";
import {  createProduct, deleteProduct, getProducts, updateProduct, getProductsByCategory } from "../controllers/productController";


const productRouter=express.Router();
    productRouter
        .get("/products", getProducts)
        .post("/product", createProduct)
        .put("/product/:id", updateProduct)
        .delete("/product/:id", deleteProduct)
        .get('/products/category/:categoryId', getProductsByCategory);


        export {productRouter};

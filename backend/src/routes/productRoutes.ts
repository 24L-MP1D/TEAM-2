import express from "express";
import {  createProduct, getProducts } from "../controllers/productController";


const productRouter=express.Router();
    productRouter
        .get("/products", getProducts)
        .post("/products", createProduct )


        export {productRouter};

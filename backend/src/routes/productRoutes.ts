import express from "express";
import {  createProduct, deleteProduct, getProducts, updateProduct, getProductsByCategory, getProduct, filterByprice, filterBymonth, filterBysearch} from "../controllers/productController";


const productRouter=express.Router();
    productRouter
        .get("/products", getProducts)
        .get("/product/:id", getProduct)
        .post("/product", createProduct)
        .get("/productdetails", getProduct)
        .put("/product/:id", updateProduct)
        .delete("/product/:id", deleteProduct)
        .get("/productsfilteredby", getProductsByCategory)
        .get("/productsfilteredbyMonth", filterBymonth)
        .get("/productsfilteredbyprice", filterByprice)
        .get("/productsfilteredbySearch",  filterBysearch)


        export {productRouter};

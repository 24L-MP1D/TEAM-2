import express, { NextFunction ,Request,Response} from "express";
import {  createProduct, deleteProduct, getProducts, updateProduct, getProductsByCategory, getProduct, filterByprice, filterBymonth, filterBysearch} from "../controllers/productController";
import "dotenv/config";
import jwt from 'jsonwebtoken'



const productRouter=express.Router();

function checkAuth(req:Request, res:Response, next:NextFunction){
    const authToken=req.headers["authtoken"];
    const authSecretKey=process.env.AUTH_SECRET_KEY || "";
    console.log(authToken);
    if(!authToken){
        return res.sendStatus(403);

    }
    if(!jwt.verify(authToken+"", authSecretKey)){
        return res.sendStatus(403);
    }
    next();
}


    productRouter
        .get("/products",getProducts)
        .get("/product/:id", getProduct)
        .post("/product", createProduct)
        .get("/productdetails",checkAuth, getProduct)
        .put("/product/:id",checkAuth, updateProduct) 
        .delete("/product/:id", deleteProduct)
        .get("/productsfilteredby", getProductsByCategory)
        .get("/productsfilteredbyMonth", filterBymonth)
        .get("/productsfilteredbyprice", filterByprice)
        .get("/productsfilteredbySearch",  filterBysearch)


        export {productRouter};

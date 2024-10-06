import express from "express";
import { createCart, deleteCart, getCart, updateCart } from "../controllers/cartController";




const cartRouter=express.Router();
    cartRouter
        .get("/order", getCart)
        .get("/order/", getCart)
        .post("/order", createCart)
        // .get("/orderdetails", getOrder)
        .put("/order/:id", updateCart)
        .delete("/order/:id", deleteCart)

        export {cartRouter};

import express from "express";
import { createCart, deleteCart, getCart, updateCart } from "../controllers/cartController";

const cartRouter=express.Router();
    cartRouter
        .get("/cart", getCart)
        .get("/cart/", getCart)
        .post("/cart", createCart)
        .put("/cart/:id", updateCart)
        .delete("/cart/:id", deleteCart)

        export {cartRouter};

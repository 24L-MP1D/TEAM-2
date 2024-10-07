import express from "express";
import {getCart, createCart} from "..//controllers/CartController";

const cartRouter = express.Router();
cartRouter 
.get("/cart", getCart)
.get("cart/", getCart)
.post("/cart", createCart)
export {cartRouter};
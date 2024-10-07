import express from "express";
<<<<<<< HEAD
import { getCart, createCart } from "..//controllers/CartController";

const cartRouter = express.Router();
cartRouter
    .get("/cart", getCart)
    .get("cart/", getCart)
    .post("/productdetails", createCart)
export { cartRouter };
=======
import {getCart, createCart} from "..//controllers/CartController";

const cartRouter = express.Router();
cartRouter 
.get("/cart", getCart)
.get("cart/", getCart)
.post("/cart", createCart)
export {cartRouter};
>>>>>>> d260c444e8e1dc8e4f0862d2e7f48e737096dd6b

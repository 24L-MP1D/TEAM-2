//    # Handles order processing logic
import { Request, Response } from "express";
import { cartModel } from "../models/cart";

const getCart = async(req: Request, res:Response)=>{
    try {
        const cart = await cartModel.find();
        res.send(cart);
    }
    catch (error){
        res.status(400).json({error:"error happened during finding the cart"})
    }
}

const createCart = async(req: Request, res:Response)=>{
    try {
        const {id}=req.query;
        const {userId}=req.headers;
        const { selectedSizes, qty} = req.body;
        const cart = await cartModel.create({
            selectedSizes,
             qty,
             id,
             userId
        });
        res.send(cart);
    }
    catch (error){
        res.status(400).json({error:"error happened during finding the cart"})
    }
}

export {getCart, createCart}
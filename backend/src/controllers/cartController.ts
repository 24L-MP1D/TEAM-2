//    # Handles cart processing logic
import { Request, Response } from "express";
import { cartModel } from "../models/cart";

const getCart=async(req:Request, res:Response)=>{
    try{
        const cart = await cartModel.find();
        res.send(cart);
    }catch(error){
        res.status(400).json({error:"error happened during finding the cart"})
    }
}
const createCart =async(req:Request, res:Response)=>{
    try{
        const {name, userId, uploadedPhotos,price,selectedColors,selectedSizes, qty}=req.body;
        const cart = await cartModel.create({
            name, userId, uploadedPhotos,price,selectedColors,selectedSizes, qty
        });
        res.status(201).json({message:"Successfully read the cart"})
    }catch(error){
        res.status(400).json({message:"Error occurred while creating the cart"})
    }
}

const updateCart=async(req:Request, res:Response)=>{
    try{
        const {id}=req.params;
        const {name}=req.body;
        await cartModel.findByIdAndUpdate(id,{
            name
        })
        res.status(200).json({message:"Successfully updated the cart"});
    }catch(error){
        res.status(400).json({error:"error happened during updating the cart"})
    }
}

const deleteCart=async(req:Request, res:Response)=>{
    try{
        const {id}=req.params;
        await cartModel.findByIdAndDelete({_id:id});
        res.status(204).json({message :"successfully deleted the cart"});

    }catch(error){
        res.status(400).json({error:"error happened during deleting the cart"})
    }
}
export {getCart,createCart, deleteCart, updateCart};
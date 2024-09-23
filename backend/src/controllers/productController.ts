import { productModel } from "../models/product"
import {Request, Response} from "express";


const getProducts=async(req: Request,res:Response)=>{
    try{
        const products=await productModel.find()
        res.send(products)
    }catch(error){
        res.send("error in getproduct")
    }
}


const createProduct= async(req:Request, res:Response)=>{
    try{
        const {name, addInformation, barCode}=req.body;
        const product=await productModel.create({
            name,
            addInformation,
            barCode,

        })
        res.send(product)
    }catch(error){
        res.send("error in product");
        
    }

}

const updateProduct=(req,res)=>{
    try{
        
    }catch(error){

    }
}

export{createProduct, getProducts};
import { productModel } from "../models/product"
import {Request, Response} from "express";
const getProducts=async(req:Request, res:Response)=>{
    try{
        const products=await productModel.find();
        res.send(products);

    }catch(error){
        res.status(400).json({error:"error happened during finding the product"})
    }
}

const createProduct=async(req:Request, res:Response)=>{
    try{

        const {name,addInformation,barCode,price,qty,category,color,size,tag,createdAt}=req.body;
        const product=await productModel.create({

            name,
            addInformation,
            barCode,
            price,
            qty,
            category,
            color,
            size,
            tag,
            createdAt:new Date,
        }
        )
        res.status(201).json({message:"Successfully created the product"});
    }catch (error){
        res.status(400).json({error:"Error occurred while creating the product"})

    }
}

const updateProduct=async(req:Request, res:Response)=>{
    try{
        const{id}=req.params;
        const{name,addInformation,barCode,price,qty,category,color,size,tag,createdAt}=req.body;
        const product=await productModel.findByIdAndUpdate(id,{
            name,
            addInformation,
            barCode,
            price,
            qty,
            category,
            color,
            size,
            tag,
            createdAt
        })
        res.status(200).json({message:"Successfully updated the product"});
    }catch(error){
        res.status(400).json({error:"error happened during updating the product"})
    }
}

const deleteProduct=async(req:Request, res:Response)=>{
    try{
        const{id}=req.params;
        const product=await productModel.findByIdAndDelete({_id:id});
        res.status(204).json({message :"successfully deleted the product"});

    }catch(error){
        res.status(400).json({error:"error happened during deleting the product"})

    }
}
const getProductsByCategory = async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    try {
        const products = await productModel.find({ category: categoryId }); // Adjust as per your schema
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: "Error occurred while fetching products" });
    }
};


export{getProducts, createProduct,updateProduct,deleteProduct, getProductsByCategory};
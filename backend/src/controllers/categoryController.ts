import { Request, Response } from "express";
import { categoryModel } from "../models/category"


// const categories =[ 
//     {
//     categoryName : 
// }
// ]
const getCategories=async(req:Request, res:Response)=>{
    try{
        const categories=await categoryModel.find();
        res.send(categories);
    }catch(error){
        res.status(400).json({error:"error happened during finding the category"})

    }
}
const createCategory=async(req:Request, res:Response)=>{
    try{
        const {categoryName}=req.query;
        await categoryModel.create({
            categoryName
        });
        res.status(201).json({message:"Successfully created the category"})
    }catch(error){
        res.status(400).json({message:"Error occurred while creating the category"})
    }
}
const updateCategory=async(req:Request, res:Response)=>{
    try{
        const {id}=req.query;
        const {categoryName}=req.query;
        await categoryModel.findByIdAndUpdate(id,{
            categoryName
        })
        res.status(200).json({message:"Successfully updated the category"});
    }catch(error){
        res.status(400).json({error:"error happened during updating the category"})
    }
}

const deleteCategory=async(req:Request, res:Response)=>{
    try{
        const {id}=req.params;
        await categoryModel.findByIdAndDelete({_id:id});
        res.status(204).json({message :"successfully deleted the category"});

    }catch(error){
        res.status(400).json({error:"error happened during deleting the category"})
    }
}
export {getCategories,createCategory, deleteCategory, updateCategory};
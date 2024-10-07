
import { productModel } from "../models/product";
import { Request, Response } from "express";
const getProducts = async (req: Request, res: Response) => {
  try {

    const products = await productModel.find();
    res.send(products);
  } catch (error) {
    res
      .status(400)
      .json({ error: "error happened during finding the products" });
  }
};



const getProduct=async(req:Request, res:Response)=>{

    try{
        const {id}=req.query;
        const product=await productModel.findById(id);
        res.send(product);
    }catch(error){
        res.status(400).json({error:"error happened during finding the product"})

    }
}



const createProduct=async(req:Request, res:Response)=>{
    try{
        const {name,addInformation,barCode, uploadedPhotos,price,qty,category,selectedColors,selectedSizes,tag,createdAt}=req.body;
        const product=await productModel.create({

            name,
            addInformation,
            barCode,
            uploadedPhotos,
            price,
            qty,
            category,
            selectedColors,
            selectedSizes,
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
        const{name,addInformation,barCode, uploadedPhotos,price,qty,category,selectedColors,selectedSizes,tag,createdAt}=req.body;
        const product=await productModel.findByIdAndUpdate(id,{
            name,
            addInformation,
            barCode,
            uploadedPhotos,
            price,
            qty,
            category,
            selectedColors,
            selectedSizes,
            tag,
            createdAt
        })
        res.status(200).json({message:"Successfully updated the product"});
    }catch(error){
        res.status(400).json({error:"error happened during updating the product"})
    }
}







const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete({ _id: id });
    console.log(id);
    res.status(200).json({ message: "successfully deleted the product" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "error happened during deleting the product" });
  }
};

const getProductsByCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.query;
  console.log(categoryName);
  try {
    const products = await productModel.find({ category: categoryName });
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res
      .status(400)
      .json({
        error:
          "Error occurred while fetching  products that filtered by the category",
      });
  }
};

const filterByprice = async (req: Request, res: Response) => {
  const { lowPrice, highPrice } = req.query;
  console.log(lowPrice, highPrice);
  try {
    const products = await productModel.find({
      price: {
        $gt: lowPrice,
        $lt: highPrice,
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res
      .status(400)
      .json({
        error:
          "Error occurred while fetching  products that filtered by the price",
      });
  }
};
const filterBymonth = async (req: Request, res: Response) => {
  const { startMonth, endMonth } = req.query;
  try {
    const products = await productModel.find({
      createdAt: {
        $gt: startMonth,
        $lt: endMonth,
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res
      .status(404)
      .json({
        error:
          "Error occurred while fetching  products that filtered by the month",
      });
  }
};

const filterBysearch = async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    const produts = await productModel.find({
      $or: [{
        name: {
        $regex: search,
        $options: "i",
      }},
      {category:{
        $regex:search,
        $options:"i",
      }},
      {barCode:{
        $regex:search,
        $options:"i"
      }},
    //   {price:{
    //     $regex:search,
    //     $options:"i"
    //   }},
    //   {qty:{
    //     $regex:search
    //   }}
    ]
    });

    res.status(200).json(produts);
  } catch (error) {
    res
      .status(404)
      .json({
        error:
          "Error occurred while fetching  products that filtered by the search",
      });
  }
};

export {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  filterByprice,
  filterBymonth,
  filterBysearch,
};

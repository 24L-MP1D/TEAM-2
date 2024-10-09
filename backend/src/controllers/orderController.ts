import { orderModel } from "../models/order";
import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";

const createOrder = async (req: Request, res: Response) => {
 

  try {
    // const token=req.cookies.token;
    // console.log(token)
    // const decoded = jwtDecode(token);
    // console.log(decoded)


    const { lastName, name, phoneNumber, addInfo } = req.body;
    const order = await orderModel.create({
      lastName,
      name,
      phoneNumber,
      addInfo,
      createdAt: new Date(),
    });
    res.status(201).json({ message: "Successfully ordered" });
  } catch (error) {
    res.status(400).json({ error: "Error occurred while ordering" });
  }
};

const getOrder = async (req: Request, res: Response) => {

  try {
    
    res.status(200).json({message:"ffdsadf"});
  } catch (error) {
    res.status(400).json({ error: "error happened during finding the product" })

  }
}

export { createOrder,getOrder };

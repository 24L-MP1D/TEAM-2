import { orderModel } from "../models/order";
import { Request, Response } from "express";
import { jwtDecode } from "jwt-decode";

const createOrder = async (req: Request, res: Response) => {
  try {
    const token=req.cookies.token
    const decodedToken = jwtDecode<{userId:string}>(token);
    const {userId}=decodedToken;

    console.log(userId)
    // console.log(decoded)

    const { orderData } = req.body;
    const { lastName, name, phoneNumber, location, addInfo, chosenProducts } = orderData;
    // const {productId, productName,productPhotos, productTag, qty,size, price}=local;
   

    const order = await orderModel.create({
      userId,
      lastName,
      name,
      phoneNumber,
      location,
      addInfo,
      chosenProducts,
      createdAt: new Date(),
    });

    console.log(order)
   
    res.status(201).json({ message: "Successfully ordered" });
  } catch (error) {
    res.status(400).json({ error: "Error occurred while ordering" });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "ffdsadf" });
  } catch (error) {
    res
      .status(400)
      .json({ error: "error happened during finding the product" });
  }
};

export { createOrder, getOrder };

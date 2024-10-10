import express, { NextFunction, Request, Response } from "express";
import { createOrder,  getOrders } from "../controllers/orderController";
import jwt from "jsonwebtoken";



const orderRouter = express.Router();

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    const token=req.cookies.token;
    
    console.log(token)
    if (!token) {
      return res
        .status(401)
        .send({ sucess: false, message: "unauthenticated user" });
    }
    try {
      const authSecretKey = process.env.ACCESS_TOKEN_SECRET || "";
      const isVerified = jwt.verify(token, authSecretKey);
  
      if (isVerified){

      } return next();
    } catch (error) {
      return res.status(401).send({ sucess: false, message: "invalid token" });
    }
  };
  
  


orderRouter
    .post("/buySteps", createOrder)
    .get("/orders", getOrders)

export { orderRouter };

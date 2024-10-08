import express, { NextFunction, Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
  getProductsByCategory,
  getProduct,
  filterByprice,
  filterBymonth,
  filterBysearch,
} from "../controllers/productController";
import "dotenv/config";
import jwt from "jsonwebtoken";

const productRouter = express.Router();

function checkAuth(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers["authtoken"];
  const authSecretKey = process.env.ACCESS_TOKEN_SECRET || "";
  console.log("auth", authToken);

  
  if (!authToken) {
    return res.sendStatus(403);
  }
  if (!jwt.verify(authToken as string, authSecretKey)) {
    return res.sendStatus(403);
  }
  next();
}

productRouter
  .get("/products", getProducts)

  .get("/product/:id",checkAuth, getProduct)
  
  .post("/product", createProduct)
  .put("/product/:id", updateProduct)
  .delete("/product/:id", deleteProduct)



  .get("/productsfilteredby", getProductsByCategory)
  .get("/productsfilteredbyMonth", filterBymonth)
  .get("/productsfilteredbyprice", filterByprice)
  .get("/productsfilteredbySearch", filterBysearch);

export { productRouter };

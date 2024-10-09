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



const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .send({ sucess: false, message: "unauthenticated user" });
  }
  try {
    const authSecretKey = process.env.ACCESS_TOKEN_SECRET || "";
    const isVerified = jwt.verify(token, authSecretKey);

    if (isVerified) return next();
  } catch (error) {
    return res.status(401).send({ sucess: false, message: "invalid token" });
  }
};

productRouter
  .get("/products", getProducts)
  .get("/product/:id", getProduct)
  .post("/product", createProduct)
  .put("/product/:id", updateProduct)
  .delete("/product/:id", deleteProduct)

  .get("/productsfilteredby", getProductsByCategory)
  .get("/productsfilteredbyMonth", filterBymonth)
  .get("/productsfilteredbyprice", filterByprice)
  .get("/productsfilteredbySearch", filterBysearch);

export { productRouter };

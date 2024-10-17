import express from "express";
import { connectDb } from "../src/configs/db";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "../src/routes/userRouter";
import { authRouter } from "../src/routes/authRouter";
import { productRouter } from "../src/routes/productRoutes";
import { UserModel } from "../src/models/user";
import mongoose from "mongoose";
import { categoryRouter } from "../src/routes/category";
import { uploadRouter } from "../src/routes/uploadpictureRouter";
import { cartModel } from "../src/models/cart";
import { orderRouter } from "../src/routes/orderRouter";
import cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

app.use(cors({
  credentials: true,
  origin: ["http://localhost:3000","http://localhost:3001","https://ecommercefrontend-beige.vercel.app/" ]

}));


app.use(express.json());

app.use(cookieParser());

const port = 4000;


connectDb();



app.use(userRouter);
app.use(authRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(uploadRouter);

app.use(orderRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

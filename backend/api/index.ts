import express from "express";
import { connectDb } from "../src/configs/db";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "../src/routes/userRouter";
import { authRouter } from "../src/routes/authRouter";
import { productRouter } from "../src/routes/productRoutes";
import { UserModel } from "../src/models/user";
import mongoose from "mongoose"; import { categoryRouter } from "../src/routes/category";
import mongoose from "mongoose"; import { categoryRouter } from "../src/routes/category";
import { uploadRouter } from "../src/routes/uploadpictureRouter";
import { cartModel } from "../src/models/cart";


dotenv.config();

const app = express();
app.use(cors());
app.use(cors());
app.use(express.json());
const port = 4000;

console.log("test")
console.log("test")
connectDb();

app.use(userRouter);
app.use(authRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(uploadRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

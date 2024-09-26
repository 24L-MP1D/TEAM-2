import express from "express";
import { connectDb } from "./configs/db";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRouter";
import { authRouter } from "./routes/authRouter";
import { productRouter } from "./routes/productRoutes";
import { UserModel } from "./models/user";
import mongoose from "mongoose";import { categoryRouter } from "./routes/category";

dotenv.config();

const app = express();
app.use(cors()); 
app.use(express.json());
const port = 4000;


connectDb();

app.get("/", (req: any, res: { send: (arg0: { name: string; }[]) => void; }) => {
  res.send([{ name: "naraa" }]);
});

app.use(userRouter);
app.use(authRouter);
app.use(productRouter);
app.use(categoryRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

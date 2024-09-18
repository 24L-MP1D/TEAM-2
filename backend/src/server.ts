import express from "express";
import { connectDb } from "./configs/db";

import dotenv from "dotenv";
import { userRouter } from "./routes/userRouter";
dotenv.config();
const app = express();
const port = 4000;
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send([{ name: "naraa" }]);
});

app.use(userRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

import express from "express";
import { connectDb } from "./configs/db";

import dotenv from "dotenv";
import { UserModel } from "./models/user";
dotenv.config();
const app = express();
const port = 4000;
app.use(express.json());

connectDb();

app.get("/", (req, res) => {
  res.send([{ name: "naraa" }]);
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
});

app.post("/users", async (req, res) => {
  try{
    const {userName,email}=req.body;
    console.log({userName, email, hi: 'hi'});
    const user = await UserModel.create({
      userName,
      email,
     });
     res.send(user);
  }catch(error){
    res.status(400).json({errorMessage:"error happened"})
  }

 
});
app.post("/users/:id", async (req, res) => {
  try{
    const {userName,email}=req.body;
    const {id}=req.params;
    console.log({userName, email, });
    const user = await UserModel.findByIdAndUpdate(id,{
      userName,
      email,
     });
     res.send(user);
  }catch(error){
    res.status(400).json({errorMessage:"error happened"})
  }

 
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

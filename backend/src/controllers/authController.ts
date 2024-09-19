import {Request, Response} from 'express';
import { UserModel } from '../models/user';
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from 'jsonwebtoken'

const AUTH_SALT=process.env.AUTH_PASSWORD || "";
const ACCESS_TOKEN_SECRET=process.env.ACCESS_TOKEN_SECRET|| "";

const register=async (req:Request,res:Response)=>{
    try{
        const {email, password}=req.body;
        if(!email || !password) return res.sendStatus(400);
        const hashedPassword=await bcrypt.hash(String(password) ,Number(AUTH_SALT));
       await UserModel.create({
            email,
            password:hashedPassword,
        });
        res.status(201).json({message:"successfully registered"})
    }catch(error){
        console.log(error)
        res.status(400).json({errorMessage:"error happened in registration process"})
    }
}


const login=async (req:Request,res:Response)=>{
    try{
        const {email, password}=req.body;
        const user=await UserModel.findOne({ email});
        console.log(user);
        if(!user) return res.sendStatus(404);
        const isSame= await bcrypt.compare(String(password), user.password)
        if (isSame) {
            const accesstoken=jwt.sign(
                {userId: user._id, email},
                    ACCESS_TOKEN_SECRET,
                {
                    expiresIn:"1day",
                }
            );
            res.send(accesstoken);
        }
     }   catch(error){
        res.status(401);
    }
    
}

export{register, login};
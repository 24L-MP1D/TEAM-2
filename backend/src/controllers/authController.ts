import {Request, Response} from 'express';
import { UserModel } from '../models/user';
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from 'jsonwebtoken'
import { otpModel } from '../models/otp';


const AUTH_SALT=process.env.AUTH_PASSWORD || "";
const ACCESS_TOKEN_SECRET=process.env.ACCESS_TOKEN_SECRET|| "";

const register=async (req:Request,res:Response)=>{
    try{
        const {name,email, password}=req.body;
        if(!name || !email || !password) return res.sendStatus(400);
        const hashedPassword=await bcrypt.hash(String(password) ,Number(AUTH_SALT));
       const user=await UserModel.create({
            
            name,
            email,
            password:hashedPassword,
        });
        res.status(201).json(user)
    }catch(error:unknown){
        if (error instanceof Error) { 
            if ((error as any).code === 11000) { 
                return res.status(400).json({ errorMessage: "Email already exists" });
            }
            return res.status(500).json({ errorMessage: error.message });
        }
        res.status(500).json({ errorMessage: "Server error" });
    }
}

// const createOtp=async (req:Request, res:Response)=>{
//     try{
//         const{ email}=req.body;
//         if(!email ) return res.sendStatus(400);
//         const otp=Math.floor(Math.random()*899999)+100000;
//         const register=await otpModel.create({email,otp})

//     }catch{

//     }
// }


const login=async (req:Request,res:Response)=>{

    try{
        
        const {email, password}=req.body;
  
        const user=await UserModel.findOne({ email});

     
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
            res.status(201).json({accesstoken});
            // return res.json({accesstoken})
            
        }else{
            return res.status(400).json({ errorMessage: "password is wrong" });

        }

     }   catch(error){
        res.status(500).json({ errorMessage: "Server error of login" });
    }
    
}

export{register, login};
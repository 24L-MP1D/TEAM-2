import { model, Schema } from "mongoose";

const otpSchema=new Schema({
    email:String,
    otp:String,
    createdAt:{type:Date, expires:"5m",default:Date.now}
})
export const otpModel=model("otp",otpSchema)
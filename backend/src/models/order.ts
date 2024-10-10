import { model, Schema } from "mongoose";

const orderSchema=new Schema({
    userId:String,
    productId:String,
    chosenProducts:{},
    orderDAta:{},

    lastName:String,
    userName:String,
    phoneNumber:Number,
    location:String,
    addInfo:String,
    status:String,
    paymentStatus:String,
    paymentType:String,
    deliveryDate:Date,
    amountPaid:Date,
    coupon:String,
    description:String,
    createdAt: Date,
})

export const orderModel=model("ordermodels", orderSchema)
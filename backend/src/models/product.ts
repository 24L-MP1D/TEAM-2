import { model, Schema } from "mongoose";

const productsShema=new Schema({

  name: String,
  addInformation:String,
  barCode:String,
  categoryId: String,
//   price: Double,
  qty: Number,
  thumbnails: String,
//   images: String[],
  coupon: String,
//   salePercent: Double,
  description: String,
  viewsCount: Number,
  createdAt: Date,
  updatedAt: Date,

})

export const productModel=model("productModel", productsShema)
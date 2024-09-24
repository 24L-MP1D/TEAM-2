import { model, Schema } from "mongoose";

const productsShema=new Schema({

  name: String,
  addInformation:String,
  barCode:String,
  categoryId: String,
  price: Number,
  qty: Number,
  tag: String,
  // images: String[],
  coupon: String,
  salePercent: Number,
  description: String,
  viewsCount: Number,
  createdAt: Date,
  updatedAt: Date,

});
export const productModel=model("productmodels", productsShema)
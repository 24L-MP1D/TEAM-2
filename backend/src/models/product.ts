import { model, Schema } from "mongoose";

const productsShema=new Schema({

  name: String,
  addInfo:String,
  barCode:String,
  uploadedPhotos:[{type:String}],
  price: Number,
  qty: Number,
  category: String,
  selectedColors: [{ type: String }],
  selectedSizes: [{type:String}],
  tag: String,
  // coupon: String,
  // salePercent: Number,
  // description: String,
  // viewsCount: Number,
  createdAt: Date,
  updatedAt: Date,

});
export const productModel=model("productmodels", productsShema)
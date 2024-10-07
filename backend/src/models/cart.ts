import { model, Schema } from "mongoose";


const cartSchema=new Schema({
  userId: String,
  orderName: String,
  addInformation:String,
  barCode:String,
  uploadedPhotos:[{type:String}],
  price: Number,
  qty: Number,
  category: String,
  selectedColors: [{ type: String }],
  selectedSizes: [{type:String}],
  tag: String,
  createdAt: Date,
  updatedAt: Date,

});
export const cartModel=model("orderModels", cartSchema)
import {model, Schema} from "mongoose";

const cartSchema= new Schema({
  userId: String,
  productId:String,
  selectedCount: Number,
  // selectedColors: [{ type: String }],
  selectedSizes: [{type:String}],
  createdAt: Date,
  updatedAt: Date,
})
 export const cartModel= model("cartModels", cartSchema)
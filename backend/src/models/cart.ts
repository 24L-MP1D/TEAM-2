import {model, Schema} from "mongoose";

const cartSchema= new Schema({
<<<<<<< HEAD
  userId: String,
  productId:String,
  selectedCount: Number,
  // selectedColors: [{ type: String }],
  selectedSizes: [{type:String}],
=======
    name: String,
  addInformation:String,
  barCode:String,
  uploadedPhotos:[{type:String}],
  price: Number,
  qty: Number,
  category: String,
  selectedColors: [{ type: String }],
  selectedSizes: [{type:String}],
  tag: String,
>>>>>>> d260c444e8e1dc8e4f0862d2e7f48e737096dd6b
  createdAt: Date,
  updatedAt: Date,
})
 export const cartModel= model("cartModels", cartSchema)
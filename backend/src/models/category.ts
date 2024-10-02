import { model, Schema } from "mongoose";

const categoriesSchema=new Schema({
    categoryName:String
})
export const categoryModel=model("categorymodels", categoriesSchema);
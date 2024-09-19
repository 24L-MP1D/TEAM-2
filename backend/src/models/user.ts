import { model, Schema } from "mongoose";
const UserSchema = new Schema({
  userName: String,
  email: String,
  phoneNumber: String,
  password: String,
  address: String,
  zipCode: Number,
  cartId: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model("usermodels", UserSchema);

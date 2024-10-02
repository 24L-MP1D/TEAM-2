import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: {
    type:String,
    required:[true, "please provide an email!"],
    unique:[true, "email exist"],
  },
  phoneNumber: String,
  password: {
    type: String,
    required:[true, "please provide an password"],
    unique:false,
  },
  address: String,
  zipCode: Number,
  cartId: String,
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model("usermodels", UserSchema);


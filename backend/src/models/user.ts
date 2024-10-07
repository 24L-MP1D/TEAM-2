import { model, Schema } from "mongoose";

const UserSchema = new Schema({

  name: String,
  email: {
    type:String,
    required:[true, "please provide an email!"],
    unique:[true, "email exist"],
  },
  password: {
    type: String,
    required:[true, "please provide an password"],
    unique:false,
  },
  
  createdAt: Date,
  updatedAt: Date,
});
export const UserModel = model("usermodels", UserSchema);


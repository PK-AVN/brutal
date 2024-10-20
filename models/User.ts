import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "User Email already exists!"],
      required: [true, "Email is required"],
    },
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;

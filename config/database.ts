"use server";
import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
    mongoose.set("strictQuery", true);

  if (connected) {
    console.log("DB is connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    connected = true;
  } catch (error) {
    console.log(error);
  }
};

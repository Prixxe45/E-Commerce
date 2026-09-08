import mongoose from "mongoose";
import { config } from "./config.js";

const connectDB = async () => {
  try{
    const mongoURI = config.MONGO_URI;


    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

export default connectDB;
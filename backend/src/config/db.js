import mongoose from "mongoose";

 export const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!")
  } catch (error){
    console.error("ERROR ONNECTING TO MONGODB", error);
    process.exit(1);
  }
};
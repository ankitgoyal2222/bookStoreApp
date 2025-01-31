import mongoose from "mongoose";
import dotenv from "dotenv";
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MongoDBURI);
        console.log("Db conneced successfully")
    }
    catch(err){
        console.log(err.message);
    }
}
import mongoose from "mongoose";

export async function Connect() {
    if(process.env.DATABASE_URL){
    await mongoose.connect(process.env.DATABASE_URL!)
    console.log("connect")
    return 
    }
    
}
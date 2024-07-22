import mongoose from "mongoose";

export const connectdb = async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@shark-enterprises.flmwp3x.mongodb.net/Shark-Enterprises`).then(()=>console.log("DB Connected"));
}


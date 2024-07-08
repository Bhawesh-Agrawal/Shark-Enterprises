import mongoose from "mongoose";

export const connectdb = async ()=>{
    await mongoose.connect(`mongodb+srv://shark-enterprises:$Shark$1@shark-enterprises.flmwp3x.mongodb.net/Shark-Enterprises`).then(()=>console.log("DB Connected"));
}


import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname :{type:String,required:true},  
    name:{type:String,required:true},
    image:{type:Object,require:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData : {type:Object,default:{}},
},{minimize:false})

const userModel = mongoose.model.user || mongoose.model("user",userSchema)

export default userModel;
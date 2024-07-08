import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
    name: {type:String, required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    image : {type:String,required:true},
    company : {type:String,require:true},
    type : {type:String,require:true}
})

const productModel = mongoose.models.product || mongoose.model("product",product_schema)

export default productModel;
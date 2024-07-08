import productModel from "../models/productmodel.js";
import fs from 'fs'

//add food item 

const addProduct  = async (req, res)=>{

    let image_filename = `${req.file.filename}`;

    const product = new productModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        company:req.body.company,
        image:image_filename,
        type:req.body.type
    })
    try{
        await product.save()
        res.json({success:true,message:"Food Added"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

//all product list 

const product_list = async (req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

//remove product

const removeProduct = async (req,res)=>{
    try {
        const Product  = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${Product.image}`,()=>{})
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addProduct,product_list,removeProduct}

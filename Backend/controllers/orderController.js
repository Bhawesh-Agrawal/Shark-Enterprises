import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = "http://localhost:5173";

const placeOrder = async (req, res) => {
    try {
        // Save order details to database
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });
        await newOrder.save();

        // Clear cartData in userModel after placing order
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message:"Order Placed"});
    } catch (error) {
        console.error("Error placing order:", error);
        res.json({ success: false, message: "Error placing order" });
    }
};

const userOrder = async (req,res)=>{
    try{
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const listOrder = async (req,res)=>{
    try {
        const order = await orderModel.find({})
        res.json({success:true,data:order})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
    }
}

const updateStatus = async (req,res)=>{
    try{
        const orders = await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Updated"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder , userOrder, listOrder,updateStatus};

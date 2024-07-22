import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import validator from 'validator'
import fs from "fs"
import { Console } from "console";

//login user 
const loginUser  = async (req,res)=>{
    const {email,password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false,message:"User not found"})
        }

        const isMatch = user.password

        if (!isMatch) {
            return res.json({success:false,message:"Incorrect password"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
// register user
const registerUser = async (req,res)=>{
    let image_filename = req.file?req.file.filename:""
    const {firstname,lastname,email,name,password} = req.body;
    try{
        //checking is user already exist
        const exist = await userModel.findOne({email});
        if (exist) {
            return res.json({success:false,message:"User already exists"})
        }
        //validate email and password
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please! Enter a valid email"})
        }

        if (password.length < 8) {
            return res.json({success:false,message:"Please! Enter a strong password"})
        }

        const newUser = new userModel({
            firstname:firstname,
            lastname:lastname,
            email:email,
            name:name,
            password:password,
            image:image_filename
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,message:"User registered successfully",token})
    }catch(error){
        console.log(error);
        res.json({success:false,message:error})
    }
}

const user_list = async (req,res)=>{
    try {
        const users = await userModel.find({});
        res.json({success:true,data:users})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
    }
}

const profile = async (req,res)=>{
    try {
        let profileData = await userModel.findById(req.body.userId)
        res.json({success:true,data:[profileData]})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
    
}

const updateUser = async (req, res) => {
    try{
        const {email} = req.body
        const user = await userModel.findOne({email})
        let image_filename;
        if (!user){
            return res.json({success:false,message:"User not found"})
        }
        else{
            fs.unlink(`/Profiepic/${user.image}`,()=>{})
            image_filename = req.file.filename
            user.image = image_filename
            user.save()
            return res.json({success:true,message:"Profile Image Updated"})
        }
    }catch(error){
        console.log(error);
        res.json({ success: false, message: "Error"})
    }   
};

const updatepass = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        if (!req.body.password) {
            return res.json({ success: false, message: "Insert a password" });
        }

        const newpassword = req.body.password;
        await userModel.findByIdAndUpdate(req.body.userId, { password: newpassword });
        return res.json({ success: true, message: "Password updated successfully" });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};





export {loginUser,registerUser,user_list,profile,updateUser,updatepass}
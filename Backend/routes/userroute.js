import express from 'express'
import { loginUser,registerUser, user_list,profile } from '../controllers/userController.js'
import multer from 'multer'
import authmiddleware from '../middle/auth.js'


const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"Profilepic")},
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:Storage})

const userrouter = express.Router() 

userrouter.post("/register",upload.single("image"),registerUser)
userrouter.post("/login",loginUser)
userrouter.get("/userlist",authmiddleware,user_list)
userrouter.get("/profile",authmiddleware,profile)

export default userrouter
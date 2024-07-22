import express from 'express'
import { loginUser,registerUser, user_list,profile ,updateUser,updatepass} from '../controllers/userController.js'
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
userrouter.patch("/updateUser",upload.single("image"),updateUser)
userrouter.patch("/updatePass",authmiddleware,updatepass)



export default userrouter
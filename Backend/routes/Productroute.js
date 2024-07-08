import express from 'express'
import { addProduct, product_list, removeProduct } from '../controllers/productController.js'

import multer from 'multer'

const Productrouter = express.Router();



//Image Storage Engine

const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:Storage})

Productrouter.post("/add",upload.single("image"),addProduct)
Productrouter.get("/list",product_list)
Productrouter.post ("/remove",removeProduct)

export default Productrouter;
import { addtocart,removefromcart,getcart } from "../controllers/cartcontroller.js";
import express from "express"
import authmiddleware from "../middle/auth.js";


const cartRouter = express.Router();

cartRouter.post("/addtocart",authmiddleware, addtocart);
cartRouter.post("/removefromcart",authmiddleware, removefromcart)
cartRouter.get("/getcart",authmiddleware,getcart)


export default cartRouter
import { placeOrder, userOrder,listOrder,updateStatus} from "../controllers/orderController.js";
import express from "express"
import authmiddleware from "../middle/auth.js"

const orderRouter = express.Router();

orderRouter.post("/placeorder", authmiddleware,placeOrder);
orderRouter.post("/userorder",authmiddleware,userOrder)
orderRouter.get("/listorder",listOrder)
orderRouter.post("/updatestatus",updateStatus)

export default orderRouter
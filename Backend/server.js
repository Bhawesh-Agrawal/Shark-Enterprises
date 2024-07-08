import express from "express"
import cors from "cors"
import { connectdb } from "./config/db.js"
import Productrouter from "./routes/Productroute.js"
import userrouter from "./routes/userroute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config 

const app = express()
const port = process.env.PORT || 4000

//middle 

app.use(express.json())
app.use(cors())


//connect to database

connectdb().catch((err) => {
    console.error("Error connecting to database:", err);
    process.exit(1);
});

//API endpoints
app.use("/api/product",Productrouter)
app.use("/images",express.static('uploads'))
app.use("/profileimg",express.static('Profilepic'))
app.use("/api/user",userrouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req, res)=>{
    res.send("Express Server")
})



app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})




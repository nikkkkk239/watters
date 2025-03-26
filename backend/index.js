import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDb } from "./lib/connectDb.js";
import authRouter from "./routes/auth.router.js"
import orderRouter from "./routes/order.router.js"
dotenv.config()
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}));
app.use("/api/auth",authRouter)
app.use("/api/order",orderRouter)


app.listen(PORT,()=>{
    console.log(`Server started at : ${3000}`);
    connectDb();
})


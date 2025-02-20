import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDb } from "./lib/connectDb.js";
dotenv.config()
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());


app.listen(PORT,()=>{
    console.log(`Server started at : ${3000}`);
    connectDb();
})


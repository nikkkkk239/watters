import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
export const generateToken = async(res , userId)=>{
    if(!userId) return res.status(400).json({message: "User Id is required."});

    const encodedId = jwt.sign({userId} , process.env.JWT_SECRET,{
        expiresIn : "7d"
    });

    res.cookie("token" , encodedId , {
        maxAge : 7*24*60*60*1000,
        httpOnly : true,
        sameSite : "strict",
        secure : true,
    })

}
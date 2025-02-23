import jwt from "jsonwebtoken";
import Auth from "../models/auth.model.js";
export const authProtection = async(req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(403).json({message : "Unauthenticated user."});
        }
        const decodedId = jwt.verify(token , process.env.JWT_SECRET);
        if(!decodedId){
            return res.status(403).json({message : "Unauthenticated user."});
        }
        const user = await Auth.findById(decodedId.userId);
        if(!user){
            return res.status(403).json({message : "Unauthenticated user."});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("error in authProtection : ",error);
        return res.status(500).json({message : "Internal Server error."})
    }
}
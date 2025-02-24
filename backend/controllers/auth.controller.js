import Auth from "../models/auth.model.js";
import { generateToken } from "../lib/generateToken.js";

export const signup = async (req,res)=>{
    const {email , password , name} = req.body;
    console.log(req.body);

    if(!email || !password || !name) return res.status(400).json({message : "Please provide complete data."});
    if(password.length < 6){
        return res.status(400).json({message : "Password must be atleast 6 in length"});
    }
    try {
        
        const isUser = await Auth.findOne({email});

        if(isUser){
            return res.status(404).json({message : "User already exists."});
        } 

        const user = await Auth.create({
            email , password , name
        })
        generateToken(res , user._id);
        return res.status(200).json(user);
    } catch (error) {
        console.log("Error in signup : ",error);
        return res.status(500).json({message : "Internal server error."})
    }
}
export const signin = async(req,res)=>{
    const {email , password} = req.body;

    try {
        if(!email || !password) return res.status(400).json({message : "Please provide complete data."});

        const user = await Auth.findOne({email});

        if(!user){
            return res.status(404).json({message : "User not found."});
        }
        generateToken(res , user._id);

        return res.status(200).json(user);
    } catch (error) {
        console.log("Error in signin : ",error);
        return res.status(500).json({message : "Internal server error."})
    }
}

export const signout = async(req,res)=>{
    res.cookie("token" , "",{maxAge : 0});
    return res.status(200).json({message : "User signed out successfully."});
}
export const checkAuth = async(req,res)=>{
    if(!req.user) return res.status(403).json({message : "Unauthenticated user."});
    return res.status(200).json(req.user);
}
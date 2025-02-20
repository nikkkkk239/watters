import Auth from "../models/auth.model.js";

export const signup = async (req,res)=>{
    const {email , password , name} = req.body;

    try {
        if(!email || !password || !name) return res.status(400).json({message : "Please provide complete data."});

        const user = await Auth.create({
            email , password , name
        })
        return res.status(200).json(user);
    } catch (error) {
        console.log("Error in signup : ",error);
        return res.status(500).json({message : "Internal server error."})
    }
}
import Energy from "../models/Energy.model.js";

export const createEnergy = async(req,res)=>{
    try {
        const {owner , energy} = req.body;

        if(!owner || !energy){
            return res.status(400).json({message : "Complete Data Required."});
        }
        const newEnergy = await Energy.create({owner , energy})

        return res.status(200).json(newEnergy);
    } catch (error) {
        console.log("Error in createEnergy : ",error);
        res.status(500).json({message : "Internal Server error."})
    }
}
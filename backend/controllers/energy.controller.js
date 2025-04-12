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
export const getSharedEnergy = async(req,res)=>{
    try {
        const {owner} = req.body;

        if(!owner){
            return res.status(400).json({message : "Complete Data Required."})
        }
        const energy = await Energy.findOne({owner});

        return res.status(200).json(energy);
    } catch (error) {
        console.log("Error in getSharedEnergy : ",error);
        res.status(500).json({message : "Internal Server error."})
    }
}
export const deleteSharedEnergy = async(req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message : "Complete Data Required."})
        }
        const energy = await Energy.findById(id);
        if(!energy){
            return res.status(404).json({message :"Energy Not found."});
        }

        await Energy.findByIdAndDelete(id);
        return res.status(200).json({message : "Energy Deleted ."})
    } catch (error) {
        console.log("Error in deleteSharedEnergy : ",error);
        res.status(500).json({message : "Internal Server error."})
    }
}
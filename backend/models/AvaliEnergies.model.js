import mongoose from "mongoose";

const availEnergiesSchema = new mongoose.Schema({
    owner : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,
    },
    energy : {
        type : Number,
        required : true,
    }
},{timestamps : true})

const AvailEnergies = mongoose.model("AvailEnergies" , availEnergiesSchema);

export default AvailEnergies;
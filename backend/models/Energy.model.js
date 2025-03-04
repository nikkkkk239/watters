import mongoose from "mongoose";

const EnergySchema = new mongoose.Schema({
    deviceId : {
        type : Number,
        required : true,
    },
    userId : {
        type : Number,
        required : true,
    },
    energyReading : {
        type : Number,
        required : true,
        default : 0,
        min:0
    }
},{timestamps : true});
const Energy = mongoose.model("Energies" , EnergySchema);

export default Energy;

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
    },requests:[
        {type:mongoose.Schema.Types.ObjectId ,ref:"orders"}
    ],
    location : {
        type :String ,
        required:true
    }
},{timestamps : true})

const Energy = mongoose.model("energy" , availEnergiesSchema);

export default Energy;
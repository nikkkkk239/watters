import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required : true,
    },
    role : {
        type:String,
        enum : ["producer" , "consumer"],
        default : "consumer",
    },

    productionCapacity : {
        type:Number,
        min : 0,
    },
    productionType: {
        type: String,
        enum: ['solar', 'wind', 'hydro', 'biomass', 'other'],
    },
    location: {
        type: String,
    },
    availableEnergy: {
        type: Number, 
        min: 0
    },

    consumptionCapacity: {
        type: Number, 
        min: 0
    },
})
// authSchema.pre("save",function(next){
//     if(this.role === "producer" && !this/)
// })

const Auth = mongoose.model("users" , authSchema);

export default Auth;
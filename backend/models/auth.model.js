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
        type : String,
        enum:["producer" , "consumer"],
        default : "consumer"
    },
    totalProduction : {
        type:Number,
        default : null
    },
    deviceNo : {
        type:Number,
    },
    electricityBillPhoto : {
        type : String,

        default : null,
    },
    location: {
        type: String,
    },
    limitOfSharing: {
        type: Number, 

        default : null
    },
    consumedEnergy : {
        type: Number,
        default : null
    },
    isVerified:{
        type: Boolean,
        default : false,
    }
    // orders :[
    //     {type:}
    // ]
},{timestamps : true})

const Auth = mongoose.model("users" , authSchema);

export default Auth;
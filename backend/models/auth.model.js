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
        default : 0
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
        default:""
    },
    limitOfSharing: {
        type: Number, 

        default : 0
    },
    consumedEnergy : {
        type: Number,
        default : 0
    },
    isVerified:{
        type: Boolean,
        default : false,
    },
    orders :[
        {type:mongoose.Schema.Types.ObjectId}
    ]
},{timestamps : true})

const Auth = mongoose.model("users" , authSchema);

export default Auth;
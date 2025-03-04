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
        required : function(){return this.role == "producer"},
        default : null
    },
    deviceNo : {
        type:Number,
    },
    electricityBillPhoto : {
        type : String,
        required : function(){return this.role == "producer"},
        default : null,
    },
    location: {
        type: String,
    },
    limitOfSharing: {
        type: Number, 
        required : function(){return this.role == "producer"},
        default : null
    },
    consumedEnergy : {
        type: Number,
        required : function(){return this.role == "consumer"},
        default : null
    },
    // orders :[
    //     {type:}
    // ]
},{timestamps : true})

const Auth = mongoose.model("users" , authSchema);

export default Auth;
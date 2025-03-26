import mongoose, { mongo }  from "mongoose";
const orderSchema = new mongoose.Schema({
    producer : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users",
    },consumer : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "users",
    },
    AvailEnergy :{
        type : Number,
        required : true,
    },
    requiredEnergy : {
        type : Number,
        required : true,
    },
    status : {
        type : String,
        enum :["placed" , "requested","completed"],
        default : "requested",
    },amount : {
        type:Number,
        default : 0,   
    }
},{timestamps : true})
const Order = mongoose.model("orders" , orderSchema);
export default Order;
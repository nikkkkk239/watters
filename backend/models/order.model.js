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
        enum :["placed" , "requested"],
        default : "requested",
    }
},{timestamps : true})
const Order = mongoose.Model("orderes" , orderSchema);
export default Order;
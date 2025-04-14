import Energy from "../models/Energy.model.js";
import Order from "../models/order.model.js";

export const getCurrentOrder = async(req,res)=>{
    try {
        const orderId = req.params.orderId; 

        const order = await Order.findById(orderId);
        if(!order){
            return res.status(404).json({message : "No order found."});
        }
        if(order.status != "placed"){
            return res.status(400).json({message : "Not a placed order."});
        }
        return res.status(200).json({message : "Current Order." , order});
    } catch (error) {
        console.log("Error in GetCurrentOrder : ",error);
        return res.status(500).json({message : "Internal server error."});
    }
}

export const createOrder = async(req,res)=>{
    try {
        const {producer ,energyId , consumer , AvailEnergy , requiredEnergy } = req.body;

        if(!producer || !consumer || !AvailEnergy ||!energyId || ! requiredEnergy){
            return res.status(400).json({message : "Please Provide complete data."});
        }
        if(requiredEnergy > AvailEnergy){
            return res.status(400).json({message : `${requiredEnergy}KW energy is not available.`})
        }
        const isEnergy = await Energy.findById(energyId);
        if(!isEnergy){
            return res.status(404).json({message : "Energy Not found."});
        }
        isEnergy.requests.push(consumer);
        await isEnergy.save();
        const order = await Order.create({
            producer , consumer , AvailEnergy , requiredEnergy , status : "requested",amount : requiredEnergy * 9
        })

        return res.status(200).json({message : "Order created." , order})
    } catch (error) {
        console.log("Error in createOrder : ",error);
        return res.status(500).json({message : "Internal server error."});
    }
}

export const placeOrder = async(req,res)=>{
    try {
        const orderId = req.params.orderId;

        const user = req.user;

        const order = await Order.findOne({_id : orderId , producer : user._id});

        if(!order){
            return res.status(404).json({message : "Order not found."})
        }
        order.status = "placed";
        await order.save();

        return res.status(200).json({message : "Order Placed successfully."});
    } catch (error) {
        console.log("Error in placeOrder : ",error);
        return res.status(500).json({message : "Internal server error."});
    }
}
export const getConsumersOrder = async(req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message : "Complete Data is Required."});
        }
        const order = await Order.findOne({consumer : id}).populate('producer');
        return res.status(200).json(order);
    } catch (error) {

        console.log("Error in getConsumersOrder : ",error);
        return res.status(500).json({message : "Internal server error."});
        
    }
}
export const deleteOrder = async(req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message : "Id required."});
        }
        const order = await Order.findById(id);
        if(!order){
            return res.status(404).json({message : "Order not Found."})
        }
        await Order.findByIdAndDelete(id);
        return res.status(200).json({message : "Order Deleted."})
    } catch (error) {
        console.log("Error in deleteOrder : ",error);
        return res.status(500).json({message : "Internal server error."});
    }
}
export const deleteManyOrders = async(req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({message : "Id required."})
        }
    } catch (error) {
        console.log("Error in deleteManyOrders : ",error);
        return res.status(500).json({message : "Internal server error."});
    }
}
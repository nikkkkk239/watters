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
        minLength : 6,
        required : true,
    },
    role : {
        type:String,
        enum : ["producer" , "consumer"],
        default : "consumer",
    },
    productionCapacity : {
        type:Number,
        required : function(){return this.role === "producer"},
        
    }


})
authSchema.pre("save",function(next){
    if(this.role === "producer" && !this/)
})

const Auth = mongoose.model("users" , authSchema);

export default Auth;
const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    age:Number,
    email:String,
    mobileNo:Number
})


module.exports=mongoose.model("User",userSchema)


const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    fullname:String,
    mobileno:Number,
    email:String,
    password:String
}
,{
    timestamps:true
})

module.exports=mongoose.model("user",userSchema);
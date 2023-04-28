const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    fullname:String,
    mobileno:Number,
    email:String,
    password:String
}
,{
    timestamps:true
})

module.exports=mongoose.model("student",studentSchema);
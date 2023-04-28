const userModel=require("../module/user")



exports.createUser=async(req,res)=>{
    
    try{
        const data= await new userModel(req.body).save();
        res.status(200).json(data);
    }
    catch(err){
        res.json(err);
    }
   
}


exports.getData=async(req,res) => {

    try{
        const data=  await userModel.find()
         res.status(200).json(data);
        } 
    
    catch(err){
        res.json(err);
    }
} 

exports.getDataByFullname=async(req,res) => {

    try{
        const data=  await userModel.find({fullname:req.params.fullname})
         res.status(200).json(data);
        } 
    
    catch(err){
        res.json(err);
    }
}
exports.getDataByid=async(req,res) => {

    try{
        const data=  await userModel.find({_id:req.params.userId})
         res.status(200).json(data);
        } 
    
    catch(err){
        res.json(err);
    }
}

// exports.updateUser= async(req,res)=>{
//    const data= await userModel.findByIdAndUpdate({_id:req.params.userId},req.body,{new:true},(err,data)=>{
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.status(200).json(data);
//         }
//     })
// }


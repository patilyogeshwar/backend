const express= require("express");
const app=express();

const PORT=4455;
const conn=require("./db");

conn.connection.on("connected",(err)=>{
if(err){

    console.log(err)
}
else{
    console.log("connected to database")
}
})


app.use(express.json());

 app.use('/user',require("./routes/user"))





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})




       
  





 


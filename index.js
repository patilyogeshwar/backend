const express= require("express");
const app=express();
const cors=require("cors")

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


app.use(cors());

app.use(express.json());

 app.use('/user',require("./routes/user"))
 app.use('/student',require("./routes/student"))




app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})




       
  





 


const express= require("express");
const router=express.Router()
const controller=require("../controller/student")


router.post("/",controller.createStudent);
router.get("/",controller.getData);
router.get("/:fullname",controller.getDataByFullname);
router.get("/getdatabyid/:userId",controller.getDataByid);
// router.put("/:userId",controller.updateUser);


module.exports=router;
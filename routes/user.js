const express= require("express");
const router=express.Router()
const controller=require("../controller/user")


router.post("/",controller.createUser);
router.get("/",controller.getData);
router.get("/:fullname",controller.getDataByFullname);
router.get("/getdatabyid/:userId",controller.getDataByid);
// router.put("/:userId",controller.updateUser);


module.exports=router;
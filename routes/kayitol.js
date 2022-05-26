const router=require("express").Router();
const {kayitol}=require("../controllers/kayitol");

router.get("/",kayitol)
module.exports=router;
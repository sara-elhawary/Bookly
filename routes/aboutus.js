const router=require("express").Router();
const {aboutus}=require("../controllers/aboutus");

router.get("/",aboutus)
module.exports=router;
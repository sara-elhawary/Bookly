const router=require("express").Router();
const {home}=require("../controllers/books");

router.get("/home",home)
module.exports=router;
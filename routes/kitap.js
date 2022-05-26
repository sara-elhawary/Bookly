const router=require("express").Router();
const {kitap}=require("../controllers/kitap");

router.get("/",kitap)
module.exports=router;
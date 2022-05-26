const router=require("express").Router();
const {cart}=require("../controllers/cart");

router.get("/",cart)
module.exports=router;
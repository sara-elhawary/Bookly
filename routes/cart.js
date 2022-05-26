const router=require("express").Router();
const {cart,addToCart}=require("../controllers/cart");

router.get("/",cart)
module.exports=router;
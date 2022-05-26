const router=require("express").Router();
const {cart,addToCart}=require("../controllers/cart");

router.get("/",cart)
router.post("/add",addToCart)
module.exports=router;
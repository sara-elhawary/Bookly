const router=require("express").Router();
const {cart,addToCart,emptyCart}=require("../controllers/cart");

router.get("/add/:id",addToCart)
router.get("/empty",emptyCart);

router.get("/",cart)
module.exports=router;
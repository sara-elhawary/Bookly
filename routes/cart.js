const router=require("express").Router();
const {cart,addToCart,emptyCart,deleteCart}=require("../controllers/cart");

router.get("/add/:id",addToCart)
router.get("/empty",emptyCart);
router.get("/delete/:id",deleteCart);

router.get("/",cart)
module.exports=router;
const router=require("express").Router();
const {reviews}=require("../controllers/reviews");

router.get("/",reviews)
module.exports=router;
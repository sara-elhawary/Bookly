const router=require("express").Router();
const {books}=require("../controllers/books");

router.get("/",books)
module.exports=router;
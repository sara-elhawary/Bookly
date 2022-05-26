const {Cart}=require("../models/cart");


exports.books=async(req,res)=>{
    let cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
    if(cart){    
        return res.render("books",{bell: cart.items.length});
    }
    res.render("books");
}
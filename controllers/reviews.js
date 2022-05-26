const {Cart}=require("../models/cart");

exports.reviews=async(req,res)=>{
    const cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
    if(cart){
        return res.render("reviews",{bell: cart.items.length});
    }
    return res.render("reviews",{bell:0});
}

const {Cart}=require("../models/cart");
exports.aboutus=async(req,res)=>{
    const cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
    if(cart){
        return    res.render("aboutus",{bell: cart.items.length});
       }
    res.render("aboutus",{bell:0});
}
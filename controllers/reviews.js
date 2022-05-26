const {Cart}=require("../models/cart");

exports.reviews=async(req,res)=>{
    const cart=await Cart.findOne({user:req.session.userid 
}).populate("items");
    if(cart){
        return res.render("reviews",{bell: cart.items.length});
    }
    return res.render("reviews",{bell:0});
}
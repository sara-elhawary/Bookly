
const {Cart}=require("../models/cart");


exports.books=async(req,res)=>{
    let cart=await Cart.findOne({user:req.session.userid 
}).populate("items");
    if(cart){    
        return res.render("books",{bell: cart.items.length});
    }
    res.render("books");
}
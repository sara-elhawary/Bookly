
const {Book}=require("../models/book");

const {Cart}=require("../models/cart");

exports.home=async(req,res)=>{
    const book=await Book.findOne({image:"image/deal-img.jpg"})
    const cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
    if(cart){
        return   res.render("home",{book,bell: cart.items.length});
       }
   return res.render("home",{book,bell:0});
}
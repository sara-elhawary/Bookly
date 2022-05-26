const {Book}=require("../models/book");
const {Cart}=require("../models/cart");

exports.kitap=async(req,res)=>{
    const books=await Book.find();
    const cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
    if(cart){
        return      res.render("kitap",{books,bell: cart.items.length});
       }
    res.render("kitap",{books:books,bell:0});
}

const {Cart}=require("../models/cart");
const {Book}=require("../models/book");
exports.cart=async(req,res)=>{
    let cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"}).populate("items");
   if(cart){
    return   res.render("kart",{cart,bell: cart.items.length});
   }
   return  res.render("kart",{cart,bell: 0});
}

exports.addToCart=async(req,res)=>{
    
    const {params:{id}}=req;
    const cart=await Cart.findOne({user:"628f9d182c2a0becc5dd7f2d"});
    const book=await Book.findOne({_id:id});
    if(cart){
        await Cart.updateOne({user:"628f9d182c2a0becc5dd7f2d"},{$push:{"items":book._id},$inc:{totalPrice:+book.price}});
    }
    else{
       
        await new Cart({user:"628f9d182c2a0becc5dd7f2d",items:[book._id],totalPrice:book.price}).save();
        
    }

    res.json({name:book.title})
}

exports.emptyCart=async(req,res)=>{
  await  Cart.findOneAndDelete({user:"628f9d182c2a0becc5dd7f2d"});
  res.redirect("/kitap")
}



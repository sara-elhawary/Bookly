
const {Cart}=require("../models/cart");
const {Book}=require("../models/book");
exports.cart=async(req,res)=>{
    session =req.session.userid 
    let cart=await Cart.findOne({user:session}).populate("items");
   if(cart){
    return   res.render("kart",{cart,bell: cart.items.length});
   }
   return  res.render("kart",{cart,bell: 0});
}

exports.addToCart=async(req,res)=>{
    session =req.session.userid 

    const {params:{id}}=req;
    const cart=await Cart.findOne({user:session});
    const book=await Book.findOne({_id:id});
    if(cart){
        await Cart.updateOne({user:session},{$push:{"items":book._id},$inc:{totalPrice:+book.price}});
    }
    else{
       
        await new Cart({user:session,items:[book._id],totalPrice:book.price}).save();
        
    }

    res.json({name:book.title})
}

exports.emptyCart=async(req,res)=>{
session =req.session.userid 
  await  Cart.findOneAndDelete({user:session});
  res.redirect("/kitap")
}



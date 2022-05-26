exports.cart=async(req,res)=>{
    res.render("kart");
}

exports.addToCart=async(req,res)=>{
    const {id}=req.body
    const selectedBook=await m
}
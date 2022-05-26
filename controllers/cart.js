const cart=async(req,res)=>{
    res.render("kart");
}

const addToCart=async(req,res)=>{
    const {id}=req.body
    // const selectedBook=await 
}



exports.module={cart,addToCart}
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book',
            required:true
        }
    ],
    totalPrice:{
        type:Number,    
        required:true
    }
});

exports.Cart = mongoose.model('Cart',cartSchema);
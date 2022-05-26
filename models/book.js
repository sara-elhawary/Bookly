const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3
    },
    price:{
        type:Number,
        required:true
    },
    Author:{
        type:String,
        required:true,
        minlength:3
    },
    image:{
        type:String,
        required:true
    },
    discount_percentage:{
        type:Number,
        default:0
    },
    pages:{
        type:Number
    },
    isOnDiscount:{
        type:Boolean,
        default:false
    }
});

exports.Book = mongoose.model('Book',bookSchema);
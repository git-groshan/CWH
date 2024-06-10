const mongoose = require('mongoose');

// creating schema 
const productSchema = new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
});

// creating model 
module.exports = mongoose.model('products' , productSchema);


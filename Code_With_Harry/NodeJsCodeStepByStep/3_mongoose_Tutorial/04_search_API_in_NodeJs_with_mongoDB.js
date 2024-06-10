/*
- make simple GET route for API
- Search with single word/field
- Search with multiple word/field
- Test API
- Interview Question 
Kya hum Post put ya delete method ko use krke data ko get kr skte h ?
Ans - Yes 
*/

const expres = require('express');
/*
require("./02.1_mongoConfig");
const Product = require('./02.2_products');
*/
const mongoose = require('mongoose');

// connect mongoose with DB
mongoose.connect('mongodb://localhost:27017/Employees');

// create Schema 
const ProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

// create Model

const Product = mongoose.model('products' , ProductSchema);


const app = expres();
app.use(expres.json);

app.get('/', (req,res)=>{
    res.send("Welcome home !!");
})
app.get('/search/:key' , async (req,res)=>{
    console.log(req.params.key);
    // let data = await Product.find();
    let data = await Product.find(
    {
        $or:[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}}
        ]
    }
);
    console.log(data);

    res.send("search is Done !!");
    
});

app.listen(5000);

//
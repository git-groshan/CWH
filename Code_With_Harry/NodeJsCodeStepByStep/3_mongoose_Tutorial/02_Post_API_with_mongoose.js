/*
-make config file for mongoDB
- Make Post Route
- Get Data from the postman and save in DB
- Interview Question 
*/

const express = require('express');
require('./02.1_mongoConfig'); // no need to take it in const variable

const Product = require('./02.2_products'); // Model is exported using this we will create document of schema type 

const app = express();

app.use(express.json);// converts the data inside req into JSON format 
app.post('/create' , async (req,res)=>{
    // let data = new Product(req.body);// new document created  // Postman se data aa rha h 
    // let result = await data.save(); // Data saved in mongoDB
    // console.log(req.body);
    res.send("Res is sent!!");
});

app.get('/list' , async (req,res)=>{
    let data = await Product.find(); // returns an Promise 
    console.log(data);
    res.send(data);
});

app.delete('/delete:_id' , async (req,res)=>{
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:_id' , async (req,res)=>{
console.log(req.params);
let data = await Product.updateOne(
    req.param,
    //{$set: {name:"Motorola" , price:4000,brand:"motorola"}};
    {$set: req.body}
)
res.send(data);
});

app.listen(5000);


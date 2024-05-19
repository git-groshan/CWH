/**
 * get (to Read data from DB) , post(To Send data to DB) , put(to Update data in DB)  , delete (To delete data in DB) 
 * Kya hum log get method me body pass kr skte h ?? NAHI
 */


const dbConnect = require('./3.1_mongoDB'); // 

const express = require('express');
const app = express();

const mongDB = require('mongodb');

app.use(express.json()); // This requires when we need to get data from Postman 
// Before node version 4.6 we need to use body parser to parse data but now in latest version we use express.json() to parse the data


// GET API Method or GET Method

app.get('/' , async  (req,res)=>{
    let collection = await dbConnect();
    let data = await collection.find().toArray(); // toArray() returns a promise
    console.log(data);
    // res.send({name:'anil'});
    res.send(data);
});


// POST API Method or POST Method
/**
 * Make Post method for API
 * Send Data from postman
 * Get Data in nodeJs by request
 * Write code for insert data in MongoDB
 * Interview Question
 */

 /**
  * Whenever we need to send data then we use POST API
  * POST and GET method can have same route.
  * To send data from Postman we need to use Middleware
  */


 app.post('/' , async (req,res)=>{
        console.log(req.body); // receiving data from PostMan
        // res.send({name:"Roshan"});
        let collection = await dbConnect();
        let result  = collection.insertOne(req.body); // sending data to mongDB
        res.send(req.body);
 });


 // PUT API METHOD || PUT METHOD 
 /**
  * Send data from postman
  * Handle Data in node Js by Request
  * Write code for update data in mongoDB
  */

// Hum POST method se bhi data update kr skte but in general hum put method use krte h 


app.put('/' , async (req,res)=>{
    res.send("Result Updated !!!");
    console.log(req.body);
    let collection = await dbConnect();
    // let updatedData = (await collection).updateOne({name:"Roshan Kumar Gupta"} , {$set:{age:50}}); // static data is updated in DB
    let updatedData = (await collection).updateOne({name:"Roshan Kumar Gupta"} , {$set: req.body}); // Dynamic Data updated in DB
    // let updatedData = (await collection).updateOne({name:req.body.name} , {$set: req.body}); // Dynamic Data updated in DB

});
app.put('/:name' , async (req,res)=>{
    res.send("Result Updated !!!");
    console.log(req.body);
    let collection = await dbConnect();
    // let updatedData = (await collection).updateOne({name:"Roshan Kumar Gupta"} , {$set:{age:50}}); // static data is updated in DB
    // let updatedData = (await collection).updateOne({name:"Roshan Kumar Gupta"} , {$set: req.body}); // Dynamic Data updated in DB
    let updatedData = (await collection).updateOne({name:req.params.name} , {$set: req.body}); // Dynamic Data updated in DB

});

/**
 * DELETE API METHOD
 * - Send data from Postman
 * - Handle Data in Node Js by Request
 * - Write code for Delete data in mongoDB
 */

app.delete('/:id' , async (req,res)=>{
    console.log(req.params.id);
    res.send("Data Deleted !!");

    let collection = await dbConnect();

    let deletedData = await collection.deleteOne({_id: new mongDB.ObjectId(req.params.id)});


});



app.listen(5000);

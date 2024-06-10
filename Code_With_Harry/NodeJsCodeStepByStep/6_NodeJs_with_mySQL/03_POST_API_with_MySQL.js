const express = require('express');
const connection = require('./02.0_configMySQL');

const app = express();

app.use(express.json())

// POST API 

app.post('/' , (req,res)=>{
    //const data = {name:"Roshan" , password:"root", user_type:"visitor"}; // static data
    const data = req.body; // dynamic  data

    connection.query("INSERT INTO user SET ?" , data , (err,result,fields)=>{
        if(err) throw err;
        else res.send(result);
    })
});
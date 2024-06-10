const express = require('express');
const connection = require('./02.0_configMySQL');
const app = express();


// GET API 
app.get('/' , (req,res)=>{
    console.log("Get API");
    res.send("Route done");
    connection.query("select * from users" , (err, result)=>{
        if(err) res.send("err");
        else res.send("Result");
    })
});

app.listen(5000);
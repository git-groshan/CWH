const express = require('express');
const connection = require('./02.0_configMySQL');
const app = express();

app.use(express.json());


app.delete('/:id' , (req,res)=>{
    // res.send(req.params.id);
    const data = [req.params.id];
    connection.query("DELETE FROM user WHERE id=" + req.params.id , data , (err,result,field)=>{
        if(err) throw err;
        res.send(result);
    });
});
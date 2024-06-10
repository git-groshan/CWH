const express = require('express');
const connection = require('./02.0_configMySQL');
const app = express();

app.use(express.json());


app.put('/' , (req,res)=>{
    // static data updation 
    /** 
    const data = ["Tony" ,"root123" , "admin",69 ]; // from this all the required data will be get inside query()
    connection.query("UPDATE user SET name= ? , passowrd= ? , user_type= ? WHERE id = ?" , data , (err,result,field)=>{
            if(err) throw err;
        res.send(result);
    });
    */
    // dynamic data updation 
    const data = [req.body.name ,req.body.password , req.body.user_type,req.params.id ]; // from this all the required data will be get inside query()
    connection.query("UPDATE user SET name= ? , passowrd= ? , user_type= ? WHERE id = ?" , data , (err,result,field)=>{
        if(err) throw err;
        res.send(result);
    });
    
});
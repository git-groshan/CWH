const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});
connection.connect((err)=>{
    if(err) console.log("Err while connection");
    else console.log("connected...");
});

connection.query("select * from users" ,(err,result)=>{
    console.warn("result is ", result);
});
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
});
connection.connect((err)=>{
    if(err) console.log("Err while connecting");
    else console.log("Connected with MYSQL...")
});

module.exports = connection;
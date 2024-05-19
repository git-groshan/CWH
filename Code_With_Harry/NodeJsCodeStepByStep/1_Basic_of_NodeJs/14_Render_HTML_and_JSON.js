/*
Render HTML and JSON
-How HTML tags
-Show JSON data
-Link Pages 
-Interview Questions 
*/
const express = require('express');
const app = express();

// Rendering HTML tags , Links and 

app.get("" , (req , res)=>{
    res.send(`
    <h1> Welcome to Home Page</h1>
    <a href="/about"> About </a>
    `);
});

app.get("/about" , (req , res)=>{
    res.send(`
        <input type="text" placeholder="User Name" value = "${req.query.name}"  />
        <button>Click Me </button>
    `)
});

app.get("/help", (req, res)=>{
    res.send([
        {
            name:"Roshan",
            email:"xyz@gmail.com"
        },
        {
            name:'Jhon',
            email:'JhonXyz@gmail.com'
        }
    ])
});


app.listen(2000, ()=>{
    console.log("App is listening at port 2000 at https://localhost:2000")
})
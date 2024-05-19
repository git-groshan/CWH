/**
 ######## Dynamic Pages ######
 1. How to make Loop in ejs
 2. Make Header File
 3. Show Common Header File
 4. Interview Question 

 */

 const express = require('express');
 const app = express();
 const path = require('path');

const htmlPath = path.join(__dirname , '15.1_HTML_folder') 
console.log(htmlPath);
app.set('view engine' , 'ejs');

app.get("" , (req, res)=>{
    res.sendFile(`${htmlPath}/index.html`); // res.sendFile()  -> To render HTML pages 

});

app.get("/profile" , (req, res)=>{
    const user = {
        name:"Roshan Gupta",
        age:20,
        skills:['php' , 'js' , 'mongoDB']
    }
    res.render('views/profile',{user}); // we have to render the file not SendFile or Send

});


app.get('/login' ,(req,res)=>{
    res.render('login');
});

app.get("/about" , (req, res)=>{
    res.sendFile(`${htmlPath}/about.html`)

});

app.get("/home" , (req, res)=>{ // instead of home we can use other name as url if we choose that name then url name will be same as that choosen name 
    res.sendFile(`${htmlPath}/home.html`)

});

app.get("*" , (req,res)=>{
    res.sendFile(`${htmlPath}/pageNotFound.html`);
});


app.listen(5000);

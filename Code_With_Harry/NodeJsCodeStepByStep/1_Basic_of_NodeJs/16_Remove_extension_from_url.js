/*
We don't want to display links of pages like http://localhost:5000/home.html
http://localhost:5000/about.html etc


- Apply get method 
- Remove an extension from url
- Make 404 pages
-Apply 404 page
Interview Question ?

*/


const express = require('express');
const app = express();
const path = require('path');

const htmlPath = path.join(__dirname , '15.1_HTML_folder') 
console.log(htmlPath);


// We won't use static method as it makes url with their extesion 
//app.use(express.static(htmlPath)); // we can access about.html file 


// we will use get method here 

app.get("" , (req, res)=>{
    res.sendFile(`${htmlPath}/index.html`); // res.sendFile()  -> To render HTML pages 

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
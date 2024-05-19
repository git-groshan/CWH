/*
Make HTML Pages 
- Make Folder for HTML files and access it
- Make HTML Files 
- Load HTML Files 
- Interview Question
Q- What is the use of Path Module ?
Ans- It is used to access the path of files used in current project
Q- what does express.static method does?
Ans- It is used to load the static files/content 
Q-
*/
const express = require('express');
const app = express();
const path = require('path');

const htmlPath = path.join(__dirname , '15.1_HTML_folder') 
console.log(htmlPath);

app.use(express.static(htmlPath)); // we can access about.html file 

app.listen(5000);
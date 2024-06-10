/**
 * - Install multer npm package
 * - Make Router for upload file
 * - write code for upload file 
 * - Interview Question 
 * Q- Kya hum bina multer package k hum file send kr skte h ?
 * Ans - Yes !!
 * 
 */

const expres = require('express');
const multer = require('multer');

const app = expres();
/**
 multer k andar ek function hota h to upload file 
 jo ki ek object lete h Storage(object) uske andar ek  objects leta h destination , filename  
 */
// upload is middleware function here 

const upload = multer({
    storage:multer.diskStorage({
    destination:function(req,file,cb) // cb is callback
    {
        cb(null,"05_uploads") // second parms is where we have to upload the file i.e folder name 
    },
    filename:function(req,file,cb)
    {
        cb(null,file.fieldname +  "-"+Date.now() + ".jpg");
    }
    })
}).single("user_file");// here we declare we have to upload single or multiple file and user_file is the parma by which we will upload the file 
// user_file - Postman k andar key jo h woh user_file hai

app.post('/upload' , upload , (req,res)=>{
    res.send("file is send");
});

app.listen(5000);
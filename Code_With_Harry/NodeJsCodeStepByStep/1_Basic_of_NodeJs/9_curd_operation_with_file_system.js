/*
CURD operations (Create , Read , Update , delete) with File System 
- make file 
-Read file 
-update file 
-Rename file 
-Delete file 
-Interview Questions
What is Buffer ?
- It's a temporary memory location.
*/
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname , '9.1_curd_folder');
const filePath = `${dirPath}/apple.txt`;

/*
// create file using fs.writeFileSync(filepath , "data of file")

//fs.writeFileSync(filePath , "This is a Simple text file");


// Read file using fs.readFile('filepath or filename' , encoding , )
fs.readFile(filePath ,'utf8', (err , data)=>{
    console.log(data);
    console.log(data.toString());
})
*/

/*
// update file using fs.appendFile(filepath,"new content" ,(err)=>{})
fs.appendFile(filePath ,"\nThis is appended text" ,()=>{
    console.log("File is Updated");
} )
*/

/*
// Rename a file  using fs.rename(curFileName , newFileNameWithDirectoryName , ()=>{})
fs.rename(filePath , `${dirPath}/fruit.txt` , (err)=>{
    if(!err) console.log("File is Renamed ")
})
*/


// Delete a file 

fs.unlinkSync(`${dirPath}/fruit.txt`);

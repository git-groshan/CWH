/*
-Make files in a folder
- use path module 
- get File names and print on console 
-Interview Question 
*/
const fs = require('fs');
const path = require('path');

// fs.writeFileSync('apple.txt', 'This is an apple file');// creates file in current directory 

//const dirPath = path.join(__dirname); // returns the current directory path
const dirPath = path.join(__dirname , '8.1_files'); // joins and returns the  path of 8.1_files folder name 
console.warn("Directory path is ",dirPath);
/*
for(let i=0;i<5;i++){
    //fs.writeFileSync(`${dirPath}`+ `hello${i}.txt`, `This is hello${i}.txt file `) ;
    fs.writeFileSync(dirPath + "/hello"+i+".txt", `This is hello${i}.txt file `) ;
}
*/

// reading files inside the directory 
// fs.readdir(dirctoryPath , callback(err , files))
fs.readdir(dirPath , (err , files)=>{
    console.log(files , typeof files , Array.isArray(files)); // returns an array which stores the files 
    files.forEach((item)=>{
        console.log(`file name is ${item}`);
    });
    
});
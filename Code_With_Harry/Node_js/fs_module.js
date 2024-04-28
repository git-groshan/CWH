const fs = require('fs');

fs.readFile('file.txt' ,'utf8' ,(err,data)=>{
    console.log(err , data);
})

console.log("Finished reading file");
/**
 * Finished reading file
   null This is  a file file
 * This will be output which is because the call back will execute only after the other processes are executed hence file content is read in the last time
 */

const a = fs.readFileSync('file.txt' ,'utf8' ,(err,data)=>{
    console.log(err , data);
}); // intentiolly blocks the further code execution 
console.log(a);
console.log(a.toString());
// readFileSync block the thread for untill the call back has been executed so it;s stops untill the process is not finished 
// once finished the rest things are being executed .

fs.writeFile('file2.txt' , "This is for file2" ,()=>{
    console.log("Written to the file");
})
fs.writeFileSync('file3.txt' , "This is for file3" ,()=>{
    console.log("Written to the file");
})
console.log("Finished Writing File");

// import {x} from './app'  // this way of importing will give error 

const app = require('./2_app'); // core modules 
//const fs = require('fs'); // here with this all the things will be imported 
const fs = require('fs').writeFileSync; // here with this only writeFileSync func will be imported 

const  arr = [1,2,34,4,5]
console.log(app); // console is global modules which not require to be imported 

console.log(arr.filter((item)=>{return (item & 1)}));
//console.warn(arr.filter((item)=>{return (item & 1)}));

// console.error() -> learn about it 
fs.writeFileSync("hello.txt" ,"This file is created using fs module");

console.log("file name is ", __filename,"and directory name is ", __dirname);
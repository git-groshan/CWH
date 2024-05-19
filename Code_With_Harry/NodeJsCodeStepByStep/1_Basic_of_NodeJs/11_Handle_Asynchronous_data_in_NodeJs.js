/**
We Can use Promises or Asyn/Await to handle Asynchronous Data in Node Js 

 */

let a=10;
let b = 0;

let waitingData = new Promise((resolve , reject)=>{
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

waitingData.then((data)=>{
    b=data;
    console.log(`value of ${a} + ${b} is ${a+b}`);
});
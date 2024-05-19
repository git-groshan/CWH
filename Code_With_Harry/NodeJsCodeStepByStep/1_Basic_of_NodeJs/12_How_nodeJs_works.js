/*
How NodeJs works

1. Call stack
2. Node API
3. CallBack Queue
4. Example 
5. Interview Question 
*/
/**
 There are 3 things which are used during the execution of node program 
 1. Call Stack 2. Node API 3. CallBackQueues


 Event Loop 

 callStack -> NodeAPI
     ^            |
    |            
    <-------  CallBackQueue


Call Stack - stored the function in order they will call  
main() is a global function which is by default invoked by NodeJs Environment
- We don't need to explicitly call main();

 */

console.log("starting up");

// setTimeout is a API which is provided by chrome V8 engine which is written in C++
setTimeout(()=>{console.log("2 Second log")} , 2000); // API send to NodeAPIs
setTimeout(()=>{console.log("0 Second log")} , 0);// API sent to NodeAPIs

console.log("Finishing up");

// NodeAPT response comes only after the nodeJs file execution is completed i.e in the end untill main() finished up 
// Jo bhi API NodeAPI me jati h woh process hoke callback Queue me aa jati h accordingly i.e jisko kam time laga woh pehle process hoke callback Queue me aa jayegi 
// jaise hi main() finished hota h , callbackQueue me pade hue function ek ek krke execute hone lagte h 
/**
starting up
Finishing up
0 Second log
2 Second log
 */
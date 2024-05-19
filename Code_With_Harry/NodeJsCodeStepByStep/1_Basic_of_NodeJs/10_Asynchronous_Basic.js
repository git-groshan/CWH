/**
 * In Synchronous operation tasks are performed one at a time.
 * 
 * In Asynchronous , second task don't wait to finish First task.
 * 
 * Ques- Is nodejs is synchronous or asynchronous ? similary for JavaScript ?
 * Node.js and JavaScript are both asynchronous by nature, but it's essential to understand how this manifests in each context.

1. **Node.js:**
   
   Node.js is designed to be non-blocking and asynchronous, making it well-suited for I/O-heavy applications. In Node.js, most I/O operations (such as file system operations, network requests, and database queries) are performed asynchronously. When an asynchronous operation is initiated, Node.js continues executing the rest of the code without waiting for the operation to complete. Once the operation is finished, a callback function is called to handle the result or error.

   Example:
   ```javascript
   const fs = require('fs');

   fs.readFile('file.txt', 'utf8', (err, data) => {
       if (err) {
           console.error('Error reading file:', err);
           return;
       }
       console.log('File content:', data);
   });

   console.log('Reading file...');
   ```

   In this example, the `fs.readFile()` function initiates an asynchronous file read operation. Node.js continues executing the `console.log('Reading file...')` statement without waiting for the file read to complete. Once the file read operation finishes, the callback function is invoked to handle the result.

2. **JavaScript (in the browser):**
   
   JavaScript running in a web browser is also asynchronous, but its behavior may differ from Node.js due to the environment in which it runs. In the browser, JavaScript is single-threaded, meaning that it can only execute one piece of code at a time. Asynchronous operations in the browser, such as fetching resources over the network or handling user events, are typically managed by the browser's event loop.

   Example:
   ```javascript
   console.log('Start');

   setTimeout(() => {
       console.log('Timeout');
   }, 1000);

   console.log('End');
   ```

   In this example, the `setTimeout()` function initiates an asynchronous timer operation, causing the callback function to be executed after a delay of 1000 milliseconds. JavaScript continues executing the `console.log('End')` statement without waiting for the timer to expire.

In summary, both Node.js and JavaScript in the browser are asynchronous, but the execution models and event loop mechanisms may differ slightly between the two environments. Understanding asynchronous programming is essential for building efficient and responsive applications in both contexts.
 * 
Ques- Can we say that JavaScript is a Synchronous programming but It's asynchronous nature is performed by the Browser ?
JavaScript itself is inherently synchronous, meaning that by default, it executes code line by line in the order in which it appears in the script. However, JavaScript also supports asynchronous programming through mechanisms like callbacks, promises, and async/await.

When running in a web browser environment, JavaScript interacts with various APIs provided by the browser, such as DOM manipulation, XMLHttpRequest (XHR), Fetch API, setTimeout, setInterval, etc. Many of these APIs are asynchronous, meaning they initiate operations that may take some time to complete (such as fetching data from a server or waiting for user input).

The browser's runtime environment manages the execution of these asynchronous operations using an event loop. The event loop continuously checks for events (such as user interactions, timers expiring, or network responses) and processes them as they occur. When an asynchronous operation completes, the browser's runtime environment schedules a callback to be executed, allowing JavaScript to continue running other code while waiting for the operation to finish.

So, while JavaScript itself is synchronous, the asynchronous behavior you observe in a browser environment is largely due to the browser's runtime environment and the asynchronous APIs provided by the browser. JavaScript developers leverage this asynchronous behavior to build responsive and interactive web applications.


Ques- So why you above saying nodeJs and Javascript both are synchronous ? 

I apologize for any confusion. Let me clarify:

JavaScript itself, as a language, is inherently synchronous, meaning that it executes code line by line in the order it appears in the script. However, JavaScript also supports asynchronous programming patterns through mechanisms like callbacks, promises, and async/await. These mechanisms allow JavaScript code to initiate asynchronous operations and handle their results without blocking the execution of other code.

In a Node.js environment, JavaScript code often utilizes asynchronous patterns extensively, especially for I/O-bound operations like file system access, network requests, and database queries. Node.js is designed to be non-blocking and asynchronous, meaning that it can efficiently handle many concurrent operations without waiting for each one to complete. Asynchronous operations in Node.js are managed by the event loop, which allows Node.js to continue executing other code while waiting for asynchronous operations to finish.

So, to clarify:

- JavaScript itself is synchronous but supports asynchronous programming patterns.
- Node.js, as a runtime environment for JavaScript, is designed to be asynchronous and non-blocking, especially for I/O-bound operations.

I hope this clears up any confusion. If you have any further questions, please feel free to ask!


 */

let a = 10;
let b = 0;
console.log("start Execution");



setTimeout(()=>{
    console.log("Logic execution");
    b=20;
} 
    ,2000);

console.log("complete execution.. value of a+b is  ", a+b);

/**
 Output- 
start Execution -- first print
complete execution -- third print
Logic execution - Second print  

=======
start Execution
complete execution.. value of a+b is   10
Logic execution

*/
/*
##### let Vs Var #######
In JavaScript, `let` and `var` are both used to declare variables, but they have important differences in terms of scope, hoisting, and re-declaration. Here's a detailed comparison:

### Scope

#### `var`
- **Function Scope**: Variables declared with `var` are scoped to the function in which they are declared. If declared outside any function, they are global.
  
  ```javascript
  function testVar() {
    var x = 1;
    if (true) {
      var x = 2; // same variable
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  ```

#### `let`
- **Block Scope**: Variables declared with `let` are scoped to the nearest enclosing block, which can be a function, a loop, or an `if` statement.
  
  ```javascript
  function testLet() {
    let y = 1;
    if (true) {
      let y = 2; // different variable
      console.log(y); // 2
    }
    console.log(y); // 1
  }
  ```

### Hoisting

#### `var`
- **Hoisting**: Variables declared with `var` are hoisted to the top of their function scope and initialized with `undefined`. This means you can use the variable before its declaration, but its value will be `undefined` until the declaration is encountered.
  
  ```javascript
  console.log(a); // undefined
  var a = 10;
  console.log(a); // 10
  ```

#### `let`
- **Temporal Dead Zone (TDZ)**: Variables declared with `let` are also hoisted, but they are not initialized. Accessing them before the declaration results in a `ReferenceError`.
  
  ```javascript
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10
  ```

### Re-declaration

#### `var`
- **Re-declaration**: You can declare the same variable multiple times with `var` within the same scope, which can lead to unintended behavior.
  
  ```javascript
  var c = 1;
  var c = 2;
  console.log(c); // 2
  ```

#### `let`
- **No Re-declaration**: `let` does not allow re-declaration of the same variable within the same scope, which helps avoid bugs and makes the code more predictable.
  
  ```javascript
  let d = 1;
  let d = 2; // SyntaxError: Identifier 'd' has already been declared
  ```

### Best Practices

- **Use `let`**: It is generally recommended to use `let` instead of `var` due to its block-scoping, which aligns more closely with how variables are typically expected to behave in modern JavaScript development. It reduces the chances of bugs related to scope and hoisting.
  
- **Use `const` for Constants**: For variables that should not be re-assigned, use `const`. `const` has the same block scope as `let`, but it also ensures that the variable binding cannot be reassigned.

  ```javascript
  const e = 5;
  e = 10; // TypeError: Assignment to constant variable.
  ```

### Conclusion

To summarize:

- `var` is function-scoped and can be re-declared, which can lead to unpredictable behavior due to hoisting and scope issues.
- `let` is block-scoped and cannot be re-declared within the same scope, making it a safer and more predictable option for variable declaration.
- `const` is also block-scoped but is used for variables that should not be re-assigned.

For most modern JavaScript code, prefer `let` and `const` over `var` to avoid common pitfalls associated with variable scoping and hoisting.
*/
"use strict"

document.addEventListener("click" , function click (){
    console.log("clicked");
    // alert("Hello")
    let conf = confirm("Are you sure?");
    console.log(conf);// true or false 
});

// arrow function ka this humesha window object hota ha 
// function keyword se defined function ka this uska apna this hota h i.e jis object ka woh function hota h 

// ######## CALLBACKS functions  IN JS ##########
/*
- Callback ek aisa function hota h jo tak invoke hota h jab ek kaam already ho gya ho 
- callback function  are function argument 

In JavaScript, a callback is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are used to handle asynchronous operations, such as reading files, making HTTP requests, and handling events, allowing the program to continue running while waiting for the operation to complete.

### Synchronous vs. Asynchronous Callbacks

#### Synchronous Callbacks

Synchronous callbacks are executed immediately, blocking the execution of the code that follows until they complete.

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  var name = "Alice";
  callback(name);
}

processUserInput(greet); // Output: Hello, Alice
```

In this example, `greet` is a synchronous callback passed to `processUserInput`.

#### Asynchronous Callbacks

Asynchronous callbacks are executed after an asynchronous operation completes, allowing the program to continue executing other code while waiting.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("This is an asynchronous callback");
}, 1000);

console.log("End");
```

Output:
```
Start
End
This is an asynchronous callback
```

Here, the callback function inside `setTimeout` is an asynchronous callback that is executed after a delay of 1000 milliseconds (1 second).

### Common Use Cases for Callbacks

1. **Event Handling**:
   ```javascript
   document.getElementById("myButton").addEventListener("click", () => {
     console.log("Button clicked!");
   });
   ```

2. **Reading Files** (Node.js):
   ```javascript
   const fs = require('fs');

   fs.readFile('example.txt', 'utf8', (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

3. **Making HTTP Requests** (Using Fetch API):
   ```javascript
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error));
   ```

### Error Handling with Callbacks

When working with asynchronous operations, it's important to handle errors appropriately. Many callback functions follow the Node.js convention of accepting an error object as the first argument.

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});
```

### Callback Hell

Callback hell refers to the situation where callbacks are nested within other callbacks multiple levels deep, making the code hard to read and maintain.

```javascript
doSomething((result) => {
  doSomethingElse(result, (newResult) => {
    doAnotherThing(newResult, (finalResult) => {
      console.log(finalResult);
    });
  });
});
```

### Avoiding Callback Hell

1. **Named Functions**:
   ```javascript
   function doSomethingCallback(result) {
     doSomethingElse(result, doSomethingElseCallback);
   }

   function doSomethingElseCallback(newResult) {
     doAnotherThing(newResult, doAnotherThingCallback);
   }

   function doAnotherThingCallback(finalResult) {
     console.log(finalResult);
   }

   doSomething(doSomethingCallback);
   ```

2. **Promises**:
   ```javascript
   doSomething()
     .then(result => doSomethingElse(result))
     .then(newResult => doAnotherThing(newResult))
     .then(finalResult => console.log(finalResult))
     .catch(error => console.error(error));
   ```

3. **Async/Await**:
   ```javascript
   async function process() {
     try {
       const result = await doSomething();
       const newResult = await doSomethingElse(result);
       const finalResult = await doAnotherThing(newResult);
       console.log(finalResult);
     } catch (error) {
       console.error(error);
     }
   }

   process();
   ```

### Conclusion

Callbacks are fundamental in JavaScript for managing asynchronous operations. Understanding how to use them effectively, along with alternatives like promises and async/await, is crucial for writing clean and maintainable asynchronous code.
*/

// ##### PROMISES IN JAVASCRIPT ########

/*
In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more powerful and flexible way to handle asynchronous operations compared to traditional callbacks, making code easier to read and maintain.

### Key Concepts

#### States of a Promise
A Promise can be in one of three states:

1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

#### Creating a Promise
A Promise is created using the `Promise` constructor, which takes a function (executor) with two arguments: `resolve` and `reject`. These functions are used to settle the Promise, either fulfilling it with a value or rejecting it with a reason.

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // This could be the result of an async operation

  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});
```

### Using Promises

#### Consuming Promises with `.then()`, `.catch()`, and `.finally()`
- **`.then(onFulfilled, onRejected)`**: Adds fulfillment and rejection handlers to the Promise. It returns a new Promise, allowing for chaining.
- **`.catch(onRejected)`**: Adds only a rejection handler to the Promise. It is syntactic sugar for `.then(null, onRejected)`.
- **`.finally(onFinally)`**: Adds a handler to be called regardless of the Promise's outcome (whether fulfilled or rejected).

```javascript
myPromise
  .then(result => {
    console.log(result); // "Operation succeeded"
  })
  .catch(error => {
    console.error(error); // "Operation failed"
  })
  .finally(() => {
    console.log("Operation completed"); // Always runs
  });
```

### Chaining Promises

Promises can be chained to perform a sequence of asynchronous operations. Each `.then` returns a new Promise, allowing the next handler to run after the previous Promise is settled.

```javascript
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

firstPromise
  .then(result => {
    console.log(result); // 1
    return result * 2;
  })
  .then(result => {
    console.log(result); // 2
    return result * 3;
  })
  .then(result => {
    console.log(result); // 6
  })
  .catch(error => {
    console.error(error);
  });
```

### Promise Combinators

#### `Promise.all()`
Takes an array of Promises and returns a single Promise that resolves when all of the input Promises have resolved. If any of the input Promises reject, the returned Promise immediately rejects with that reason.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```

#### `Promise.race()`
Takes an array of Promises and returns a single Promise that resolves or rejects as soon as one of the input Promises resolves or rejects.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // "two"
});
```

#### `Promise.allSettled()`
Takes an array of Promises and returns a single Promise that resolves when all of the input Promises have settled (either resolved or rejected). The resulting Promise is fulfilled with an array of outcome objects.

```javascript
const promise1 = Promise.resolve('fulfilled');
const promise2 = Promise.reject('rejected');

Promise.allSettled([promise1, promise2]).then(results => {
  results.forEach((result) => console.log(result.status));
  // "fulfilled"
  // "rejected"
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of Promises, providing a way to write asynchronous code that looks synchronous.

```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```

### Conclusion

Promises in JavaScript provide a powerful way to handle asynchronous operations, offering greater control over the flow of asynchronous code compared to traditional callbacks. They enhance code readability and maintainability, and when combined with `async` and `await`, they offer a clear and concise way to write asynchronous logic.
*/


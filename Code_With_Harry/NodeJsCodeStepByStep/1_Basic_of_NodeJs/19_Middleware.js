/*
-What are MiddleWares
Ans- They are only used in routes and using this we can modify req and res .
-How to make a middleware
-Apply middleware on routes
-Types of middleware
    -Application level middleware
    -Router-level middleware
    -Error-handling middleware
    -Built-in middleware
    -Third-party middleware
-Interview Question 
*/

const express = require('express');
const app = express();

// Middleware function (Application level middleware)
const reqFilter = (req,res,next)=>{
    console.log("reqFiler is called");
    if(!req.query.age){
        res.send("Please Provide age");
    }
    else if(req.query.age < 18){
        res.send("You can not access age ");
    }
    else{
    next(); // this is mandatory to call next 
    }
}

// calling of middleware function
app.use(reqFilter); // this middleware is applied on all route 
app.get('/' , (req,res)=>{
    res.send("Welcome to home page");

});

app.get('/user' , (req,res)=>{
    res.send("Welcome to user page");

});

app.listen(5000);

/*

In Node.js, middleware refers to functions or modules that are used to handle requests and responses in an Express.js application. Express.js is a popular web framework for Node.js that provides a flexible and powerful set of features for building web applications and APIs.

Middleware functions in Express.js have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle (`next`). They can perform tasks such as modifying the request or response objects, executing additional code, or terminating the request-response cycle.

Middleware functions can be used for various purposes, including:

1. **Request Processing**: Middleware functions can preprocess incoming requests before they are handled by route handlers. This can involve tasks such as parsing request bodies, validating input, or authenticating users.

2. **Response Processing**: Middleware functions can post-process outgoing responses before they are sent back to the client. This can involve tasks such as setting response headers, formatting data, or logging information.

3. **Error Handling**: Middleware functions can handle errors that occur during request processing. They can catch errors thrown by route handlers or other middleware and return appropriate error responses to the client.

4. **Routing**: Middleware functions can be used to define routes and route groups within an Express.js application. They can intercept requests based on URL patterns and delegate handling to specific route handlers or other middleware.

Here's a simple example of how middleware is used in an Express.js application:

```javascript
const express = require('express');
const app = express();

// Custom middleware function
function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call the next middleware in the chain
}

// Register middleware function
app.use(logger);

// Route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
```

In this example:

- `logger` is a custom middleware function that logs the current date, request method, and URL to the console.
- `app.use(logger)` registers the `logger` middleware function to be executed for all incoming requests.
- `app.get('/', ...)` defines a route handler for the root URL ('/') that sends a simple response ('Hello, World!').
- `app.use((err, req, res, next) => { ... })` defines an error handling middleware function that logs errors to the console and sends a generic error response to the client.
- `app.listen(...)` starts the Express.js server and listens for incoming requests on the specified port.

Middleware functions in Express.js are executed sequentially in the order they are registered, and they can be chained together to create complex request processing pipelines. This allows developers to modularize their code, improve code reusability, and implement cross-cutting concerns such as logging, authentication,
*/
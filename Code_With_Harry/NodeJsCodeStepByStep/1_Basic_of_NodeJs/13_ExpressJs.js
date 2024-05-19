/**
 ExpressJs in NodeJs
 
Ques- what is ExpresJs ?
Answer-
 Express.js, commonly known as Express, is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web and mobile applications and APIs. 

Here are some key features and concepts of Express.js:

1. **Middleware:** Express.js is built around the concept of middleware functions, which are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can perform tasks such as parsing request bodies, handling authentication, logging, error handling, and more.

2. **Routing:** Express.js provides a simple and intuitive API for defining routes and handling HTTP requests. Routes are defined for different HTTP methods (GET, POST, PUT, DELETE, etc.) and URL patterns, allowing developers to create RESTful APIs and web applications easily.

3. **Templating Engines:** Although Express.js itself does not include a built-in templating engine, it supports a variety of templating engines (such as Pug, EJS, Handlebars, etc.) through third-party middleware. This allows developers to render dynamic HTML pages using templates and data from their applications.

4. **Static File Serving:** Express.js can serve static files (such as HTML, CSS, images, and client-side JavaScript files) using its built-in express.static middleware. This makes it easy to serve static assets from a directory on the server.

5. **Error Handling:** Express.js provides built-in error-handling middleware for catching and handling errors that occur during request processing. Developers can define custom error-handling middleware to handle different types of errors and provide appropriate responses.

6. **Modularity:** Express.js applications are built by composing middleware functions together. Developers can create custom middleware functions or use third-party middleware to add functionality to their applications. This modular architecture makes it easy to add or remove features and extend the functionality of an Express application.

Overall, Express.js is a powerful and flexible web application framework for Node.js that simplifies the process of building web and mobile applications and APIs. Its minimalistic design and middleware-based architecture make it easy to use, highly customizable, and well-suited for a wide range of applications.


- ExpressJs is a framework of NodeJs. It is simple.
-
 */

const express = require('express'); // we need to make it executable
const app = express(); // We have made it executable 

app.listen(5000); // creates a server 

app.get('' , (req, res)=>{ // first param is route
    console.log("Request is " , req);
    console.log("Data send by browser" , req.query.name);
    res.send("Hello , This is Home page");
});

app.get('/about' , (req,res)=>{
    res.send("Welcome, This is about page");
});

app.get('/help' , (req,res)=>{
    res.send("This is help page");
});

// client send request to server and server sends a reponse corrosponding to the request
// req param stores the content of request by the client
// res param stores the response content to be send by server 
/*
What is req and res ?
Ans- 
In Express.js, `req` and `res` are commonly used abbreviations for the request and response objects, respectively, passed to callback functions that handle HTTP requests.

- **req (request object):** The `req` object represents the HTTP request made by the client to the server. It contains information about the incoming request, such as the request method (GET, POST, etc.), URL, headers, query parameters, form data, and more. Developers can access various properties and methods of the `req` object to extract data from the request and use it to process the request.

- **res (response object):** The `res` object represents the HTTP response that the server sends back to the client in response to the request. It contains methods and properties that allow developers to set response headers, status codes, and response body content. Developers can use methods like `res.send()`, `res.json()`, `res.sendFile()`, etc., to send different types of responses back to the client.

Here's a basic example of an Express route handler callback function that uses `req` and `res` objects:

```javascript
app.get('/hello', (req, res) => {
    // Access query parameters from the request
    const name = req.query.name || 'World';

    // Set response headers and send a response back to the client
    res.status(200).send(`Hello, ${name}!`);
});
```

In this example:

- The route handler is defined for the `GET /hello` endpoint.
- Inside the callback function, the `req` object is used to access query parameters from the request URL (`req.query.name`).
- The `res` object is used to set the HTTP status code to 200 (OK) using `res.status()` and send a response back to the client using `res.send()`. The response contains a greeting message that includes the value of the `name` query parameter.

Overall, `req` and `res` objects are essential components of Express.js route handler functions, allowing developers to handle incoming HTTP requests and send appropriate responses back to clients.

*/

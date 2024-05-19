/*
########## Template Engine ############
- What is the template Engine ?
- Install ejs Template (Embedded JavaScript)
- Setup dynamic routing
- make dynamic page
- Interview Question 

Q- What is the template Engine and ejs template in NodeJs?

A template engine is a tool or library used to generate dynamic HTML content by combining templates (static markup) with data (dynamic content). 
Template engines allow developers to create reusable templates containing placeholders for dynamic data, which are then populated with actual data at runtime to produce the final HTML output.

Template engines typically support features such as:

- Variable interpolation: Inserting dynamic values into the template.
- Control structures: Conditional statements (if-else), loops, and other control flow constructs.
- Template inheritance: Defining reusable layouts and extending them in child templates.
- Partials: Reusing smaller template fragments within larger templates.

EJS (Embedded JavaScript) is a popular template engine for Node.js and JavaScript. It allows developers to embed JavaScript code directly within HTML markup, making it easy to generate dynamic content. EJS templates use `<% %>` tags to include JavaScript code and `<%= %>` tags to output dynamic values.

Here's a basic example of an EJS template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example EJS Template</title>
</head>
<body>
    <h1>Hello, <%= name %>!</h1>
    <p>Welcome to our website.</p>
</body>
</html>
```

In this EJS template:

- `<%= name %>` is an EJS tag used to output the value of the `name` variable.
- At runtime, the `name` variable will be replaced with the actual value passed from the server.

In a Node.js application using Express.js, you would typically render an EJS template using the `res.render()` method:

```javascript
const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Route handler to render the EJS template
app.get('/', (req, res) => {
    res.render('index', { name: 'John' }); // Renders the "index.ejs" template with data
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

In this example, the server renders the `index.ejs` template and passes an object containing data (in this case, the `name` variable with the value `'John'`). The template engine (EJS) replaces the `<%= name %>` tag with the value of the `name` variable, resulting in dynamic HTML content being sent to the client.

*/

// NodeJs k andar hum API's hi mostly banate h , Dynamic Pages bahut kam banate h 

const express = require('express');
const app = express();
const path = require('path');

const htmlPath = path.join(__dirname , '15.1_HTML_folder') 
console.log(htmlPath);

// For every template engine we need to have views named folder. 


app.set('view engine' , 'ejs'); // NodeJs ko bata diya hum ejs use kr rhe h
// we will use get method here 

app.get("" , (req, res)=>{
    res.sendFile(`${htmlPath}/index.html`); // res.sendFile()  -> To render HTML pages 

});

app.get("/profile" , (req, res)=>{
    const user = {
        name:"Roshan Gupta",
        age:20
    }
    res.render('views/profile',{user}); // we have to render the file not SendFile or Send

});


app.get('/login' ,(req,res)=>{
    res.render('login');
});

app.get("/about" , (req, res)=>{
    res.sendFile(`${htmlPath}/about.html`)

});

app.get("/home" , (req, res)=>{ // instead of home we can use other name as url if we choose that name then url name will be same as that choosen name 
    res.sendFile(`${htmlPath}/home.html`)

});

app.get("*" , (req,res)=>{
    res.sendFile(`${htmlPath}/pageNotFound.html`);
});


app.listen(5000);
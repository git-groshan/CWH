/*
-Route level Middleware
Ans- Aise middleware jo ya toh single route or group of route are all route pr kaam kre 

-Apply Middleware on single Route 

-Make middleware in different file

-Apply Middleware in the group of route 

-Interview Question 
*/


const express = require('express');
const app = express();
const reqFilter = require('./20.1_route_level_middleware');

const route = express.Router();
route.use(reqFilter); // route will use this reqFilter Middleware 
app.use('/' , route); // app will use route as a middleware 

/*
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
*/


// calling of middleware function
// app.use(reqFilter); // this way is apllying application level  middleware which is applied on all route globally
app.get('/' , (req,res)=>{
    res.send("Welcome to home page");

});

// single route pr middleware lagana 
app.get('/user' , reqFilter,(req,res)=>{ // Middleware added only on user route
    res.send("Welcome to user page");
    
// single route pr middleware lagana 
});
app.get('/about',reqFilter , (req,res)=>{ // Middleware added only on user route
    res.send("Welcome to About page");

});

// Applying middleware on group of routes 

route.get('/route1' , (req,res)=>{ // route.get() is used to apply middleware in group of route
    res.send("Welcome to route1 page");

});

route.get('/route2' , (req,res)=>{
    res.send("Welcome to route2 page");

});

route.get('/route3' , (req,res)=>{
    res.send("Welcome to rouute3 page");

});

app.listen(5000);

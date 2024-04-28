const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000; // PORT Varibale is not set then listen at port 3000
// creating the server 
const server = http.createServer((req, res)=>{
    // console.log(req);
    // console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    if(req.url == '/'){
        res.end('<h1> This is CWH </h1> <p> Hey This is the way to rock the world </p>');
    }
    else if( req.url == '/about'){
        res.end('<h1> This is about CWH</h1> <p> Hey This is the way to rock the world </p>');
    }
    else if(req.url == '/hello'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else{
        // res.harry(); // this will crash the server To Handle these kind of situation to restart the server again after fixing it we use nodemon  
        res.statusCode = 404;
        res.end('<h1> Error 404 !!</h1> <p> This Page is not found </p>');
        
    }

})

server.listen(port , ()=>{
    console.log(`Server is Listening on Port ${port}`);
});

// We can use this technique to built an website 
// Another way is using ExpressJs 
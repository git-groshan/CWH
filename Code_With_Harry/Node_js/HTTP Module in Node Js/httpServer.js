const http = require('http');

const port = process.env.PORT || 3000; // PORT Varibale is not set then listen at port 3000
// creating the server 
const server = http.createServer((req, res)=>{
    console.log(req);
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/html');
    res.end('<h1> This is CWH </h1> <p> Hey This is the way to rock the world </p>');

})

server.listen(port , ()=>{
    console.log(`Server is Listening on Port ${port}`);
});
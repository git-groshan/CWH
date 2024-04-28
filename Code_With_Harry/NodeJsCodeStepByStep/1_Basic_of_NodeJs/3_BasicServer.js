const http = require('http');



http.createServer((req,res)=>{
    res.write("<h1>Hello this is Roshan Gupta</h1>");
    res.end();
}).listen(4500); // server listen at port 4500

// we can user arrow function to handle req res or we can use our custom function for it 

function dataControl(req,res)
{
    res.write("<h1>Hello this is Roshan Gupta</h1>");
    res.end();
}
// http.createServer(dataControl).listen(4000); // server listen at port 4500
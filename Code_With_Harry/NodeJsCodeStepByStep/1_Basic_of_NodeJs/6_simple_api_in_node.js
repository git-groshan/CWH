/*
Make a simple API 
- make a server 
- create header and API body 
- Create an API with static data 
- put data in another file 
- Interview Question 
Q- What does status code means ?
ans-
HTTP status codes are a set of standardized numeric codes that indicate the outcome of an HTTP request. These status codes are sent by a server in response to a client's request. Each status code belongs to one of five categories, each of which indicates a different type of response:

1. **1xx Informational:**
   - These status codes indicate that the request was received and understood, and the server is continuing with the request.

2. **2xx Success:**
   - These status codes indicate that the request was received, understood, and processed successfully.
   - Examples:
     - `200 OK`: The request was successful.
     - `201 Created`: The request has been fulfilled, and a new resource has been created.
     - `204 No Content`: The server successfully processed the request but is not returning any content.

3. **3xx Redirection:**
   - These status codes indicate that further action is needed to complete the request.
   - Examples:
     - `301 Moved Permanently`: The requested resource has been permanently moved to a new location.
     - `302 Found`: The requested resource has been temporarily moved to a different location.
     - `304 Not Modified`: The resource has not been modified since the last request.

4. **4xx Client Error:**
   - These status codes indicate that there was an error on the client's part.
   - Examples:
     - `400 Bad Request`: The server cannot process the request due to a client error.
     - `401 Unauthorized`: The client must authenticate itself to get the requested response.
     - `404 Not Found`: The requested resource could not be found on the server.

5. **5xx Server Error:**
   - These status codes indicate that there was an error on the server's part.
   - Examples:
     - `500 Internal Server Error`: A generic error message indicating that something went wrong on the server.
     - `502 Bad Gateway`: The server received an invalid response from an upstream server while attempting to fulfill the request.
     - `503 Service Unavailable`: The server is currently unable to handle the request due to temporary overloading or maintenance of the server.

HTTP status codes provide valuable information about the outcome of an HTTP request, helping both clients and servers understand and handle different scenarios effectively.
*/

const http = require('http');
const data = require('./6.1_data');
http.createServer((req , res)=>{
    res.writeHead(200,{'Content-Type':'application\json'}); // response header 
    res.write(JSON.stringify(data)); // response body 
    res.end();
}).listen(5000);
// Event ---> signal
// EventEmitter --> Which emitting the events 

const express = require('express');
const EventEmitter = require('events'); // EventEmitter is a class

const app = express();

const event = new  EventEmitter(); // EventEmitter ka object bana liya 

let apiCalledCount = 0;
event.on("countAPI" , ()=>{
    console.log("Event is called !!");
    apiCalledCount++;
    console.log("Api count is ", apiCalledCount);
})

app.get('/' , (req,res)=>{
    res.send("api called");
    event.emit("countAPI");// event named countAPI is emitted i.e event is called which will be handled via event.on() function 
});

app.get('/search' , (req,res)=>{
    res.send("search api called");
    event.emit("countAPI");// event named countAPI is emitted i.e event is called which will be handled via event.on() function 
});

app.get('/update' , (req,res)=>{
    res.send(" update api called");
    event.emit("countAPI");// event named countAPI is emitted i.e event is called which will be handled via event.on() function 
});



app.listen(5000);


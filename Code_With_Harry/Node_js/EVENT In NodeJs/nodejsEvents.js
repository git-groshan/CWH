const EventEmitter = require('events'); // inbuilt event package 
 // for above to be imported we need to remove type:Module form package.json
class MyEMitter extends EventEmitter{}

const myEMitter = new MyEMitter();
myEMitter.on('event' , ()=>{ // Here event name is event 
    console.log('an Event occured !!');
});
myEMitter.emit('event'); // Event is fired 

myEMitter.on('Water Full' , ()=>{ // Here event name is Water Full
    console.log('Please turn of Motor');
    setTimeout(() => {
        console.log("Please turn off the motor! It is a gentle reminder")
    }, 2000);
});

console.log("Script is running ");
myEMitter.emit('Water Full'); // Event is Fired 
console.log("Script is still  running ");
const os = require('os');

// console.log(os); //
console.log(os.arch()); // show architecture of your machine

console.log(os.freemem()); // show free RAM in bytes 
console.log(os.freemem()/(1024*1024*1024)); // show free RAM in GB
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
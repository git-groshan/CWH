const path = require('path');

const a = path.basename('C:\\tmp\\myfile.html');
console.log(a);
const dir = path.dirname('C:\\tmp\\myfile.html');
console.log(dir);

console.log(__filename);
console.log(__dirname);
console.log(path.extname(__filename)); // return extension 

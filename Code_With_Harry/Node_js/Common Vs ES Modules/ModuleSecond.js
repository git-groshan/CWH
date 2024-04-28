const simple = require('./Modulesfirst.js');

simple();

/*
// Way to Import ES Modules in NodeJs
// to import you must add type=Module in package.json file 
import {EsFunc} from "./EsModule.mjs"
EsFunc();

// FACING ERROR WHILE IMPORTING 

PS C:\Users\rkgupta\Downloads\My Learnings\Code_With_Harry\Node_js\Common Vs ES Modules> node .\ModuleSecond.js
file:///C:/Users/rkgupta/Downloads/My%20Learnings/Code_With_Harry/Node_js/Common%20Vs%20ES%20Modules/ModuleSecond.js:1
const simple = require('./Modulesfirst.js');
               ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\rkgupta\Downloads\My Learnings\Code_With_Harry\Node_js\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/Users/rkgupta/Downloads/My%20Learnings/Code_With_Harry/Node_js/Common%20Vs%20ES%20Modules/ModuleSecond.js:1:16
    at ModuleJob.run (node:internal/modules/esm/module_job:218:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:329:24) 
    at async loadESM (node:internal/process/esm_loader:34:7)
    at async handleMainPromise (node:internal/modules/run_main:113:12)     

Node.js v21.1.0
PS C:\Users\rkgupta\Downloads\My Learnings\Code_With_Harry\Node_js\Common Vs ES Modules>
*/
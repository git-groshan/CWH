// Can Import only at a time only JsModule or 
//import { EsFunc2 as Es } from "./EsModule.mjs";
//import EsMod from "./EsModule.mjs"; // default will  be imported only 
//import { EsFunc,EsFunc2 } from "./EsModule.mjs"; // only these function will be imported 
// import EsMod from "./EsModule.mjs";
import * as EsMod from "./EsModule.mjs"
// EsFunc();
// Es();
console.log(EsMod); // Object
console.log(typeof EsMod);
EsMod.EsFunc();
// EsMod.EsFunc2(); // Error
EsMod.default();
// EsMod();
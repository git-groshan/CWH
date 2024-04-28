
export function EsFunc(){
    console.log("This is .mjs file  which is revserved for Es Modules");
}

export default function EsFunc2(){ 
    console.log("This is .mjs file  which is revserved for Es Modules");
}
// default means whenever we will import this module this function will be default be exported 
// import   EsMod from "./EsModule.mjs" 
// if we have a default thing to get exported then we won't get any  error while exporting like above
//

